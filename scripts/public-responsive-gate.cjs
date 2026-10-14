#!/usr/bin/env node
/*
 * public-responsive-gate.cjs
 *
 * Guarded Playwright regression for the Dominus Foundry public marketing
 * routes: asserts that tracked footer / contact / CTA / quote-row content
 * stays inside the viewport (no clipped or off-screen text) across a fixed
 * set of mobile-through-desktop widths.
 *
 * Safety:
 *  - Only ever navigates to BASE_URL, which must resolve to loopback
 *    (127.0.0.1 / localhost). Any other origin refuses to run.
 *  - Every network request is intercepted; only GET/HEAD requests to
 *    BASE_URL are allowed through. Everything else (including any POST/PUT/
 *    PATCH/DELETE, and any cross-origin request) is aborted before it
 *    leaves the browser context. No form is ever submitted.
 *  - Does not click, type, or otherwise interact with the page beyond
 *    navigation and resizing the viewport, so it can never trigger a real
 *    submit handler. Two bounded exceptions, both on /pitch and both outside
 *    any form: native <details> are opened by setting their `open` property,
 *    and the proof-ledger sheet is opened by a DOM click on a `.ledger-row`
 *    (type="button") and stepped with its own `#sheetNext` button. Network
 *    rules above still apply to everything those actions could trigger.
 *  - Optional: RESPONSIVE_GATE_ROUTES=/pitch,/careers limits the routes run
 *    (all by default); used for mutation runs, never for a pass/fail record.
 */

'use strict';

const BASE_URL = process.env.RESPONSIVE_GATE_BASE_URL || 'http://127.0.0.1:4501';
const PLAYWRIGHT_MODULE =
  process.env.RESPONSIVE_GATE_PLAYWRIGHT_MODULE ||
  '@playwright/test';

const WIDTHS = [320, 375, 390, 600, 760, 761, 768, 900, 1024, 1440];
const VIEWPORT_HEIGHT = 1400;

