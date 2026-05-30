'use client'

/* FoundryShell.tsx — shared heraldic site chrome: theme state + Nav + Footer +
   global embers, exposed via context. Ported from shell.jsx.
   Production locks: direction = institution, ember intensity = 1.3, motion on.
   Only light/dark theme is user-togglable. */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import './foundry.css'
import Embers from './Embers'
import { Medallion, MiniCrest, Icon } from './Marks'
import type { CrestScheme } from './Crest'

const EMBER_INTENSITY = 1.3 // locked, tuned production value
const DIRECTION = 'institution' // locked

type Theme = 'light' | 'dark'
export type FoundryCtx = {
  theme: Theme
  crestScheme: CrestScheme
  emberI: number
  direction: 'institution'
}

const Ctx = createContext<FoundryCtx>({ theme: 'dark', crestScheme: 'ondark', emberI: EMBER_INTENSITY, direction: DIRECTION })
export const useFoundry = () => useContext(Ctx)

/* canonical nav — single source of truth across all pages */
const NAV_LINKS = [
  { id: 'forge', label: 'Forge', href: 'https://buildwithforge.app', ext: true },
  { id: 'ventures', label: 'Ventures', href: '/ventures' },
  { id: 'technology', label: 'Technology', href: '/technology' },
  { id: 'company', label: 'Company', href: '/company' },
  { id: 'press', label: 'Press', href: '/press' },
  { id: 'blog', label: 'Blog', href: '/blog' },
]

function Nav({ theme, active, onToggleTheme }: { theme: Theme; active: string | null; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner wrap">
        <a className="brand-lockup" href="/" aria-label="Dominus Foundry home">
          <MiniCrest scheme={theme === 'dark' ? 'ondark' : 'classic'} />
          <span className="brand-text">
            <span className="brand-word">
              Dominus Foundry<span className="tm">™</span>
            </span>
            <span className="brand-sub">Fide et Familia</span>
          </span>
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              className={`nav-link ${active === l.id ? 'current' : ''}`}
              href={l.href}
              target={l.ext ? '_blank' : undefined}
              rel={l.ext ? 'noopener' : undefined}
            >
              {l.label}
              {l.ext && <span className="ext">↗</span>}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}>
            {theme === 'dark' ? Icon.sun : Icon.moon}
          </button>
          <a className="nav-cta" href="/company#contact">
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

const FOOTER_COLS = [
  {
    h: 'Companies',
    links: [
      { t: 'Forge ↗', href: 'https://buildwithforge.app', ext: true },
      { t: 'Hyperion', href: '/technology' },
      { t: 'Foundry Capital', href: '/ventures' },
    ],
  },
  {
    h: 'Company',
    links: [
      { t: 'About', href: '/company' },
      { t: 'Leadership', href: '/company#leadership' },
      { t: 'Press', href: '/press' },
      { t: 'Foundry Notes', href: '/blog' },
      { t: 'Careers', href: '/company#contact' },
    ],
  },
  {
    h: 'Contact',
    links: [
      { t: 'foundry@dominusfoundry.com', href: 'mailto:foundry@dominusfoundry.com' },
      { t: '(866) 710-3313', href: 'tel:+18667103313' },
      { t: 'Albuquerque, New Mexico', href: '/company' },
    ],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="f-lock">
              <MiniCrest scheme="ondark" />
              <span className="brand-word">Dominus Foundry</span>
            </div>
            <p className="f-blurb">
              A family-owned technology holding company. The parent behind Forge, Hyperion, and Foundry Capital — forging software built to endure.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div className="f-col" key={col.h}>
              <h4>{col.h}</h4>
              {col.links.map((l) => (
                <a key={l.t} href={l.href} target={l.ext ? '_blank' : undefined} rel={l.ext ? 'noopener' : undefined}>
                  {l.t}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dominus Foundry. Built &amp; held by the Lord family.</span>
          <span className="motto serif" style={{ fontStyle: 'italic', fontSize: '13px', letterSpacing: '0.04em' }}>
            Fide et Familia
          </span>
        </div>
      </div>
    </footer>
  )
}

export default function FoundryShell({ active = null, children }: { active?: string | null; children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  // sync stored preference on mount (no system override — dark is the locked default look)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('df-theme') as Theme | null
      if (stored === 'light' || stored === 'dark') setTheme(stored)
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        window.localStorage.setItem('df-theme', next)
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const crestScheme: CrestScheme = theme === 'dark' ? 'ondark' : 'classic'
  const ctx: FoundryCtx = { theme, crestScheme, emberI: EMBER_INTENSITY, direction: DIRECTION }

  return (
    <Ctx.Provider value={ctx}>
      <div className="df-site" data-theme={theme} data-direction={DIRECTION}>
        <Embers key={`bg-${theme}`} className="global-embers" intensity={EMBER_INTENSITY} density={0.42} rise={0.6} />
        <Nav theme={theme} active={active} onToggleTheme={toggle} />
        <main>{children}</main>
        <Footer />
      </div>
    </Ctx.Provider>
  )
}

/* shared page primitives reused across sub-pages */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  metaLeft,
  metaRight,
  crest = false,
}: {
  eyebrow: ReactNode
  title: ReactNode
  lead?: ReactNode
  actions?: ReactNode
  metaLeft?: ReactNode
  metaRight?: ReactNode
  crest?: boolean
}) {
  const { emberI } = useFoundry()
  return (
    <section className="hero page-hero on-dark" id="top">
      <Embers className="embers-canvas" intensity={emberI} density={0.9} />
      <div className="hero-content">
        <div className="hero-inner">
          {crest && <Medallion className="hero-crest" scheme="ondark" />}
          <p className="eyebrow center">{eyebrow}</p>
          <h1 className="hero-title page-hero-title">{title}</h1>
          {lead && <p className="hero-lead">{lead}</p>}
          {actions && <div className="hero-actions">{actions}</div>}
        </div>
      </div>
      {(metaLeft || metaRight) && (
        <div className="hero-meta wrap">
          <span className="col">{metaLeft}</span>
          <span className="col">{metaRight}</span>
        </div>
      )}
    </section>
  )
}

export function CTA({
  eyebrow = 'Fide et Familia',
  title,
  lead,
  actions,
  id = 'contact',
}: {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  actions: ReactNode
  id?: string
}) {
  const { emberI } = useFoundry()
  return (
    <section className="cta on-dark" id={id}>
      <Embers className="embers-canvas" intensity={emberI} density={0.9} />
      <div className="wrap">
        {eyebrow && (
          <p className="eyebrow center" style={{ marginBottom: '22px' }}>
            {eyebrow}
          </p>
        )}
        <h2 className="reveal">{title}</h2>
        {lead && <p className="reveal d1">{lead}</p>}
        <div className="cta-actions reveal d1">{actions}</div>
        <p
          style={{
            marginTop: '28px',
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--hero-ink-2)',
          }}
        >
          (866) 710-3313 · foundry@dominusfoundry.com
        </p>
      </div>
    </section>
  )
}
