'use client'

/* BlogContent.tsx — Foundry Notes (the blog). Ported from blog-page.jsx.
   Cards link to the existing on-site blog posts. Dates and bylines come
   only from the articles themselves; where an article carries none, say so. */
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'

const NOTES = [
  {
    k: 'Working with AI · Conversation',
    t: 'Between Human and AI — A Preserved Conversation',
    m: 'Mark Lord and Claude · April 9, 2026',
    x: 'An edited record of a founder and an AI model during a software build, on pushback, trust and what a thousand hours of working together produced.',
    href: '/blog/between-human-and-ai',
  },
  {
    k: 'Governance · Essay',
    t: 'The Case for Constitutional Synthetic Intelligence',
    m: 'Mark Lord · December 17, 2025',
    x: 'The AI industry is racing toward capability. Almost no one is racing toward accountability. What if we built the governance layer first?',
    href: '/blog/the-case-for-constitutional-synthetic-intelligence',
  },
  {
    k: 'Governance · Essay · Archive',
    t: 'Synthetic Intelligence Is the Next Layer of AI',
    m: 'Foundry Notes · Undated',
    x: 'From answers to accountable action: memory, policies, verification and audit trails. An earlier essay, now carrying a note on current context.',
    href: '/blog/synthetic-intelligence-mentis',
  },
  {
    k: 'Operations · Essay · Archive',
    t: 'Beyond Chatbots: Why Teams Need Operations Intelligence',
    m: 'Foundry Notes · Undated',
    x: 'Why a business needs something that remembers the story across calls, invoices and orders. Its examples describe earlier offerings, now retired.',
    href: '/blog/operations-intelligence-for-small-teams',
  },
]

export default function BlogContent() {
  return (
    <>
      <PageHero
        eyebrow="Foundry Notes · Insights"
        title={
          <>
            Foundry <em>Notes</em>.
          </>
        }
        lead="Essays on company AI, governance and staying in control of the work you delegate. Older pieces are kept as written, with a short note on what has changed since."
        actions={
          <>
            <a className="btn btn-solid" href="#notes">
              Read the notes {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="/sabina">
              Meet Sabina {Icon.arr}
            </a>
          </>
        }
        metaLeft={
          <>
            Notes from <b>Dominus Foundry</b>
          </>
        }
        metaRight={<>Albuquerque, NM</>}
      />

      <section className="pillars section" id="notes">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">The archive.</h2>
            <p className="eyebrow">Newest dated first</p>
          </div>
          <div className="post-grid reveal d1">
            {NOTES.map((n) => (
              <a className="post" href={n.href} key={n.t}>
                <span className="p-k">{n.k}</span>
                <span className="p-t serif">{n.t}</span>
                <span
                  className="p-m"
                  style={{ display: 'block', margin: '-4px 0 12px', fontSize: '12.5px', letterSpacing: '0.04em', color: 'var(--ink-3)' }}
                >
                  {n.m}
                </span>
                <span className="p-x">{n.x}</span>
                <span className="more">
                  Read more <span className="arr">→</span>
                </span>
                <span className="emberline" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Foundry Notes"
        title={
          <>
            Built in public, <em>on the record</em>.
          </>
        }
        lead="We write about the systems we're building and the principles behind them. Want to compare notes with the team?"
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Get in touch {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="/sabina">
              Meet Sabina {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
