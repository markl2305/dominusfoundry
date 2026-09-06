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
 *    submit handler.
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

async function run() {
  const base = assertLoopback(BASE_URL);
  const { chromium } = await loadPlaywright();

  const browser = await chromium.launch({ headless: true });
  const failures = [];
  const summary = [];

  try {
    const context = await browser.newContext({ serviceWorkers: 'block' });

    // Hard network gate: only GET/HEAD to BASE_URL's origin get through.
    await context.route('**/*', (route) => {
      const req = route.request();
      let reqUrl;
      try {
        reqUrl = new URL(req.url());
      } catch {
        return route.abort();
      }
      const sameOrigin = reqUrl.origin === base.origin;
      const safeMethod = req.method() === 'GET' || req.method() === 'HEAD';
      if (sameOrigin && safeMethod && !reqUrl.pathname.startsWith('/api/')) return route.continue();
      return route.abort();
    });

    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', (err) => pageErrors.push(String(err)));

    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: VIEWPORT_HEIGHT });

      for (const { route, selectors } of CHECKS) {
        const target = base.origin + route;
        const response = await page.goto(target, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        const status = response ? response.status() : null;
        if (status !== 200) {
          failures.push({ width, route, selector: '(navigation)', reason: `unexpected status ${status}` });
          continue;
        }

        for (const { label, selector } of selectors) {
          // eslint-disable-next-line no-await-in-loop
          const handles = await page.$$(selector);
          if (handles.length === 0) {
            failures.push({ width, route, label, selector, reason: 'required selector is missing' });
            continue;
          }

          for (const handle of handles) {
            // eslint-disable-next-line no-await-in-loop
            const result = await handle.evaluate(clipProbe);
            const isFailure = result.outOfViewport || result.clippedByAncestor || result.hidden;
            summary.push({ width, route, label, selector, ...result });
            if (isFailure) {
              failures.push({
                width,
                route,
                label,
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
