'use client'
/* The site menu (2026-10-14): every route below the desktop breakpoint, and
   /pitch at every width. It is a <details> element, so it opens, closes and
   reaches every link with no script; this component adds Escape, an outside
   press, and closing when a link is followed. */
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, MENU_EXTRA, CONTACT, activeFor } from './nav-links'

export default function SiteMenu() {
  const ref = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()
  const active = activeFor(pathname)

  useEffect(() => { if (ref.current) ref.current.open = false }, [pathname])
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const close = (focus: boolean) => { el.open = false; if (focus) el.querySelector('summary')?.focus() }
    const onDown = (e: PointerEvent) => { if (el.open && !el.contains(e.target as Node)) close(false) }
    const onKey = (e: KeyboardEvent) => { if (el.open && e.key === 'Escape') close(true) }
    // The panel is a non-modal disclosure laid over the page, so it does not trap focus. Instead it closes the
    // moment focus leaves it (Tab past the last link, Shift+Tab off the trigger): focus can never land on
    // content the open panel is covering (review lesson R2, 2026-10-14).
    const onFocusOut = (e: FocusEvent) => { const to = e.relatedTarget as Node | null; if (el.open && to && !el.contains(to)) close(false) }
    document.addEventListener('pointerdown', onDown); document.addEventListener('keydown', onKey); el.addEventListener('focusout', onFocusOut)
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); el.removeEventListener('focusout', onFocusOut) }
  }, [])
  const onClick = (e: React.MouseEvent) => { if ((e.target as HTMLElement).closest('a') && ref.current) ref.current.open = false }

  return <details className="menu" ref={ref} onClick={onClick}>
    <summary aria-label="Menu">
      <svg className="bars" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2.5 5h11M2.5 11h11" /></svg>
      <svg className="x" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" /></svg>
      <span className="lbl">Menu</span>
    </summary>
    <nav className="menu-panel" aria-label="Site">
      <ul>
        {NAV_LINKS.map((l) => <li key={l.id}><a href={l.href} aria-current={active === l.id ? 'page' : undefined}>{l.label}</a></li>)}
        <li className="menu-sep" aria-hidden="true" />
        {MENU_EXTRA.map((l) => <li key={l.id}><a href={l.href} aria-current={active === l.id ? 'page' : undefined}>{l.label}</a></li>)}
        <li><a className="menu-cta" href={CONTACT.href}>{CONTACT.label}</a></li>
      </ul>
    </nav>
  </details>
}
