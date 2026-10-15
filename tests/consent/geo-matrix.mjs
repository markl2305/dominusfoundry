/**
 * Consent REGION matrix (RULED by Mark 2026-10-14, shared memory 77550c45): ask-first only for EU/EEA, UK and Swiss
 * visitors (and an unknown or missing country); everyone else gets analytics on by default, Global Privacy Control
 * honoured, a stored "No" honoured, and a "Your privacy choices" footer link that re-opens the choice on every page.
 * Against a running build whose proxy/middleware sets consent_region from x-vercel-ip-country:
 *
 *   CONSENT_ORIGIN=http://localhost:4481 CONSENT_EVIDENCE_DIR=evidence/geo-1014 node tests/consent/geo-matrix.mjs
 *
 * Each state runs in a FRESH browser context whose every request carries the country header Vercel's edge would add
 * (or none, for the missing-header state). The network capture is the same as tests/consent/tracking-matrix.mjs:
 * every request that is not an ordinary same-origin one is written to the state's ledger; vendor loaders are served
 * from tests/consent/fixtures (cached real vendor code) and collectors answered locally with an empty 204, so nothing
 * leaves this machine; any other off-origin request is aborted and an unknown host fails the state.
 * CONSENT_EVIDENCE_DIR writes one JSON file per state (geo-<state>.json) plus geo-matrix.json; CONSENT_OUT writes the
 * combined file only. Exit 1 on any failed assertion.
 *
 * The full ask-first matrix (every existing assertion) is tests/consent/tracking-matrix.mjs, run unset and with
 * CONSENT_COUNTRY=DE; this file adds the region split and the default-on region.
 *
 * dominusfoundry.com port (2026-10-15), copied from hiresabina f8ee005 and adapted ONLY in:
 *   - defaults: GA id G-9J4GY8YZ6G, storage key df-consent, this site's routes, pages, allowed host (locatefaith.com);
 *     the routed https sibling names are *.dominusfoundry.test; every literal "sabina-consent" is this site's KEY;
 *   - vendors: this site has no LinkedIn tag (asserted absent where hiresabina asserts it present); its Google tag is
 *     linked to Google Ads AW-17706960854, so the default-on states also assert real (cookieless) Ads collection with no
 *     click and none in every denied state, and the re-opened bar must name Google Ads (Mark 2026-10-13);
 *   - this site's paths: /start for hiresabina's static /evaluate (no static assessment page here), /sabina for /hire,
 *     /company for /trust; the client-side route change (M2) is the Next <Link> on /learn, taken 15 s after load
 *     (the window is 10 s); the exempt exact paths are /_next/image and /favicon.ico (middleware.js);
 *   - added: the qb. host rewrite also sets the region and GPC cookies (Q), and /privacy shows the 'default' status line.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { vendorHost, VERCEL_PATH } from './vendor-hosts.mjs';

const ORIGIN = new URL(process.env.CONSENT_ORIGIN || 'http://localhost:4481').origin;
const OUT = process.env.CONSENT_OUT || '';
const DIR = process.env.CONSENT_EVIDENCE_DIR || '';
const GA_ID = process.env.CONSENT_GA_ID || 'G-9J4GY8YZ6G';
const KEY = process.env.CONSENT_STORAGE_KEY || 'df-consent';
const ADS_ID = process.env.CONSENT_ADS_ID || 'AW-17706960854';
// Every HTML route of this build (as tests/consent/tracking-matrix.mjs; /press/spw is a 302 off this site).
const ROUTES = (process.env.CONSENT_ALL_ROUTES || '/,/about,/blog,/blog/between-human-and-ai,/blog/operations-intelligence-for-small-teams,/blog/synthetic-intelligence-mentis,/blog/the-case-for-constitutional-synthetic-intelligence,/careers,/company,/contact,/get-started,/governance,/huali-order-info,/learn,/learn/platform/ai-software-company-for-construction-and-trades,/learn/platform/ai-software-for-construction-and-trades,/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples,/learn/platform/forge-the-ai-operating-system-for-commercial-contractors,/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry,/legal/metis-qbo-disconnect,/legal/metis-qbo-eula,/legal/metis-qbo-privacy,/mentis,/pitch,/press,/pricing,/privacy,/qb-migration,/sabina,/sms-terms,/start,/systems,/systems/intake,/systems/ops,/systems/revenue,/technology,/thanks').split(',');
const PAGES = (process.env.CONSENT_PAGES || '/,/sabina,/start,/pitch').split(',');
const PRIVATE_ROUTE = process.env.CONSENT_PRIVATE_ROUTE || '/chat';
const CHOICES_HREF = process.env.CONSENT_CHOICES_HREF || '/privacy#analytics-choice';
const ALLOWED_HOSTS = new Set((process.env.CONSENT_ALLOWED_HOSTS ?? 'locatefaith.com').split(',').filter(Boolean));
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36';
const GA_HOST = /(^|\.)(google-analytics\.com|analytics\.google\.com)$/;
const fixture = (f) => readFileSync(new URL(`./fixtures/${f}`, import.meta.url), 'utf8');
const GA_LOADER = (() => { try { return fixture(`gtag-js-${GA_ID}.js`); } catch (e) { return undefined; } })();
const CACHED = {
  'https://snap.licdn.com/li.lms-analytics/insight.min.js': fixture('linkedin-insight.min.js'),
  'https://snap.licdn.com/li.lms-analytics/insight.beta.min.js': fixture('linkedin-insight.beta.min.js'),
  'https://snap.licdn.com/li.lms-analytics/insight.old.min.js': fixture('linkedin-insight.old.min.js'),
};
const VERCEL_LOADER = fixture('vercel-insights-script.js');
// RED proof: CONSENT_GATE_FILE=/path/to/older/consent.js serves that gate in place of the built one (e.g. the base
// e66c695 gate, which has no region); the default-on and privacy-choices states must then FAIL.
const GATE_OVERRIDE = process.env.CONSENT_GATE_FILE ? readFileSync(process.env.CONSENT_GATE_FILE, 'utf8') : null;

let failures = 0; const results = [];
function ok(cond, label) { results.push({ ok: !!cond, label }); if (cond) console.log(`  ok   ${label}`); else { failures += 1; console.error(`  FAIL ${label}`); } }

function classify(u) {
  if (u.origin === ORIGIN) return VERCEL_PATH.test(u.pathname) ? { kind: 'tracker', host: 'vercel-insights(same-origin)' } : { kind: 'first-party', host: u.host };
  if (vendorHost(u.hostname)) return { kind: 'tracker', host: u.hostname };
  if (ALLOWED_HOSTS.has(u.hostname)) return { kind: 'allowed', host: u.hostname };
  return { kind: 'unknown', host: u.hostname || u.protocol };
}

async function fresh(browser, { country = null, gpcHeader = false, gpcSignal = false, seedCookie = null, cookies = [] } = {}) {
  const headers = {};
  if (country !== null) headers['x-vercel-ip-country'] = country;
  if (gpcHeader) headers['Sec-GPC'] = '1';
  const context = await browser.newContext({ userAgent: UA, serviceWorkers: 'block', extraHTTPHeaders: headers });
  await context.addInitScript(() => { Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false, configurable: true }); });
  if (gpcSignal) await context.addInitScript(() => { Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', { get: () => true, configurable: true }); });
  if (seedCookie) cookies = [...cookies, { name: `__Host-${KEY}`, value: seedCookie }]; // this host's own choice cookie (rule 5)
  const plain = cookies.filter((c) => !c.name.startsWith('__Host-')), host = cookies.filter((c) => c.name.startsWith('__Host-'));
  if (plain.length) await context.addCookies(plain.map((c) => (c.path ? { ...c, domain: new URL(ORIGIN).hostname } : { ...c, url: ORIGIN })));
  const rec = { phase: 'before', ledger: [], navigations: [], pageErrors: [], regionCookies: [] };
  await context.route('**/*', async (route) => {
    const q = route.request(); const u = new URL(q.url());
    const c = classify(u);
    if (c.kind === 'first-party') {
      if (q.isNavigationRequest()) rec.navigations.push({ phase: rec.phase, url: q.url() });
      if (GATE_OVERRIDE !== null && u.pathname === '/consent/consent.js') return route.fulfill({ status: 200, contentType: 'text/javascript', body: GATE_OVERRIDE });
      if (q.method() === 'GET' || q.method() === 'HEAD') return route.continue();
      return route.fulfill({ status: 204, body: '' }); // no same-origin write reaches the server
    }
    const entry = { phase: rec.phase, kind: c.kind, host: c.host, method: q.method(), url: q.url(), body: q.postData() || '', action: '' };
    rec.ledger.push(entry);
    if (c.kind === 'tracker') {
      const cached = c.host === 'vercel-insights(same-origin)' && u.pathname === '/_vercel/insights/script.js' ? VERCEL_LOADER
        : CACHED[u.origin + u.pathname] ?? (u.origin + u.pathname === 'https://www.googletagmanager.com/gtag/js' && u.searchParams.get('id') === GA_ID ? GA_LOADER : undefined);
      if (cached !== undefined) { entry.action = 'cached-loader'; return route.fulfill({ status: 200, contentType: 'text/javascript', body: cached }); }
      entry.action = 'answered-204';
      return route.fulfill({ status: 204, body: '' });
    }
    entry.action = 'aborted';
    return route.abort();
  });
  const page = await context.newPage();
  // A __Host- cookie cannot be planted through the cookie API for an http origin; plant it as a page would, with
  // document.cookie on this origin (Chromium treats localhost as secure). The caller checks the plant took.
  if (host.length) {
    await page.goto(ORIGIN + '/robots.txt', { waitUntil: 'load' });
    await page.evaluate((cs) => { cs.forEach((c) => { document.cookie = `${c.name}=${c.value}; Path=/; Secure; SameSite=Lax`; }); }, host);
    // The plant navigation itself went through the proxy; with Sec-GPC it set consent_gpc=1. Remove it, so a GPC state
    // proves the proxy handled the visit under test, not the plant (found 2026-10-14: the control did not fire otherwise).
    await context.clearCookies({ name: 'consent_gpc' });
  }
  page.on('pageerror', (e) => rec.pageErrors.push(String(e.message || e).slice(0, 200)));
  page.on('response', async (r) => {
    if (!r.request().isNavigationRequest() || new URL(r.url()).origin !== ORIGIN) return;
    const sc = (await r.headersArray()).filter((h) => h.name.toLowerCase() === 'set-cookie' && /^__Host-consent_region=/.test(h.value)).map((h) => h.value.split(';')[0]);
    rec.regionCookies.push({ url: r.url().replace(ORIGIN, ''), set: sc });
  });
  return { context, page, rec };
}
async function visit(page, path) { await page.goto(ORIGIN + path, { waitUntil: 'load' }); await page.waitForTimeout(2500); }
const trackers = (rec, phase) => rec.ledger.filter((h) => h.kind === 'tracker' && (!phase || h.phase === phase));
const hostsIn = (rec, phase) => [...new Set(trackers(rec, phase).map((h) => h.host))].sort();
const barCount = (page) => page.locator('[data-consent-bar]').count();
const gate = (page) => page.evaluate(() => (window.SiteConsent ? { state: window.SiteConsent.state(), allowed: window.SiteConsent.allowed(), region: window.SiteConsent.region ? window.SiteConsent.region() : 'no-region-api' } : { state: 'no-gate' }));
const RC = '__Host-consent_region';
// The edge writes "<ask|default>.<epoch seconds>" (review round 3); regionCookie() gives the region part, regionCookieRaw()
// the whole value; NOW_S()/FRESH() build values the way the edge does.
const regionCookieRaw = async (context, url = ORIGIN) => (await context.cookies(url)).filter((c) => c.name === RC).map((c) => c.value);
const regionCookie = async (context, url = ORIGIN) => (await regionCookieRaw(context, url)).map((v) => v.split('.')[0]);
const NOW_S = (offset = 0) => Math.floor(Date.now() / 1000) + offset;
// CONSENT_REGION_UNTIMED=1 plants the pre-round-3 untimed value, for a control run against a build that only knows it.
const UNTIMED = process.env.CONSENT_REGION_UNTIMED === '1';
const FRESH = (offset = 0) => (UNTIMED ? 'default' : `default.${NOW_S(offset)}`);
const timedFresh = (raw, region) => raw.length === 1 && new RegExp(`^${region}\\.\\d+$`).test(raw[0]) && Math.abs(NOW_S() - Number(raw[0].split('.')[1])) <= 60;

