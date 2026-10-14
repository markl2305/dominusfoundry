/* components/site/qp/EnginePage.tsx — quality pass D2 (2026-10-14): the one
   template behind /systems/intake, /systems/revenue and /systems/ops.

   Hero: the engine, its live headline as the lead statement, one action.
   Then: where it breaks (the page's own intro and its × list) · the channels
   (Intake only) · the five solutions as tiles · the page's quote (Revenue
   only) · the governance line as a statement band · the next-engine card ·
   the page's own "Tell us …" close.
   ⛔ No copy lives here: every word is passed in by the page. */
import type { CSSProperties, ReactNode } from 'react'
import Button from '@/components/Button'
import { PageHero } from '../primitives'
import { CloseBand } from './parts'

export type EngineCopy = {
  className: string
  eyebrow: string
  name: string
  tagline: ReactNode
  intro: ReactNode
  primary: { href: string; label: ReactNode }
  secondary: { href: string; label: ReactNode }
  problem: { eyebrow: ReactNode; title: ReactNode; items: string[] }
  channels?: { eyebrow: ReactNode; title: ReactNode; items: { label: string; description: string }[] }
  solutions: { eyebrow: ReactNode; title: ReactNode; lead?: ReactNode; items: { title: string; description: string }[] }
  quote?: { eyebrow: ReactNode; text: ReactNode; by: ReactNode }
  governance: { eyebrow: ReactNode; title: ReactNode; body: ReactNode; action: { href: string; label: ReactNode } }
  next: { eyebrow: ReactNode; title?: ReactNode; body: ReactNode; extra?: ReactNode }
  close: { title: ReactNode; lead: ReactNode; action: { href: string; label: ReactNode } }
}

export default function EnginePage({ c }: { c: EngineCopy }) {
  return <div className={`pg-systems qp qp-engine ${c.className}`}>
    <PageHero
      eyebrow={c.eyebrow}
      title={c.name}
      lead={<p className="lead hero-statement">{c.tagline}</p>}
      actions={<>
        <Button href={c.primary.href}>{c.primary.label}</Button>
        <Button href={c.secondary.href} variant="forgeSecondary">{c.secondary.label}</Button>
      </>}
    />

    {/* Where it breaks: the page's own opening paragraph, then its list */}
    <section className="section" id="problem" data-name="The problem" aria-labelledby="h-problem">
      <div className="wrap two-col">
        <div className="sec-head reveal">
          <p className="eyebrow">{c.problem.eyebrow}</p>
          <h2 className="h2" id="h-problem">{c.problem.title}</h2>
          <p className="lead">{c.intro}</p>
        </div>
        <div className="x-grid">
          {c.problem.items.map((item, i) => (
            <div key={item} className="x-item reveal" style={{ '--i': i } as CSSProperties}>
              <span className="x">&times;</span>{' '}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {c.channels && <section className="section band" id="channels" data-name="Channels" aria-labelledby="h-channels">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">{c.channels.eyebrow}</p>
          <h2 className="h2" id="h-channels">{c.channels.title}</h2>
        </div>
        <div className="sec-body">
          <div className="rows reveal">
            {c.channels.items.map((ch) => (
              <div key={ch.label}>
                <span>{ch.label}</span>
                <p>{ch.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>}

    <section className={`section${c.channels ? '' : ' band'}`} id="solutions" data-name="Solutions" aria-labelledby="h-solutions">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">{c.solutions.eyebrow}</p>
          <h2 className="h2" id="h-solutions">{c.solutions.title}</h2>
          {c.solutions.lead && <p className="lead">{c.solutions.lead}</p>}
        </div>
        <div className="sec-body">
          <div className="g-five">
            {c.solutions.items.map((s, i) => (
              <div key={s.title} className="card reveal sol" style={{ '--i': i } as CSSProperties}>
                <p className="tile-k" aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="tile-t">{s.title}</h3>
                <p className="tile-p">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {c.quote && <section className="section" id="practice" data-name="In practice">
      <div className="wrap">
        <div className="sec-head reveal"><p className="eyebrow">{c.quote.eyebrow}</p></div>
        <div className="sec-body">
          <figure className="card reveal quote eng-quote">
            <blockquote>{c.quote.text}</blockquote>
            <figcaption className="fine">{c.quote.by}</figcaption>
          </figure>
        </div>
      </div>
    </section>}

    {/* Platform band. Named the internal system until 2026-09-16; prohibited
        on public Dominus marketing (plan §17). The governance layer is Forge,
        the operating spine. ⛔ Do not reintroduce the old name here. */}
    <section className="section on-dark" id="governance" data-name="Forge" aria-labelledby="h-governance">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">{c.governance.eyebrow}</p>
          <h2 className="statement" id="h-governance">{c.governance.title}</h2>
          <p className="lead">{c.governance.body}</p>
        </div>
        <div className="actions reveal gov-action">
          <Button href={c.governance.action.href} variant="forgeSecondary">{c.governance.action.label}</Button>
        </div>
      </div>
    </section>

    <section className="section" id="next" data-name="Next" aria-labelledby={c.next.title ? 'h-next' : undefined}>
      <div className="wrap">
        <div className="card reveal feature next-card">
          <p className="eyebrow">{c.next.eyebrow}</p>
          {c.next.title && <h2 className="h3" id="h-next">{c.next.title}</h2>}
          {c.next.extra}
          <div className="tile-p">{c.next.body}</div>
        </div>
      </div>
    </section>

    <CloseBand
      name="Start"
      title={c.close.title}
      lead={<p className="lead">{c.close.lead}</p>}
      actions={<Button href={c.close.action.href}>{c.close.action.label}</Button>}
    />
  </div>
}
