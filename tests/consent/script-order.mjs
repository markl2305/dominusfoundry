/**
 * Config-before-gate guard (dominusfoundry, gate v2 sync fix 2026-10-13; the callordut v2sync review's F1 class).
 * Against a running build:
 *
 *   CONSENT_ORIGIN=http://localhost:4497 CONSENT_OUT=order.json node tests/consent/script-order.mjs
 *
 * public/consent/consent.js reads window.CONSENT_CONFIG ONCE, when it runs. If it runs before this site's inline
 * config (Next/React hoists an <script async src> ahead of inline scripts in the HTML), it runs with no config: the
 * wrong storage key, no site wording, and the Consent Mode defaults not yet queued. Two parts:
 *
 *   A  Byte order, every route: in the served HTML, `window.CONSENT_CONFIG=` and the Consent Mode default
 *      ('consent','default' with ad storage, ad user data and ad personalisation denied, plus ads_data_redaction)
 *      come BEFORE the first reference to /consent/consent.js, and no <script src="/consent/consent.js"> tag exists
 *      (the only loader is the inline config script itself, so the order holds by construction).
 *   B  Delayed / control pair: a local proxy serves the REAL built HTML split just before the inline config, the
 *      suffix delivered CONSENT_DELAY_MS (1500) later, or at once (control). A trap on window.SiteConsent records,
 *      at the moment the gate publishes itself, whether the config and the Consent Mode default were already there.
 *      After hydration: the site's bar (with this site's wording) is shown on a first visit (not on /pitch, which
 *      renders without it), nothing tracks before a choice, and on Accept the choice is stored under the site's key,
 *      gtag exists, and the Consent Mode default sits ahead of the Google tag's config in dataLayer.
 * Off-origin: vendor requests are answered locally (the committed gtag.js fixture serves the GA loader), everything
 * else is aborted. Nothing leaves the machine; no form is submitted. Exit 1 on any failed check.
 */
import http from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { vendorHost, VERCEL_PATH } from './vendor-hosts.mjs';

const ORIGIN = new URL(process.env.CONSENT_ORIGIN || 'http://localhost:4497').origin;
const OUT = process.env.CONSENT_OUT || '';
const KEY = process.env.CONSENT_STORAGE_KEY || 'df-consent';
const GA_ID = process.env.CONSENT_GA_ID || 'G-9J4GY8YZ6G';
const DELAY = Number(process.env.CONSENT_DELAY_MS || 1500);
// Part A: every page route of the build (the matrix's list, /press/spw excluded: it redirects off this site), plus a
// private path, which renders the not-found page inside the root layout.
const ORDER_ROUTES = (process.env.CONSENT_ORDER_ROUTES || '/,/about,/blog,/blog/between-human-and-ai,/blog/operations-intelligence-for-small-teams,/blog/synthetic-intelligence-mentis,/blog/the-case-for-constitutional-synthetic-intelligence,/careers,/company,/contact,/get-started,/governance,/huali-order-info,/learn,/learn/platform/ai-software-company-for-construction-and-trades,/learn/platform/ai-software-for-construction-and-trades,/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples,/learn/platform/forge-the-ai-operating-system-for-commercial-contractors,/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry,/legal/metis-qbo-disconnect,/legal/metis-qbo-eula,/legal/metis-qbo-privacy,/mentis,/pitch,/press,/pricing,/privacy,/qb-migration,/sabina,/sms-terms,/start,/systems,/systems/intake,/systems/ops,/systems/revenue,/technology,/thanks,/chat').split(',');
const PAIR_ROUTES = (process.env.CONSENT_PAIR_ROUTES || '/,/privacy,/start,/pitch').split(',');
const NO_BAR = /^\/pitch(\/|$)/;
const GA_LOADER = readFileSync(new URL(`./fixtures/gtag-js-${GA_ID}.js`, import.meta.url), 'utf8');
const VERCEL_LOADER = readFileSync(new URL('./fixtures/vercel-insights-script.js', import.meta.url), 'utf8');
const CONFIG_MARK = 'window.CONSENT_CONFIG=';
const DEFAULT_RE = /'consent','default',\{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'[^}]*\}\);g\('set','ads_data_redaction',true\)/;

let failures = 0; const results = [];
function ok(cond, label) { results.push({ ok: !!cond, label }); if (cond) console.log(`  ok   ${label}`); else { failures += 1; console.error(`  FAIL ${label}`); } }

// ---------- A: byte order on every route
async function partA(out) {
  out.order = {};
  for (const r of ORDER_ROUTES) {
    const res = await fetch(ORIGIN + r, { redirect: 'follow' });
    const html = await res.text();
    const cfg = html.indexOf(CONFIG_MARK);
    const ref = html.indexOf('/consent/consent.js');
    const def = html.search(DEFAULT_RE);
    const srcTag = /<script[^>]*\ssrc="\/consent\/consent\.js[^"]*"/.test(html);
    const row = { status: res.status, final: new URL(res.url).pathname, config_at: cfg, consent_default_at: def, first_gate_reference_at: ref, script_src_tag: srcTag };
    out.order[r] = row;
    // A private path such as /chat is served as a 404 that still renders the root layout (and the gate).
    ok((res.status === 200 || res.status === 404) && cfg >= 0 && def > cfg && ref > def && !srcTag,
      `A ${r}: config (${cfg}) and Consent Mode default (${def}) precede the first gate reference (${ref}); no <script src> gate tag (${srcTag ? 'PRESENT' : 'none'})`);
  }
}

