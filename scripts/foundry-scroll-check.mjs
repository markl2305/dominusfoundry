// Focused QA for the scroll-linked reveal on dominusfoundry.com (2026-10-21).
// Usage: node scripts/foundry-scroll-check.mjs http://127.0.0.1:4510 [out-dir]
// Read-only against a local `next start`. Submits nothing.
import { chromium } from '@playwright/test'
import { writeFileSync, mkdirSync } from 'node:fs'

const base = process.argv[2] || 'http://127.0.0.1:4510'
const out = process.argv[3] || '.'
mkdirSync(out, { recursive: true })
const PUBLIC = ['/', '/sabina', '/governance', '/technology', '/company', '/press', '/blog', '/pricing']
const EXCLUDED = ['/pitch', '/privacy', '/start', '/systems/intake', '/legal/metis-qbo-privacy', '/huali-order-info', '/learn']
const results = []
const check = (name, pass, detail) => { results.push({ name, pass: !!pass, ...(detail === undefined ? {} : { detail }) }); if (!pass) console.error('FAIL', name, detail ?? '') }
const settle = (page, ms = 700) => page.waitForTimeout(ms)
const state = page => page.evaluate(() => {
  const els = [...document.querySelectorAll('[data-scroll-story]')]
  const tr = el => { const t = getComputedStyle(el).translate; if (!t || t === 'none') return 0; const p = t.split(' '); return parseFloat(p[1] ?? p[0]) || 0 }
  return {
    count: els.length,
    opacities: [...new Set(els.map(el => getComputedStyle(el).opacity))],
    heroCopyOpacity: (() => { const c = document.querySelector('[data-scroll-hero="copy"]'); return c ? getComputedStyle(c).opacity : null })(),
    translates: els.map(tr),
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    hasHero: !!document.querySelector('[data-scroll-hero]'),
  }
})

