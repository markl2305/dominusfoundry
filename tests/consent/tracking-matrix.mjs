/**
 * Consent tracking matrix (compliance P1-1c, Mark 2026-10-12), adapted from hiresabina.ai's
 * tests/consent/tracking-matrix.mjs (P1-1b): same states, same recording rules; the pages, the storage key, the
 * LinkedIn expectation (dominusfoundry has no LinkedIn tag) and the form state (/start instead of /evaluate)
 * are this site's. Point CONSENT_ORIGIN at a running build.
 *
 *   CONSENT_ORIGIN=http://localhost:4472 CONSENT_OUT=matrix.json node tests/consent/tracking-matrix.mjs
 *
 * Every state runs in a FRESH browser context (no shared storage). Every request is recorded by host.
 * ⛔ Nothing about a visitor leaves this machine: analytics collection endpoints are answered in the browser
 * with an empty 204 (the request is recorded, never delivered), every same-origin write is answered with a
 * fixture, and every other off-origin request is aborted. Only the two tag LOADERS (gtag.js, insight.min.js)
 * are fetched for real, because without them no collection request can be observed at all.
 * Exit 1 on any failed assertion. CONSENT_EXPECT=red inverts nothing: it only labels the output.
 */
import { writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const ORIGIN = process.env.CONSENT_ORIGIN || 'http://localhost:4472';
const OUT = process.env.CONSENT_OUT || '';
const LABEL = process.env.CONSENT_LABEL || 'candidate';
// One page per route group: the Foundry-chrome pages (/, /sabina), the (site) group (/contact, /start), the
// AppShell pages (/systems) and the blog.
const PAGES = (process.env.CONSENT_PAGES || '/,/sabina,/contact,/start,/systems,/blog').split(',');
const KEY = process.env.CONSENT_KEY || 'df-consent';
const SENTINEL = { name: 'Zq Sentinel Person', company: 'Zq Sentinel Roofing Co', email: 'zq-sentinel@example.invalid', phone: '5055550199', website: 'zq-sentinel.example' };
const ANALYTICS_KEYS = /(^|[^a-z])(_ga|_gid|gclid|client_id|cid|tid|_gl|li_fat_id|fbclid|lintrk)([^a-z]|$)/i;

const TRACKER_HOSTS = /(^|\.)(googletagmanager\.com|google-analytics\.com|analytics\.google\.com|doubleclick\.net|licdn\.com|linkedin\.com)$/;
const LOADERS = /^https:\/\/(www\.googletagmanager\.com\/gtag\/js|snap\.licdn\.com\/li\.lms-analytics\/insight\.min\.js)/;
const trackerOf = (u) => (TRACKER_HOSTS.test(u.hostname) ? u.hostname : (u.pathname.startsWith('/_vercel/insights') ? 'vercel-insights(same-origin)' : null));

let failures = 0; const results = [];
function ok(cond, label) { results.push({ ok: !!cond, label }); if (cond) console.log(`  ok   ${label}`); else { failures += 1; console.error(`  FAIL ${label}`); } }

async function fresh(browser, opts = {}) {
  const { gpcSignal = false, gpcHeader = false, js = true, seedAccept = false } = opts;
  const context = await browser.newContext({ javaScriptEnabled: js, extraHTTPHeaders: gpcHeader ? { 'Sec-GPC': '1' } : {} });
  if (gpcSignal) await context.addInitScript(() => { Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', { get: () => true, configurable: true }); });
  if (seedAccept) await context.addInitScript((k) => { try { if (!localStorage.getItem(k)) localStorage.setItem(k, '1.accept.0'); } catch (e) { /* none */ } }, KEY);
  const rec = { phase: 'before', hits: [], assess: [], pageErrors: [] };
  await context.route('**/*', async (route) => {
    const q = route.request(); const u = new URL(q.url());
    const t = trackerOf(u);
    if (t) {
      rec.hits.push({ phase: rec.phase, host: t, method: q.method(), url: q.url(), body: q.postData() || '' });
      if (LOADERS.test(q.url())) return route.continue();
      return route.fulfill({ status: 204, body: '' });
    }
    if (u.origin !== ORIGIN) return route.abort();
    if (q.method() === 'GET' || q.method() === 'HEAD') return route.continue();
    // Same-origin writes never reach the app: no lead email, no chat relay. The lead route gets a fixture.
    if (u.pathname === '/api/lead') {
      rec.assess.push({ raw: q.postData() || '', json: q.postDataJSON() });
      return route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    }
    return route.fulfill({ status: 204, body: '' });
  });
  const page = await context.newPage();
  page.on('pageerror', (e) => rec.pageErrors.push(String(e.message || e).slice(0, 200)));
  return { context, page, rec };
}
async function visit(page, path) { await page.goto(ORIGIN + path, { waitUntil: 'load' }); await page.waitForTimeout(2500); }
const hostsIn = (rec, phase) => [...new Set(rec.hits.filter((h) => !phase || h.phase === phase).map((h) => h.host))].sort();
const barCount = (page) => page.locator('[data-consent-bar]').count();
// Marks every later request as phase "after" AT the click, so a hit fired while waiting is not miscounted.
async function choose(page, choice, rec) {
  const btn = page.locator(`[data-consent-bar] [data-consent="${choice}"]`);
  if (await btn.count() === 0) { if (rec) rec.phase = 'after'; return false; }
  if (rec) rec.phase = 'after';
  await btn.click(); await page.waitForTimeout(3000); return true;
}

async function main() {
  // CONSENT_CHROMIUM: an already-installed Chromium/headless-shell binary, for machines whose Playwright browser
  // build does not match this checkout's playwright version (no download needed).
  const browser = await chromium.launch(process.env.CONSENT_CHROMIUM ? { executablePath: process.env.CONSENT_CHROMIUM } : {});
  const matrix = { label: LABEL, origin: ORIGIN, measured_at: new Date().toISOString(), pages: PAGES, states: {} };
  try {
    // 1 initial: no choice made
    { const { context, page, rec } = await fresh(browser);
      let bar = null;
      for (const p of PAGES) { await visit(page, p); if (bar === null) bar = await barCount(page); }
      const hosts = hostsIn(rec);
      matrix.states.initial = { hosts, bar_shown: bar > 0, requests: rec.hits.length };
      ok(hosts.length === 0, `initial: zero analytics/advertising requests before any choice (${hosts.join(', ') || 'none'})`);
      ok(bar > 0, 'initial: the consent bar is shown');
      await context.close(); }

    // 2 reject
    { const { context, page, rec } = await fresh(browser);
      await visit(page, PAGES[0]); const clicked = await choose(page, 'reject', rec);
      for (const p of PAGES) await visit(page, p);
      const hosts = hostsIn(rec);
      matrix.states.reject = { hosts, choice_made: clicked, bar_after: await barCount(page) };
      ok(clicked, 'reject: "No analytics" button exists and was pressed');
      ok(hosts.length === 0, `reject: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(await barCount(page) === 0, 'reject: the bar does not come back on later pages');
      await context.close(); }

    // 3 accept
    { const { context, page, rec } = await fresh(browser);
      await visit(page, PAGES[0]); const before = hostsIn(rec);
      const clicked = await choose(page, 'accept', rec);
      for (const p of PAGES) await visit(page, p);
      const after = hostsIn(rec, 'after');
      matrix.states.accept = { hosts_before_choice: before, hosts_after_accept: after, choice_made: clicked };
      ok(clicked && before.length === 0, `accept: nothing before the click (${before.join(', ') || 'none'})`);
      ok(after.includes('www.googletagmanager.com'), 'accept: GA4 loader requested after accept');
      ok(after.some((h) => /google-analytics\.com$/.test(h)), 'accept: a GA4 collection request is made after accept (answered locally, never delivered)');
      ok(!after.some((h) => /licdn|linkedin/.test(h)), `accept: no LinkedIn request (this site has no LinkedIn tag) (${after.join(', ')})`);
      ok(after.includes('vercel-insights(same-origin)'), 'accept: Vercel Web Analytics requested after accept');
      const leaky = rec.hits.filter((h) => /google-analytics/.test(h.host) && /[?&]dl=[^&]*%3F/.test(h.url));
      ok(leaky.length === 0, 'accept: no GA4 hit carries a query string in its page location');
      await context.close(); }

    // 4 withdraw (accept, then "no analytics" on /privacy)
    { const { context, page, rec } = await fresh(browser);
      await visit(page, PAGES[0]); await choose(page, 'accept');
      await visit(page, '/privacy');
      const w = page.locator('[data-consent-withdraw]');
      const has = await w.count() > 0;
      if (has) { await Promise.all([page.waitForEvent('load', { timeout: 10000 }).catch(() => {}), w.click()]); await page.waitForTimeout(2500); }
      rec.phase = 'after';
      for (const p of PAGES) await visit(page, p);
      const hosts = hostsIn(rec, 'after');
      const cookies = (await context.cookies()).map((c) => c.name).filter((n) => /^(_ga|_gid|li_|_li)/.test(n));
      matrix.states.withdraw = { hosts_after_withdraw: hosts, withdraw_control_found: has, analytics_cookies_left: cookies };
      ok(has, 'withdraw: /privacy has a withdraw control');
      ok(hosts.length === 0, `withdraw: zero analytics requests after withdrawing (${hosts.join(', ') || 'none'})`);
      ok(cookies.length === 0, `withdraw: first-party analytics cookies cleared (${cookies.join(', ') || 'none'})`);
      await context.close(); }

    // 5 GPC: signal, and header, each ALSO with a stored accept that GPC must override
    for (const [name, opts] of [['gpc_signal', { gpcSignal: true }], ['gpc_header', { gpcHeader: true }], ['gpc_signal_over_stored_accept', { gpcSignal: true, seedAccept: true }], ['gpc_header_over_stored_accept', { gpcHeader: true, seedAccept: true }]]) {
      const { context, page, rec } = await fresh(browser, opts);
      let bar = 0;
      for (const p of PAGES) { await visit(page, p); bar += await barCount(page); }
      const hosts = hostsIn(rec);
      const state = await page.evaluate(() => (window.SiteConsent ? window.SiteConsent.state() : 'no-gate'));
      matrix.states[name] = { hosts, bar_shown: bar > 0, gate_state: state };
      ok(hosts.length === 0, `${name}: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(bar === 0, `${name}: no consent prompt`);
      ok(state === 'gpc', `${name}: the gate reports gpc (${state})`);
      await context.close();
    }

    // 6 noscript
    { const { context, page, rec } = await fresh(browser, { js: false });
      for (const p of PAGES) await visit(page, p);
      const hosts = hostsIn(rec);
      matrix.states.noscript = { hosts };
      ok(hosts.length === 0, `noscript: zero analytics requests (${hosts.join(', ') || 'none'})`);
      await context.close(); }

    // 7 the /start intake form after accept: the lead payload carries no analytics id, no analytics hit carries what
    //   was typed, and the lead_submit event's page_location carries no query string (the page is opened WITH one).
    { const { context, page, rec } = await fresh(browser);
      await visit(page, '/start?utm_source=zq-matrix&ref=zq-query'); await choose(page, 'accept', rec);
      await page.fill('input[name="fullName"]', SENTINEL.name);
      await page.fill('input[name="company"]', SENTINEL.company);
      await page.fill('input[name="email"]', SENTINEL.email);
      await page.fill('input[name="phone"]', SENTINEL.phone);
      await page.fill('textarea[name="automate"], input[name="automate"]', 'zq sentinel automate text');
      const privacyHref = await page.locator('form a[href="/privacy"]').first().getAttribute('href').catch(() => null);
      await page.click('form button[type="submit"]');
      await page.waitForTimeout(4000);
      const saved = rec.assess[0];
      const keys = saved ? JSON.stringify(Object.keys(saved.json)) : '';
      const typed = [...Object.values(SENTINEL), 'zq sentinel automate text'];
      const enc = (s) => [s, encodeURIComponent(s), encodeURIComponent(s).replace(/%20/g, '+')];
      const leaks = rec.hits.filter((h) => typed.some((v) => enc(v).some((e) => (h.url + h.body).includes(e))));
      const queryLeaks = rec.hits.filter((h) => /zq-matrix|zq-query/.test(h.url + h.body));
      const gaEvents = [...new Set(rec.hits.flatMap((h) => [...(h.url + '\n' + h.body).matchAll(/(?:^|[?&\n])en=([^&\n]+)/g)].map((m) => decodeURIComponent(m[1]))))].sort();
      matrix.states.start_form_after_accept = {
        lead_posts: rec.assess.length, lead_keys: keys, analytics_key_hits: (keys.match(ANALYTICS_KEYS) || []).filter(Boolean),
        analytics_hosts: hostsIn(rec, 'after'), analytics_requests: rec.hits.length, ga4_event_names: gaEvents,
        typed_values_in_analytics_requests: leaks.map((h) => h.host + ' ' + h.url.slice(0, 160)),
        query_string_in_analytics_requests: queryLeaks.map((h) => h.host + ' ' + h.url.slice(0, 200)), privacy_label_href: privacyHref,
      };
      ok(rec.assess.length === 1, 'form: exactly one POST /api/lead (answered by a fixture, never delivered)');
      ok(saved && !ANALYTICS_KEYS.test(keys) && !/_ga|gclid|client_id|li_fat_id/.test(saved.raw), `form: the lead payload carries no analytics identifier (keys ${keys})`);
      ok(rec.hits.length > 0, 'form: analytics ran on this page (so the leak checks below are not vacuous)');
      ok(gaEvents.includes('page_view'), `form: GA4 events observed (${gaEvents.join(', ')})`);
      ok(leaks.length === 0, `form: no analytics request contains anything typed into the form (${leaks.length})`);
      ok(queryLeaks.length === 0, `form: no analytics request carries the page's query string (${queryLeaks.length})`);
      ok(privacyHref === '/privacy', `form: the form's privacy link points at /privacy (${privacyHref})`);
      await context.close(); }

    // 7b /pitch is rendered as it is: no bar there, and with no choice made nothing is sent from it
    { const { context, page, rec } = await fresh(browser);
      await visit(page, '/pitch');
      const bar = await barCount(page); const hosts = hostsIn(rec);
      const state = await page.evaluate(() => (window.SiteConsent ? String(window.SiteConsent.state()) : 'no-gate'));
      matrix.states.pitch_initial = { hosts, bar_shown: bar > 0, gate_state: state };
      ok(hosts.length === 0, `/pitch: zero analytics requests with no choice (${hosts.join(', ') || 'none'})`);
      ok(bar === 0, '/pitch: no consent bar is mounted (the page renders as it is)');
      await context.close(); }

    // 8 /privacy renders, and every Privacy link on the main pages resolves to it
    { const { context, page } = await fresh(browser);
      const r = await page.goto(ORIGIN + '/privacy', { waitUntil: 'load' });
      const h1 = (await page.locator('h1').first().textContent().catch(() => '')) || '';
      const links = {};
      for (const p of [...PAGES, '/privacy', '/sms-terms']) {
        await page.goto(ORIGIN + p, { waitUntil: 'load' });
        links[p] = await page.evaluate(() => [...document.querySelectorAll('a')].filter((a) => /privacy/i.test(a.textContent) && !/trust/i.test(a.textContent)).map((a) => `${a.textContent.trim()} -> ${new URL(a.href).pathname}`));
      }
      const bad = Object.entries(links).flatMap(([p, ls]) => ls.filter((l) => !/-> \/privacy$/.test(l)).map((l) => `${p}: ${l}`));
      matrix.privacy_links = { privacy_links: links, links_not_to_privacy: bad };
      const body = (await (await page.goto(ORIGIN + '/privacy', { waitUntil: 'load' })).text()) || '';
      const text = body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
      const must = ['Google Analytics', 'Vercel Web Analytics', 'Global Privacy Control', 'mark@dominusfoundry.com', 'A phone number alone is never permission to text you'];
      const mustNot = ['Google Ads', 'By using our website', '\\bIris\\b', '\\$[0-9]'];
      const missing = must.filter((m) => !text.includes(m));
      const present = mustNot.filter((m) => new RegExp(m).test(text));
      matrix.states.privacy_page = { status: r && r.status(), h1: h1.trim(), required_missing: missing, banned_present: present };
      ok(r && r.status() === 200 && /Privacy/i.test(h1), `/privacy renders (status ${r && r.status()}, h1 "${h1.trim()}")`);
      ok(missing.length === 0, `/privacy states every required item (missing: ${missing.join('; ') || 'none'})`);
      ok(present.length === 0, `/privacy carries none of the banned/false items (present: ${present.join('; ') || 'none'})`);
      ok(links['/privacy'].length >= 0 && Object.entries(links).filter(([p]) => p !== '/privacy').some(([, ls]) => ls.length > 0), 'at least one checked page links to the privacy page');
      ok(bad.length === 0, `every Privacy link resolves to /privacy (${bad.join('; ') || 'all'})`);
      await context.close(); }
  } finally {
    await browser.close();
  }
  matrix.checks = results; matrix.failures = failures;
  if (OUT) writeFileSync(OUT, JSON.stringify(matrix, null, 2) + '\n');
  console.log(`${LABEL}: ${results.length - failures} of ${results.length} checks passed`);
  process.exit(failures ? 1 : 0);
}
main().catch((e) => { console.error('  FAIL harness error:', e && e.stack || e); process.exit(2); });
