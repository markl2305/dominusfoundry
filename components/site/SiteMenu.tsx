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

  // Family rule 12 (2026-11-03): the panel opens from its trigger (pure CSS, @starting-style) and closes along the
  // same path, faster. A close sets [data-closing], waits for the 150ms exit, then closes the <details>; clicking the
  // trigger again mid-close removes [data-closing] and the CSS transition carries on from where it is. Without JS the
  // native disclosure still works; under reduced motion every change is instant.
  const timer = useRef(0)
  const closeMenu = (opts: { focus?: boolean; instant?: boolean } = {}) => {
    const el = ref.current; if (!el) return
    const summary = el.querySelector('summary')
    // Escape returns focus to the trigger at once, so the request survives a close already in progress.
    if (opts.focus && el.open) summary?.focus()
    if (!el.open) return
    const finish = () => {
      if (!el.hasAttribute('data-closing')) return // reopened mid-close
      el.removeAttribute('data-closing'); el.open = false
      // whatever closed it, focus never stays inside the hidden panel
      if (el.querySelector('.menu-panel')?.contains(document.activeElement)) summary?.focus()
    }
    if (el.hasAttribute('data-closing') && !opts.instant) return
    el.setAttribute('data-closing', '')
    window.clearTimeout(timer.current)
    if (opts.instant || window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish()
    else timer.current = window.setTimeout(finish, 160)
  }
  useEffect(() => { closeMenu({ instant: true }) }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const summary = el.querySelector('summary'), panel = el.querySelector<HTMLElement>('.menu-panel')
    const onSummary = (e: Event) => {
      if (el.hasAttribute('data-closing')) { e.preventDefault(); window.clearTimeout(timer.current); el.removeAttribute('data-closing'); return }
      if (el.open) { e.preventDefault(); closeMenu(); return }
      // Opening: Chrome gives a closed <details>' content no style to transition from, so the start state is applied
      // for one style flush ([data-opening]: scale .96 / -16px on phones, opacity 0) and released at once; the
      // transition then runs from it. Same task, so nothing paints in between.
      if (!panel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      e.preventDefault()
      el.setAttribute('data-opening', ''); el.open = true
      void getComputedStyle(panel).opacity; void getComputedStyle(el, '::before').opacity
      el.removeAttribute('data-opening')
    }
    // An outside press closes it, including a tap on the phone scrim (a pseudo-element of the <details> itself).
    const onDown = (e: PointerEvent) => { const t = e.target as Node; if (el.open && !summary?.contains(t) && !panel?.contains(t)) closeMenu() }
    const onKey = (e: KeyboardEvent) => { if (el.open && e.key === 'Escape') closeMenu({ focus: true }) }
    // The panel is a non-modal disclosure laid over the page, so it does not trap focus. Instead it closes the
    // moment focus leaves it (Tab past the last link, Shift+Tab off the trigger): focus can never land on
    // content the open panel is covering (review lesson R2, 2026-10-14).
    const onFocusOut = (e: FocusEvent) => { const to = e.relatedTarget as Node | null; if (el.open && to && !el.contains(to)) closeMenu() }
    // Phones: swipe the sheet back up towards the header to dismiss it.
    let startY: number | null = null
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY }
    const onTouchEnd = (e: TouchEvent) => { if (startY !== null && startY - e.changedTouches[0].clientY > 40) closeMenu(); startY = null }
    summary?.addEventListener('click', onSummary)
    document.addEventListener('pointerdown', onDown); document.addEventListener('keydown', onKey); el.addEventListener('focusout', onFocusOut)
    panel?.addEventListener('touchstart', onTouchStart, { passive: true }); panel?.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      summary?.removeEventListener('click', onSummary)
      document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); el.removeEventListener('focusout', onFocusOut)
      panel?.removeEventListener('touchstart', onTouchStart); panel?.removeEventListener('touchend', onTouchEnd)
      window.clearTimeout(timer.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const onClick = (e: React.MouseEvent) => { if ((e.target as HTMLElement).closest('a') && ref.current) closeMenu({ instant: true }) }

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
