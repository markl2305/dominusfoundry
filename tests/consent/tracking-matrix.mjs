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
 * Round 3 (anvil r1 F4): EVERY off-origin request is recorded in rec.off, including the aborted ones, and the
 * leak checks scan all of them, so a request outside the tracker predicate can no longer pass a zero check. Any
 * off-origin host that is neither a tracker nor in CONSENT_ALLOWED_HOSTS fails the state it appears in.
 * Exit 1 on any failed assertion. CONSENT_EXPECT=red inverts nothing: it only labels the output.
 */
import { writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const ORIGIN = process.env.CONSENT_ORIGIN || 'http://localhost:4472';
const OUT = process.env.CONSENT_OUT || '';
const LABEL = process.env.CONSENT_LABEL || 'candidate';
// One page per route group: the Foundry-chrome pages (/, /sabina), the (site) group (/contact, /start), the
// AppShell pages (/systems) and the blog.
// /privacy is in the set because production loads an ElevenLabs widget there (3-0 live baseline, 2026-10-12).
const PAGES = (process.env.CONSENT_PAGES || '/,/sabina,/contact,/start,/systems,/blog,/privacy').split(',');
const KEY = process.env.CONSENT_KEY || 'df-consent';
const SENTINEL = { name: 'Zq Sentinel Person', company: 'Zq Sentinel Roofing Co', email: 'zq-sentinel@example.invalid', phone: '5055550199', website: 'zq-sentinel.example' };
const ANALYTICS_KEYS = /(^|[^a-z])(_ga|_gid|gclid|client_id|cid|tid|_gl|li_fat_id|fbclid|lintrk)([^a-z]|$)/i;

// Round 2: Google Ads (www.google.com/ccm|rmkt|pagead, googleadservices, googlesyndication, *.doubleclick.net) and
// ElevenLabs (api.*.elevenlabs.io, and the unpkg-served @elevenlabs widget) are in the predicate.
// Round 3 adds va.vercel-scripts.com, www.google.com/g/collect (GA) and www.google.com/measurement/conversion (Ads).
const TRACKER_HOSTS = /(^|\.)(googletagmanager\.com|google-analytics\.com|analytics\.google\.com|doubleclick\.net|licdn\.com|linkedin\.com|googleadservices\.com|googlesyndication\.com|elevenlabs\.io|va\.vercel-scripts\.com)$/;
const GOOGLE_ADS_PATH = /^\/(ccm|rmkt|pagead|ads|measurement)\//;
const GOOGLE_GA_PATH = /^\/g\/collect/;
// Off-origin hosts that are not trackers and are expected on this site, by exact name (round 4, anvil r2 F4):
// the footer's LocateFaith badge image. A subdomain or any other host fails.
const ALLOWED_HOSTS = (process.env.CONSENT_ALLOWED_HOSTS || 'locatefaith.com').split(',').filter(Boolean);
const allowedHost = (h) => ALLOWED_HOSTS.includes(h);
// Self-test canaries (tests/consent/selftest-unknown-host.mjs): a fetch to an unknown host, fired before any choice
// or right after Accept. The run MUST fail when either is set; the self-test checks that it does.
const CANARY = process.env.CONSENT_SELFTEST_CANARY || '';
// Every browser context this run opens, so the unknown-host check covers all of them, in every phase.
const CONTEXTS = [];
const isAds = (h) => /doubleclick\.net$|googleadservices\.com$|googlesyndication\.com$|^www\.google\.com\(ads\)$/.test(h.host) || /[?&]tid=AW-/.test(h.url);
const isEleven = (h) => /elevenlabs/.test(h.host);
const LOADERS = /^https:\/\/(www\.googletagmanager\.com\/gtag\/js|snap\.licdn\.com\/li\.lms-analytics\/insight\.min\.js)/;
const trackerOf = (u) => {
  if (TRACKER_HOSTS.test(u.hostname)) return u.hostname;
  if (/^(www\.)?google\.com$/.test(u.hostname) && GOOGLE_ADS_PATH.test(u.pathname)) return 'www.google.com(ads)';
  if (/^(www\.)?google\.com$/.test(u.hostname) && GOOGLE_GA_PATH.test(u.pathname)) return 'www.google.com(ga)';
  if (u.hostname === 'unpkg.com' && /@elevenlabs\//.test(u.pathname)) return 'unpkg.com(@elevenlabs)';
  if (u.pathname.startsWith('/_vercel/insights')) return 'vercel-insights(same-origin)';
  return null;
};
const adsIn = (rec, phase) => rec.hits.filter((h) => (!phase || h.phase === phase) && isAds(h));
const elevenIn = (rec, phase) => rec.hits.filter((h) => (!phase || h.phase === phase) && isEleven(h));
// Off-origin requests that are neither trackers nor allowed hosts (recorded even when aborted).
const strayIn = (rec, phase) => [...new Set(rec.off.filter((o) => (!phase || o.phase === phase) && !o.tracker && !allowedHost(o.host)).map((o) => o.host))].sort();
// Every request a leak check must look at: tracker hits plus every off-origin attempt.
const allOut = (rec) => [...rec.hits, ...rec.off.filter((o) => !o.tracker)];

let failures = 0; const results = [];
function ok(cond, label) { results.push({ ok: !!cond, label }); if (cond) console.log(`  ok   ${label}`); else { failures += 1; console.error(`  FAIL ${label}`); } }

async function fresh(browser, opts = {}) {
  const { gpcSignal = false, gpcHeader = false, js = true, seedAccept = false } = opts;
  const context = await browser.newContext({ javaScriptEnabled: js, extraHTTPHeaders: gpcHeader ? { 'Sec-GPC': '1' } : {} });
  if (gpcSignal) await context.addInitScript(() => { Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', { get: () => true, configurable: true }); });
  if (seedAccept) await context.addInitScript((k) => { try { if (!localStorage.getItem(k)) localStorage.setItem(k, '1.accept.0'); } catch (e) { /* none */ } }, KEY);
  if (CANARY === 'after-accept') await context.addInitScript(() => { window.addEventListener('siteconsent', (e) => { if (e.detail === 'accept') fetch('https://unknown-selftest.invalid/after-accept').catch(() => {}); }); });
  if (CANARY === 'before-choice') await context.addInitScript(() => { window.addEventListener('load', () => { fetch('https://unknown-selftest.invalid/before-choice').catch(() => {}); }); });
  const rec = { phase: 'before', hits: [], off: [], assess: [], pageErrors: [], name: opts.name || `context ${CONTEXTS.length + 1}` };
  CONTEXTS.push(rec);
  await context.route('**/*', async (route) => {
    const q = route.request(); const u = new URL(q.url());
    const t = trackerOf(u);
    if (u.origin !== ORIGIN) rec.off.push({ phase: rec.phase, host: u.hostname, tracker: !!t, method: q.method(), url: q.url(), body: q.postData() || '', blocked: !t });
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
    { const { context, page, rec } = await fresh(browser, { name: 'initial' });
      let bar = null;
      for (const p of PAGES) { await visit(page, p); if (bar === null) bar = await barCount(page); }
      const hosts = hostsIn(rec);
      matrix.states.initial = { hosts, bar_shown: bar > 0, requests: rec.hits.length };
      ok(hosts.length === 0, `initial: zero analytics/advertising requests before any choice (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0, `initial: zero Google Ads requests (doubleclick / google.com ccm|rmkt|pagead / googleadservices / tid=AW-) (${adsIn(rec).length})`);
      ok(elevenIn(rec).length === 0, `initial: zero ElevenLabs requests on any page, /privacy included (${elevenIn(rec).length})`);
      matrix.states.initial.offorigin_hosts = [...new Set(rec.off.map((o) => o.host + (o.tracker ? '' : '(not tracker)')))].sort();
      ok(strayIn(rec).length === 0, `initial: no off-origin request outside the tracker predicate and the allowed hosts, aborted ones included (${strayIn(rec).join(', ') || 'none'})`);
      ok(bar > 0, 'initial: the consent bar is shown');
      await context.close(); }

    // 2 reject
    { const { context, page, rec } = await fresh(browser, { name: 'reject' });
      await visit(page, PAGES[0]); const clicked = await choose(page, 'reject', rec);
      for (const p of PAGES) await visit(page, p);
      const hosts = hostsIn(rec);
      matrix.states.reject = { hosts, choice_made: clicked, bar_after: await barCount(page) };
      ok(clicked, 'reject: "No analytics" button exists and was pressed');
      ok(hosts.length === 0, `reject: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0, `reject: zero Google Ads requests (${adsIn(rec).length})`);
      ok(strayIn(rec).length === 0, `reject: no off-origin request outside the tracker predicate and the allowed hosts, aborted ones included (${strayIn(rec).join(', ') || 'none'})`);
      ok(await barCount(page) === 0, 'reject: the bar does not come back on later pages');
      await context.close(); }

    // 3 accept
    { const { context, page, rec } = await fresh(browser, { name: 'accept' });
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
      const adsAfter = adsIn(rec, 'after');
      const gcs = [...new Set(rec.hits.flatMap((h) => [...(h.url + '&' + h.body).matchAll(/[?&]gcs=([^&]+)/g)].map((m) => m[1])))].sort();
      const store = await page.evaluate(() => { try { return Object.keys(localStorage); } catch (e) { return []; } });
      const gcl = [...(await context.cookies()).map((c) => c.name), ...store].filter((n) => /^_gcl/.test(n));
      matrix.states.accept.ads_before_choice = adsIn(rec, 'before').length;
      matrix.states.accept.ads_requests_after_accept = adsAfter.map((h) => `${h.method} ${h.url.slice(0, 180)}`);
      matrix.states.accept.gcs_values = gcs;
      matrix.states.accept.gcl_storage_after_accept = gcl;
      matrix.states.accept.elevenlabs_requests = elevenIn(rec).length;
      ok(adsIn(rec, 'before').length === 0, `accept: zero Google Ads requests before the click (${adsIn(rec, 'before').length})`);
      ok(gcl.length === 0, `accept ("Allow analytics"): no Google Ads cookie or storage (_gcl*) is written (${gcl.join(', ') || 'none'})`);
      ok(elevenIn(rec).length === 0, `accept: zero ElevenLabs requests (${elevenIn(rec).length})`);
      ok(strayIn(rec, 'before').length === 0, `accept, before the click: no off-origin request outside the tracker predicate and the allowed hosts, aborted ones included (${strayIn(rec, 'before').join(', ') || 'none'})`);
      const leaky = rec.hits.filter((h) => /google-analytics/.test(h.host) && /[?&]dl=[^&]*%3F/.test(h.url));
      ok(leaky.length === 0, 'accept: no GA4 hit carries a query string in its page location');
      await context.close(); }

    // 4 withdraw (accept, then "no analytics" on /privacy)
    { const { context, page, rec } = await fresh(browser, { name: 'withdraw' });
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
      ok(adsIn(rec, 'after').length === 0, `withdraw: zero Google Ads requests after withdrawing (${adsIn(rec, 'after').length})`);
      ok(strayIn(rec, 'after').length === 0, `withdraw: no off-origin request outside the tracker predicate and the allowed hosts, aborted ones included (${strayIn(rec, 'after').join(', ') || 'none'})`);
      ok(cookies.length === 0, `withdraw: first-party analytics cookies cleared (${cookies.join(', ') || 'none'})`);
      await context.close(); }

    // 5 GPC: signal, and header, each ALSO with a stored accept that GPC must override
    for (const [name, opts] of [['gpc_signal', { gpcSignal: true }], ['gpc_header', { gpcHeader: true }], ['gpc_signal_over_stored_accept', { gpcSignal: true, seedAccept: true }], ['gpc_header_over_stored_accept', { gpcHeader: true, seedAccept: true }]]) {
      const { context, page, rec } = await fresh(browser, { ...opts, name });
      let bar = 0;
      for (const p of PAGES) { await visit(page, p); bar += await barCount(page); }
      const hosts = hostsIn(rec);
      const state = await page.evaluate(() => (window.SiteConsent ? window.SiteConsent.state() : 'no-gate'));
      matrix.states[name] = { hosts, bar_shown: bar > 0, gate_state: state };
      ok(hosts.length === 0, `${name}: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0, `${name}: zero Google Ads requests (${adsIn(rec).length})`);
      ok(strayIn(rec).length === 0, `${name}: no off-origin request outside the tracker predicate and the allowed hosts, aborted ones included (${strayIn(rec).join(', ') || 'none'})`);
      ok(bar === 0, `${name}: no consent prompt`);
      ok(state === 'gpc', `${name}: the gate reports gpc (${state})`);
      await context.close();
    }

    // 6 noscript
    { const { context, page, rec } = await fresh(browser, { js: false, name: 'noscript' });
      for (const p of PAGES) await visit(page, p);
      const hosts = hostsIn(rec);
      matrix.states.noscript = { hosts };
      ok(hosts.length === 0, `noscript: zero analytics requests (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0 && elevenIn(rec).length === 0, `noscript: zero Google Ads and ElevenLabs requests (${adsIn(rec).length}/${elevenIn(rec).length})`);
      ok(strayIn(rec).length === 0, `noscript: no off-origin request outside the tracker predicate and the allowed hosts, aborted ones included (${strayIn(rec).join(', ') || 'none'})`);
      await context.close(); }

    // 7 the /start intake form after accept: the lead payload carries no analytics id, no analytics hit carries what
    //   was typed, and the lead_submit event's page_location carries no query string (the page is opened WITH one).
    { const { context, page, rec } = await fresh(browser, { name: 'start form after accept' });
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
      const leaks = allOut(rec).filter((h) => typed.some((v) => enc(v).some((e) => (h.url + h.body).includes(e))));
      const queryLeaks = allOut(rec).filter((h) => /zq-matrix|zq-query/.test(h.url + h.body));
      matrix.states.start_form_after_accept_offorigin_recorded = rec.off.length;
      const gaEvents = [...new Set(rec.hits.flatMap((h) => [...(h.url + '\n' + h.body).matchAll(/(?:^|[?&\n])en=([^&\n]+)/g)].map((m) => decodeURIComponent(m[1]))))].sort();
      matrix.states.start_form_after_accept = {
        lead_posts: rec.assess.length, lead_keys: keys, analytics_key_hits: (keys.match(ANALYTICS_KEYS) || []).filter(Boolean),
        analytics_hosts: hostsIn(rec, 'after'), analytics_requests: rec.hits.length, ga4_event_names: gaEvents,
        typed_values_in_analytics_requests: leaks.map((h) => h.host + ' ' + h.url.slice(0, 160)),
        query_string_in_analytics_requests: queryLeaks.map((h) => { const all = h.url + ' BODY ' + h.body; const i = all.search(/zq-matrix|zq-query/); return { host: h.host, around: all.slice(Math.max(0, i - 160), i + 60) }; }), privacy_label_href: privacyHref,
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
    { const { context, page, rec } = await fresh(browser, { name: '/pitch' });
      await visit(page, '/pitch');
      const bar = await barCount(page); const hosts = hostsIn(rec);
      const state = await page.evaluate(() => (window.SiteConsent ? String(window.SiteConsent.state()) : 'no-gate'));
      matrix.states.pitch_initial = { hosts, bar_shown: bar > 0, gate_state: state };
      ok(hosts.length === 0, `/pitch: zero analytics requests with no choice (${hosts.join(', ') || 'none'})`);
      ok(adsIn(rec).length === 0, `/pitch: zero Google Ads requests with no choice (${adsIn(rec).length})`);
      ok(strayIn(rec).length === 0, `/pitch: no off-origin request outside the tracker predicate and the allowed hosts, aborted ones included (${strayIn(rec).join(', ') || 'none'})`);
      ok(bar === 0, '/pitch: no consent bar is mounted (the page renders as it is)');
      await context.close(); }

    // 7c the bar covers nothing (anvil r1 F1, r2 F1) and names what the choice covers (Mark 2026-10-13). For each
    //    viewport and page: no choice made, scroll to the very bottom, then collect every interactive control in the
    //    viewport, WALKING OPEN SHADOW ROOTS (the chat launcher lives in one), and
    //    (a) geometry: no control outside the bar may intersect it;
    //    (b) pointer: a real trial click (Playwright actionability, including "receives events" at the control's
    //        click point) must succeed on every control AT PAGE BOTTOM: the lower half of the viewport, every
    //        shadow-root control and the bar's own buttons. Not tried, and reported by name: controls in the upper
    //        half (the site's fixed top nav covers the top of the viewport at any scroll, bar or not) and the
    //        content of a closed <details> (the mobile menu; never clickable while closed, bar or not).
    { const ui = {};
      for (const [vw, vh] of [[390, 844], [1280, 720]]) {
        for (const p of ['/privacy', '/', '/start']) {
          const { context, page } = await fresh(browser, { name: `ui ${p} @${vw}x${vh}` });
          await page.setViewportSize({ width: vw, height: vh });
          await visit(page, p);
          await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
          await page.waitForTimeout(800);
          const r = await page.evaluate(() => {
            const SEL = 'a[href], button, input:not([type="hidden"]), select, textarea, [role="button"], [tabindex]:not([tabindex="-1"])';
            const all = [];
            const walk = (root, inShadow) => {
              root.querySelectorAll(SEL).forEach((el) => all.push({ el, inShadow }));
              root.querySelectorAll('*').forEach((el) => { if (el.shadowRoot) walk(el.shadowRoot, true); });
            };
            walk(document, false);
            const bar = document.querySelector('[data-consent-bar]');
            const b = bar ? bar.getBoundingClientRect() : null;
            const desc = (el, r) => `${el.tagName.toLowerCase()} "${(el.getAttribute('aria-label') || el.textContent || el.getAttribute('href') || '').trim().slice(0, 40)}" y=${Math.round(r.top)}-${Math.round(r.bottom)}`;
            const inView = []; const covered = []; const skipped = { upper_half: [], closed_details: [] };
            all.forEach(({ el, inShadow }, i) => {
              const r = el.getBoundingClientRect();
              const cs = getComputedStyle(el);
              if (!(r.width > 0 && r.height > 0) || cs.visibility === 'hidden' || r.bottom <= 0 || r.top >= innerHeight || r.right <= 0 || r.left >= innerWidth) return;
              const det = el.closest('details');
              if (det && !det.open && el.tagName !== 'SUMMARY') { skipped.closed_details.push(desc(el, r)); return; }
              el.setAttribute('data-ui-probe', String(i));
              const own = bar && bar.contains(el);
              const bottom = inShadow || own || r.top >= innerHeight / 2;
              if (!bottom) skipped.upper_half.push(desc(el, r));
              inView.push({ id: String(i), own, inShadow, bottom, desc: desc(el, r) });
              if (b && !own && r.bottom > b.top && r.top < b.bottom && r.right > b.left && r.left < b.right) covered.push((inShadow ? '[shadow] ' : '') + desc(el, r));
            });
            return { bar: !!bar, bar_top: b && Math.round(b.top), bar_bottom: b && Math.round(b.bottom), text: bar ? (bar.querySelector('p') || bar).textContent.trim() : '',
              shadow_controls_seen: inView.filter((c) => c.inShadow).map((c) => c.desc), covered, inView, skipped };
          });
          const blocked = []; const tried = r.inView.filter((c) => c.bottom);
          for (const c of tried) {
            try { await page.locator(`[data-ui-probe="${c.id}"]`).first().click({ trial: true, timeout: 1500 }); }
            catch (e) { blocked.push((c.inShadow ? '[shadow] ' : '') + c.desc); }
          }
          ui[`${p} @${vw}x${vh}`] = { bar: r.bar, bar_top: r.bar_top, bar_bottom: r.bar_bottom, text: r.text, controls_in_view: r.inView.length,
            pointer_tried: tried.map((c) => (c.inShadow ? '[shadow] ' : '') + c.desc), shadow_controls_seen: r.shadow_controls_seen, covered: r.covered, pointer_blocked: blocked,
            not_tried: r.skipped };
          ok(r.bar, `ui ${p} @${vw}x${vh}: the bar is shown with no choice`);
          ok(r.shadow_controls_seen.length > 0, `ui ${p} @${vw}x${vh}: the walk reaches shadow-root controls (${r.shadow_controls_seen.join('; ') || 'none'})`);
          ok(r.bar && r.covered.length === 0, `ui ${p} @${vw}x${vh}: no control, shadow roots included, sits under the bar (${r.covered.join('; ') || 'none'})`);
          ok(r.bar && tried.some((c) => c.inShadow) && blocked.length === 0, `ui ${p} @${vw}x${vh}: a real pointer trial click reaches every control at page bottom, the chat launcher included (${tried.length} tried; blocked: ${blocked.join('; ') || 'none'})`);
          if (p === '/privacy' && vw === 390) {
            ok(r.bar && /Google Analytics/.test(r.text) && /Google Ads/.test(r.text) && /without cookies/.test(r.text), `ui: the bar names Google Analytics and cookieless Google Ads measurement ("${(r.text || '').slice(0, 160)}")`);
          }
          await context.close();
        }
      }
      matrix.states.ui_bar = ui; }

    // 8 /privacy renders, and every Privacy link on the main pages resolves to it
    { const { context, page } = await fresh(browser, { name: 'privacy content and links' });
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
      const must = ['Google Analytics', 'Google Ads', 'Vercel Web Analytics', 'Global Privacy Control', 'mark@dominusfoundry.com', 'A phone number alone is never permission to text you', 'The cookie expires after 180 days', 'has no expiry', 'We do not take opt-ins by phone or by text keyword'];
      // 'no advertising (or retargeting) tags' was the round-1 claim that production refuted; 'no advertising cookies' is true.
      const mustNot = ['for up to 180\\s+days', 'no advertising (or retargeting )?tags', 'By using our website', '\\bIris\\b', '\\$[0-9]', 'ElevenLabs', 'elevenlabs-convai'];
      const missing = must.filter((m) => !text.includes(m));
      const present = mustNot.filter((m) => new RegExp(m).test(text));
      matrix.states.privacy_page = { status: r && r.status(), h1: h1.trim(), required_missing: missing, banned_present: present };
      ok(r && r.status() === 200 && /Privacy/i.test(h1), `/privacy renders (status ${r && r.status()}, h1 "${h1.trim()}")`);
      ok(missing.length === 0, `/privacy states every required item (missing: ${missing.join('; ') || 'none'})`);
      ok(present.length === 0, `/privacy carries none of the banned/false items (present: ${present.join('; ') || 'none'})`);
      ok(links['/privacy'].length >= 0 && Object.entries(links).filter(([p]) => p !== '/privacy').some(([, ls]) => ls.length > 0), 'at least one checked page links to the privacy page');
      ok(bad.length === 0, `every Privacy link resolves to /privacy (${bad.join('; ') || 'all'})`);
      const smsHtml = (await (await page.goto(ORIGIN + '/sms-terms', { waitUntil: 'load' })).text()) || '';
      const sms = smsHtml.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      const smsMust = ['A phone number alone is never permission to text you', 'Dominus Foundry LLC', 'dominusfoundry.com/start', 'STOP', 'HELP'];
      const smsNot = ['Verbal Consent', 'verbally', 'Text-In', 'replying START', 'opt-in keyword'];
      const smsMissing = smsMust.filter((m) => !sms.includes(m)); const smsPresent = smsNot.filter((m) => sms.includes(m));
      matrix.states.sms_terms = { missing: smsMissing, present: smsPresent };
      ok(smsMissing.length === 0, `/sms-terms states the one rule, the seller, the /start checkbox, STOP and HELP (missing: ${smsMissing.join('; ') || 'none'})`);
      ok(smsPresent.length === 0, `/sms-terms carries no verbal or START opt-in path (present: ${smsPresent.join('; ') || 'none'})`);
      const startHtml = (await (await page.goto(ORIGIN + '/start', { waitUntil: 'load' })).text()) || '';
      const start = startHtml.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      ok(/A phone number alone is never permission to text you/.test(start), '/start form states the one rule next to the SMS box');
      await context.close(); }
    // 9 unknown off-origin hosts, in EVERY context and EVERY phase (anvil r2 F4): before choice, after Accept,
    //   reject, withdraw, GPC, form, UI and privacy-content contexts alike. Aborted requests count.
    { const stray = CONTEXTS.map((rec) => ({ name: rec.name, hosts: strayIn(rec), urls: rec.off.filter((o) => !o.tracker && !allowedHost(o.host)).map((o) => `${o.phase} ${o.url.slice(0, 120)}`) }));
      matrix.unknown_hosts_by_context = stray.filter((c) => c.hosts.length);
      matrix.contexts_checked = CONTEXTS.length;
      for (const c of stray) ok(c.hosts.length === 0, `unknown hosts, every phase — ${c.name}: none outside the tracker predicate and ${ALLOWED_HOSTS.join(', ')} (${c.urls.join('; ') || 'none'})`);
    }
  } finally {
    await browser.close();
  }
  matrix.checks = results; matrix.failures = failures;
  if (OUT) writeFileSync(OUT, JSON.stringify(matrix, null, 2) + '\n');
  console.log(`${LABEL}: ${results.length - failures} of ${results.length} checks passed`);
  process.exit(failures ? 1 : 0);
}
main().catch((e) => { console.error('  FAIL harness error:', e && e.stack || e); process.exit(2); });