// ---------- B: delayed / control pair through a streaming proxy
function startProxy(delay) {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        const upstream = await fetch(ORIGIN + req.url, { headers: { accept: req.headers.accept || '*/*', cookie: req.headers.cookie || '' }, redirect: 'manual' });
        const type = upstream.headers.get('content-type') || '';
        const headers = {};
        upstream.headers.forEach((v, k) => { if (!/^(content-length|content-encoding|transfer-encoding|connection)$/i.test(k)) headers[k] = v; });
        if (upstream.status >= 300 && upstream.status < 400) { res.writeHead(upstream.status, headers); res.end(); return; }
        if (!type.includes('text/html')) { res.writeHead(upstream.status, headers); res.end(Buffer.from(await upstream.arrayBuffer())); return; }
        const html = await upstream.text();
        // Split just before the inline config's <script> element (the element that carries CONFIG_MARK).
        const mark = html.indexOf(CONFIG_MARK);
        const at = mark >= 0 ? html.lastIndexOf('<script', mark) : -1;
        res.writeHead(upstream.status, headers);
        if (at < 0) { res.end(html); return; }
        res.write(html.slice(0, at));
        setTimeout(() => res.end(html.slice(at)), delay);
      } catch (e) { res.writeHead(502); res.end(String(e)); }
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function pairCase(browser, route, delay) {
  const proxy = await startProxy(delay);
  const P = `http://127.0.0.1:${proxy.address().port}`;
  const context = await browser.newContext({ serviceWorkers: 'block' });
  const ledger = [];
  await context.route('**/*', async (rt) => {
    const u = new URL(rt.request().url());
    if (u.origin === P) {
      if (VERCEL_PATH.test(u.pathname)) { ledger.push({ url: u.href, phase: phase }); return u.pathname.endsWith('/script.js') ? rt.fulfill({ status: 200, contentType: 'text/javascript', body: VERCEL_LOADER }) : rt.fulfill({ status: 204, body: '' }); }
      if (rt.request().method() !== 'GET' && rt.request().method() !== 'HEAD') return rt.fulfill({ status: 204, body: '' });
      return rt.continue();
    }
    if (vendorHost(u.hostname)) {
      ledger.push({ url: u.href, phase });
      if (u.origin + u.pathname === 'https://www.googletagmanager.com/gtag/js' && u.searchParams.get('id') === GA_ID) return rt.fulfill({ status: 200, contentType: 'text/javascript', body: GA_LOADER });
      return rt.fulfill({ status: 204, body: '' });
    }
    return rt.abort();
  });
  let phase = 'before';
  await context.addInitScript(() => {
    let sc;
    Object.defineProperty(window, 'SiteConsent', {
      configurable: true,
      get() { return sc; },
      set(v) {
        if (!window.__gateObs) {
          const dl = (window.dataLayer || []).map((a) => Array.prototype.slice.call(a, 0, 2).join(':'));
          window.__gateObs = { config: !!window.CONSENT_CONFIG, key: window.CONSENT_CONFIG && window.CONSENT_CONFIG.storageKey, consent_default_queued: dl.some((x) => x === 'consent:default'), ready_state: document.readyState };
        }
        sc = v;
      },
    });
  });
  const page = await context.newPage();
  const errors = []; page.on('pageerror', (e) => errors.push(String(e.message || e).slice(0, 160)));
  await page.goto(P + route, { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(3000);
  const s = await page.evaluate(() => {
    const b = document.querySelector('[data-consent-bar]');
    return { obs: window.__gateObs, bar: b ? (b.querySelector('p') || b).textContent.trim() : null, state: window.SiteConsent ? window.SiteConsent.state() : 'no-gate', gtag: typeof window.gtag };
  });
  const before = ledger.filter((h) => h.phase === 'before').length;
  const name = `B ${route} ${delay ? `delayed ${delay}ms` : 'control'}`;
  const row = { route, delay, ...s, trackers_before_choice: before, page_errors: errors };
  ok(s.obs && s.obs.config && s.obs.key === KEY, `${name}: the gate ran with this site's config present (config ${s.obs && s.obs.config}, key ${s.obs && s.obs.key}, readyState ${s.obs && s.obs.ready_state})`);
  ok(s.obs && s.obs.consent_default_queued, `${name}: the Consent Mode default was queued before the gate ran`);
  ok(before === 0, `${name}: zero vendor requests before a choice (${before})`);
  if (NO_BAR.test(route)) {
    ok(s.bar === null && s.state === null, `${name}: no bar on /pitch, no choice (bar ${s.bar === null ? 'none' : 'SHOWN'}; state ${s.state})`);
  } else {
    ok(s.bar && /Google Ads/.test(s.bar) && s.state === null, `${name}: after hydration the site's bar is shown with this site's wording (${s.bar ? s.bar.slice(0, 70) : 'NO BAR'}; state ${s.state})`);
    if (s.bar) {
      phase = 'after';
      await page.locator('[data-consent-bar] [data-consent="accept"]').click();
      await page.waitForTimeout(2500);
      const a = await page.evaluate((k) => {
        const dl = (window.dataLayer || []).map((x) => Array.prototype.slice.call(x, 0, 2).join(':'));
        let stored = null; try { stored = localStorage.getItem(k); } catch (e) { /* none */ }
        return { stored, gtag: typeof window.gtag, consent_default_at: dl.indexOf('consent:default'), first_config_at: dl.findIndex((x) => x.startsWith('config:')) };
      }, KEY);
      row.after_accept = a;
      ok(/^1\.accept\.\d+$/.test(a.stored || '') && a.gtag === 'function', `${name}: Accept is stored under ${KEY} and the gate creates gtag (${a.stored}; gtag ${a.gtag})`);
      ok(a.consent_default_at >= 0 && a.first_config_at > a.consent_default_at, `${name}: the Consent Mode default (dataLayer #${a.consent_default_at}) precedes the Google tag config (#${a.first_config_at})`);
    }
  }
  await context.close();
  await new Promise((r) => proxy.close(r));
  return row;
}

const out = { origin: ORIGIN, measured_at: new Date().toISOString(), delay_ms: DELAY };
await partA(out);
const browser = await chromium.launch();
try {
  out.pair = [];
  for (const r of PAIR_ROUTES) for (const d of [DELAY, 0]) out.pair.push(await pairCase(browser, r, d));
} finally { await browser.close(); }
out.checks = results; out.failures = failures;
if (OUT) writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
console.log(`script-order: ${results.length - failures} of ${results.length} checks passed`);
process.exit(failures ? 1 : 0);
