'use client'
/* Motion v2 (family rule 11, Mark 2026-11-03): one-time, time-based entrances, the behaviour approved on
   managedprivateai.com (hiresabina bbdd40b4), in this site's code style. Native scrolling is never touched and
   nothing here follows the scroll position.

   - Targets: the blocks this site already marks `.reveal` (cards, section heads, prose, callouts …) on every main
     route and on /pitch. The hero, the nav and anything nested inside another target are left alone.
   - Each block plays ONE entrance (opacity + 20px rise, 12px on phones, 700ms, Apple ease) when it first comes about
     15% into the viewport, and never again. Blocks arriving together share at most a 100ms stagger, so every
     entrance ends within 800ms.
   - Shown at once, never blank: anything on screen at load (and anything above it), anything a fast flick skips past,
     anything shown while focus moves into it, and everything a deep link or in-page anchor jump passes or lands on
     (until `scrollend`, with a 1.5s fallback).
   - No JS, reduced motion and print: everything is simply visible (the hidden state exists only once this has run).
   It also fades images in from their placeholder colour when they finish loading after first paint (rule 12). */
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const STAGGER = 80, WINDOW = 100
const HERO = '[data-hero], .page-hero, .hero, header, footer, nav, [data-no-reveal]'

export default function Reveal() {
  const route = usePathname()
  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const cleanups: Array<() => void> = []

    // Images: a load fade (300ms) only for images still loading after first paint. Cached images show at once.
    if (!reduce.matches) {
      document.querySelectorAll<HTMLImageElement>('main img').forEach((img) => {
        if (img.complete) return
        img.setAttribute('data-img-loading', '')
        const done = () => img.removeAttribute('data-img-loading')
        img.addEventListener('load', done, { once: true }); img.addEventListener('error', done, { once: true })
        cleanups.push(() => { img.removeEventListener('load', done); img.removeEventListener('error', done); done() })
      })
    }
    // Disclosures (Sol r4 M7): the content opens at once; on a reader's own click or key on the summary of a closed
    // disclosure its body fades in and rises 8px over 250ms (.more-opening). The class goes on in the click itself,
    // before the browser opens it, so the body never shows for a frame before fading in. Never for one open at load.
    if (!reduce.matches) {
      const onSummaryClick = (e: Event) => {
        const d = (e.target as Element | null)?.closest?.('details.more > summary')?.parentElement as HTMLDetailsElement | null
        if (!d || d.open) return
        d.classList.remove('more-opening'); void d.offsetWidth; d.classList.add('more-opening')
        window.setTimeout(() => d.classList.remove('more-opening'), 320)
      }
      document.addEventListener('click', onSummaryClick, true)
      cleanups.push(() => document.removeEventListener('click', onSummaryClick, true))
    }
    if (reduce.matches) return () => cleanups.forEach((f) => f())

    const all = Array.from(document.querySelectorAll<HTMLElement>('main .reveal')).filter((el) => !el.closest(HERO))
    const items = all.filter((el) => !all.some((o) => o !== el && o.contains(el)))
    // After its entrance (or at once) a block drops every reveal attribute, so its own press and hover transitions
    // apply again; the end state equals its normal state, so nothing jumps.
    const timers: number[] = []
    const release = (el: HTMLElement) => { el.removeAttribute('data-reveal'); el.removeAttribute('data-revealed'); el.style.removeProperty('--reveal-delay') }
    const show = (el: HTMLElement, delay: number) => {
      el.style.setProperty('--reveal-delay', `${delay}ms`); el.setAttribute('data-revealed', '')
      timers.push(window.setTimeout(() => release(el), delay + 760))
    }
    const showNow = (el: HTMLElement) => {
      // shown instantly: no transition of its own may carry it in either
      el.style.transition = 'none'; release(el); void el.offsetWidth
      window.requestAnimationFrame(() => { el.style.removeProperty('transition') })
    }
    // Only blocks still below the viewport wait; anything on screen or above it at load shows at once.
    const waiting = items.filter((el) => el.getBoundingClientRect().top >= window.innerHeight)
    items.forEach((el) => el.setAttribute('data-reveal', ''))
    items.filter((el) => !waiting.includes(el)).forEach(showNow)
    root.setAttribute('data-motion-ready', '')
    const pending = new Set(waiting)
    const drop = (el: HTMLElement) => { pending.delete(el); observer.unobserve(el); jumpObserver.unobserve(el) }

    let lastY = window.scrollY, initial = true, jumping = false, jumpTimer = 0
    const endJump = () => { jumping = false; window.clearTimeout(jumpTimer) }
    const startJump = () => { jumping = true; window.clearTimeout(jumpTimer); jumpTimer = window.setTimeout(endJump, 1500); window.addEventListener('scrollend', endJump, { once: true }) }
    if (location.hash) startJump()
    window.addEventListener('hashchange', startJump)
    // An in-page anchor to the same hash fires no hashchange; catch the click instead.
    const onAnchor = (e: MouseEvent) => { const a = (e.target as Element | null)?.closest?.('a[href^="#"]'); if (a) startJump() }
    document.addEventListener('click', onAnchor, true)

    const observer = new IntersectionObserver((entries) => {
      const jumped = initial || jumping || Math.abs(window.scrollY - lastY) > window.innerHeight * 0.9
      lastY = window.scrollY; initial = false
      const entering = entries.filter((e) => e.isIntersecting && pending.has(e.target as HTMLElement)).map((e) => e.target as HTMLElement)
      if (!entering.length) return
      entering.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      // Anything earlier in the page that a fast flick skipped shows at once.
      const first = entering[0]
      pending.forEach((el) => { if (el.compareDocumentPosition(first) & Node.DOCUMENT_POSITION_FOLLOWING) { showNow(el); drop(el) } })
      const step = entering.length > 1 ? Math.min(STAGGER, WINDOW / (entering.length - 1)) : 0
      entering.forEach((el, i) => {
        drop(el)
        // Arrived by a jump, or already well inside the viewport: show it at once.
        if (jumped || el.getBoundingClientRect().top < window.innerHeight * 0.5) showNow(el); else show(el, Math.round(i * step))
      })
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0 })
    // During a jump, a block anywhere in the viewport (not only past the 15% line) shows at once.
    const jumpObserver = new IntersectionObserver((entries) => {
      if (!jumping) return
      entries.forEach((e) => { const el = e.target as HTMLElement; if (e.isIntersecting && pending.has(el)) { showNow(el); drop(el) } })
    }, { threshold: 0 })
    waiting.forEach((el) => { observer.observe(el); jumpObserver.observe(el) })
    // Keyboard focus never waits for an entrance.
    const onFocus = (e: FocusEvent) => { const el = (e.target as Element | null)?.closest?.('[data-reveal]') as HTMLElement | null; if (el && pending.has(el)) { showNow(el); drop(el) } }
    document.addEventListener('focusin', onFocus)
    const stop = () => { if (reduce.matches) { pending.forEach(showNow); pending.clear(); observer.disconnect(); jumpObserver.disconnect() } }
    reduce.addEventListener('change', stop)
    return () => {
      observer.disconnect(); jumpObserver.disconnect(); reduce.removeEventListener('change', stop)
      window.removeEventListener('hashchange', startJump); window.removeEventListener('scrollend', endJump); window.clearTimeout(jumpTimer)
      document.removeEventListener('click', onAnchor, true); document.removeEventListener('focusin', onFocus)
      cleanups.forEach((f) => f()); timers.forEach((t) => window.clearTimeout(t))
    }
  }, [route])
  return null
}