// route -> tracked selectors. Each selector's rendered rectangle must stay
// fully inside the viewport at every width, and the element's text must not
// be visually clipped by an ancestor's overflow.
const CHECKS = [
  {
    route: '/pricing',
    selectors: [
      { label: 'footer contact column', selector: '.footer .f-col' },
      { label: 'footer link/span text', selector: '.footer .f-col a, .footer .f-col span' },
      { label: 'footer email', selector: '.footer a[href="mailto:foundry@dominusfoundry.com"]' },
      { label: 'hire CTA buttons', selector: '#hire .btn' },
      { label: 'quote row value', selector: '.pline .pl-v' },
      { label: 'quote row label', selector: '.pline .pl-k' },
    ],
  },
  {
    /* /pitch, added 2026-09-16 with the route. It is the widest-content page on
       the site — a proof ledger in three columns, paired key/value rows, and a
       figure grid — so it is exactly the shape that overflows at 320px, and a
       new public route that no gate covers is a gap by construction.

       2026-10-14, the redesigned page (app/pitch). Review R1 found that union
       selectors kept matching something while whole content families went
       unmeasured. So every family here has its OWN entry and an exact required
       `count`: a family that disappears, or loses members, fails the gate, and
       so does one member that overflows. Before each element is probed it is
       brought into view and the probe waits until it and its ancestors are
       fully visible and no finite animation is running on them (bounded: a
       target that does not settle fails with a diagnostic). `openDetails`
       opens every native disclosure first, so their bodies are measured.
       `sheet` opens the proof sheet on each ledger row in turn and measures its
       detail and source text. `chunksBlocked` reloads the page with its script
       chunks refused and measures the server-rendered architecture text (all
       four layers, both views) that the interactive tabs replace when the
       script runs. The nav and the scrolling income tables are measured by the
       port's own mobile matrix: this probe reads labels hidden by design and
       tables that scroll inside their frame as failures. */
    route: '/pitch',
    settle: true,
    openDetails: '.dfp details',
    selectors: [
      { label: 'footer contact column', selector: '.footer .f-col', count: 3 },
      { label: 'footer link/span text', selector: '.footer .f-col a, .footer .f-col span', count: 14 },
      { label: 'chapter headings', selector: '.dfp .h2', count: 13 },
      { label: 'proof ledger rows', selector: '.dfp .ledger-row', count: 12 },
      { label: 'proof ledger copy and badges', selector: '.dfp .ledger-row .copy, .dfp .ledger .badge', count: 24 },
      { label: 'key/value rows (VII and the historical scenarios)', selector: '.dfp .rows > div, .dfp .rows > div > span', count: 69 },
      { label: 'raise term cells', selector: '.dfp .terms > div, .dfp .terms strong', count: 20 },
      { label: 'figure blocks', selector: '.dfp .figure, .dfp .figure .v', count: 12 },
      { label: 'III responsibility cards', selector: '#buys .card', count: 6 },
      { label: 'IV layer tabs', selector: '.dfp .layer', count: 4 },
      { label: 'IV selected layer explanation', selector: '.dfp .layer-detail', count: 1 },
      { label: 'VIII responsibility cards', selector: '#msp .card', count: 3 },
      { label: 'IX horizon items', selector: '.dfp .horizon li', count: 3 },
      { label: 'X defensibility cards', selector: '#position .g4 .card', count: 4 },
      { label: 'disclosure bodies (opened)', selector: '.dfp .ch-body > details.more > .more-body', count: 5 },
      { label: 'diligence source notes (opened)', selector: '.dfp .src-list > p', count: 15 },
      { label: 'thesis chain steps', selector: '.dfp .sequence li', count: 4 },
      { label: 'founder columns', selector: '.dfp .founders article', count: 2 },
      { label: 'hero and CTA buttons', selector: '.hero-actions .btn, .cta-actions .btn', count: 5 },
      { label: 'at-a-glance figures', selector: '.dfp .glance-item, .dfp .glance-v', count: 8 },
      { label: 'use-of-funds rows', selector: '.dfp .funds-rows > div, .dfp .funds-rows .amt', count: 28 },
      { label: 'income chart heading and readout', selector: '.dfp .chart-head .k, .dfp .readout', count: 2 },
      { label: 'patent filings', selector: '.dfp .filings li', count: 3 },
    ],
    sheet: {
      rows: '.dfp .ledger-row',
      count: 12,
      next: '#sheetNext',
      selectors: [
        { label: 'proof sheet title', selector: '#sheetTitle', count: 1 },
        { label: 'proof sheet detail', selector: '#sheetDetail', count: 1 },
        { label: 'proof sheet status/date/source', selector: '.sheet-meta span', count: 6 },
      ],
    },
    chunksBlocked: {
      selectors: [
        { label: 'IV server-rendered: what each layer does', selector: '.dfp .layer-all .layer-what', count: 4 },
        { label: 'IV server-rendered: reusable platform view', selector: '.dfp .layer-all .layer-platform', count: 4 },
        { label: 'IV server-rendered: company state view', selector: '.dfp .layer-all .layer-company', count: 4 },
      ],
    },
  },
  {
    route: '/careers',
    selectors: [
      { label: 'footer contact column', selector: 'footer [aria-labelledby="footer-heading"] li, footer li' },
      { label: 'footer contact/nav links', selector: 'footer a' },
      { label: 'footer email', selector: 'footer a[href="mailto:foundry@dominusfoundry.com"]' },
      { label: 'application region', selector: '#apply' },
      { label: 'application region columns', selector: '#apply > div > div > div' },
      { label: 'application form controls', selector: '#apply input, #apply textarea, #apply button, #apply form' },
      { label: 'application file-picker filename', selector: '#apply input[type="file"] + div > span:last-child' },
    ],
  },
];

function assertLoopback(urlStr) {
  const u = new URL(urlStr);
  const host = u.hostname;
  if (u.protocol !== 'http:' || u.username || u.password || !['127.0.0.1', 'localhost', '[::1]'].includes(host)) {
    throw new Error(
      `Refusing to run: BASE_URL "${urlStr}" is not loopback. This gate only ever talks to a local dev/preview server.`
    );
  }
  return u;
}

async function loadPlaywright() {
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(PLAYWRIGHT_MODULE);
  } catch (err) {
    throw new Error(
      `Could not load @playwright/test from "${PLAYWRIGHT_MODULE}". ` +
        `Set RESPONSIVE_GATE_PLAYWRIGHT_MODULE to a valid path or install @playwright/test. (${err.message})`
    );
  }
}

/**
 * Returns true if `el`'s visible box is smaller than its own scroll box in a
 * way that indicates real content is being cut off by an ancestor's
 * `overflow: hidden` (or similar) rather than just being empty.
 */
