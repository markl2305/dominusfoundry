/* components/site/qp/parts.tsx — quality pass D2 (2026-10-14): small parts for
   /systems, the three engines, /mentis, /about, /careers, /blog and /learn.
   New file, not a change to the shared primitives: the other quality-pass lane
   builds from the same commit in parallel.
   ⛔ No copy lives here. Every word on screen comes from the page that uses it. */
import type { CSSProperties, ReactNode } from 'react'
import HeroEmbers from '../HeroEmbers'

/* The forge close band of /pitch and the home page (the primitives' ClosingCta
   look), carrying only the page's own closing line and actions: no default
   eyebrow and no added contact line, so the page says nothing it did not say
   before. */
export function CloseBand({ id = 'close', name, eyebrow, title, lead, actions }: {
  id?: string; name: string; eyebrow?: ReactNode; title: ReactNode; lead?: ReactNode; actions?: ReactNode
}) {
  return <section className="section on-dark cta qp-close" id={id} data-name={name} aria-labelledby={`h-${id}`}>
    <HeroEmbers />
    <div className="wrap" style={{ position: 'relative' }}>
      <div className="sec-head reveal">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="h2" id={`h-${id}`}>{title}</h2>
        {lead && (typeof lead === 'string' ? <p className="lead">{lead}</p> : lead)}
      </div>
      {actions && <div className="actions reveal">{actions}</div>}
    </div>
  </section>
}

/* The three engines as one picture, in HTML: each engine a node that links to
   its page, joined left to right, all standing on one foundation bar. Labels
   are passed in by the page (engine names and the foundation line). */
export function EngineFlow({ engines, base, labelledBy }: {
  engines: { name: string; href: string; k: ReactNode }[]; base: ReactNode; labelledBy: string
}) {
  return <figure className="qp-flow reveal" aria-labelledby={labelledBy}>
    <ol className="qp-flow-row">
      {engines.map((e, i) => <li key={e.href} className="qp-flow-node" style={{ '--i': i } as CSSProperties}>
        <a href={e.href}>
          <span className="tile-k" aria-hidden="true">{e.k}</span>
          <span className="qp-flow-name">{e.name}</span>
        </a>
        {i < engines.length - 1 && <span className="qp-flow-arrow" aria-hidden="true" />}
      </li>)}
    </ol>
    <p className="qp-flow-base">{base}</p>
  </figure>
}

/* An article's grid tile for the /blog and /learn indexes: title, dek, date. */
export function ArticleCard({ href, title, dek, meta, kicker, i = 0 }: {
  href: string; title: ReactNode; dek?: ReactNode; meta?: ReactNode; kicker?: ReactNode; i?: number
}) {
  return <a href={href} className="card reveal qp-article-card" style={{ '--i': i } as CSSProperties}>
    {kicker && <span className="tile-k">{kicker}</span>}
    <span className="tile-t">{title}</span>
    {dek && <span className="tile-p">{dek}</span>}
    {meta && <span className="qp-article-meta">{meta}</span>}
  </a>
}
