'use client'
/* SiteShell.tsx — the one shell for every route except /pitch (2026-10-14).

   Carries the approved /pitch redesign's chrome to the whole site: the
   translucent material nav (clear over a dark page hero, solid elsewhere),
   the System / Dark / Light theme control, press feedback, the site menu, and
   the footer in the same language. It replaces FoundryShell's look and the
   legacy SiteHeader / SiteFooter / PressRibbon / FooterCTA chrome, and keeps
   what they did:
   - the skip link to #main-content;
   - the press ribbon and the closing "Let's talk about your company." band on
     the routes that showed them (AppShell decides which, as before);
   - the routes that hid the header still hide the main navigation;
   - each footer keeps its own existing copy (FoundryShell's blurb, or
     SiteFooter's blurb and privacy line).
   The consent bar, chat launcher and analytics hooks are mounted by the root
   layout, not here, and are untouched. While the consent bar is shown the
   fixed nav starts below it (site.css), as the Foundry nav did. */
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import './site.css'
import { ThemeControl } from './theme'
import SiteMenu from './SiteMenu'
import SiteFooter from './SiteFooter'
import { NAV_LINKS, CONTACT, activeFor } from './nav-links'
import { SectionButton, SectionProgress, useSections } from './SectionNav'
import ScrollMotion from './motion/ScrollMotion'
import './motion/scroll-motion.css'

const useIso = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export type ShellVariant = 'foundry' | 'legacy' | 'bare'

const FOUNDRY_BLURB = <>Dominus Foundry builds and operates Managed AI for businesses. Sabina is your company&apos;s own managed private AI, with Forge included and work scoped to your information and authority. Built and held by Mark &amp; Bri Lord in Albuquerque, New Mexico.</>
const LEGACY_BLURB = <>We build Sabina, your company&apos;s own AI, shaped around your business, its knowledge, its work, and the authority you give her. Built and held by Mark &amp; Bri Lord in Albuquerque, New Mexico.</>
const LEGACY_NOTE = <>&copy; {new Date().getFullYear()} Dominus Foundry. Built and run by the Lord family. We do not sell your personal information. <a href="/privacy">Privacy &amp; Data Use</a></>

/* Reveal once, as each block arrives. Anything already on screen is marked
   before paint; the rest on first intersection. Re-run on every route. */
function useReveal(pathname: string | null) {
  useIso(() => {
    const html = document.documentElement
    html.classList.add('dfs-js', 'dfs-ready')
    const els = Array.from(document.querySelectorAll<HTMLElement>('.dfs .reveal:not([data-in])'))
    const vh = window.innerHeight
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute('data-in', ''); io.unobserve(e.target) } }), { rootMargin: '0px 0px -6% 0px' })
    els.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < vh && r.bottom > 0) el.setAttribute('data-in', ''); else io.observe(el) })
    return () => io.disconnect()
  }, [pathname])
}

function Nav({ variant, pathname }: { variant: ShellVariant; pathname: string | null }) {
  const [solid, setSolid] = useState(false)
  // Material as soon as the page moves, so content never scrolls visibly through a clear bar (Mark, 2026-10-14).
  const [scrolled, setScrolled] = useState(false)
  const active = activeFor(pathname)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])
  useEffect(() => {
    // Clear over a dark page hero, material everywhere else (as on /pitch).
    const hero = document.querySelector('.dfs main [data-hero]')
    if (!hero) { setSolid(true); return }
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: '-64px 0px 0px 0px', threshold: 0 })
    io.observe(hero)
    return () => io.disconnect()
  }, [pathname])
  const bare = variant === 'bare'
  // The "where am I" section button, as on /pitch, on any page with three or more data-name sections.
  const secs = useSections(pathname)
  const hasSecs = !bare && secs.length > 0
  return <header className={`nav${solid ? ' solid' : ''}${scrolled ? ' scrolled' : ''}${bare ? ' bare' : ''}${hasSecs ? ' has-secs' : ''}`} id="nav">
    <div className="wrap nav-in">
      <a className="brand" href="/" aria-label="Dominus Foundry home">
        {/* eslint-disable-next-line @next/next/no-img-element -- same crest file the site already serves */}
        <img src="/brand/crest-full.png" alt="" width="27" height="30" />
        <span className="brand-text"><span className="brand-name">DOMINUS FOUNDRY</span><span className="brand-motto">FIDE ET FAMILIA</span></span>
      </a>
      {!bare && <nav className="nav-links" aria-label="Primary">
        {NAV_LINKS.map((l) => <a key={l.id} className="nav-link" href={l.href} aria-current={active === l.id ? 'page' : undefined}>{l.label}</a>)}
      </nav>}
      {hasSecs && <SectionButton secs={secs} solid={solid} />}
      <div className="nav-right">
        <ThemeControl />
        {!bare && <a className="btn btn-solid nav-cta" href={CONTACT.href}>{CONTACT.label}</a>}
        {!bare && <SiteMenu />}
      </div>
    </div>
    {hasSecs && <SectionProgress pathname={pathname} />}
  </header>
}

/* The press ribbon the inside pages carried (PressRibbon.jsx), copy verbatim.
   The link still routes through /press/spw so clicks are logged on our side. */
function Ribbon() {
  return <div className="ribbon" data-shell="ribbon">
    <div className="wrap ribbon-in">
      <span className="tag">Featured</span>
      <p><b>Solar Power World</b> <span aria-hidden="true">&middot;</span> &ldquo;Forge software platform uses iPad LiDAR scanning for quick solar design proposals&rdquo;</p>
      <a href="/press/spw">Read the article <span aria-hidden="true">→</span></a>
    </div>
  </div>
}

/* The closing band the inside pages carried (FooterCTA.jsx), copy verbatim. */
function ClosingCta() {
  return <section className="section tight on-dark cta" data-shell="closing">
    <div className="wrap">
      <div className="sec-head reveal">
        <h2 className="h2">Let’s talk about your company.</h2>
      </div>
      <div className="actions reveal"><a className="btn btn-solid" href="/company#contact">Contact the team <span className="arr" aria-hidden="true">→</span></a></div>
    </div>
  </section>
}

export default function SiteShell({ variant, ribbon = false, closingCta = false, children }: { variant: ShellVariant; ribbon?: boolean; closingCta?: boolean; children: ReactNode }) {
  const pathname = usePathname()
  const root = useRef<HTMLDivElement>(null)
  useReveal(pathname)
  return <div className="dfs" ref={root}>
    <a className="skip" href="#main-content">Skip to content</a>
    <Nav variant={variant} pathname={pathname} />
    <main id="main-content">
      {ribbon && <Ribbon />}
      {children}
      {closingCta && <ClosingCta />}
    </main>
    <SiteFooter blurb={variant === 'foundry' ? FOUNDRY_BLURB : LEGACY_BLURB} note={variant === 'foundry' ? undefined : LEGACY_NOTE} />
    {/* Scroll-linked reveal on the public Foundry pages only (the route list lives in ScrollMotion). */}
    <ScrollMotion />
  </div>
}
