/* The site footer (2026-10-14), shared by every route and /pitch: the link
   columns (FOOTER_COLS, unchanged), the persistent /privacy link inside them,
   the ©, motto and the LocateFaith badge. `blurb` and `note` carry each
   route's own existing footer copy verbatim; the legal row adds the
   "Your privacy choices" link (2026-10-15). */
import type { ReactNode } from 'react'
import { FOOTER_COLS } from '@/components/foundry/footer-links'

const CHOICES = <a href="/privacy#analytics-choice" data-consent-open="">Your privacy choices</a>

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
        {/* "Your privacy choices" (Mark 2026-10-14, shared memory 77550c45): on every page, in every region.
            public/consent/consent.js re-opens the allow / no-analytics choice on click (data-consent-open); with
            JavaScript off or under Global Privacy Control it is an ordinary link to the choice on the privacy notice.
            A plain <a>, not <Link>, so the gate's capture-phase handler sees the click before the client-side router.
            In the legal row, after the existing line, so the link columns above are unchanged. */}
        {note ? <p>{note}{' · '}{CHOICES}</p> : <span>{copyright}{' · '}{CHOICES}</span>}
        <span className="f-motto">Fide et Familia</span>
      </div>
      <div className="locatefaith-badge">
        {/* eslint-disable-next-line @next/next/no-img-element -- exact external badge markup, as on every route */}
        <a href="https://locatefaith.com/business/sabina-by-dominus-foundry"><img src="https://locatefaith.com/brand/verified-badge-v2.svg" alt="Verified Christian Business on LocateFaith" width="240" height="107" /></a>
        {/* NVIDIA Inception member badge (2026-10-15): NVIDIA's official full-colour artwork, unmodified and
            self-hosted. NVIDIA shows the same badge on light and dark grounds. 93x40: the framed box renders
            ~30px, NVIDIA's minimum, and stays smaller than the 36px crest. */}
        {/* eslint-disable-next-line @next/next/no-img-element -- official artwork served as-is */}
        <a className="nv-badge" href="https://www.nvidia.com/en-us/startups/" rel="noopener"><img src="/brand/nvidia-inception-program-badge.svg" alt="Dominus Foundry is a member of NVIDIA Inception" width="93" height="40" /></a>
      </div>
      <p className="nv-legal">© 2026 NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks and/or registered trademarks of NVIDIA Corporation in the U.S. and other countries.</p>
    </div>
  </footer>
}
