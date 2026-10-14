'use client'
/* Theme and the segmented control, shared by every route (2026-10-14). Moved
   unchanged out of app/pitch/ui.tsx, which re-exports both, so /pitch and the
   site shell run one implementation.

   THEME — System (default) · Dark · Light, on the site's own df-theme key.
   "System" is the absence of a stored choice; Dark and Light are stored as
   'dark' / 'light', so a choice made on any route carries across the site.
   The pre-paint script in app/layout.tsx has already written data-df-theme
   and data-dfp-pref before first paint, so nothing flashes. */
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

const useIso = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* SEGMENTED CONTROL — one implementation for every instance. */
export function Segmented<T extends string>({ items, value, onChange, label, className = '', id, thumbFromRoot = false }: {
  items: { v: T; label: ReactNode; title?: string; aria?: string }[]; value: T; onChange: (v: T) => void; label: string; className?: string; id?: string; thumbFromRoot?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const i = Math.max(0, items.findIndex((it) => it.v === value))
  const style = { '--n': items.length, ...(thumbFromRoot ? {} : { '--i': i }) } as CSSProperties
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length
    onChange(items[next].v)
    ref.current?.querySelectorAll('button')[next]?.focus()
    e.preventDefault()
  }
  return <div ref={ref} className={`seg ${className}`} role="radiogroup" aria-label={label} id={id} style={style} onKeyDown={onKey}>
    {items.map((it, j) => <button key={it.v} type="button" role="radio" aria-checked={j === i} tabIndex={j === i ? 0 : -1} title={it.title} aria-label={it.aria} onClick={() => onChange(it.v)}>{it.label}</button>)}
  </div>
}

export type Pref = 'system' | 'dark' | 'light'
const readStored = (): Pref => { try { const s = localStorage.getItem('df-theme'); return s === 'dark' || s === 'light' ? s : 'system' } catch { return 'system' } }
const resolve = (pref: Pref) => (pref === 'dark' || (pref === 'system' && !window.matchMedia('(prefers-color-scheme: light)').matches) ? 'dark' : 'light')

export function useThemePref() {
  const [pref, setPref] = useState<Pref>('system')
  const applyRef = useRef<(p: Pref, animate: boolean) => void>(() => {})
  // The in-memory choice is authoritative for this visit (review R4, 2026-10-14).
  // Storage may be denied (private windows, blocked site data): a failed write
  // must not undo the choice, so nothing below re-reads storage after the first
  // load — OS changes consult this ref, never localStorage.
  const prefRef = useRef<Pref>('system')
  useIso(() => {
    const root = document.documentElement
    const apply = (next: Pref, animate: boolean) => {
      const theme = resolve(next)
      const swap = () => { root.setAttribute('data-dfp-pref', next); root.setAttribute('data-df-theme', theme) }
      const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
      if (animate && theme !== root.getAttribute('data-df-theme') && doc.startViewTransition && !reduced()) doc.startViewTransition(swap); else swap()
    }
    // <html data-dfp-pref> is the page's in-memory preference: the pre-paint script writes it from storage
    // on load and every choice rewrites it, so a control mounting on a later route (client navigation) takes
    // it from there and never re-reads storage, which may be denied and would forget the visitor's choice.
    const held = root.getAttribute('data-dfp-pref')
    const initial: Pref = held === 'system' || held === 'dark' || held === 'light' ? held : readStored()
    prefRef.current = initial; setPref(initial); apply(initial, false)
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onSystem = () => { if (prefRef.current === 'system') apply('system', true) }
    mq.addEventListener('change', onSystem)
    applyRef.current = apply
    // Every route now carries this control, so the attributes stay on <html>
    // across client navigation; the next route's control re-applies on mount.
    return () => { mq.removeEventListener('change', onSystem) }
  }, [])
  const choose = useCallback((next: Pref) => {
    try { if (next === 'system') localStorage.removeItem('df-theme'); else localStorage.setItem('df-theme', next) } catch { /* storage blocked: the choice lasts this visit */ }
    prefRef.current = next; setPref(next); applyRef.current(next, true)
  }, [])
  return [pref, choose] as const
}

const ICON_SYSTEM = <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="9" rx="1.5" /><path d="M5.5 14h5M8 11.5V14" /></svg>
const ICON_DARK = <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M13.5 9.8A5.8 5.8 0 0 1 6.2 2.5a5.8 5.8 0 1 0 7.3 7.3Z" /></svg>
const ICON_LIGHT = <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><circle cx="8" cy="8" r="3" /><path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3 3l1.1 1.1M11.9 11.9 13 13M3 13l1.1-1.1M11.9 4.1 13 3" /></svg>

/* The nav's System / Dark / Light control. */
export function ThemeControl() {
  const [pref, choose] = useThemePref()
  return <Segmented<Pref> className="seg-theme" label="Appearance" id="themeSeg" value={pref} onChange={choose} thumbFromRoot items={[
    { v: 'system', title: 'Match system', aria: 'Match system', label: <>{ICON_SYSTEM}<span className="lbl" aria-hidden="true">System</span></> },
    { v: 'dark', title: 'Dark', aria: 'Dark', label: <>{ICON_DARK}<span className="lbl" aria-hidden="true">Dark</span></> },
    { v: 'light', title: 'Light', aria: 'Light', label: <>{ICON_LIGHT}<span className="lbl" aria-hidden="true">Light</span></> },
  ]} />
}
