/**
 * Consent tracking matrix (compliance P1-1b, Mark 2026-10-12; v2 2026-10-12 for anvil reviews 1h-R1 F1/F2,
 * 1c-R1 F2/F4, 1c-R2 F1/F4). Reusable on any site that loads public/consent/consent.js: point CONSENT_ORIGIN at a
 * running build.
 *
 *   CONSENT_ORIGIN=http://localhost:4472 CONSENT_OUT=matrix.json node tests/consent/tracking-matrix.mjs
 *
 * Every state runs in a FRESH browser context (no shared storage). EVERY request that is not an ordinary
 * same-origin request is written to that state's ledger (phase, kind, host, origin, method, URL, body, what was done
 * with it), including the ones that are aborted, and every ledger is kept in the output.
 * ⛔ Nothing about a visitor leaves this machine: analytics collection endpoints are answered in the browser with an
 * empty 204 (recorded, never delivered), every same-origin write is answered with a fixture, and every other
 * off-origin request is aborted. The Google (gtag.js for CONSENT_GA_ID), Vercel and LinkedIn loaders are served from
 * tests/consent/fixtures (cached real vendor code, pinned in SHA256SUMS, so their real collectors run with no
 * network); NOTHING is fetched live (anvil gate-v2 R1 F2). A gtag.js for any other id has no fixture and is answered
 * with an empty 204, so its checks fail rather than pass. CONSENT_GA_FIXTURE overrides the gtag fixture file.
 * CONSENT_BLOCK_LOADERS=1 aborts every loader instead; the checks that need an executed loader are then recorded
 * NOT_MEASURED, never passed.
 *
 * Classes (anvil 1h-R1 F2): `/_vercel/insights/*` is first-party ONLY on this page's own origin; the same path on any
 * other origin is an unknown host. An unknown off-origin host fails the run in EVERY state and phase.
 * CONSENT_SELFTEST=<mutant> injects one synthetic request (or overlay) so tests/consent/harness-selftest.mjs can prove
 * the run then fails. Exit 1 on any failed assertion.
 *
 * dominusfoundry.com port (gate v2 sync, 2026-10-13), copied from hiresabina 02ab7f0 and adapted ONLY in:
 *   - defaults: GA id G-9J4GY8YZ6G, storage key df-consent (CONSENT_STORAGE_KEY), this site's 37 HTML routes, seed
 *     routes, allowed host (locatefaith.com), referrer targets (no static assessment page here);
 *   - vendor loaders: no LinkedIn tag on this site (asserted absent); the site's own Google container
 *     (fixtures/gtag-js-G-9J4GY8YZ6G.js) carries a linked Google Ads destination AW-17706960854, so the accept state
 *     asserts real Ads collection after Accept, and every collection request is checked for a covered transport
 *     (fetch / xhr / beacon / image; never a script or an iframe) — sibling-notes S3;
 *   - the form state is /start (this site's lead form), not /evaluate; the privacy-page checks are this site's notice;
 *   - GA4 collection is also recognised at analytics.google.com/g/collect (this site's container uses it);
 *   - /pitch renders without the bar (another session owns it) and is out of the layout routes; its own state checks
 *     zero trackers and no bar;
 *   - section 12 (v2 sync review F1): the nine Foundry-shell routes must carry a visible, focusable footer link to
 *     /privacy before a choice, after a stored Accept, after a stored Reject and under GPC, and following it must reach
 *     the notice's choice/withdraw control.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { vendorHost, VERCEL_PATH } from './vendor-hosts.mjs';

const ORIGIN = new URL(process.env.CONSENT_ORIGIN || 'http://localhost:4472').origin;
const OUT = process.env.CONSENT_OUT || '';
const LABEL = process.env.CONSENT_LABEL || 'candidate';
const GA_ID = process.env.CONSENT_GA_ID || 'G-9J4GY8YZ6G';
const KEY = process.env.CONSENT_STORAGE_KEY || 'df-consent';
const ADS_ID = process.env.CONSENT_ADS_ID || 'AW-17706960854';
const PAGES = (process.env.CONSENT_PAGES || '/,/sabina,/start,/systems,/blog,/privacy').split(',');
// Every HTML route a visitor can load on dominusfoundry.com: the page routes of the build (API routes, sitemap and
// _not-found excluded), 37. /contact redirects to /start. /press/spw is excluded, as hiresabina excludes /login: it is
// a 302 to an outside article, so the visitor leaves this site and the requests after it are that site's.
const ALL_ROUTES = (process.env.CONSENT_ALL_ROUTES || '/,/about,/blog,/blog/between-human-and-ai,/blog/operations-intelligence-for-small-teams,/blog/synthetic-intelligence-mentis,/blog/the-case-for-constitutional-synthetic-intelligence,/careers,/company,/contact,/get-started,/governance,/huali-order-info,/learn,/learn/platform/ai-software-company-for-construction-and-trades,/learn/platform/ai-software-for-construction-and-trades,/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples,/learn/platform/forge-the-ai-operating-system-for-commercial-contractors,/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry,/legal/metis-qbo-disconnect,/legal/metis-qbo-eula,/legal/metis-qbo-privacy,/mentis,/pitch,/press,/pricing,/privacy,/qb-migration,/sabina,/sms-terms,/start,/systems,/systems/intake,/systems/ops,/systems/revenue,/technology,/thanks').split(',');
const ASSESSMENT_AND_HOME = (process.env.CONSENT_SEED_ROUTES || '/,/start,/privacy').split(',');
// privatePaths here is ^/(api|chat|login|graph|command|transcribe); /chat is not a page on this site (it renders the
// not-found page inside the root layout, gate included), which is enough to test the private-path rule.
const PRIVATE_ROUTES = (process.env.CONSENT_PRIVATE_ROUTES || '/chat').split(',');
// /pitch is rendered without the bar (ConsentBar NO_BAR, Mark 2026-10-12), so it is not a layout route.
const LAYOUT_ROUTES = (process.env.CONSENT_LAYOUT_ROUTES || ALL_ROUTES.filter((r) => r !== '/pitch').join(',')).split(',');
// The routes that render the Foundry shell's own footer instead of SiteFooter (components/AppShell.tsx FOUNDRY_ROUTES).
const FOUNDRY_ROUTES = (process.env.CONSENT_FOUNDRY_ROUTES || '/,/sabina,/governance,/technology,/company,/press,/blog,/pricing,/pitch').split(',');
const SKIP = new Set((process.env.CONSENT_SKIP || '').split(',').filter(Boolean)); // e.g. form (another site has no /evaluate)
// Off-origin hosts a page may legitimately ask for that are NOT analytics. Still aborted and still in the ledger; just
// not "unknown". dominusfoundry's, measured 2026-10-12: only the LocateFaith verified badge (footer image).
const ALLOWED_HOSTS = new Set((process.env.CONSENT_ALLOWED_HOSTS ?? 'locatefaith.com').split(',').filter(Boolean));
const SENTINEL = { name: 'Zq Sentinel Person', company: 'Zq Sentinel Roofing Co', email: 'zq-sentinel@example.invalid', phone: '5055550199', website: 'zq-sentinel.example' };
const ANALYTICS_KEYS = /(^|[^a-z])(_ga|_gid|gclid|client_id|cid|tid|_gl|li_fat_id|fbclid|lintrk)([^a-z]|$)/i;
// Vercel's loader stays silent in an automated browser (navigator.webdriver or "Headless" in the UA); every context
// presents as an ordinary Chrome so its real collection request is produced and inspected.
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36';

// Analytics and advertising hosts, including Google's collection aliases on www.google.com (/g/collect,
// /measurement/conversion, /pagead), DoubleClick, Google Ads and Vercel's script/collector hosts (anvil 1c-R1 F4).
// The same normalised family classification the gate uses (tests/consent/vendor-hosts.mjs mirrors consent.js rule 8):
// regional google.<cc>, trailing-dot, mixed-case, port and IDNA spellings are all trackers.
const isTrackerHost = (host) => vendorHost(host);
const BLOCK_LOADERS = process.env.CONSENT_BLOCK_LOADERS === '1';
const fixture = (f) => readFileSync(new URL(`./fixtures/${f}`, import.meta.url), 'utf8');
// The real gtag.js container for this site's GA id, cached once (fixtures/README.md). No live loader exception.
const GA_LOADER = (() => { try { return process.env.CONSENT_GA_FIXTURE ? readFileSync(process.env.CONSENT_GA_FIXTURE, 'utf8') : fixture(`gtag-js-${GA_ID}.js`); } catch (e) { return undefined; } })();
const gaLoaderFor = (u) => (u.origin + u.pathname === 'https://www.googletagmanager.com/gtag/js' && u.searchParams.get('id') === GA_ID ? GA_LOADER : undefined);
const CACHED_OFF_ORIGIN = {
  'https://snap.licdn.com/li.lms-analytics/insight.min.js': fixture('linkedin-insight.min.js'),
  'https://snap.licdn.com/li.lms-analytics/insight.beta.min.js': fixture('linkedin-insight.beta.min.js'),
  'https://snap.licdn.com/li.lms-analytics/insight.old.min.js': fixture('linkedin-insight.old.min.js'),
};
const VERCEL_LOADER = fixture('vercel-insights-script.js');

// A second origin the harness itself serves, so a visitor can ARRIVE by a real link with a query-bearing referrer
// (anvil 1h-R1 F1). It answers with Referrer-Policy: unsafe-url so the browser hands the full URL over.
const REF_ORIGIN = 'http://consent-referrer.test';
const REF_SECRET = 'zq-ref-secret';
const PAGE_SECRET = 'zq-page-secret';
const FRAG_SECRET = 'zq-frag-secret';
// A gate-only page on this origin that loads Vercel through consent.js itself (vercel: true), the mode the sibling
// sites use; this site loads Vercel through the React <Analytics /> component instead. Both modes are tested.
const STATIC_FIXTURE = '/__consent-fixture/static';
const staticFixtureHtml = () => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Consent gate fixture</title>
<script>window.CONSENT_CONFIG=${JSON.stringify({ storageKey: KEY, privacyHref: '/privacy', ga4: GA_ID, vercel: true, privatePaths: '^/(api|chat)(/|$)' })};</script>
<script src="/consent/consent.js"></script></head><body><main><h1>Consent gate fixture</h1><p><a href="/privacy">Privacy</a></p></main></body></html>`;

const SELFTEST = process.env.CONSENT_SELFTEST || '';
const MUTANTS = {
  'unknown-after-accept': { on: 'accept', url: 'https://review-unknown.invalid/probe-after-accept' },
  'vercel-path-after-accept': { on: 'accept', url: 'https://review-unknown.invalid/_vercel/insights/view' },
  'unknown-after-withdraw': { on: 'withdraw', url: 'https://review-unknown.invalid/probe-after-withdraw' },
  'unknown-before-choice': { on: 'load', url: 'https://review-unknown.invalid/probe-before-choice' },
  'shadow-overlap': { on: 'overlay' },
};
if (SELFTEST && !MUTANTS[SELFTEST]) { console.error(`unknown CONSENT_SELFTEST ${SELFTEST}`); process.exit(2); }

function classify(u) {
  if (u.origin === ORIGIN) return VERCEL_PATH.test(u.pathname) ? { kind: 'tracker', host: 'vercel-insights(same-origin)' } : { kind: 'first-party', host: u.host };
  if (u.origin === REF_ORIGIN) return { kind: 'fixture', host: u.host };
  if (isTrackerHost(u.hostname)) return { kind: 'tracker', host: u.hostname };
  if (ALLOWED_HOSTS.has(u.hostname)) return { kind: 'allowed', host: u.hostname };
  return { kind: 'unknown', host: u.hostname || u.protocol };
}

let failures = 0; const results = [];
function ok(cond, label) { results.push({ ok: !!cond, label }); if (cond) console.log(`  ok   ${label}`); else { failures += 1; console.error(`  FAIL ${label}`); } }
function notMeasured(label) { results.push({ ok: null, label: 'NOT_MEASURED ' + label }); console.log(`  N/M  ${label}`); }
const needsLoader = (cond, label) => (BLOCK_LOADERS ? notMeasured(label) : ok(cond, label));

async function fresh(browser, opts = {}) {
  const { gpcSignal = false, gpcHeader = false, js = true, seedCookie = null, seedStorage = null, viewport = null } = opts;
  const context = await browser.newContext({
    javaScriptEnabled: js, userAgent: UA, serviceWorkers: 'block',
    ...(viewport ? { viewport } : {}), extraHTTPHeaders: gpcHeader ? { 'Sec-GPC': '1' } : {},
  });
  await context.addInitScript(() => { Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false, configurable: true }); });
  if (seedCookie) await context.addCookies([{ name: KEY, value: seedCookie, url: ORIGIN }]);
  if (seedStorage) await context.addInitScript(([k, v]) => { try { if (!localStorage.getItem(k)) localStorage.setItem(k, v); } catch (e) { /* none */ } }, [KEY, seedStorage]);
  if (gpcSignal) await context.addInitScript(() => { Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', { get: () => true, configurable: true }); });
  const m = MUTANTS[SELFTEST];
  if (m && m.url) {
    await context.addInitScript((mut) => {
      const fire = () => { if (window.__consentMutantFired) return; window.__consentMutantFired = 1; fetch(mut.url, { mode: 'no-cors' }).catch(() => {}); };
      if (mut.on === 'load') { fire(); return; }
      addEventListener('siteconsent', (e) => {
        try {
          if (e.detail === 'accept') sessionStorage.setItem('consent-mutant-accepted', '1');
          if (mut.on === 'accept' && e.detail === 'accept') fire();
          if (mut.on === 'withdraw' && e.detail === 'reject' && sessionStorage.getItem('consent-mutant-accepted') === '1') fire();
        } catch (x) { /* none */ }
      });
    }, m);
  }
  if (m && m.on === 'overlay') {
    // A fixed control inside an OPEN shadow root, UNDER the bar (z-index 1 < the bar's 50) where the bar renders: the
    // shape of the chat launcher anvil 1c-R2 F1 found covered, invisible to document.querySelectorAll.
    // Only on this site's own pages: on the referring origin's page it would cover the link the arrival states click.
    await context.addInitScript((origin) => {
      if (location.origin !== origin) return;
      addEventListener('DOMContentLoaded', () => {
        const host = document.createElement('div'); host.id = 'consent-overlay-mutant';
        const root = host.attachShadow({ mode: 'open' });
        root.innerHTML = '<button type="button" style="position:fixed;top:8px;left:8px;width:120px;height:32px;z-index:1">mutant</button>';
        document.documentElement.appendChild(host);
      });
    }, ORIGIN);
  }
  const rec = { phase: 'before', ledger: [], navigations: [], assess: [], pageErrors: [] };
  await context.route('**/*', async (route) => {
    const q = route.request(); const u = new URL(q.url());
    const c = classify(u);
    if (c.kind === 'first-party') {
      if (q.isNavigationRequest()) rec.navigations.push({ phase: rec.phase, url: q.url(), referer: (await q.allHeaders())['referer'] || '' });
      if (u.pathname === STATIC_FIXTURE) return route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: staticFixtureHtml() });
      if (q.method() === 'GET' || q.method() === 'HEAD') return route.continue();
      if (u.pathname === '/api/lead') {
        rec.assess.push({ raw: q.postData() || '', json: q.postDataJSON() });
        return route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
      }
      if (u.pathname === '/api/assess') {
        rec.assess.push({ raw: q.postData() || '', json: q.postDataJSON() });
        return route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ ok: true, id: 'matrix-fixture', reached_human: true, interview_grant: 'matrix-grant-' + 'x'.repeat(48) }) });
      }
      if (u.pathname === '/api/evaluate/site') return route.fulfill({ status: 202, contentType: 'application/json', body: '{"ok":true,"claim":"queued"}' });
      if (u.pathname.startsWith('/api/book-with-mark/')) return route.fulfill({ status: 503, contentType: 'application/json', body: '{"ok":false}' });
      return route.fulfill({ status: 204, body: '' });
    }
    const entry = { phase: rec.phase, kind: c.kind, host: c.host, origin: u.origin, method: q.method(), type: q.resourceType(), url: q.url(), body: q.postData() || '', action: '' };
    rec.ledger.push(entry);
    if (c.kind === 'fixture') {
      entry.action = 'fixture';
      return route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', headers: { 'referrer-policy': 'unsafe-url' },
        body: `<!doctype html><title>source</title><a id="consent-visit" href="${ORIGIN}${rec.target || '/privacy'}">Visit</a>` });
    }
    if (c.kind === 'tracker') {
      const cached = c.host === 'vercel-insights(same-origin)' && u.pathname === '/_vercel/insights/script.js' ? VERCEL_LOADER : (CACHED_OFF_ORIGIN[u.origin + u.pathname] ?? gaLoaderFor(u));
      if (cached !== undefined) { entry.action = BLOCK_LOADERS ? 'aborted-loader' : 'cached-loader'; return BLOCK_LOADERS ? route.abort() : route.fulfill({ status: 200, contentType: 'text/javascript', body: cached }); }
      entry.action = 'answered-204';
      return route.fulfill({ status: 204, body: '' });
    }
    entry.action = 'aborted';
    return route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', (e) => rec.pageErrors.push(String(e.message || e).slice(0, 200)));
  return { context, page, rec };
}
async function visit(page, path) { await page.goto(ORIGIN + path, { waitUntil: 'load' }); await page.waitForTimeout(2500); }
const trackers = (rec, phase) => rec.ledger.filter((h) => h.kind === 'tracker' && (!phase || h.phase === phase));
const hostsIn = (rec, phase) => [...new Set(trackers(rec, phase).map((h) => h.host))].sort();
const barCount = (page) => page.locator('[data-consent-bar]').count();
// Google Ads collection: any request naming the linked Ads id, or one to an Ads-only collector host/path.
const isAds = (h) => h.kind === 'tracker' && (h.url.includes(ADS_ID) || /(^|\.)(googleadservices\.com|googlesyndication\.com)$/.test(h.host) || (/doubleclick\.net$/.test(h.host) && !/^stats\.g\./.test(h.host)) || (/(^|\.)google\.[a-z.]+$/.test(h.host) && /^\/(ccm|rmkt|pagead|ads|measurement)\//.test(new URL(h.url).pathname)));
const adsIn = (rec, phase) => rec.ledger.filter((h) => isAds(h) && (!phase || h.phase === phase));
// The transports consent.js's guard wraps (rule 8): fetch, XMLHttpRequest, sendBeacon (Playwright type "ping") and
// image src. A collector using a <script> or <iframe> would escape the guard (sibling-notes S3 step 4).
const COVERED = new Set(['fetch', 'xhr', 'ping', 'image']);
// Marks every later request with the new phase AT the click, so a hit fired while waiting is not miscounted.
async function choose(page, choice, rec, phase = 'after') {
  const btn = page.locator(`[data-consent-bar] [data-consent="${choice}"]`);
  if (rec) rec.phase = phase;
  if (await btn.count() === 0) return false;
  await btn.click(); await page.waitForTimeout(3000); return true;
}
// Every state ends here: the ledger is kept, and an unknown off-origin host fails the state whatever the phase.
function finish(matrix, name, rec, summary) {
  const unknown = rec.ledger.filter((h) => h.kind === 'unknown');
  matrix.states[name] = { ...summary, ads_requests: adsIn(rec).length, unknown_off_origin: unknown.map((h) => `${h.phase} ${h.method} ${h.url}`), page_errors: rec.pageErrors, ledger: rec.ledger };
  ok(unknown.length === 0, `${name}: zero requests to unknown off-origin hosts in any phase (${unknown.map((h) => h.phase + ' ' + h.url).join(', ') || 'none'})`);
}

// Every interactive control on the page, INCLUDING those inside open shadow roots (anvil 1c-R2 F1), that the bar
// covers at a point where it is on top; and whether the bar's own buttons are themselves on top at their centres.
async function overlap(page) {
  return page.evaluate(() => {
    const bar = document.querySelector('[data-consent-bar]');
    if (!bar) return { bar: null };
    const SEL = 'a[href],button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"]),[role="button"],[role="link"]';
    const controls = []; let shadowRoots = 0;
    const walk = (root) => { root.querySelectorAll(SEL).forEach((el) => controls.push(el)); root.querySelectorAll('*').forEach((el) => { if (el.shadowRoot) { shadowRoots += 1; walk(el.shadowRoot); } }); };
    walk(document);
    const deepAt = (x, y) => { let el = document.elementFromPoint(x, y); while (el && el.shadowRoot) { const inner = el.shadowRoot.elementFromPoint(x, y); if (!inner || inner === el) break; el = inner; } return el; };
    const inBar = (el) => { for (let n = el; n; n = n.parentNode || n.host) if (n === bar) return true; return false; };
    const name = (el) => `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''} "${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 40)}"${el.getRootNode() !== document ? ' (shadow)' : ''}`;
    const br = bar.getBoundingClientRect();
    const covered = [];
    for (const el of controls) {
      if (inBar(el)) continue;
      const r = el.getBoundingClientRect(); const st = getComputedStyle(el);
      if (r.width < 1 || r.height < 1 || st.visibility === 'hidden' || st.display === 'none') continue;
      const ix = Math.max(r.left, br.left), iy = Math.max(r.top, br.top), ax = Math.min(r.right, br.right), ay = Math.min(r.bottom, br.bottom);
      if (ax - ix < 1 || ay - iy < 1) continue;
      const pts = [[(ix + ax) / 2, (iy + ay) / 2], [r.left + r.width / 2, r.top + r.height / 2]];
      if (pts.some(([x, y]) => x >= 0 && y >= 0 && x < innerWidth && y < innerHeight && inBar(deepAt(x, y) || document.body))) covered.push(name(el));
    }
    const obscured = [...bar.querySelectorAll('button,a')].filter((b) => {
      const r = b.getBoundingClientRect(); const x = r.left + r.width / 2, y = r.top + r.height / 2;
      if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight) return false; // scrolled away: not a cover
      const top = deepAt(x, y); return !(top === b || b.contains(top));
    }).map(name);
    return { bar: { top: br.top, bottom: br.bottom, left: br.left, right: br.right }, controls: controls.length, shadowRoots, covered, obscured, overflowX: document.documentElement.scrollWidth - innerWidth };
  });
}

async function main() {
  const browser = await chromium.launch();
  const matrix = { label: LABEL, origin: ORIGIN, selftest: SELFTEST || null, block_loaders: BLOCK_LOADERS, measured_at: new Date().toISOString(), pages: PAGES, states: {} };
  try {
    // 1 initial: no choice made
    { const { context, page, rec } = await fresh(browser);
      let bar = null;
      for (const p of ALL_ROUTES) { await visit(page, p); if (bar === null) bar = await barCount(page); }
      const hosts = hostsIn(rec);
      ok(hosts.length === 0, `initial: zero analytics/advertising requests before any choice, ${ALL_ROUTES.length} routes (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0, `initial: zero Google Ads requests on ${ALL_ROUTES.length} routes (${adsIn(rec).length})`);
      ok(bar > 0, 'initial: the consent bar is shown');
      finish(matrix, 'initial', rec, { hosts, bar_shown: bar > 0 });
      await context.close(); }

    // 2 reject
    { const { context, page, rec } = await fresh(browser);
      await visit(page, PAGES[0]); const clicked = await choose(page, 'reject', rec);
      for (const p of PAGES) await visit(page, p);
      const hosts = hostsIn(rec); const barAfter = await barCount(page);
      ok(clicked, 'reject: "No analytics" button exists and was pressed');
      ok(hosts.length === 0, `reject: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0, `reject: zero Google Ads requests (${adsIn(rec).length})`);
      ok(barAfter === 0, 'reject: the bar does not come back on later pages');
      finish(matrix, 'reject', rec, { hosts, choice_made: clicked, bar_after: barAfter });
      await context.close(); }

    // 3 accept
    { const { context, page, rec } = await fresh(browser);
      await visit(page, PAGES[0]); const before = hostsIn(rec, 'before');
      const clicked = await choose(page, 'accept', rec);
      for (const p of PAGES) await visit(page, p);
      const after = hostsIn(rec, 'after');
      ok(clicked && before.length === 0, `accept: nothing before the click (${before.join(', ') || 'none'})`);
      ok(after.includes('www.googletagmanager.com'), 'accept: GA4 loader requested after accept');
      needsLoader(after.some((h) => /google-analytics\.com$/.test(h)), 'accept: a GA4 collection request is made after accept (answered locally, never delivered)');
      ok(!after.some((h) => /licdn\.com$|linkedin\.com$/.test(h)), `accept: no LinkedIn request (this site has no LinkedIn tag) (${after.join(', ')})`);
      // Linked Google Ads (sibling-notes S3): real Ads collection after Accept, from the committed container.
      const adsAfter = adsIn(rec, 'after'); const adsBefore = adsIn(rec, 'before');
      ok(adsBefore.length === 0, `accept: zero Google Ads requests before the click (${adsBefore.length})`);
      needsLoader(adsAfter.length > 0, `accept: the committed container sends actual Google Ads collection requests after Accept, answered locally (${adsAfter.length}: ${[...new Set(adsAfter.map((h) => { const x = new URL(h.url); return h.method + ' ' + x.host + x.pathname; }))].join(' | ') || 'none'})`);
      const collection = trackers(rec, 'after').filter((h) => h.action !== 'cached-loader');
      const uncovered = collection.filter((h) => !COVERED.has(h.type));
      needsLoader(collection.length > 0 && uncovered.length === 0, `accept: every analytics/Ads collection request uses a transport the guard wraps (fetch/xhr/beacon/image) (${collection.length} requests; types ${[...new Set(collection.map((h) => h.type))].join(', ')}; uncovered: ${uncovered.map((h) => h.type + ' ' + h.url.slice(0, 80)).join(', ') || 'none'})`);
      const scriptsAfter = trackers(rec, 'after').filter((h) => (h.type === 'script' || h.type === 'document') && h.action !== 'cached-loader');
      ok(scriptsAfter.length === 0, `accept: no script or iframe request to a vendor beyond the committed loaders (no unfixtured destination loader) (${scriptsAfter.map((h) => h.type + ' ' + h.url.slice(0, 100)).join(', ') || 'none'})`);
      ok(after.includes('vercel-insights(same-origin)'), 'accept: Vercel Web Analytics requested after accept');
      needsLoader(trackers(rec, 'after').some((h) => h.url === ORIGIN + '/_vercel/insights/view' && h.method === 'POST'), 'accept: the real Vercel loader posts a page view to /_vercel/insights/view (answered locally)');
      const leaky = trackers(rec).filter((h) => /google-analytics/.test(h.host) && /[?&]dl=[^&]*(%3F|%23)/.test(h.url));
      ok(leaky.length === 0, 'accept: no GA4 hit carries a query string or fragment in its page location');
      needsLoader(rec.ledger.some((h) => h.url.startsWith('https://www.googletagmanager.com/gtag/js') && h.action === 'cached-loader'), `accept: the GA4 loader is the committed fixture for ${GA_ID}, not a live fetch`);
      // Linked-Ads observation (anvil gate-v2 R1 F2): every Google endpoint the real container asked for, by host+path.
      const google = [...new Set(trackers(rec).filter((h) => /google|doubleclick/.test(h.host)).map((h) => { const u = new URL(h.url); return `${h.method} ${u.host}${u.pathname} [${h.action}]`; }))];
      console.log(`  info accept: Google endpoints requested after accept: ${google.join(' | ') || 'none'}`);
      finish(matrix, 'accept', rec, { hosts_before_choice: before, hosts_after_accept: after, choice_made: clicked, google_endpoints: google,
        ads_after_accept: adsIn(rec, 'after').map((h) => `${h.method} ${h.type} ${h.url.slice(0, 200)}`), transports_after_accept: [...new Set(trackers(rec, 'after').map((h) => `${h.type}:${h.action}`))] });
      await context.close(); }

    // 4 withdraw (accept, then "no analytics" on /privacy). Observation starts BEFORE the click (anvil 1h-R1 F2).
    { const { context, page, rec } = await fresh(browser);
      await visit(page, PAGES[0]); await choose(page, 'accept', rec, 'accepted');
      await visit(page, '/privacy');
      const w = page.locator('[data-consent-withdraw]');
      const has = await w.count() > 0;
      rec.phase = 'withdraw-click';
      if (has) { await Promise.all([page.waitForEvent('load', { timeout: 10000 }).catch(() => {}), w.click()]); await page.waitForTimeout(2500); }
      rec.phase = 'after';
      for (const p of PAGES) await visit(page, p);
      const atClick = hostsIn(rec, 'withdraw-click'); const hosts = hostsIn(rec, 'after');
      const cookies = (await context.cookies()).map((c) => c.name).filter((n) => /^(_ga|_gid|li_|_li)/.test(n));
      ok(has, 'withdraw: /privacy has a withdraw control');
      ok(trackers(rec, 'accepted').length > 0 || BLOCK_LOADERS, `withdraw: control fires, trackers ran before withdrawing (${hostsIn(rec, 'accepted').join(', ') || 'none'})`);
      ok(atClick.length === 0, `withdraw: zero analytics requests from the click through the reload (${atClick.join(', ') || 'none'})`);
      ok(hosts.length === 0, `withdraw: zero analytics requests after withdrawing (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec, 'withdraw-click').length + adsIn(rec, 'after').length === 0, `withdraw: zero Google Ads requests from the click on (${adsIn(rec, 'withdraw-click').length + adsIn(rec, 'after').length}); control: ${adsIn(rec, 'accepted').length} before withdrawing`);
      ok(cookies.length === 0, `withdraw: first-party analytics cookies cleared (${cookies.join(', ') || 'none'})`);
      finish(matrix, 'withdraw', rec, { hosts_at_click: atClick, hosts_after_withdraw: hosts, withdraw_control_found: has, analytics_cookies_left: cookies });
      await context.close(); }

    // 5 GPC: signal, and header, each ALSO with a stored accept that GPC must override
    const nowAccept = () => `1.accept.${Date.now()}`;
    for (const [name, opts] of [['gpc_signal', { gpcSignal: true }], ['gpc_header', { gpcHeader: true }], ['gpc_signal_over_stored_accept', { gpcSignal: true, seedStorage: nowAccept() }], ['gpc_header_over_stored_accept', { gpcHeader: true, seedStorage: nowAccept() }]]) {
      const { context, page, rec } = await fresh(browser, opts);
      let bar = 0;
      for (const p of PAGES) { await visit(page, p); bar += await barCount(page); }
      const hosts = hostsIn(rec);
      const state = await page.evaluate(() => (window.SiteConsent ? window.SiteConsent.state() : 'no-gate'));
      ok(hosts.length === 0, `${name}: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0, `${name}: zero Google Ads requests (${adsIn(rec).length})`);
      ok(bar === 0, `${name}: no consent prompt`);
      ok(state === 'gpc', `${name}: the gate reports gpc (${state})`);
      finish(matrix, name, rec, { hosts, bar_shown: bar > 0, gate_state: state });
      await context.close();
    }

    // 5b anvil r1 F1: GPC with a stored accept, each URL in its OWN fresh context, both storage mechanisms.
    for (const [gname, gopts] of [['header', { gpcHeader: true }], ['signal', { gpcSignal: true }]]) {
      for (const [sname, key] of [['cookie', 'seedCookie'], ['localStorage', 'seedStorage']]) {
        for (const path of ASSESSMENT_AND_HOME) {
          const name = `gpc_${gname}_stored_accept_${sname}_${path}`;
          const { context, page, rec } = await fresh(browser, { ...gopts, [key]: nowAccept() });
          await visit(page, path);
          const hosts = hostsIn(rec);
          const state = await page.evaluate(() => (window.SiteConsent ? window.SiteConsent.state() : 'no-gate'));
          const gpcCookie = (await context.cookies()).some((c) => c.name === 'consent_gpc' && c.value === '1');
          ok(hosts.length === 0 && state === 'gpc', `${name}: zero tracker requests, gate state gpc (${hosts.join(', ') || 'none'}; ${state})`);
          if (gname === 'header') ok(gpcCookie, `${name}: the server set consent_gpc=1 on this document`);
          finish(matrix, name, rec, { hosts, gate_state: state, consent_gpc_cookie: gpcCookie });
          await context.close();
        }
      }
    }

    // 5c forged / wrong-version stored choice is no choice: bar shown, nothing loads
    for (const [sname, key] of [['cookie', 'seedCookie'], ['localStorage', 'seedStorage']]) {
      for (const path of ASSESSMENT_AND_HOME) {
        const name = `forged_version_${sname}_${path}`;
        const { context, page, rec } = await fresh(browser, { [key]: `999.accept.${Date.now()}` });
        await visit(page, path);
        const hosts = hostsIn(rec);
        const state = await page.evaluate(() => (window.SiteConsent ? window.SiteConsent.state() : 'no-gate'));
        const bar = await barCount(page);
        ok(hosts.length === 0 && state === null && bar > 0, `${name}: treated as no choice, bar shown, zero tracker requests (${hosts.join(', ') || 'none'}; ${state})`);
        finish(matrix, name, rec, { hosts, gate_state: state, bar_shown: bar > 0 });
        await context.close();
      }
    }

    // 5d the stored choice lasts 180 days in BOTH stores (gate v2): 181 days old is no choice; 179 still counts.
    const DAY = 864e5;
    for (const [sname, key] of [['cookie', 'seedCookie'], ['localStorage', 'seedStorage']]) {
      for (const days of [179, 181]) {
        const name = `stored_accept_${days}d_${sname}`;
        const { context, page, rec } = await fresh(browser, { [key]: `1.accept.${Date.now() - days * DAY}` });
        await visit(page, '/');
        const hosts = hostsIn(rec);
        const state = await page.evaluate(() => (window.SiteConsent ? window.SiteConsent.state() : 'no-gate'));
        const bar = await barCount(page);
        if (days === 181) ok(hosts.length === 0 && state === null && bar > 0, `${name}: expired, treated as no choice, bar shown, zero tracker requests (${hosts.join(', ') || 'none'}; ${state})`);
        else ok(state === 'accept' && bar === 0 && hosts.includes('www.googletagmanager.com'), `${name}: still a choice, no bar, GA4 loads (${hosts.join(', ') || 'none'}; ${state})`);
        finish(matrix, name, rec, { hosts, gate_state: state, bar_shown: bar > 0 });
        await context.close();
      }
    }

    // 5e private routes load nothing even after a stored accept; control: the same seed on / does load
    for (const path of PRIVATE_ROUTES) {
      const { context, page, rec } = await fresh(browser, { seedCookie: nowAccept(), seedStorage: nowAccept() });
      await visit(page, path);
      const hosts = hostsIn(rec);
      const state = await page.evaluate(() => (window.SiteConsent ? window.SiteConsent.state() : 'no-gate'));
      rec.phase = 'control';
      await visit(page, '/');
      const control = hostsIn(rec, 'control');
      ok(hosts.length === 0 && state === 'accept' && adsIn(rec, 'before').length === 0, `private ${path}: stored accept, zero tracker and Google Ads requests (${hosts.join(', ') || 'none'}; ${state})`);
      ok(control.includes('www.googletagmanager.com'), `private ${path}: control fires, the same seeded browser loads GA4 on / (${control.join(', ') || 'none'})`);
      needsLoader(adsIn(rec, 'control').length > 0, `private ${path}: control fires, the same seeded browser sends Google Ads collection on / (${adsIn(rec, 'control').length})`);
      finish(matrix, `private_route_stored_accept_${path}`, rec, { hosts, gate_state: state, control_on_home: control });
      await context.close();
    }

    // 6 noscript
    { const { context, page, rec } = await fresh(browser, { js: false });
      for (const p of ALL_ROUTES) await visit(page, p);
      const hosts = hostsIn(rec);
      ok(hosts.length === 0 && adsIn(rec).length === 0, `noscript: zero analytics and Google Ads requests, ${ALL_ROUTES.length} routes (${hosts.join(', ') || 'none'})`);
      finish(matrix, 'noscript', rec, { hosts, routes: ALL_ROUTES.length });
      await context.close(); }

    // 7 the /start lead form after accept (this site's form; hiresabina's is /evaluate): the lead payload carries no
    //   analytics id; no recorded off-origin or analytics request carries anything typed, or the page's query string.
    //   The POST is answered by a fixture; nothing is submitted anywhere.
    if (!SKIP.has('form')) { const { context, page, rec } = await fresh(browser);
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
      const enc = (v) => [v, encodeURIComponent(v), encodeURIComponent(v).replace(/%20/g, '+')];
      // Every recorded off-origin attempt, not only the recognised trackers (anvil 1c-R1 F4).
      const leaks = rec.ledger.filter((h) => typed.some((v) => enc(v).some((e) => (h.url + h.body).includes(e))));
      const queryLeaks = rec.ledger.filter((h) => /zq-matrix|zq-query/.test(h.url + h.body));
      const gaEvents = [...new Set(trackers(rec).flatMap((h) => [...(h.url + '\n' + h.body).matchAll(/(?:^|[?&\n])en=([^&\n]+)/g)].map((x) => decodeURIComponent(x[1]))))].sort();
      ok(rec.assess.length === 1, 'form: exactly one POST /api/lead (answered by a fixture, never delivered)');
      ok(saved && !ANALYTICS_KEYS.test(keys) && !/_ga|gclid|client_id|li_fat_id/.test(saved.raw), `form: the lead payload carries no analytics identifier (keys ${keys})`);
      needsLoader(trackers(rec).some((h) => /google-analytics\.com$/.test(h.host)), 'form: a GA4 collection request was made on this page (so the leak checks below are not vacuous)');
      needsLoader(leaks.length === 0, `form: no off-origin or analytics request contains anything typed into the form (${leaks.length})`);
      needsLoader(queryLeaks.length === 0, `form: no off-origin or analytics request carries the page's query string (${queryLeaks.map((h) => h.host).join(', ') || 'none'})`);
      ok(privacyHref === '/privacy', `form: the form's privacy link points at /privacy (${privacyHref})`);
      finish(matrix, 'start_form_after_accept', rec, {
        lead_posts: rec.assess.length, lead_keys: keys, analytics_key_hits: (keys.match(ANALYTICS_KEYS) || []).filter(Boolean),
        analytics_hosts: hostsIn(rec, 'after'), ga4_event_names: gaEvents,
        typed_values_in_off_origin_requests: leaks.map((h) => h.host + ' ' + h.url.slice(0, 160)),
        query_string_in_off_origin_requests: queryLeaks.map((h) => h.host + ' ' + h.url.slice(0, 160)), privacy_label_href: privacyHref,
      });
      await context.close(); }

    // 8 /privacy renders, and every Privacy link on the main pages resolves to it
    { const { context, page, rec } = await fresh(browser);
      const r = await page.goto(ORIGIN + '/privacy', { waitUntil: 'load' });
      const h1 = (await page.locator('h1').first().textContent().catch(() => '')) || '';
      const links = {};
      for (const p of [...PAGES, '/privacy', '/sms-terms']) {
        await page.goto(ORIGIN + p, { waitUntil: 'load' });
        links[p] = await page.evaluate(() => [...document.querySelectorAll('a')].filter((a) => /privacy/i.test(a.textContent) && !/trust/i.test(a.textContent)).map((a) => `${a.textContent.trim()} -> ${new URL(a.href).pathname}`));
      }
      const bad = Object.entries(links).flatMap(([p, ls]) => ls.filter((l) => !/-> \/privacy$/.test(l)).map((l) => `${p}: ${l}`));
      // This site's notice (h1 "Privacy Policy"). The footer of the Foundry-chrome pages (/, /sabina) carries no privacy
      // link (3-0 live baseline item 4, not part of this change), so the link check covers pages that have one.
      ok(r && r.status() === 200 && /Privacy/i.test(h1), `/privacy renders (status ${r && r.status()}, h1 "${h1.trim()}")`);
      ok(Object.values(links).some((ls) => ls.length > 0), 'at least one checked page links to the privacy page');
      ok(bad.length === 0, `every Privacy link resolves to /privacy (${bad.join('; ') || 'all'})`);
      const txt = async (path) => ((await (await page.goto(ORIGIN + path, { waitUntil: 'load' })).text()) || '').replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      const notice = await txt('/privacy');
      const must = ['Google Analytics', 'Google Ads', 'Vercel Web Analytics', 'Global Privacy Control', 'mark@dominusfoundry.com', 'A phone number alone is never permission to text you', 'each is honoured for 180 days from when you chose', 'We do not take opt-ins by phone or by text keyword'];
      const mustNot = ['has no expiry', 'for up to 180 days', 'no advertising tags', 'no advertising or retargeting tags', 'By using our website', 'ElevenLabs', 'elevenlabs-convai'];
      const missing = must.filter((m) => !notice.includes(m)); const present = mustNot.filter((m) => notice.includes(m)) .concat(/\bIris\b/.test(notice) ? ['Iris'] : []).concat(/\$[0-9]/.test(notice) ? ['a price'] : []);
      ok(missing.length === 0, `/privacy states every required item, including the v2 180-day expiry in both stores (missing: ${missing.join('; ') || 'none'})`);
      ok(present.length === 0, `/privacy carries none of the retired or false lines (present: ${present.join('; ') || 'none'})`);
      const sms = await txt('/sms-terms');
      const smsMissing = ['A phone number alone is never permission to text you', 'Dominus Foundry LLC', 'dominusfoundry.com/start', 'STOP', 'HELP'].filter((m) => !sms.includes(m));
      const smsPresent = ['Verbal Consent', 'verbally', 'Text-In', 'replying START', 'opt-in keyword'].filter((m) => sms.includes(m));
      ok(smsMissing.length === 0 && smsPresent.length === 0, `/sms-terms: the one rule, the LLC sender, the /start checkbox, STOP and HELP; no verbal or START opt-in (missing: ${smsMissing.join('; ') || 'none'}; present: ${smsPresent.join('; ') || 'none'})`);
      ok(/A phone number alone is never permission to text you/.test(await txt('/start')), '/start: the form states the one rule next to the SMS box');
      finish(matrix, 'privacy_page', rec, { status: r && r.status(), h1: h1.trim(), privacy_links: links, links_not_to_privacy: bad, notice_missing: missing, notice_present: present, sms_missing: smsMissing, sms_present: smsPresent });
      await context.close(); }

    // 9 anvil 1h-R1 F1: a visitor ARRIVES by a real link from another origin whose Referrer-Policy is unsafe-url, on a
    // page address that itself carries a query and a fragment. After Accept (clicked, or already stored), no vendor
    // may receive the incoming referrer's query, and GA4/Vercel may not receive the page's query or fragment. Both
    // Vercel loader modes: the React <Analytics /> (/privacy) and consent.js's own loader (vercel: true, on the static
    // assessment page and on a generic gate-only fixture page a sibling site can reuse unchanged).
    // This site has no static page that loads the gate synchronously; the gate-only fixture page covers that mode.
    const REF_TARGETS = (process.env.CONSENT_REFERRER_TARGETS || `react:/privacy,gate-fixture:${STATIC_FIXTURE}`).split(',').map((x) => [x.slice(0, x.indexOf(':')), x.slice(x.indexOf(':') + 1)]);
    for (const [mode, target] of REF_TARGETS) {
      for (const arrival of ['click-accept', 'stored-accept']) {
        const name = `referrer_${mode}_${arrival}`;
        const { context, page, rec } = await fresh(browser, arrival === 'stored-accept' ? { seedStorage: nowAccept() } : {});
        rec.target = `${target}?${PAGE_SECRET}=1#${FRAG_SECRET}`;
        await page.goto(`${REF_ORIGIN}/source?${REF_SECRET}=1`);
        rec.phase = 'arrival';
        await Promise.all([page.waitForURL(`${ORIGIN}/**`), page.locator('#consent-visit').click()]);
        await page.waitForLoadState('load');
        const arrived = await page.evaluate(() => ({ href: location.href, gateState: window.SiteConsent ? window.SiteConsent.state() : 'no-gate' }));
        // The instrument: the Referer the BROWSER sent on the arriving navigation (the DOM value may already be narrowed).
        const nav = rec.navigations.find((n) => n.phase === 'arrival');
        const sentReferrer = nav ? nav.referer : '';
        const domReferrer = await page.evaluate(() => document.referrer);
        if (arrival === 'click-accept') { await page.waitForTimeout(1000); await choose(page, 'accept', rec, 'after'); } else { await page.waitForTimeout(3000); rec.phase = 'after'; }
        await page.waitForTimeout(1500);
        const domReferrerAfter = await page.evaluate(() => document.referrer);
        const t = trackers(rec);
        const all = rec.ledger.filter((h) => h.kind !== 'fixture');
        const blob = (h) => { try { return decodeURIComponent(h.url + '\n' + h.body); } catch (e) { return h.url + '\n' + h.body; } };
        const refLeaks = all.filter((h) => blob(h).includes(REF_SECRET));
        const vercelViews = t.filter((h) => h.url === ORIGIN + '/_vercel/insights/view' && h.method === 'POST');
        const vercelBodies = vercelViews.map((h) => { try { return JSON.parse(h.body); } catch (e) { return {}; } });
        // This site's container also collects GA4 at analytics.google.com/g/collect (seen on the gate-only fixture page,
        // which has no Consent Mode defaults); hiresabina's only used *.google-analytics.com.
        const gaHits = t.filter((h) => /(^|\.)google-analytics\.com$|^analytics\.google\.com$/.test(h.host) && /\/g\/collect/.test(h.url));
        const gaDr = gaHits.map((h) => { const u = new URL(h.url); return u.searchParams.get('dr') || (new URLSearchParams(h.body.split('\n')[0] || '')).get('dr') || ''; });
        const pageLeaks = [...gaHits, ...vercelViews].filter((h) => blob(h).includes(PAGE_SECRET) || blob(h).includes(FRAG_SECRET));
        const linkedinCollect = t.filter((h) => /linkedin\.com$/.test(h.host) && /\/collect/.test(h.url));
        const browserReferrer = rec.ledger.find((h) => h.kind === 'fixture');
        ok(arrived.href.includes(PAGE_SECRET), `${name}: arrived by a real link on ${arrived.href.replace(ORIGIN, '')} (gate ${arrived.gateState})`);
        ok(sentReferrer.includes(REF_SECRET), `${name}: control fires, the browser sent a query-bearing Referer on the arriving navigation (${sentReferrer || 'none'})`);
        needsLoader(vercelViews.length > 0, `${name}: the real Vercel loader posted a page view (${vercelViews.length})`);
        needsLoader(vercelBodies.length > 0 && vercelBodies.every((b) => b.r === `${REF_ORIGIN}/source`), `${name}: Vercel's referrer field r is origin + path only (${vercelBodies.map((b) => b.r).join(', ') || 'none'})`);
        needsLoader(gaHits.length > 0 && gaDr.every((d) => d === `${REF_ORIGIN}/source`), `${name}: GA4's dr is origin + path only (${gaDr.join(', ') || 'none'})`);
        ok(refLeaks.length === 0, `${name}: no recorded request carries the incoming referrer's query (${refLeaks.map((h) => h.host).join(', ') || 'none'})`);
        ok(pageLeaks.length === 0, `${name}: no GA4 or Vercel request carries the page's query or fragment (${pageLeaks.map((h) => h.host).join(', ') || 'none'})`);
        finish(matrix, name, rec, {
          arrived: arrived.href, referer_header_sent: sentReferrer, document_referrer_on_arrival: domReferrer, document_referrer_after_accept: domReferrerAfter, fixture_requests: browserReferrer ? 1 : 0,
          vercel_r: vercelBodies.map((b) => b.r), vercel_o: vercelBodies.map((b) => b.o), ga_dr: gaDr,
          // Measured, not asserted: LinkedIn's tag reads location.href itself (page query and fragment included).
          linkedin_collect_carries_page_query: linkedinCollect.some((h) => blob(h).includes(PAGE_SECRET)),
          linkedin_collect_requests: linkedinCollect.length,
        });
        await context.close();
      }
    }

    // 10 the bar covers no control and is not itself covered, including controls inside open shadow roots
    // (anvil 1c-R2 F1), at both widths, at the top and the bottom of every route.
    for (const viewport of [{ width: 390, height: 844 }, { width: 1280, height: 720 }]) {
      const name = `layout_${viewport.width}x${viewport.height}`;
      const { context, page, rec } = await fresh(browser, { viewport });
      const rows = {};
      for (const p of LAYOUT_ROUTES) {
        await visit(page, p);
        for (const where of ['top', 'bottom']) {
          await page.evaluate((w) => window.scrollTo(0, w === 'top' ? 0 : document.documentElement.scrollHeight), where);
          await page.waitForTimeout(400);
          const o = await overlap(page);
          rows[`${p} ${where}`] = o;
          if (!o.bar) { ok(false, `${name} ${p} ${where}: the bar is rendered`); continue; }
          ok(o.covered.length === 0 && o.obscured.length === 0 && o.overflowX <= 0, `${name} ${p} ${where}: bar covers no control and is not covered (${o.controls} controls, ${o.shadowRoots} shadow roots; covered ${o.covered.join(', ') || 'none'}; obscured ${o.obscured.join(', ') || 'none'}; overflowX ${o.overflowX})`);
        }
      }
      finish(matrix, name, rec, { viewport, rows });
      await context.close();
    }
    // 11 dominusfoundry: /pitch renders as it is (no bar) and sends nothing before a choice; the bar names what the
    //    one choice covers (Mark 2026-10-13: Google Analytics, Vercel Web Analytics and cookieless Google Ads).
    { const { context, page, rec } = await fresh(browser);
      await visit(page, '/pitch');
      const pitchBar = await barCount(page); const pitchHosts = hostsIn(rec);
      ok(pitchBar === 0 && pitchHosts.length === 0, `/pitch: no bar mounted and zero tracker requests with no choice (${pitchHosts.join(', ') || 'none'})`);
      rec.phase = 'bar-copy';
      await visit(page, '/privacy');
      const bar = await page.evaluate(() => { const b = document.querySelector('[data-consent-bar]'); return b ? { text: (b.querySelector('p') || b).textContent.trim(), buttons: [...b.querySelectorAll('button')].map((x) => x.textContent.trim()) } : null; });
      ok(bar && /Google Analytics/.test(bar.text) && /Google Ads/.test(bar.text) && /without cookies/.test(bar.text), `bar: names Google Analytics and cookieless Google Ads measurement through gate config ("${bar ? bar.text.slice(0, 170) : 'no bar'}"; buttons ${bar ? bar.buttons.join(' / ') : '-'})`);
      finish(matrix, 'site_pitch_and_bar_copy', rec, { pitch_bar: pitchBar, pitch_hosts: pitchHosts, bar });
      await context.close(); }
    // 12 the Foundry footer carries a persistent, visible, keyboard-focusable link to /privacy on every Foundry-shell
    //    route, whatever the visitor chose (the bar, which also links there, is gone after a choice); following it
    //    reaches the notice's choice/withdraw control.
    for (const [sname, opts] of [['no_choice', {}], ['stored_accept', { seedCookie: nowAccept(), seedStorage: nowAccept() }], ['stored_reject', { seedCookie: `1.reject.${Date.now()}`, seedStorage: `1.reject.${Date.now()}` }], ['gpc', { gpcSignal: true, gpcHeader: true }]]) {
      const name = `footer_privacy_link_${sname}`;
      const { context, page, rec } = await fresh(browser, opts);
      const rows = {};
      for (const p of FOUNDRY_ROUTES) {
        await page.goto(ORIGIN + p, { waitUntil: 'load' }); await page.waitForTimeout(800);
        rows[p] = await page.evaluate(() => {
          const links = [...document.querySelectorAll('footer a[href="/privacy"]')];
          const a = links.find((x) => { const r = x.getBoundingClientRect(); const st = getComputedStyle(x); return r.width > 0 && r.height > 0 && st.visibility !== 'hidden' && st.display !== 'none' && x.tabIndex >= 0; });
          let focusable = false;
          if (a) { a.focus(); focusable = document.activeElement === a; a.blur(); }
          return { footer_links: links.length, visible: !!a, focusable, text: a ? a.textContent.trim() : '', bar: !!document.querySelector('[data-consent-bar]'), state: window.SiteConsent ? window.SiteConsent.state() : 'no-gate' };
        });
      }
      const missing = Object.entries(rows).filter(([, r]) => !(r.visible && r.focusable)).map(([p]) => p);
      ok(missing.length === 0, `${name}: a visible, keyboard-focusable footer link to /privacy on all ${FOUNDRY_ROUTES.length} Foundry routes (missing: ${missing.join(', ') || 'none'})`);
      // Follow it from the home page and reach the choice/withdraw control.
      await page.goto(ORIGIN + '/', { waitUntil: 'load' }); await page.waitForTimeout(800);
      let control = null;
      const link = page.locator('footer a[href="/privacy"]').first();
      if (await link.count()) {
        await Promise.all([page.waitForURL(`${ORIGIN}/privacy`), link.click()]);
        await page.waitForTimeout(1500);
        control = await page.evaluate(() => { const c = document.querySelector('[data-consent-choice]'); return c ? { state: c.getAttribute('data-consent-choice'), buttons: [...c.querySelectorAll('button')].map((b) => b.textContent.trim()) } : null; });
      }
      const wantButtons = sname !== 'gpc';
      ok(control && (wantButtons ? control.buttons.length > 0 : control.state === 'gpc'), `${name}: following the footer link reaches the notice's choice control (${control ? control.state + ' / ' + (control.buttons.join(', ') || 'GPC message, no button') : 'not reached'})`);
      finish(matrix, name, rec, { rows, control });
      await context.close();
    }
  } finally {
    await browser.close();
  }
  matrix.checks = results; matrix.failures = failures;
  const nm = results.filter((r) => r.ok === null).length;
  matrix.not_measured = nm;
  if (OUT) writeFileSync(OUT, JSON.stringify(matrix, null, 2) + '\n');
  console.log(`${LABEL}: ${results.length - failures - nm} of ${results.length - nm} checks passed, ${nm} NOT_MEASURED`);
  process.exit(failures ? 1 : 0);
}
main().catch((e) => { console.error('  FAIL harness error:', e && e.stack || e); process.exit(2); });