const browser = await chromium.launch()
const errors = []
for (const [label, viewport] of [['1440', { width: 1440, height: 900 }], ['390', { width: 390, height: 844 }]]) {
  for (const theme of ['dark', 'light']) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 })
    await context.addInitScript(t => { try { localStorage.setItem('df-theme', t); localStorage.setItem('df-consent', JSON.stringify({ v: 'denied' })) } catch {} }, theme)
    const page = await context.newPage()
    page.on('pageerror', e => errors.push(`${label}/${theme} ${page.url()}: ${e.message}`))
    for (const route of PUBLIC) {
      await page.goto(base + route, { waitUntil: 'networkidle' })
      await settle(page, 400)
      const s = await state(page)
      const tag = `${label} ${theme} ${route}`
      check(`${tag}: groups registered`, s.count > 0, s.count)
      check(`${tag}: every group fully opaque`, s.opacities.length === 1 && s.opacities[0] === '1', s.opacities)
      check(`${tag}: hero copy opaque`, s.heroCopyOpacity === null || s.heroCopyOpacity === '1', s.heroCopyOpacity)
      check(`${tag}: no horizontal overflow`, s.overflow <= 0, s.overflow)
      if (theme === 'dark') {
        // Max scroll settles everything.
        await page.evaluate(() => scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }))
        await settle(page, 1200)
        const end = await state(page)
        check(`${tag}: settled at max scroll`, end.translates.every(t => Math.abs(t) < 0.5), Math.max(...end.translates.map(Math.abs)))
        check(`${tag}: no overflow at max scroll`, end.overflow <= 0, end.overflow)
      }
    }
    // Movement, reversal and hidden-tab recovery on the home page.
    if (theme === 'dark') {
      await page.goto(base + '/', { waitUntil: 'networkidle' }); await settle(page, 300)
      const H = await page.evaluate(() => innerHeight)
      const target = await page.evaluate(() => {
        const els = [...document.querySelectorAll('[data-scroll-story]')]
        const el = els.find(e => e.getBoundingClientRect().top > innerHeight * 1.5)
        if (!el) return null
        el.setAttribute('data-qa-target', '')
        return el.getBoundingClientRect().top + scrollY
      })
      check(`${label}: a below-fold target exists`, target !== null)
      if (target !== null) {
        const read = () => page.evaluate(() => { const t = getComputedStyle(document.querySelector('[data-qa-target]')).translate; if (!t || t === 'none') return 0; const p = t.split(' '); return parseFloat(p[1] ?? p[0]) || 0 })
        await page.evaluate(([t, h]) => scrollTo({ top: t - h * 0.92, behavior: 'instant' }), [target, H]); await settle(page)
        const entering = await read()
        check(`${label}: entering group is offset`, entering > 4, entering)
        // The first scroll after load must already match the engine's own formula against fresh layout geometry
        // (catches geometry measured while a one-shot transition or the consent bar was still moving things).
        const expected = await page.evaluate(() => {
          const el = document.querySelector('[data-qa-target]'); const t = getComputedStyle(el).translate
          const y = !t || t === 'none' ? 0 : parseFloat(t.split(' ')[1] ?? t) || 0
          const top = el.getBoundingClientRect().top - y, H = innerHeight, idx = Math.min([...el.parentElement.children].indexOf(el), 3)
          const p = Math.max(0, Math.min(1, (H * (.96 - .025 * idx) - top) / (H * .28)))
          return (1 - p) * (innerWidth < 760 ? 26 : 48)
        })
        check(`${label}: first scroll matches fresh geometry`, Math.abs(entering - expected) < 0.6, { entering, expected })
        await page.evaluate(([t, h]) => scrollTo({ top: t - h * 0.3, behavior: 'instant' }), [target, H]); await settle(page)
        const settled = await read()
        check(`${label}: group settles once in view`, Math.abs(settled) < 0.5, settled)
        await page.evaluate(([t, h]) => scrollTo({ top: t - h * 0.92, behavior: 'instant' }), [target, H]); await settle(page)
        const back = await read()
        check(`${label}: reversal returns to the same offset`, Math.abs(back - entering) < 0.6, { entering, back })
        await page.setViewportSize({ width: viewport.width, height: viewport.height + 40 }); await settle(page, 300)
        await page.setViewportSize(viewport); await settle(page, 300)
        // The hero is viewport-height, so a resize can legitimately move the page; return to the same point.
        // Re-derive the target's untranslated layout top now (images and fonts may have moved the page since).
        await page.evaluate((h) => { const el = document.querySelector('[data-qa-target]'); const t = getComputedStyle(el).translate; const y = !t || t === 'none' ? 0 : parseFloat(t.split(' ')[1] ?? t) || 0; scrollTo({ top: el.getBoundingClientRect().top + scrollY - y - h * 0.92, behavior: 'instant' }) }, H); await settle(page)
        const afterResize = await read()
        // Control: the same re-derivation without any resize must give the same offset.
        await page.evaluate((h) => { const el = document.querySelector('[data-qa-target]'); const t = getComputedStyle(el).translate; const y = !t || t === 'none' ? 0 : parseFloat(t.split(' ')[1] ?? t) || 0; scrollTo({ top: el.getBoundingClientRect().top + scrollY - y - h * 0.92, behavior: 'instant' }) }, H); await settle(page)
        const control = await read()
        check(`${label}: no drift after resize`, Math.abs(afterResize - control) < 0.6, { entering, afterResize, control })
        // Hidden mid-flight, then visible without scrolling: nothing may stay frozen.
        await page.evaluate(([t, h]) => scrollTo({ top: t - h * 0.3, behavior: 'instant' }), [target, H])
        await page.waitForTimeout(40)
        await page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')) })
        await page.waitForTimeout(80)
        await page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => false }); document.dispatchEvent(new Event('visibilitychange')) })
        await settle(page)
        const recovered = await read()
        check(`${label}: hidden tab mid-flight recovers to the settled state`, Math.abs(recovered) < 0.5, recovered)
        // Focus inside a partly revealed group freezes it where it is: the control must not move while focused,
        // and a pointer press must land on the same control it started on.
        // Pick a control inside a scroll group well below the hero and bring it to ~80% of the viewport, mid-flight.
        const place = async () => { await page.evaluate(() => { const f = document.querySelector('[data-qa-focus]'); const g = f.closest('[data-scroll-story]'); const t = getComputedStyle(g).translate; const y = !t || t === 'none' ? 0 : parseFloat(t.split(' ')[1] ?? t) || 0; scrollTo({ top: f.getBoundingClientRect().top + scrollY - y - innerHeight * 0.8, behavior: 'instant' }) }); await page.waitForTimeout(60) }
        const focusable = await page.evaluate(() => { const f = [...document.querySelectorAll('[data-scroll-story] a, [data-scroll-story] button')].find(e => e.getBoundingClientRect().top + scrollY > innerHeight * 1.5); if (!f) return false; f.setAttribute('data-qa-focus', ''); return true })
        if (focusable) await place()
        check(`${label}: a partly revealed control exists`, focusable)
        if (focusable) {
          const top = () => page.evaluate(() => document.querySelector('[data-qa-focus]').getBoundingClientRect().top)
          await page.focus('[data-qa-focus]'); const t0 = await top(); await page.waitForTimeout(350); const t1 = await top()
          check(`${label}: keyboard-focused control stays stationary`, Math.abs(t1 - t0) < 1, { t0, t1 })
          await page.evaluate(() => document.activeElement.blur()); await settle(page)
          // Pointer: press, hold, release; the element under the pointer at release must be the same control.
          await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' })); await settle(page, 300); await place()
          const box = await page.locator('[data-qa-focus]').boundingBox()
          if (box) {
            await page.evaluate(() => { window.__qaClicks = 0; document.querySelector('[data-qa-focus]').addEventListener('click', e => { e.preventDefault(); window.__qaClicks++ }, { once: true }) })
            await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2); await page.mouse.down()
            // Motion before the press is expected (the group is mid-flight); from pointerdown on it must be frozen.
            const pressed = await page.locator('[data-qa-focus]').boundingBox(); await page.waitForTimeout(250)
            const held = await page.locator('[data-qa-focus]').boundingBox()
            await page.mouse.up(); await page.waitForTimeout(50)
            check(`${label}: pressed control does not move under the pointer`, pressed && held && Math.abs(held.y - pressed.y) < 1, { beforePress: box.y, atPress: pressed && pressed.y, held: held && held.y })
            check(`${label}: first click lands`, await page.evaluate(() => window.__qaClicks) === 1)
          }
        }
      }
      // Hero depth: the copy moves up and the embers move down as the hero scrolls away.
      await page.evaluate(() => scrollTo({ top: innerHeight * 0.5, behavior: 'instant' })); await settle(page)
      const hero = await page.evaluate(() => { const c = document.querySelector('[data-scroll-hero="copy"]'), i = document.querySelector('[data-scroll-hero="image"]'); return { c: c && getComputedStyle(c).translate, i: i && getComputedStyle(i).translate, ci: c && getComputedStyle(c).opacity } })
      check(`${label}: hero copy has scroll depth`, hero.c && hero.c !== 'none' && hero.c.includes('-'), hero)
      check(`${label}: hero embers have scroll depth`, hero.i && hero.i !== 'none', hero)
      check(`${label}: hero copy stays opaque while moving`, hero.ci === '1', hero.ci)
      if (label === '1440') await page.screenshot({ path: `${out}/home-${label}-midscroll.png` })
      // Dynamic reduced motion removes everything; turning it off restores it.
      await page.emulateMedia({ reducedMotion: 'reduce' }); await settle(page, 300)
      const reduced = await page.evaluate(() => ({ s: document.querySelectorAll('[data-scroll-story]').length, h: document.querySelectorAll('[data-scroll-hero]').length, styles: [...document.querySelectorAll('.reveal')].filter(e => e.style.getPropertyValue('--story-y')).length }))
      check(`${label}: reduced motion removes markers and styles`, reduced.s === 0 && reduced.h === 0 && reduced.styles === 0, reduced)
      await page.emulateMedia({ reducedMotion: 'no-preference' }); await settle(page, 300)
      const restored = await state(page)
      check(`${label}: motion re-enabled`, restored.count > 0, restored.count)
      await page.emulateMedia({ media: 'print' })
      const printed = await page.evaluate(() => [...document.querySelectorAll('[data-scroll-story],[data-scroll-hero]')].map(e => getComputedStyle(e).translate).filter(t => t !== 'none').length)
      check(`${label}: print is static`, printed === 0, printed)
      await page.emulateMedia({ media: 'screen' })
      // Anchor landing.
      await page.goto(base + '/company#contact', { waitUntil: 'networkidle' }); await settle(page, 900)
      const anchor = await page.evaluate(() => { const el = document.getElementById('contact'); return el ? Math.round(el.getBoundingClientRect().top) : null })
      check(`${label}: /company#contact lands at the section`, anchor !== null && anchor > -5 && anchor < 220, anchor)
    }
    // Excluded routes stay static.
    if (theme === 'dark') for (const route of EXCLUDED) {
      const r = await page.goto(base + route, { waitUntil: 'networkidle' }).catch(() => null)
      if (!r || r.status() >= 400) { check(`${label} ${route}: excluded route reachable`, false, r && r.status()); continue }
      await settle(page, 300)
      const n = await page.evaluate(() => document.querySelectorAll('[data-scroll-story],[data-scroll-hero]').length)
      check(`${label} ${route}: excluded route untouched`, n === 0, n)
    }
    await context.close()
  }
}
// No JavaScript: everything visible, nothing marked.
{
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } })
  const page = await context.newPage()
  for (const route of PUBLIC) {
    await page.goto(base + route, { waitUntil: 'load' })
    const s = await page.evaluate(() => ({ marked: document.querySelectorAll('[data-scroll-story]').length, hidden: [...document.querySelectorAll('.reveal')].filter(e => getComputedStyle(e).opacity !== '1').length }))
    check(`noJS ${route}: content visible and unmarked`, s.marked === 0 && s.hidden === 0, s)
  }
  await context.close()
}
// Reduced motion from first load.
{
  const context = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } })
  const page = await context.newPage()
  await page.goto(base + '/', { waitUntil: 'networkidle' }); await settle(page, 300)
  const n = await page.evaluate(() => document.querySelectorAll('[data-scroll-story],[data-scroll-hero]').length)
  check('reduced motion at load: nothing registered', n === 0, n)
  await context.close()
}
check('no page errors', errors.length === 0, errors.slice(0, 5))
await browser.close()
const failed = results.filter(r => !r.pass)
writeFileSync(`${out}/FOUNDRY-CHECKS.json`, JSON.stringify(results, null, 2))
console.log(`${failed.length ? 'FAIL' : 'PASS'}: ${results.length - failed.length}/${results.length} checks`)
process.exit(failed.length ? 1 : 0)
