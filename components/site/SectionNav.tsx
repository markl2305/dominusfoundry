'use client'
/* SectionNav.tsx — the "where am I" section button for the site shell (2026-10-14).

   Ported from /pitch's chapter button (app/pitch/ui.tsx PitchNav): the current
   section's number and name in the nav, an index popover listing every named
   section, and the progress line along the nav's bottom edge. It reads the
   page's own `data-name` sections under `.dfs main`, so no page passes it
   anything, and it renders nothing on a page with fewer than three named
   sections. Like /pitch, the button only takes focus and shows once the nav has
   its material (`solid`). ⛔ No copy lives here: every label is a section's own
   data-name. */
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const useIso = typeof window !== 'undefined' ? useLayoutEffect : useEffect

type Sec = { el: HTMLElement; n: string; name: string; href: string }
const MIN_SECTIONS = 3
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useSections(pathname: string | null) {
  const [secs, setSecs] = useState<Sec[]>([])
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.dfs main [data-name]'))
      .filter((el) => (el.getAttribute('data-name') || '').trim())
    setSecs(els.map((el, i) => ({ el, n: String(i + 1).padStart(2, '0'), name: el.getAttribute('data-name')!.trim(), href: el.id ? `#${el.id}` : '#' })))
  }, [pathname])
  return secs.length >= MIN_SECTIONS ? secs : []
}

export function SectionButton({ secs, solid }: { secs: Sec[]; solid: boolean }) {
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)
  const btn = useRef<HTMLButtonElement>(null), idx = useRef<HTMLElement>(null)
  // Rule 12: the index opens from its trigger. Its transform origin is the button's centre (just above the panel),
  // measured whenever it opens, so it grows out of the button wherever the button sits.
  useIso(() => {
    const p = idx.current, b = btn.current; if (!p || !b || !open) return
    const pr = p.getBoundingClientRect(), br = b.getBoundingClientRect()
    p.style.transformOrigin = `${Math.round(br.left + br.width / 2 - pr.left)}px ${Math.round(br.bottom - pr.top - 8)}px`
  }, [open])

  useEffect(() => {
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { const i = secs.findIndex((s) => s.el === e.target); if (i >= 0) setCurrent(i) } }), { rootMargin: '-40% 0px -55% 0px' })
    secs.forEach((s) => io.observe(s.el))
    return () => io.disconnect()
  }, [secs])

  useEffect(() => { if (!solid) setOpen(false) }, [solid])

  useEffect(() => {
    const list = idx.current
    if (!list || !open) return
    (list.querySelector<HTMLElement>('[aria-current="true"]') || list.querySelector<HTMLElement>('a'))?.focus({ preventScroll: true })
    const onDown = (e: PointerEvent) => { if (!list.contains(e.target as Node) && !btn.current?.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus() } }
    document.addEventListener('pointerdown', onDown); document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  const go = (e: React.MouseEvent, s: Sec) => {
    e.preventDefault(); setOpen(false)
    s.el.scrollIntoView({ behavior: reduced() ? 'instant' as ScrollBehavior : 'smooth' })
    btn.current?.focus({ preventScroll: true })
  }
  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    const links = Array.from(idx.current?.querySelectorAll<HTMLElement>('a') || [])
    const i = links.indexOf(document.activeElement as HTMLElement)
    links[(i + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length]?.focus(); e.preventDefault()
  }
  // Sol r4 M1: React 18 drops an empty-string `inert`, so the closed index was never fenced and Tab reached its
  // invisible links. The attribute is now set on the element itself. Before an index closes with focus inside it
  // (Escape, or closing on its own as the page returns to the hero), focus moves to a visible control first:
  // the trigger while it is shown, otherwise <main> (without scrolling).
  useIso(() => {
    const p = idx.current; if (!p) return
    const live = open
    if (!live && p.contains(document.activeElement)) {
      const b = btn.current
      if (b && solid) b.focus({ preventScroll: true })
      else { const m = document.querySelector<HTMLElement>('main'); if (m) { if (!m.hasAttribute('tabindex')) m.setAttribute('tabindex', '-1'); m.focus({ preventScroll: true }) } }
    }
    if (live) p.removeAttribute('inert'); else p.setAttribute('inert', '')
  }, [open, solid])
  const c = secs[current] || secs[0]

  return <>
    <div className="sec-mid">
      <button ref={btn} type="button" className="sec-btn" aria-expanded={open} aria-controls="sectionIndex" aria-label={`Sections, current: ${c.n}, ${c.name}`} tabIndex={solid ? 0 : -1} onClick={() => setOpen((v) => !v)}>
        <span className="num-tag">{c.n}</span><span className="name">{c.name}</span>
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" /></svg>
      </button>
    </div>
    <nav className={`sec-index${open ? ' open' : ''}`} id="sectionIndex" aria-label="Section index" ref={idx}>
      <ol onKeyDown={onListKey}>
        {secs.map((s, i) => <li key={`${s.n}-${s.name}`}><a href={s.href} aria-current={i === current ? 'true' : 'false'} onClick={(e) => go(e, s)}><span className="n">{s.n}</span>{s.name}</a></li>)}
      </ol>
    </nav>
  </>
}

/* the progress line along the nav's bottom edge */
export function SectionProgress({ pathname }: { pathname: string | null }) {
  const prog = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return; ticking = true
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        if (prog.current) prog.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])
  return <div className="progress" ref={prog} aria-hidden="true" />
}
