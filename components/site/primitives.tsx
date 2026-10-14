/* Page building blocks in the /pitch language (2026-10-14). Usable from server
   and client components alike. Each takes the page's own copy as children;
   nothing here carries copy of its own except the arrow glyph. */
import type { CSSProperties, ReactNode } from 'react'
import HeroEmbers from './HeroEmbers'

export const Arr = () => <span className="arr" aria-hidden="true">→</span>

/* The dark forge at the top of every page. `data-hero` tells the nav to stay
   clear over it. `crest` shows the heraldic crest above the eyebrow. */
export function PageHero({ eyebrow, title, lead, actions, children, crest = false, center = false, tall = false, embers = true, id = 'top', titleId, meta }: {
  eyebrow?: ReactNode; title: ReactNode; lead?: ReactNode; actions?: ReactNode; children?: ReactNode
  crest?: boolean; center?: boolean; tall?: boolean; embers?: boolean; id?: string; titleId?: string; meta?: ReactNode
}) {
  return <section className={`page-hero on-dark${center ? ' center' : ''}${tall ? ' tall' : ''}`} id={id} data-hero="" aria-labelledby={titleId}>
    {embers && <HeroEmbers />}
    <div className="wrap">
      <div className={`hero-in${center ? ' center' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- same crest file the site already serves */}
        {crest && <img className="crest" src="/brand/crest-full.png" alt="Dominus Foundry crest, Fide et Familia" width="124" height="140" />}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display" id={titleId}>{title}</h1>
        {lead && (typeof lead === 'string' ? <p className="lead">{lead}</p> : lead)}
        {actions && <div className="actions">{actions}</div>}
        {children}
      </div>
      {meta && <div className="hero-meta">{meta}</div>}
    </div>
  </section>
}

/* A page section with the /pitch chapter head: eyebrow, h2, one lead line. */
export function Section({ id, eyebrow, title, lead, children, className = '', center = false, headClass = '' }: {
  id?: string; eyebrow?: ReactNode; title?: ReactNode; lead?: ReactNode; children?: ReactNode; className?: string; center?: boolean; headClass?: string
}) {
  const hid = id ? `h-${id}` : undefined
  return <section className={`section ${className}`.trim()} id={id} aria-labelledby={title ? hid : undefined}>
    <div className="wrap">
      {(eyebrow || title || lead) && <div className={`sec-head reveal${center ? ' center' : ''} ${headClass}`.trim()}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="h2" id={hid}>{title}</h2>}
        {lead && (typeof lead === 'string' ? <p className="lead">{lead}</p> : lead)}
      </div>}
      {children && ((eyebrow || title || lead) ? <div className="sec-body">{children}</div> : children)}
    </div>
  </section>
}

/* Secondary detail one level deeper, as on /pitch. */
export function More({ summary, children, className = '', bodyClass = '', open = false }: { summary: ReactNode; children: ReactNode; className?: string; bodyClass?: string; open?: boolean }) {
  return <details className={`more ${className}`.trim()} open={open}>
    <summary>{summary} <span className="plus" aria-hidden="true" /></summary>
    <div className={`more-body ${bodyClass}`.trim()}>{children}</div>
  </details>
}

/* A card tile: mono kicker, serif title, one paragraph. */
export function Tile({ k, t, children, i = 0, className = '' }: { k?: ReactNode; t?: ReactNode; children?: ReactNode; i?: number; className?: string }) {
  return <div className={`card reveal ${className}`.trim()} style={{ '--i': i } as CSSProperties}>
    {k && <p className="tile-k">{k}</p>}
    {t && <p className="tile-t">{t}</p>}
    {children && (typeof children === 'string' ? <p className="tile-p">{children}</p> : children)}
  </div>
}

/* The closing call to action band of the Foundry pages, as FoundryShell's CTA
   rendered it: the same default eyebrow and the same contact line, now in the
   /pitch language (a dark band in both themes). */
export function ClosingCta({ eyebrow = 'Fide et Familia', title, lead, actions, id = 'contact' }: { eyebrow?: ReactNode; title: ReactNode; lead?: ReactNode; actions: ReactNode; id?: string }) {
  return <section className="section on-dark cta" id={id}>
    <HeroEmbers />
    <div className="wrap" style={{ position: 'relative' }}>
      <div className="sec-head reveal">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="h2">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      <div className="actions reveal">{actions}</div>
      <p className="cta-contact">(505) 520-1433 · foundry@dominusfoundry.com</p>
    </div>
  </section>
}
