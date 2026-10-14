/* The site footer (2026-10-14), shared by every route and /pitch: the link
   columns (FOOTER_COLS, unchanged), the persistent /privacy link inside them,
   the ©, motto and the LocateFaith badge. `blurb` and `note` carry each
   route's own existing footer copy verbatim. */
import type { ReactNode } from 'react'
import { FOOTER_COLS } from '@/components/foundry/footer-links'

export default function SiteFooter({ blurb, note, copyright = <>© 2026 Dominus Foundry. Built &amp; held by the Lord family.</> }: { blurb: ReactNode; note?: ReactNode; copyright?: ReactNode }) {
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-top">
        <div className="f-brand">
          <a className="f-lock" href="/" aria-label="Dominus Foundry home">
            {/* eslint-disable-next-line @next/next/no-img-element -- same crest file the site already serves */}
            <img src="/brand/crest-full.png" alt="" width="32" height="36" />
            <span>Dominus Foundry</span>
          </a>
          <p className="f-blurb">{blurb}</p>
        </div>
        {FOOTER_COLS.map((col) => <div className="f-col" key={col.h}>
          <h4>{col.h}</h4>
          <ul>{col.links.map((l) => <li key={l.t}><a href={l.href} target={l.ext ? '_blank' : undefined} rel={l.ext ? 'noopener' : undefined}>{l.t}</a></li>)}</ul>
        </div>)}
      </div>
      <div className="footer-bottom">
        {note ? <p>{note}</p> : <span>{copyright}</span>}
        <span className="f-motto">Fide et Familia</span>
      </div>
      <div className="locatefaith-badge">
        {/* eslint-disable-next-line @next/next/no-img-element -- exact external badge markup, as on every route */}
        <a href="https://locatefaith.com/business/sabina-by-dominus-foundry"><img src="https://locatefaith.com/brand/verified-badge-v2.svg" alt="Verified Christian Business on LocateFaith" width="240" height="107" /></a>
      </div>
    </div>
  </footer>
}