function clipProbe(el) {
  const rect = el.getBoundingClientRect();
  const isFileOverlay = el.matches('input[type="file"]');
  const requiresText = !el.matches('input, textarea');
  let hidden = rect.width <= 0 || rect.height <= 0 || (requiresText && !el.textContent.trim());
  // The transparent native file-input overlay has a visible, separately
  // required Choose File/filename control. No other hidden control is accepted.
  for (let node = el; node; node = node.parentElement) {
    const s = getComputedStyle(node);
    if (s.display === 'none' || s.visibility !== 'visible' ||
        (Number(s.opacity) === 0 && !(node === el && isFileOverlay))) hidden = true;
  }
  const boxes = [{ box: rect, owner: el.parentElement }];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    if (!textNode.textContent.trim()) continue;
    const parent = textNode.parentElement;
    for (let node = parent; node; node = node.parentElement) {
      const s = getComputedStyle(node);
      if (s.display === 'none' || s.visibility !== 'visible' || Number(s.opacity) === 0) hidden = true;
    }
    const range = document.createRange();
    range.selectNodeContents(textNode);
    const textRects = [...range.getClientRects()];
    if (!textRects.some(r => r.width > 0 && r.height > 0)) hidden = true;
    for (const box of textRects) boxes.push({ box, owner: parent });
  }
  const offRight = Math.max(...boxes.map(({ box }) => box.right - innerWidth));
  const offLeft = Math.max(...boxes.map(({ box }) => -box.left));
  let clippedByAncestor = null;
  for (const { box, owner } of boxes) {
    for (let node = owner; node; node = node.parentElement) {
      const style = getComputedStyle(node);
      const pRect = node.getBoundingClientRect();
      if (['hidden', 'clip'].includes(style.overflowX) &&
          (box.right > pRect.right + 1 || box.left < pRect.left - 1) ||
          ['hidden', 'clip'].includes(style.overflowY) &&
          (box.bottom > pRect.bottom + 1 || box.top < pRect.top - 1)) {
        clippedByAncestor = node.tagName + (node.className ? '.' + String(node.className).split(' ').join('.') : '');
      }
    }
  }

  return {
    rect: { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom, width: rect.width, height: rect.height },
    offRight,
    offLeft,
    outOfViewport: offRight > 1 || offLeft > 1,
    clippedByAncestor,
    hidden,
    text: (el.innerText || el.textContent || '').trim().slice(0, 80),
  };
}

/* Bring one target into view and wait until it and every ancestor are fully
   visible and no finite animation runs on them. Returns null when settled, or a
   short diagnostic when it did not settle within the bound. */
async function settleTarget(handle, timeoutMs) {
  return handle.evaluate(async (el, limit) => {
    el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' });
    const t0 = performance.now();
    const state = () => {
      const chain = [];
      for (let n = el; n && n.nodeType === 1; n = n.parentElement) chain.push(n);
      for (const n of chain) {
        const s = getComputedStyle(n);
        if (Number(s.opacity) < 1 || s.visibility !== 'visible') return `${n.tagName.toLowerCase()}.${String(n.className).split(' ')[0]} opacity ${s.opacity} visibility ${s.visibility}`;
      }
      const running = document.getAnimations().filter((a) => {
        const t = a.effect && a.effect.target;
        return a.playState === 'running' && t && chain.includes(t) && a.effect.getTiming().iterations !== Infinity;
      });
      if (running.length) return `${running.length} animation(s) still running on the target or an ancestor`;
      return null;
    };
    let why = state();
    while (why && performance.now() - t0 < limit) {
      await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 30)));
      why = state();
    }
    return why;
  }, timeoutMs);
}

async function measureFamilies(page, { width, route, pass, selectors, settle, failures, summary, settleMs }) {
  for (const { label, selector, count } of selectors) {
    // eslint-disable-next-line no-await-in-loop
    const handles = await page.$$(selector);
    const tag = pass ? `${label} [${pass}]` : label;
    if (handles.length === 0) {
      failures.push({ width, route, label: tag, selector, reason: 'required selector is missing' });
      continue;
    }
    if (count != null && handles.length !== count) {
      failures.push({ width, route, label: tag, selector, reason: `required count ${count}, found ${handles.length}` });
    }
    for (const handle of handles) {
      if (settle) {
        // eslint-disable-next-line no-await-in-loop
        const why = await settleTarget(handle, settleMs);
        if (why) {
          failures.push({ width, route, label: tag, selector, reason: `did not settle within ${settleMs}ms: ${why}` });
          continue;
        }
      }
      // eslint-disable-next-line no-await-in-loop
      const result = await handle.evaluate(clipProbe);
      const isFailure = result.outOfViewport || result.clippedByAncestor || result.hidden;
      summary.push({ width, route, label: tag, selector, ...result });
      if (isFailure) {
        failures.push({
          width,
          route,
          label: tag,
          selector,
          text: result.text,
          offRight: Math.round(result.offRight),
          offLeft: Math.round(result.offLeft),
          clippedByAncestor: result.clippedByAncestor,
          reason: result.hidden ? 'required content is hidden or has no rendered box' : null,
        });
      }
    }
  }
}