const matrix = { origin: ORIGIN, gate: process.env.CONSENT_GATE_FILE || 'built public/consent/consent.js', ga_id: GA_ID, measured_at: new Date().toISOString(), states: {} };
function finish(name, rec, summary) {
  const unknown = rec.ledger.filter((h) => h.kind === 'unknown');
  ok(unknown.length === 0, `${name}: zero requests to unknown off-origin hosts (${unknown.map((h) => h.phase + ' ' + h.url).join(', ') || 'none'})`);
  const state = { ...summary, region_cookies_set: rec.regionCookies, unknown_off_origin: unknown.map((h) => h.url), page_errors: rec.pageErrors, navigations: rec.navigations, ledger: rec.ledger };
  matrix.states[name] = state;
  if (DIR) writeFileSync(`${DIR}/geo-${name}.json`, JSON.stringify({ state: name, origin: ORIGIN, measured_at: new Date().toISOString(), ...state }, null, 2) + '\n');
}

// Google Ads collection (as tests/consent/tracking-matrix.mjs): a request naming the linked Ads id, or one to an Ads-only
// collector host/path.
const isAds = (h) => h.kind === 'tracker' && (h.url.includes(ADS_ID) || /(^|\.)(googleadservices\.com|googlesyndication\.com)$/.test(h.host) || (/doubleclick\.net$/.test(h.host) && !/^stats\.g\./.test(h.host)) || (/(^|\.)google\.[a-z.]+$/.test(h.host) && /^\/(ccm|rmkt|pagead|ads|measurement)\//.test(new URL(h.url).pathname)));
// The full default-on proof on one page load: the GA4 loader and a GA4 collection hit, the LinkedIn loader and the
// Vercel page view, all with no click.
function defaultOnLoaded(rec, phase) {
  const t = trackers(rec, phase);
  return {
    ga4_loader: t.some((h) => h.url.startsWith('https://www.googletagmanager.com/gtag/js') && h.action === 'cached-loader'),
    ga4_collect: t.some((h) => GA_HOST.test(h.host)),
    linkedin_loader: t.some((h) => h.host === 'snap.licdn.com'),
    ads_collect: t.some(isAds),
    vercel_view: t.some((h) => h.url === ORIGIN + '/_vercel/insights/view' && h.method === 'POST'),
  };
}

async function askFirstState(browser, name, country, path = '/') {
  const { context, page, rec } = await fresh(browser, { country });
  await visit(page, path);
  const hosts = hostsIn(rec); const bar = await barCount(page); const g = await gate(page); const rc = await regionCookie(context);
  ok(hosts.length === 0, `${name}: zero analytics requests before any choice (${hosts.join(', ') || 'none'})`);
  ok(bar > 0, `${name}: the ask-first bar is shown`);
  ok(g.state === null && g.allowed === false && g.region === 'ask', `${name}: gate state null, allowed false, region ask (${JSON.stringify(g)})`);
  const raw = await regionCookieRaw(context);
  ok(rc.length === 1 && rc[0] === 'ask' && timedFresh(raw, 'ask'), `${name}: the server set __Host-consent_region=ask.<now> (${raw.join(',') || 'none'})`);
  // Control: the same context, Allow pressed, does load (so the zero above is not a blind instrument).
  rec.phase = 'after-allow';
  await page.locator('[data-consent-bar] [data-consent="accept"]').click(); await page.waitForTimeout(3000);
  const after = hostsIn(rec, 'after-allow');
  ok(after.includes('www.googletagmanager.com'), `${name}: control fires, Allow then loads GA4 (${after.join(', ') || 'none'})`);
  finish(name, rec, { country, path, hosts_before_choice: hosts, bar_shown: bar > 0, gate: g, region_cookie: rc, hosts_after_allow: after });
  await context.close();
}

async function main() {
  if (DIR) mkdirSync(DIR, { recursive: true });
  const browser = await chromium.launch();
  try {
    // A. Ask-first region: EU, UK, Switzerland, an EEA country, a missing header, an unknown code.
    await askFirstState(browser, 'eu_DE', 'DE');
    await askFirstState(browser, 'eu_FR_start', 'FR', '/start');
    await askFirstState(browser, 'uk_GB', 'GB');
    await askFirstState(browser, 'ch_CH', 'CH');
    await askFirstState(browser, 'eea_NO', 'NO');
    await askFirstState(browser, 'missing_header', null);
    await askFirstState(browser, 'unknown_XX', 'XX');

    // B. Default-on region, first visit, no click: tags load on every page exactly as configured; no bar.
    { const name = 'us_first_visit';
      const { context, page, rec } = await fresh(browser, { country: 'US' });
      const rows = {};
      for (const p of PAGES) {
        rec.phase = p; await visit(page, p);
        rows[p] = { bar: await barCount(page), gate: await gate(page), loaded: defaultOnLoaded(rec, p) };
      }
      const rc = await regionCookie(context);
      const raw = await regionCookieRaw(context);
      ok(rc.length === 1 && rc[0] === 'default' && timedFresh(raw, 'default'), `${name}: the server set __Host-consent_region=default.<now> (${raw.join(',') || 'none'})`);
      for (const [p, r] of Object.entries(rows)) {
        ok(r.bar === 0, `${name} ${p}: no consent bar`);
        ok(r.gate.state === 'default' && r.gate.allowed === true && r.gate.region === 'default', `${name} ${p}: gate state default, allowed true (${JSON.stringify(r.gate)})`);
        ok(r.loaded.ga4_loader && r.loaded.vercel_view, `${name} ${p}: the GA4 loader and a Vercel page view with no click (${JSON.stringify(r.loaded)})`);
      }
      // GA4 batches its hits and drops a batch when the page is left within ~2.5 s, so not every page load produces a
      // collection request in this window. Measured 2026-10-14: a stored Accept in the ask-first region gives the SAME
      // pattern on the same four pages (one hit on /, the /hire hit only after a further wait). So the collection hit
      // is asserted per state, as tracking-matrix.mjs's accept check does, not per page.
      ok(trackers(rec).some((h) => GA_HOST.test(h.host)), `${name}: a GA4 collection request is made with no click (answered locally, never delivered)`);
      ok(Object.values(rows).every((r) => !r.loaded.linkedin_loader), `${name}: no LinkedIn request on any page (this site has no LinkedIn tag)`);
      // The linked Google Ads destination (Mark 2026-10-13: the one choice covers cookieless Ads measurement): with no
      // click it runs too, so the opt-out bar must name it (checked in E).
      ok(trackers(rec).some(isAds), `${name}: the linked Google Ads destination sends collection with no click (answered locally, never delivered)`);
      ok(!(await context.cookies()).some((c) => /^_gcl/.test(c.name)), `${name}: no _gcl advertising cookie (Consent Mode ad_storage stays denied)`);
      const leaky = trackers(rec).filter((h) => GA_HOST.test(h.host) && /[?&]dl=[^&]*(%3F|%23)/.test(h.url));
      ok(leaky.length === 0, `${name}: no GA4 hit carries a query string or fragment`);
      finish(name, rec, { country: 'US', rows, region_cookie: rc, hosts: hostsIn(rec) });
      await context.close(); }

    // B2. Another default-on country, and a private route that loads nothing even in the default-on region.
    { const name = 'ca_first_visit';
      const { context, page, rec } = await fresh(browser, { country: 'CA' });
      await visit(page, '/');
      const g = await gate(page); const l = defaultOnLoaded(rec);
      ok(g.state === 'default' && l.ga4_loader && (await barCount(page)) === 0, `${name}: default-on, GA4 loads, no bar (${JSON.stringify(g)})`);
      finish(name, rec, { country: 'CA', gate: g, loaded: l });
      await context.close(); }
    { const name = 'us_private_route';
      const { context, page, rec } = await fresh(browser, { country: 'US' });
      await visit(page, PRIVATE_ROUTE);
      const hosts = hostsIn(rec); const g = await gate(page);
      ok(hosts.length === 0 && !trackers(rec).some(isAds) && g.state === 'default' && g.allowed === false, `${name} ${PRIVATE_ROUTE}: zero analytics and Ads requests, allowed false (${hosts.join(', ') || 'none'}; ${JSON.stringify(g)})`);
      rec.phase = 'control'; await visit(page, '/');
      const control = hostsIn(rec, 'control');
      ok(control.includes('www.googletagmanager.com'), `${name}: control fires, the same browser loads GA4 on / (${control.join(', ') || 'none'})`);
      finish(name, rec, { country: 'US', path: PRIVATE_ROUTE, hosts, gate: g, control_on_home: control });
      await context.close(); }

    // C. Default-on region under GPC (the DOM signal, and the header): nothing loads, no bar; the privacy-choices link
    // has nothing to offer and simply reaches the privacy notice.
    for (const [name, opts] of [['us_gpc_signal', { gpcSignal: true }], ['us_gpc_header', { gpcHeader: true }]]) {
      const { context, page, rec } = await fresh(browser, { country: 'US', ...opts });
      let bar = 0; for (const p of PAGES) { await visit(page, p); bar += await barCount(page); }
      const hosts = hostsIn(rec); const g = await gate(page);
      ok(hosts.length === 0, `${name}: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(bar === 0 && g.state === 'gpc' && g.allowed === false, `${name}: no bar, gate state gpc (${JSON.stringify(g)})`);
      await visit(page, '/');
      await Promise.all([page.waitForURL(/\/privacy/, { timeout: 8000 }).catch(() => {}), page.locator('footer [data-consent-open]').first().click()]);
      const at = new URL(page.url()); const reopened = await page.locator('[data-consent-reopened]').count();
      ok(at.pathname === '/privacy' && at.hash === '#analytics-choice' && reopened === 0, `${name}: "Your privacy choices" navigates to the choice on the privacy notice (${at.pathname}${at.hash}, bar ${reopened})`);
      finish(name, rec, { country: 'US', hosts, bar_shown: bar > 0, gate: g, choices_link_landed: at.pathname + at.hash });
      await context.close();
    }

    // D. Default-on region with a stored "No" (cookie): it stays No.
    { const name = 'us_stored_no';
      const { context, page, rec } = await fresh(browser, { country: 'US', seedCookie: `1.reject.${Date.now()}` });
      let bar = 0; for (const p of PAGES) { await visit(page, p); bar += await barCount(page); }
      const hosts = hostsIn(rec); const g = await gate(page);
      ok(hosts.length === 0, `${name}: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(bar === 0 && g.state === 'reject' && g.allowed === false, `${name}: no bar, gate state reject (${JSON.stringify(g)})`);
      finish(name, rec, { country: 'US', hosts, bar_shown: bar > 0, gate: g });
      await context.close(); }

    // E. Default-on region, then "No analytics" through the footer link: from the press on, nothing; after the reload and
    // on every later page, nothing; analytics cookies cleared; the choice is stored like any other.
    { const name = 'us_then_no_via_privacy_choices';
      const { context, page, rec } = await fresh(browser, { country: 'US' });
      await visit(page, '/');
      const before = defaultOnLoaded(rec, 'before');
      const link = page.locator('footer [data-consent-open]').first();
      const linkInfo = { text: (await link.textContent() || '').trim(), href: await link.getAttribute('href') };
      await link.scrollIntoViewIfNeeded(); await link.click(); await page.waitForTimeout(300);
      const opened = await page.evaluate(() => {
        const b = document.querySelector('[data-consent-bar][data-consent-reopened]');
        if (!b) return null;
        const r = b.getBoundingClientRect();
        return { text: b.querySelector('p').textContent, focusInBar: b.contains(document.activeElement), focused: document.activeElement && document.activeElement.textContent,
          pressed: [...b.querySelectorAll('[data-consent]')].map((x) => `${x.getAttribute('data-consent')}=${x.getAttribute('aria-pressed')}`), inViewport: r.bottom <= innerHeight + 1 && r.top >= 0, url: location.pathname + location.hash };
      });
      rec.phase = 'withdraw-click';
      await Promise.all([page.waitForEvent('load', { timeout: 10000 }).catch(() => {}), page.locator('[data-consent-reopened] [data-consent="reject"]').click()]);
      await page.waitForTimeout(2500);
      const atClick = hostsIn(rec, 'withdraw-click');
      rec.phase = 'after';
      let bar = 0; for (const p of PAGES) { await visit(page, p); bar += await barCount(page); }
      const after = hostsIn(rec, 'after'); const g = await gate(page);
      const stored = await page.evaluate(([k, ck]) => ({ local: localStorage.getItem(k), cookie: (document.cookie.match(new RegExp('(?:^|; )' + ck + '=([^;]*)')) || [])[1] || null }), [KEY, `__Host-${KEY}`]);
      const left = (await context.cookies()).map((c) => c.name).filter((n) => /^(_ga|_gid|li_|_li)/.test(n));
      ok(before.ga4_loader && before.ga4_collect && before.vercel_view && before.ads_collect && !before.linkedin_loader, `${name}: control fires, analytics and Ads measurement ran on first visit before any choice (${JSON.stringify(before)})`);
      ok(linkInfo.text === 'Your privacy choices' && linkInfo.href === CHOICES_HREF, `${name}: the footer link reads "Your privacy choices" -> ${CHOICES_HREF} (${JSON.stringify(linkInfo)})`);
      ok(opened && opened.url === '/' && opened.inViewport && opened.focusInBar, `${name}: the link opens the choice in place, in view, focus inside it (${JSON.stringify(opened)})`);
      ok(opened && /You can turn them off/.test(opened.text) && !/only if you allow it/.test(opened.text), `${name}: the re-opened bar does not claim "only if you allow it" (${opened && opened.text})`);
      ok(opened && /Google Analytics/.test(opened.text) && /Vercel Web Analytics/.test(opened.text) && /Google Ads/.test(opened.text) && /without cookies/.test(opened.text), `${name}: the re-opened bar names Google Analytics, Vercel Web Analytics and cookieless Google Ads measurement (optOutText) (${opened && opened.text})`);
      ok(opened && opened.pressed.join(',') === 'accept=true,reject=false', `${name}: the current state (on) is marked (${opened && opened.pressed})`);
      ok(atClick.length === 0 && !trackers(rec, 'withdraw-click').some(isAds) && !trackers(rec, 'after').some(isAds), `${name}: zero analytics and Ads requests from the press through the reload (${atClick.join(', ') || 'none'})`);
      ok(after.length === 0 && bar === 0, `${name}: zero analytics requests and no bar on every later page (${after.join(', ') || 'none'}; bars ${bar})`);
      ok(g.state === 'reject' && g.allowed === false, `${name}: gate state reject (${JSON.stringify(g)})`);
      ok(/^1\.reject\.\d+$/.test(stored.local || '') && /^1\.reject\.\d+$/.test(decodeURIComponent(stored.cookie || '')), `${name}: stored exactly as today's choices are, both stores (${JSON.stringify(stored)})`);
      ok(left.length === 0, `${name}: first-party analytics cookies cleared (${left.join(', ') || 'none'})`);
      finish(name, rec, { country: 'US', loaded_before: before, link: linkInfo, opened, hosts_at_click: atClick, hosts_after: after, gate: g, stored, analytics_cookies_left: left });
      await context.close(); }

    // E2. Keyboard: Enter on the link opens it; Escape closes it with nothing changed and focus back on the link.
    { const name = 'us_privacy_choices_keyboard';
      const { context, page, rec } = await fresh(browser, { country: 'US' });
      await visit(page, '/');
      await page.locator('footer [data-consent-open]').first().focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
      const open = await page.locator('[data-consent-reopened]').count();
      await page.keyboard.press('Escape'); await page.waitForTimeout(200);
      const r = await page.evaluate(() => ({ bar: document.querySelectorAll('[data-consent-bar]').length, focusOnLink: !!(document.activeElement && document.activeElement.matches('[data-consent-open]')), state: window.SiteConsent.state() }));
      ok(open === 1 && r.bar === 0 && r.focusOnLink && r.state === 'default', `${name}: Enter opens, Escape closes, focus returns to the link, nothing changed (${open}; ${JSON.stringify(r)})`);
      finish(name, rec, { country: 'US', opened: open, after_escape: r });
      await context.close(); }

    // F. The link is on every page, in both regions.
    for (const [name, country] of [['privacy_choices_link_every_route_US', 'US'], ['privacy_choices_link_every_route_DE', 'DE']]) {
      const { context, page, rec } = await fresh(browser, { country });
      const rows = {};
      for (const p of ROUTES) {
        await page.goto(ORIGIN + p, { waitUntil: 'load' });
        rows[p] = await page.evaluate(() => [...document.querySelectorAll('footer [data-consent-open]')].map((a) => `${a.textContent.trim()} -> ${a.getAttribute('href')}`));
      }
      const missing = Object.entries(rows).filter(([, v]) => !(v.length === 1 && v[0] === `Your privacy choices -> ${'/privacy#analytics-choice'}`)).map(([k, v]) => `${k}: ${JSON.stringify(v)}`);
      ok(missing.length === 0, `${name}: exactly one "Your privacy choices" footer link on all ${ROUTES.length} routes (${missing.join('; ') || 'all'})`);
      finish(name, rec, { country, rows });
      await context.close();
    }

    // G. Ask-first region: after "No analytics", the link re-opens the choice (with the ask-first wording) and Allow works.
    { const name = 'eu_no_then_allow_via_privacy_choices';
      const { context, page, rec } = await fresh(browser, { country: 'DE' });
      await visit(page, '/');
      await page.locator('[data-consent-bar] [data-consent="reject"]').click(); await page.waitForTimeout(1500);
      const afterNo = hostsIn(rec);
      await page.locator('footer [data-consent-open]').first().scrollIntoViewIfNeeded();
      await page.locator('footer [data-consent-open]').first().click(); await page.waitForTimeout(300);
      const opened = await page.evaluate(() => { const b = document.querySelector('[data-consent-reopened]'); return b && { text: b.querySelector('p').textContent, pressed: [...b.querySelectorAll('[data-consent]')].map((x) => `${x.getAttribute('data-consent')}=${x.getAttribute('aria-pressed')}`) }; });
      rec.phase = 'after-allow';
      await page.locator('[data-consent-reopened] [data-consent="accept"]').click(); await page.waitForTimeout(3000);
      const after = hostsIn(rec, 'after-allow'); const g = await gate(page);
      ok(afterNo.length === 0, `${name}: nothing before or after "No analytics" (${afterNo.join(', ') || 'none'})`);
      ok(opened && /only if you allow it/.test(opened.text) && opened.pressed.join(',') === 'accept=false,reject=true', `${name}: the link re-opens the choice with the ask-first wording, No marked (${JSON.stringify(opened)})`);
      ok(after.includes('www.googletagmanager.com') && g.state === 'accept', `${name}: Allow from the re-opened choice loads GA4 (${after.join(', ') || 'none'}; ${g.state})`);
      finish(name, rec, { country: 'DE', hosts_after_no: afterNo, opened, hosts_after_allow: after, gate: g });
      await context.close(); }

    // H. A forged client-side region cookie does not survive an EU request: the server re-sets the __Host- one to ask, and
    // the plain consent_region name is not read at all.
    { const name = 'eu_DE_forged_region_cookie';
      const { context, page, rec } = await fresh(browser, { country: 'DE', cookies: [{ name: 'consent_region', value: 'default' }, { name: RC, value: FRESH() }] });
      const seeded = await regionCookie(context);
      ok(seeded.join() === 'default', `${name}: control, the forged __Host- cookie was planted before the visit (${seeded.join() || 'none'})`);
      await visit(page, '/');
      const hosts = hostsIn(rec); const g = await gate(page); const bar = await barCount(page);
      ok(hosts.length === 0 && g.state === null && bar > 0, `${name}: forged default overwritten, ask-first, zero analytics requests (${hosts.join(', ') || 'none'}; ${JSON.stringify(g)})`);
      finish(name, rec, { country: 'DE', hosts, gate: g, bar_shown: bar > 0 });
      await context.close(); }

    // I. Review F1 (2026-10-14): a dotted path that does not exist renders the 404 document, layout and gate included.
    // The proxy must refresh the region and Sec-GPC there too. Each state plants a STALE default grant first (both
    // cookie names), checks the plant took, then visits; /privacy and /review.html are the controls.
    // The planted grant carries a FRESH time, so these states test the edge refresh itself (layer 1); an old time would
    // fail closed in the gate (layer 2, §M) and could not show whether the edge ran. Built per state, at plant time.
    const staleGrant = () => [{ name: RC, value: FRESH() }, { name: 'consent_region', value: 'default' }];
    // R2-1 (round 2): /apiculture, /api.review and /_next/review.missing also render the error document with the gate;
    // /api/review.missing is the control (a private path as well).
    // Round 3: /_next/image.review, /_next/images and /_next/image/review.missing (only the exact /_next/image is exempt).
    for (const path of ['/review.missing', '/privacy', '/review.html', '/apiculture', '/api.review', '/_next/review.missing', '/api/review.missing', '/_next/image.review', '/_next/images', '/_next/image/review.missing']) {
      for (const [label, opts, want] of [['DE', { country: 'DE' }, 'ask'], ['US_gpc_header', { country: 'US', gpcHeader: true }, 'gpc'], ['DE_gpc_header', { country: 'DE', gpcHeader: true }, 'gpc']]) {
        const name = `stale_default_${label}_${path.replace(/\W/g, '_')}`;
        const { context, page, rec } = await fresh(browser, { ...opts, cookies: staleGrant() });
        const seeded = await regionCookie(context);
        const gpcBefore = (await context.cookies(ORIGIN)).filter((c) => c.name === 'consent_gpc').length;
        const resp = await page.goto(ORIGIN + path, { waitUntil: 'load' }); await page.waitForTimeout(2500);
        const hosts = hostsIn(rec); const g = await gate(page); const rc = await regionCookie(context);
        const gpcCookie = (await context.cookies(ORIGIN)).filter((c) => c.name === 'consent_gpc').map((c) => c.value);
        ok(seeded.join() === 'default' && gpcBefore === 0 && (UNTIMED || Math.abs(NOW_S() - Number((await regionCookieRaw(context))[0].split('.')[1])) <= 30), `${name}: control, the stale default grant was planted and no consent_gpc cookie exists before the visit (${seeded.join() || 'none'}; consent_gpc ${gpcBefore})`);
        ok(hosts.length === 0, `${name}: status ${resp && resp.status()}, zero analytics requests (${hosts.join(', ') || 'none'})`);
        ok(want === 'ask' ? g.state === null && g.allowed === false && rc.join() === 'ask' : g.state === 'gpc' && g.allowed === false && gpcCookie.includes('1'),
          `${name}: ${want === 'ask' ? 'region refreshed to ask, ask-first' : 'Sec-GPC honoured (consent_gpc set), state gpc'} (${JSON.stringify(g)}; region ${rc.join() || 'none'}; gpc ${gpcCookie.join() || 'none'})`);
        finish(name, rec, { path, status: resp && resp.status(), seeded, hosts, gate: g, region_cookie_after: rc, gpc_cookie: gpcCookie });
        await context.close();
      }
    }
    // I control: the same stale grant, a US visitor, no GPC, on the 404: default-on and GA4 requested, so the zeros above
    // come from an instrument that sees trackers on that very page.
    { const name = 'stale_default_US_review_missing_control';
      const { context, page, rec } = await fresh(browser, { country: 'US', cookies: staleGrant() });
      const resp = await page.goto(ORIGIN + '/review.missing', { waitUntil: 'load' }); await page.waitForTimeout(2500);
      const g = await gate(page); const l = defaultOnLoaded(rec);
      ok(resp && resp.status() === 404 && g.state === 'default' && l.ga4_loader, `${name}: control fires, 404 page runs the gate, default-on, GA4 loader requested (${resp && resp.status()}; ${JSON.stringify(g)}; ${JSON.stringify(l)})`);
      finish(name, rec, { status: resp && resp.status(), gate: g, loaded: l });
      await context.close(); }

    // I control (R2-1): the gate really runs on /apiculture (US, stale default, no GPC: default-on, GA4 requested), so
    // the zeros above for that class come from an instrument that sees trackers there.
    for (const path of ['/apiculture', '/_next/image.review', '/_next/images', '/_next/image/review.missing']) {
      const name = `stale_default_US_control_${path.replace(/\W/g, '_')}`;
      const { context, page, rec } = await fresh(browser, { country: 'US', cookies: staleGrant() });
      const resp = await page.goto(ORIGIN + path, { waitUntil: 'load' }); await page.waitForTimeout(2500);
      const g = await gate(page); const l = defaultOnLoaded(rec);
      ok(resp && resp.status() === 404 && g.state === 'default' && l.ga4_loader, `${name}: control fires, the gate runs on ${path}, default-on, GA4 loader requested (${resp && resp.status()}; ${JSON.stringify(g)}; ${JSON.stringify(l)})`);
      finish(name, rec, { status: resp && resp.status(), gate: g, loaded: l });
      await context.close();
    }
    // I exempt paths (round 3): only the /_next/static/ subtree (matcher) and the exact /_next/image (proxy). Navigated to
    // as documents, neither serves a page that runs the gate; and layer 2 (§M) fails closed if one ever did.
    for (const path of ['/_next/static/review.missing', '/_next/static/chunks/review.missing.js', '/_next/image?url=%2Freview.missing&w=64&q=75', '/_next/image', '/favicon.ico']) {
      const name = `excluded_prefix_no_gate_${path.replace(/\W/g, '_')}`;
      const { context, page, rec } = await fresh(browser, { country: 'DE', cookies: staleGrant() });
      const resp = await page.goto(ORIGIN + path, { waitUntil: 'load' }).catch((e) => null); await page.waitForTimeout(800);
      const r = await page.evaluate(() => ({ gate: typeof window.SiteConsent, config: !!document.getElementById('consent-config'), gateScript: !!document.querySelector('script[src*="consent.js"]') })).catch(() => ({ gate: 'no-document' }));
      const hosts = hostsIn(rec);
      ok(r.gate !== 'object' && !r.config && !r.gateScript && hosts.length === 0, `${name}: status ${resp && resp.status()}, no gate on this document and zero analytics (${JSON.stringify(r)})`);
      finish(name, rec, { path, status: resp && resp.status(), page: r, hosts });
      await context.close();
    }

    // J. Review F2 (2026-10-14): another subdomain of the same registrable domain cannot mint the grant, and a site without
    // regionalDefault stays ask-first whatever cookies exist. Real browser cookie setting from a sibling ORIGIN: the
    // browser is routed so https://dominusfoundry.test is this build (proxied to ORIGIN), https://evil.dominusfoundry.test is a
    // page whose script sets Domain=dominusfoundry.test cookies, and https://legacy.dominusfoundry.test serves the SAME built
    // consent.js with a config that has no regionalDefault (a sibling site with no edge step).
    const SITE = 'https://dominusfoundry.test', EVIL = 'https://evil.dominusfoundry.test', LEGACY = 'https://legacy.dominusfoundry.test';
    const builtGate = await (await fetch(ORIGIN + '/consent/consent.js')).text();
    const evilHtml = `<!doctype html><title>evil</title><script>
      var tries = ['consent_region=default; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax',
        '__Host-consent_region=default; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax',
        '=__Host-consent_region=default; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax',
        '__Secure-consent_region=default; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax'];
      tries.forEach(function (c) { document.cookie = c; });
      document.title = 'planted:' + document.cookie;</script>`;
    // The CHOICE cookie planted from a sibling: a Domain-scoped "accept" under the site's own storage key (and the
    // __Host- name, which the browser must refuse).
    const evilChoiceHtml = `<!doctype html><title>evil-choice</title><script>
      var t = Date.now();
      ['${KEY}=1.accept.' + t + '; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax; Max-Age=600',
       '__Host-${KEY}=1.accept.' + t + '; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax; Max-Age=600',
       '=__Host-${KEY}=1.accept.' + t + '; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax; Max-Age=600'
      ].forEach(function (c) { document.cookie = c; });
      document.title = 'planted:' + document.cookie;</script>`;
    const legacyHtml = (extraCookieHeader) => `<!doctype html><html><head><title>legacy</title>
      <script>window.CONSENT_CONFIG=${JSON.stringify({ storageKey: 'legacy-consent', privacyHref: '/privacy', ga4: GA_ID, vercel: false, privatePaths: '^/(api|chat)(/|$)' })};</script>
      <script src="/consent/consent.js"></script></head><body><main><h1>legacy sibling</h1></main></body></html>`;
    async function siblingContext({ country, legacyHostCookie = false, stripRegion = false }) {
      const context = await browser.newContext({ userAgent: UA, serviceWorkers: 'block', extraHTTPHeaders: country ? { 'x-vercel-ip-country': country } : {} });
      await context.addInitScript(() => { Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false, configurable: true }); });
      const rec = { phase: 'before', ledger: [], navigations: [], pageErrors: [], regionCookies: [] };
      await context.route('**/*', async (route) => {
        const q = route.request(); const u = new URL(q.url());
        if (u.origin === SITE) {
          if (VERCEL_PATH.test(u.pathname)) { rec.ledger.push({ phase: rec.phase, kind: 'tracker', host: 'vercel-insights(same-origin)', url: q.url(), method: q.method(), action: 'answered-204' }); return u.pathname.endsWith('script.js') ? route.fulfill({ status: 200, contentType: 'text/javascript', body: VERCEL_LOADER }) : route.fulfill({ status: 204, body: '' }); }
          if (q.method() !== 'GET' && q.method() !== 'HEAD') return route.fulfill({ status: 204, body: '' });
          const r = await route.fetch({ url: ORIGIN + u.pathname + u.search, maxRedirects: 0 });
          if (stripRegion) { // §M: the edge's region refresh never reaches the browser (a document that skipped it)
            const headers = (await r.headersArray()).filter((h) => !(h.name.toLowerCase() === 'set-cookie' && /^__Host-consent_region=/.test(h.value)));
            rec.stripped = (rec.stripped || 0) + 1;
            const multi = {}; for (const h of headers) { const k = h.name.toLowerCase(); if (k === 'content-length' || k === 'content-encoding') continue; multi[k] = multi[k] ? multi[k] + (k === 'set-cookie' ? '\n' : ', ') + h.value : h.value; }
            return route.fulfill({ status: r.status(), headers: multi, body: await r.body() });
          }
          return route.fulfill({ response: r });
        }
        if (u.origin === EVIL) return route.fulfill({ status: 200, contentType: 'text/html', body: u.pathname === '/choice' ? evilChoiceHtml
          : u.pathname === '/no' ? `<!doctype html><title>evil-no</title><script>document.cookie = '${KEY}=1.reject.${u.searchParams.get('t')}; Domain=dominusfoundry.test; Path=/; Secure; SameSite=Lax; Max-Age=600';</script>` : evilHtml });
        if (u.origin === LEGACY) {
          if (u.pathname === '/consent/consent.js') return route.fulfill({ status: 200, contentType: 'text/javascript', body: builtGate });
          const headers = { 'content-type': 'text/html' };
          if (legacyHostCookie) headers['set-cookie'] = `__Host-consent_region=${FRESH()}; Path=/; Max-Age=600; Secure; SameSite=Lax`;
          return route.fulfill({ status: 200, headers, body: legacyHtml() });
        }
        const c = vendorHost(u.hostname) ? 'tracker' : (ALLOWED_HOSTS.has(u.hostname) ? 'allowed' : 'unknown');
        const entry = { phase: rec.phase, kind: c, host: c === 'tracker' ? u.hostname : u.hostname, method: q.method(), url: q.url(), action: '' };
        rec.ledger.push(entry);
        if (c === 'tracker') {
          const cached = CACHED[u.origin + u.pathname] ?? (u.origin + u.pathname === 'https://www.googletagmanager.com/gtag/js' && u.searchParams.get('id') === GA_ID ? GA_LOADER : undefined);
          if (cached !== undefined) { entry.action = 'cached-loader'; return route.fulfill({ status: 200, contentType: 'text/javascript', body: cached }); }
          entry.action = 'answered-204'; return route.fulfill({ status: 204, body: '' });
        }
        entry.action = 'aborted'; return route.abort();
      });
      const page = await context.newPage();
      page.on('pageerror', (e) => rec.pageErrors.push(String(e.message || e).slice(0, 200)));
      return { context, page, rec };
    }
    const at = async (page, url) => { const r = await page.goto(url, { waitUntil: 'load' }); await page.waitForTimeout(2500); return r; };
    { const name = 'sibling_plant_then_DE_visit';
      const { context, page, rec } = await siblingContext({ country: 'DE' });
      await at(page, EVIL + '/');
      const plantedOnEvil = await page.title();
      rec.phase = 'site';
      const r404 = await at(page, SITE + '/review.missing');
      const seenOnSite = await page.evaluate(() => document.cookie);
      const g404 = await gate(page);
      const r1 = await at(page, SITE + '/');
      const gHome = await gate(page);
      const hosts = hostsIn(rec, 'site');
      ok(/(^|; )consent_region=default/.test(seenOnSite), `${name}: control, the sibling's Domain cookie reached the site (document.cookie there: ${seenOnSite})`);
      ok(!/__Host-consent_region=default/.test(seenOnSite), `${name}: the sibling could not mint __Host-consent_region (${seenOnSite})`);
      ok(g404.state === null && g404.allowed === false && gHome.state === null && gHome.allowed === false, `${name}: /review.missing (${r404 && r404.status()}) and / (${r1 && r1.status()}) are ask-first (${JSON.stringify(g404)}; ${JSON.stringify(gHome)})`);
      ok(hosts.length === 0, `${name}: zero analytics requests on the site (${hosts.join(', ') || 'none'})`);
      finish(name, rec, { planted_on_evil: plantedOnEvil, seen_on_site: seenOnSite, gate_404: g404, gate_home: gHome, hosts });
      await context.close(); }
    { const name = 'sibling_plant_then_legacy_site_without_flag';
      const { context, page, rec } = await siblingContext({ country: 'US' });
      await at(page, EVIL + '/');
      rec.phase = 'legacy';
      await at(page, LEGACY + '/');
      const seen = await page.evaluate(() => document.cookie); const g = await gate(page); const bar = await barCount(page); const hosts = hostsIn(rec, 'legacy');
      ok(/(^|; )consent_region=default/.test(seen), `${name}: control, the planted Domain cookie is visible on the legacy sibling (${seen})`);
      ok(g.state === null && g.allowed === false && g.region === 'ask' && bar > 0 && hosts.length === 0, `${name}: no regionalDefault, so ask-first: bar shown, zero analytics (${JSON.stringify(g)}; bar ${bar}; ${hosts.join(', ') || 'none'})`);
      finish(name, rec, { seen, gate: g, bar, hosts });
      await context.close(); }
    { const name = 'legacy_site_without_flag_own_host_cookie_default';
      const { context, page, rec } = await siblingContext({ country: 'US', legacyHostCookie: true });
      await at(page, LEGACY + '/'); await at(page, LEGACY + '/again');
      const seen = await page.evaluate(() => document.cookie); const g = await gate(page); const hosts = hostsIn(rec);
      ok(/__Host-consent_region=default/.test(seen), `${name}: control, a correctly issued host cookie saying default is present (${seen})`);
      ok(g.state === null && g.allowed === false && hosts.length === 0, `${name}: still ask-first without regionalDefault, zero analytics (${JSON.stringify(g)}; ${hosts.join(', ') || 'none'})`);
      finish(name, rec, { seen, gate: g, hosts });
      await context.close(); }
    { const name = 'routed_https_site_US_control';
      const { context, page, rec } = await siblingContext({ country: 'US' });
      await at(page, SITE + '/');
      const g = await gate(page); const t = trackers(rec);
      ok(g.state === 'default' && g.allowed === true && t.some((h) => h.url.startsWith('https://www.googletagmanager.com/gtag/js')), `${name}: control fires, over https the site's own __Host- cookie makes a US visitor default-on and GA4 loads (${JSON.stringify(g)})`);
      finish(name, rec, { gate: g, hosts: hostsIn(rec) });
      await context.close(); }

    // L. The stored-choice cookie (2026-10-14, same class as F2). A sibling subdomain plants a Domain-scoped
    // <KEY> "accept" for the visitor; with no stored choice of this host's own, a DE or unknown-country
    // visitor must still be asked and nothing may load.
    for (const [name, country] of [['sibling_choice_plant_DE', 'DE'], ['sibling_choice_plant_unknown', null]]) {
      const { context, page, rec } = await siblingContext({ country });
      await at(page, EVIL + '/choice');
      // Before the site runs the gate: the browser holds the sibling's Domain cookie for the site (the plant took).
      const jarBefore = (await context.cookies(SITE + '/')).map((c) => `${c.name}=${c.value}@${c.domain}`).join('; ');
      rec.phase = 'site';
      await at(page, SITE + '/');
      const seen = await page.evaluate(() => document.cookie); const g = await gate(page); const bar = await barCount(page); const hosts = hostsIn(rec, 'site');
      await at(page, SITE + '/sabina');
      const g2 = await gate(page); const hosts2 = hostsIn(rec, 'site');
      ok(new RegExp(`(^|; )${KEY}=1\\.accept\\.\\d+@\\.?dominusfoundry\\.test`).test(jarBefore), `${name}: control, before the visit the browser holds the sibling's Domain "accept" for the site (${jarBefore})`);
      ok(!new RegExp(`__Host-${KEY}=1\\.accept`).test(jarBefore) && !new RegExp(`__Host-${KEY}=1\\.accept`).test(seen), `${name}: the sibling could not mint __Host-${KEY} (${jarBefore} | ${seen})`);
      ok(!new RegExp(`(^|; )${KEY}=`).test(seen), `${name}: the untrusted Domain value was reconciled (no choice) and then removed by the site (${seen})`);
      ok(g.state === null && g.allowed === false && bar > 0 && g2.state === null && hosts2.length === 0, `${name}: asked first on / and /sabina, zero analytics (${JSON.stringify(g)}; ${JSON.stringify(g2)}; bar ${bar}; ${hosts2.join(', ') || 'none'})`);
      finish(name, rec, { seen, gate: g, gate_hire: g2, bar, hosts: hosts2 });
      await context.close();
    }
    // L control: the same routed site, a DE visitor presses Allow: analytics start, the choice is in the __Host- cookie,
    // and after a reload it is still on (so the zeros above are not a dead page).
    { const name = 'routed_DE_allow_then_reload_control';
      const { context, page, rec } = await siblingContext({ country: 'DE' });
      await at(page, SITE + '/');
      rec.phase = 'allow';
      await page.locator('[data-consent-bar] [data-consent="accept"]').click(); await page.waitForTimeout(2500);
      const afterAllow = hostsIn(rec, 'allow');
      await page.evaluate(() => localStorage.clear()); // the reload must rely on the host cookie alone
      rec.phase = 'reload';
      await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(2500);
      const g = await gate(page); const hosts = hostsIn(rec, 'reload'); const jar = await page.evaluate(() => document.cookie);
      ok(afterAllow.includes('www.googletagmanager.com'), `${name}: Allow loads GA4 (${afterAllow.join(', ') || 'none'})`);
      ok(new RegExp(`__Host-${KEY}=1\\.accept\\.\\d+`).test(jar) && !new RegExp(`(^|; )${KEY}=`).test(jar), `${name}: the choice is in the __Host- cookie only (${jar})`);
      ok(g.state === 'accept' && hosts.includes('www.googletagmanager.com'), `${name}: after a reload with local storage cleared, still on from the host cookie (${JSON.stringify(g)}; ${hosts.join(', ') || 'none'})`);
      finish(name, rec, { after_allow: afterAllow, gate_after_reload: g, hosts_after_reload: hosts, jar });
      await context.close(); }
    // L2. Legacy migration on this build (host-only legacy cookies, as the pre-2026-10-14 gate wrote them).
    { const t = Date.now() - 5000;
      for (const [name, opts, want] of [
        ['legacy_reject_migrates_DE', { country: 'DE', legacy: `1.reject.${t}` }, 'reject'],
        ['legacy_accept_alone_asked_again_DE', { country: 'DE', legacy: `1.accept.${t}` }, null],
        ['legacy_accept_with_local_accept_carried_DE', { country: 'DE', legacy: `1.accept.${t}`, local: `1.accept.${t}` }, 'accept'],
      ]) {
        const { context, page, rec } = await fresh(browser, { country: opts.country, cookies: [{ name: KEY, value: opts.legacy }] });
        if (opts.local) await context.addInitScript(([k, v]) => { if (!sessionStorage.getItem('seeded')) { localStorage.setItem(k, v); sessionStorage.setItem('seeded', '1'); } }, [KEY, opts.local]);
        await visit(page, '/');
        const g = await gate(page); const hosts = hostsIn(rec); const bar = await barCount(page);
        const jar = await page.evaluate(() => document.cookie);
        const host = (jar.match(new RegExp(`__Host-${KEY}=([^;]*)`)) || [])[1] || null; const legacyLeft = new RegExp(`(^|; )${KEY}=`).test(jar);
        const good = want === 'reject' ? g.state === 'reject' && hosts.length === 0 && bar === 0 && decodeURIComponent(host || '') === opts.legacy && !legacyLeft
          : want === null ? g.state === null && hosts.length === 0 && bar > 0 && host === null && !legacyLeft
          : g.state === 'accept' && hosts.includes('www.googletagmanager.com') && decodeURIComponent(host || '') === opts.local && !legacyLeft;
        ok(good, `${name}: ${want === 'reject' ? 'reject kept, migrated into __Host- with its time, legacy removed, nothing loads' : want === null ? 'not trusted: asked again, nothing loads, legacy removed, nothing carried' : 'carried over from local storage into __Host-, legacy removed, analytics on'} (${JSON.stringify(g)}; bar ${bar}; ${hosts.join(', ') || 'none'}; jar ${jar})`);
        finish(name, rec, { opts, gate: g, hosts, bar, jar });
        await context.close();
      }
    }
    // L3. GPC still wins over this host's own stored Allow.
    { const name = 'host_accept_with_gpc_header_DE';
      const { context, page, rec } = await fresh(browser, { country: 'DE', gpcHeader: true, seedCookie: `1.accept.${Date.now()}` });
      const planted = (await context.cookies(ORIGIN)).filter((c) => c.name === `__Host-${KEY}`).length;
      await visit(page, '/'); const g = await gate(page); const hosts = hostsIn(rec);
      ok(planted === 1 && g.state === 'gpc' && g.allowed === false && hosts.length === 0, `${name}: stored Allow planted (${planted}); GPC wins, zero analytics (${JSON.stringify(g)}; ${hosts.join(', ') || 'none'})`);
      finish(name, rec, { planted, gate: g, hosts });
      await context.close(); }

    // L4 (review R2-2): a legacy No newer than this host's own older Allow is reconciled before anything is removed:
    // root host-only and path-scoped (this build, /sabina), and Domain-scoped from a real sibling origin (routed https).
    { const t = Date.now() - 5000;
      for (const [name, legacy] of [['legacy_root_no_beats_older_host_allow_DE', {}], ['legacy_path_no_beats_older_host_allow_DE', { path: '/sabina' }]]) {
        const { context, page, rec } = await fresh(browser, { country: 'DE', cookies: [{ name: `__Host-${KEY}`, value: `1.accept.${t - 60000}` }, { name: KEY, value: `1.reject.${t}`, ...legacy }] });
        const before = (await context.cookies(ORIGIN + '/sabina')).filter((c) => c.name === KEY || c.name === `__Host-${KEY}`).map((c) => `${c.name}=${c.value}@${c.path}`);
        await visit(page, '/sabina');
        const g = await gate(page); const hosts = hostsIn(rec); const jar = await page.evaluate(() => document.cookie);
        const host = decodeURIComponent((jar.match(new RegExp(`__Host-${KEY}=([^;]*)`)) || [])[1] || '');
        ok(before.length === 2, `${name}: control, both cookies present before the visit (${before.join(', ')})`);
        ok(g.state === 'reject' && g.allowed === false && hosts.length === 0 && host === `1.reject.${t}` && !new RegExp(`(^|; )${KEY}=`).test(jar), `${name}: reject wins, written to the host cookie with its time, then legacy removed; zero analytics (${JSON.stringify(g)}; ${hosts.join(', ') || 'none'}; jar ${jar})`);
        finish(name, rec, { before, gate: g, hosts, jar });
        await context.close();
      }
      { const name = 'legacy_domain_no_from_sibling_beats_older_host_allow_DE';
        const { context, page, rec } = await siblingContext({ country: 'DE' });
        await at(page, SITE + '/robots.txt');
        await page.evaluate(([k, v]) => { document.cookie = '__Host-' + k + '=' + v + '; Path=/; Secure; SameSite=Lax; Max-Age=600'; }, [KEY, `1.accept.${t - 60000}`]);
        await at(page, EVIL + '/no?t=' + t);
        rec.phase = 'site';
        const seen = await (async () => { await at(page, SITE + '/sabina'); return page.evaluate(() => document.cookie); })();
        const g = await gate(page); const hosts = hostsIn(rec, 'site');
        const host = decodeURIComponent((seen.match(new RegExp(`__Host-${KEY}=([^;]*)`)) || [])[1] || '');
        ok(g.state === 'reject' && g.allowed === false && hosts.length === 0 && host === `1.reject.${t}`, `${name}: the sibling's newer Domain No wins over the older host Allow and is written to the host cookie; zero analytics (${JSON.stringify(g)}; jar ${seen})`);
        finish(name, rec, { gate: g, hosts, jar: seen });
        await context.close(); }
    }

    // M. Review round 3, layer 2 (fail closed): a document that did NOT get the edge's region refresh. The routed https
    // site strips the region Set-Cookie from every response; the browser holds a default grant planted with an OLD time.
    // A US visitor must be asked first and nothing may load. Control: the same stripped route with a FRESH planted time
    // is default-on and GA4 loads, so the only difference is the age of the value.
    // Mark 2026-10-15 (round 4): window 10 s, at most 2 s ahead; a 25 s-old value (accepted under r7's 30 s) and a +10 s one
    // now ask first. A value inside the window on a document that skipped the edge is the accepted residual, §8.
    for (const [name, value, want] of [['no_refresh_old_timestamp_US', () => FRESH(-120), 'ask'], ['no_refresh_25s_old_US', () => FRESH(-25), 'ask'], ['no_refresh_10s_ahead_US', () => FRESH(10), 'ask'], ['no_refresh_old_untimed_value_US', () => 'default', 'ask'], ['no_refresh_fresh_timestamp_US_control', () => FRESH(), 'default']]) {
      const { context, page, rec } = await siblingContext({ country: 'US', stripRegion: true });
      await at(page, SITE + '/robots.txt');
      await page.evaluate((v) => { document.cookie = '__Host-consent_region=' + v + '; Path=/; Secure; SameSite=Lax; Max-Age=600'; }, value());
      const planted = (await context.cookies(SITE + '/')).filter((c) => c.name === RC).map((c) => c.value);
      rec.phase = 'site';
      await at(page, SITE + '/');
      const g = await gate(page); const hosts = hostsIn(rec, 'site'); const bar = await barCount(page);
      const after = (await context.cookies(SITE + '/')).filter((c) => c.name === RC).map((c) => c.value);
      ok(planted.length === 1 && after.join() === planted.join() && rec.stripped > 0, `${name}: control, the planted value (${planted.join()}) was not refreshed by the edge (${after.join()}; ${rec.stripped} responses stripped)`);
      ok(want === 'ask' ? g.state === null && g.allowed === false && bar > 0 && hosts.length === 0 : g.state === 'default' && g.allowed === true && hosts.includes('www.googletagmanager.com'),
        `${name}: ${want === 'ask' ? 'asked first, zero analytics' : 'default-on, GA4 loads'} (${JSON.stringify(g)}; bar ${bar}; ${hosts.join(', ') || 'none'})`);
      finish(name, rec, { planted, after, gate: g, hosts, bar });
      await context.close();
    }
    // M2. US default-on on ordinary navigation, and across a client-side route change taken after the 10 s window: the
    // region was decided once at page load and is not re-read by a client-side navigation; the gate is not re-run.
    { const name = 'us_client_side_route_change_after_window';
      const { context, page, rec } = await fresh(browser, { country: 'US' });
      await visit(page, '/learn');
      const g0 = await gate(page); const l0 = defaultOnLoaded(rec);
      await page.evaluate(() => { window.__sameDocument = true; });
      await page.waitForTimeout(15000);
      rec.phase = 'spa';
      // This site's nav is plain <a> (full loads); /learn's tiles are Next <Link>s, a client-side route change.
      const spaTarget = await page.locator('main a[href^="/learn/platform/"]').first().getAttribute('href');
      await page.locator('main a[href^="/learn/platform/"]').first().click();
      await page.waitForURL((u) => u.pathname === spaTarget, { timeout: 10000 }).catch(() => {}); await page.waitForTimeout(2500);
      const g1 = await gate(page); const same = await page.evaluate(() => window.__sameDocument === true); const spaHosts = hostsIn(rec, 'spa'); const spaPath = new URL(page.url()).pathname;
      rec.phase = 'full';
      await visit(page, '/company');
      const g2 = await gate(page); const fullHosts = hostsIn(rec, 'full');
      ok(g0.state === 'default' && g0.allowed === true && l0.ga4_loader, `${name}: ordinary navigation, default-on (${JSON.stringify(g0)})`);
      ok(same && spaPath === spaTarget && g1.state === 'default' && g1.allowed === true && spaHosts.length > 0, `${name}: 15 s later a client-side route change to ${spaTarget} (same document) stays default-on and allowed, analytics continue (${JSON.stringify(g1)}; ${spaHosts.join(', ') || 'none'})`);
      ok(g2.state === 'default' && g2.allowed === true && fullHosts.includes('www.googletagmanager.com'), `${name}: the next full page load gets a fresh value from the edge and is default-on (${JSON.stringify(g2)})`);
      finish(name, rec, { g0, g1, same_document: same, spa_hosts: spaHosts, g2 });
      await context.close(); }

    // K. Review F3 (2026-10-14): a valid stored rejection is never defeated by an older acceptance.
    { const now = Date.now();
      for (const [name, seed, want] of [
        ['stores_newer_cookie_reject_older_local_accept', { cookie: `1.reject.${now}`, local: `1.accept.${now - 60000}` }, 'reject'],
        ['stores_newer_local_reject_older_cookie_accept', { cookie: `1.accept.${now - 60000}`, local: `1.reject.${now}` }, 'reject'],
        // The cookie here is this host's __Host- cookie, which no sibling can plant, so the newer explicit Allow wins
        // (2026-10-14; was 'reject' while the cookie could be planted).
        ['stores_older_local_reject_newer_host_cookie_accept', { cookie: `1.accept.${now}`, local: `1.reject.${now - 60000}` }, 'accept'],
        ['stores_newer_local_accept_older_cookie_reject_control', { cookie: `1.reject.${now - 60000}`, local: `1.accept.${now}` }, 'accept'],
      ]) {
        const { context, page, rec } = await fresh(browser, { country: 'US', seedCookie: seed.cookie });
        await context.addInitScript(([k, v]) => { if (!sessionStorage.getItem('seeded')) { localStorage.setItem(k, v); sessionStorage.setItem('seeded', '1'); } }, [KEY, seed.local]);
        await visit(page, '/');
        const g = await gate(page); const hosts = hostsIn(rec);
        const good = want === 'reject' ? g.state === 'reject' && g.allowed === false && hosts.length === 0 : g.state === 'accept' && hosts.includes('www.googletagmanager.com');
        ok(good, `${name}: ${want} (${JSON.stringify(g)}; ${hosts.join(', ') || 'none'})`);
        finish(name, rec, { seed, gate: g, hosts });
        await context.close();
      }
    }
    // K2. A reject whose local-storage write fails (quota) while the old accept is still there: the reject holds after the
    // reload and on later pages. Then an explicit later Allow works again.
    { const name = 'reject_with_failed_local_write_then_reaccept';
      const { context, page, rec } = await fresh(browser, { country: 'DE' });
      await visit(page, '/');
      await page.locator('[data-consent-bar] [data-consent="accept"]').click(); await page.waitForTimeout(1500);
      const acceptedFirst = await gate(page);
      await page.evaluate(() => { const orig = Storage.prototype.setItem; Storage.prototype.setItem = function () { throw new DOMException('quota', 'QuotaExceededError'); }; window.__restore = () => { Storage.prototype.setItem = orig; }; });
      await page.locator('footer [data-consent-open]').first().scrollIntoViewIfNeeded();
      await page.locator('footer [data-consent-open]').first().click(); await page.waitForTimeout(300);
      rec.phase = 'reject';
      await Promise.all([page.waitForEvent('load', { timeout: 10000 }).catch(() => {}), page.locator('[data-consent-reopened] [data-consent="reject"]').click()]);
      await page.waitForTimeout(2000);
      rec.phase = 'after-reject';
      await visit(page, '/sabina');
      const afterReject = await gate(page); const local = await page.evaluate((k) => localStorage.getItem(k), KEY); const hostsAfter = hostsIn(rec, 'after-reject');
      ok(acceptedFirst.state === 'accept', `${name}: control, Allow was stored first (${JSON.stringify(acceptedFirst)})`);
      ok(afterReject.state === 'reject' && afterReject.allowed === false && hostsAfter.length === 0, `${name}: the reject holds although local storage could not record it (${JSON.stringify(afterReject)}; local ${local}; ${hostsAfter.join(', ') || 'none'})`);
      ok(!/accept/.test(local || ''), `${name}: no stale accept left in local storage (${local})`);
      rec.phase = 'reaccept';
      await page.locator('footer [data-consent-open]').first().scrollIntoViewIfNeeded();
      await page.locator('footer [data-consent-open]').first().click(); await page.waitForTimeout(300);
      await page.locator('[data-consent-reopened] [data-consent="accept"]').click(); await page.waitForTimeout(2500);
      const re = await gate(page); const reHosts = hostsIn(rec, 'reaccept');
      ok(re.state === 'accept' && reHosts.includes('www.googletagmanager.com'), `${name}: an explicit later Allow works again (${JSON.stringify(re)}; ${reHosts.join(', ') || 'none'})`);
      finish(name, rec, { accepted_first: acceptedFirst, after_reject: afterReject, local_after_reject: local, hosts_after_reject: hostsAfter, reaccept: re });
      await context.close(); }

    // P (dominusfoundry). /privacy in the default-on region states the 'default' status, with both choices offered; in the
    // ask-first region it keeps the no-choice line.
    for (const [name, country, want] of [['privacy_status_line_US', 'US', 'default'], ['privacy_status_line_DE', 'DE', 'none']]) {
      const { context, page, rec } = await fresh(browser, { country });
      await visit(page, '/privacy');
      const c = await page.evaluate(() => { const el = document.querySelector('[data-consent-choice]'); return el && { state: el.getAttribute('data-consent-choice'), text: el.querySelector('[role="status"]').textContent, buttons: [...el.querySelectorAll('button')].map((b) => b.textContent.trim()) }; });
      const text = want === 'default' ? 'Analytics are on for this browser because you have not turned them off. Choose No analytics to stop them.' : 'You have not made a choice on this browser, so no analytics have been sent.';
      ok(c && c.state === want && c.text === text && c.buttons.join('|') === 'No analytics|Allow analytics', `${name}: the choice control says "${text}" with No analytics and Allow analytics (${JSON.stringify(c)})`);
      finish(name, rec, { country, control: c });
      await context.close();
    }

    // Q (dominusfoundry). The qb. host is rewritten to /qb-migration in middleware.js; that response gets the region and
    // GPC cookies too, and a subresource on it gets none. Raw HTTP with a Host header (a browser cannot set one).
    { const name = 'qb_host_rewrite_sets_cookies';
      const { request } = await import('node:http');
      const o = new URL(ORIGIN);
      const get = (path, headers) => new Promise((res, rej) => { const r = request({ host: o.hostname, port: o.port, path, method: 'GET', headers: { host: `qb.dominusfoundry.test:${o.port}`, ...headers } }, (x) => { let b = ''; x.on('data', (d) => { b += d; }); x.on('end', () => res({ status: x.statusCode, cookies: [].concat(x.headers['set-cookie'] || []).map((c) => c.split(';')[0]), body: b })); }); r.on('error', rej); r.end(); });
      const doc = { 'sec-fetch-dest': 'document', accept: 'text/html' };
      const us = await get('/', { ...doc, 'x-vercel-ip-country': 'US', 'sec-gpc': '1' });
      const de = await get('/', { ...doc, 'x-vercel-ip-country': 'DE' });
      const img = await get('/brand/crest-full.png', { 'sec-fetch-dest': 'image', accept: 'image/*', 'x-vercel-ip-country': 'US', 'sec-gpc': '1' });
      const rc = (r) => r.cookies.filter((c) => c.startsWith(RC + '=')).map((c) => c.slice(RC.length + 1));
      ok(us.status === 200 && /QuickBooks/.test(us.body) && rc(us).length === 1 && /^default\.\d+$/.test(rc(us)[0]) && us.cookies.includes('consent_gpc=1'), `${name}: US + Sec-GPC document on qb.: the /qb-migration rewrite (status ${us.status}) sets ${RC}=default.<t> and consent_gpc=1 (${us.cookies.join(', ') || 'none'})`);
      ok(de.status === 200 && rc(de).length === 1 && /^ask\.\d+$/.test(rc(de)[0]), `${name}: DE document on qb.: ${RC}=ask.<t> (${de.cookies.join(', ') || 'none'})`);
      ok(img.cookies.length === 0, `${name}: a subresource on qb. gets no consent cookie (status ${img.status}; ${img.cookies.join(', ') || 'none'})`);
      matrix.states[name] = { us: { status: us.status, cookies: us.cookies }, de: { status: de.status, cookies: de.cookies }, img: { status: img.status, cookies: img.cookies } };
      if (DIR) writeFileSync(`${DIR}/geo-${name}.json`, JSON.stringify({ state: name, origin: ORIGIN, measured_at: new Date().toISOString(), ...matrix.states[name] }, null, 2) + '\n'); }
  } finally {
    await browser.close();
  }
  matrix.checks = results; matrix.failures = failures;
  if (OUT) writeFileSync(OUT, JSON.stringify(matrix, null, 2) + '\n');
  if (DIR) writeFileSync(`${DIR}/geo-matrix.json`, JSON.stringify({ ...matrix, states: Object.keys(matrix.states) }, null, 2) + '\n');
  console.log(`geo-matrix: ${results.length - failures} of ${results.length} checks passed`);
  process.exit(failures ? 1 : 0);
}
main().catch((e) => { console.error('  FAIL harness error:', e && e.stack || e); process.exit(2); });