async function run() {
  const base = assertLoopback(BASE_URL);
  const { chromium } = await loadPlaywright();

  const browser = await chromium.launch({ headless: true });
  const failures = [];
  const summary = [];

  try {
    // Hard network gate: only GET/HEAD to BASE_URL's origin get through.
    // `blockChunks` additionally refuses the page's script chunks (the failed-script pass).
    const gate = (blockChunks) => (route) => {
      const req = route.request();
      let reqUrl;
      try {
        reqUrl = new URL(req.url());
      } catch {
        return route.abort();
      }
      const sameOrigin = reqUrl.origin === base.origin;
      const safeMethod = req.method() === 'GET' || req.method() === 'HEAD';
      if (blockChunks && /^\/_next\/static\/chunks\/.*\.js$/.test(reqUrl.pathname)) return route.abort();
      if (sameOrigin && safeMethod && !reqUrl.pathname.startsWith('/api/')) return route.continue();
      return route.abort();
    };
    const context = await browser.newContext({ serviceWorkers: 'block' });
    await context.route('**/*', gate(false));

    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', (err) => pageErrors.push(String(err)));
    const ONLY = process.env.RESPONSIVE_GATE_ROUTES ? process.env.RESPONSIVE_GATE_ROUTES.split(',') : null;

    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: VIEWPORT_HEIGHT });

      for (const check of CHECKS) {
        const { route, selectors } = check;
        if (ONLY && !ONLY.includes(route)) continue;
        const target = base.origin + route;
        const response = await page.goto(target, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        const status = response ? response.status() : null;
        if (status !== 200) {
          failures.push({ width, route, selector: '(navigation)', reason: `unexpected status ${status}` });
          continue;
        }
        if (check.openDetails) {
          await page.evaluate((sel) => document.querySelectorAll(sel).forEach((d) => { d.open = true; }), check.openDetails);
        }
        await measureFamilies(page, { width, route, selectors, settle: !!check.settle, failures, summary, settleMs: 4000 });

        if (check.sheet) {
          const sh = check.sheet;
          const rows = await page.$$(sh.rows);
          if (rows.length !== sh.count) failures.push({ width, route, label: 'proof sheet rows', selector: sh.rows, reason: `required count ${sh.count}, found ${rows.length}` });
          if (rows.length) {
            await rows[0].evaluate((el) => el.click());
            for (let i = 0; i < rows.length; i++) {
              const open = await page.waitForFunction(() => {
                const root = document.querySelector('#sheetRoot'); const sheet = document.querySelector('#sheet');
                return root && !root.hidden && sheet && /translateY\(0(px)?\)/.test(sheet.style.transform || '');
              }, null, { timeout: 4000 }).then(() => true, () => false);
              if (!open) { failures.push({ width, route, label: `proof sheet, row ${i + 1}`, selector: '#sheet', reason: 'sheet did not open and settle within 4000ms' }); break; }
              await measureFamilies(page, { width, route, pass: `sheet row ${i + 1}`, selectors: sh.selectors, settle: false, failures, summary, settleMs: 0 });
              if (i < rows.length - 1) await page.evaluate((sel) => document.querySelector(sel).click(), sh.next);
            }
            await page.keyboard.press('Escape');
          }
        }

        if (check.chunksBlocked) {
          const ctx2 = await browser.newContext({ serviceWorkers: 'block', viewport: { width, height: VIEWPORT_HEIGHT } });
          await ctx2.route('**/*', gate(true));
          const p2 = await ctx2.newPage();
          const r2 = await p2.goto(target, { waitUntil: 'load' });
          if (!r2 || r2.status() !== 200) {
            failures.push({ width, route, selector: '(navigation, chunks blocked)', reason: `unexpected status ${r2 && r2.status()}` });
          } else {
            await measureFamilies(p2, { width, route, pass: 'script chunks blocked', selectors: check.chunksBlocked.selectors, settle: true, failures, summary, settleMs: 6000 });
          }
          await ctx2.close();
        }
      }
    }

    if (pageErrors.length) {
      for (const msg of pageErrors) {
        failures.push({ width: null, route: null, selector: '(page error)', reason: msg });
      }
    }
  } finally {
    await browser.close();
  }

  if (failures.length) {
    console.error(`FAIL — ${failures.length} clipping/overflow issue(s) found:\n`);
    for (const f of failures) {
      console.error(
        `  [${f.width ?? '-'}px] ${f.route ?? ''} ${f.label ?? f.selector}` +
          (f.text ? ` — "${f.text}"` : '') +
          (f.offRight ? ` offRight=${f.offRight}` : '') +
          (f.offLeft ? ` offLeft=${f.offLeft}` : '') +
          (f.clippedByAncestor ? ` clippedByAncestor=${f.clippedByAncestor}` : '') +
          (f.reason ? ` (${f.reason})` : '')
      );
    }
    process.exitCode = 1;
    return;
  }

  console.log(`PASS — ${summary.length} tracked element/width combinations checked across ${WIDTHS.length} widths, 0 overflow/clip failures.`);
}

run().catch((err) => {
  console.error('public-responsive-gate crashed:', err);
  process.exitCode = 1;
});
