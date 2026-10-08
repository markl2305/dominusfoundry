'use client'

/* BlogContent.tsx — Foundry Notes (the blog). Ported from blog-page.jsx.
   An editorial index: the newest current essay leads, the rest follow as
   ruled rows, and pieces tagged Archive sit in their own block below.
   Rows link to the existing on-site blog posts. Dates and bylines come
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

type Note = (typeof NOTES)[number]

const isArchived = (n: Note) => n.k.split(' · ').includes('Archive')
/* The topic line without the Archive tag; the section heading carries that now. */
const topic = (n: Note) => n.k.split(' · ').filter((part) => part !== 'Archive').join(' · ')

const current = NOTES.filter((n) => !isArchived(n))
const archive = NOTES.filter(isArchived)
const [lead, ...rest] = current

function NoteMeta({ n }: { n: Note }) {
  return (
    <p className="n-meta">
      <span className="n-by">{n.m}</span>
      <span className="n-topic">{topic(n)}</span>
    </p>
  )
}

function ReadLink() {
  return (
    <span className="n-read" aria-hidden="true">
      Read <span className="arr">→</span>
    </span>
  )
}

/* One row in the index. The title link is stretched over the whole row, so the
   row is one target while the accessible name stays the title alone. */
function NoteRow({ n, archived = false }: { n: Note; archived?: boolean }) {
  return (
    <article className={archived ? 'note-row is-archived' : 'note-row'}>
      <h3>
        <a href={n.href}>{n.t}</a>
      </h3>
      <NoteMeta n={n} />
      <p className="n-dek">{n.x}</p>
      <ReadLink />
      <span className="emberline" aria-hidden="true" />
    </article>
  )
}

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
        lead="Writing about company AI, governed responsibility, operational software, and the evidence a business needs before trusting a system to act. Older pieces are kept as written, with a short note on what has changed since."
        actions={
          <>
            <a className="btn btn-solid" href="#notes">
              Read the notes {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="https://hiresabina.ai/evaluate">
              See Sabina work {Icon.arr}
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
      <p className="wrap" style={{ paddingBlock: '24px', textAlign: 'center', color: 'var(--ink-2)' }}>Start with a short operational assessment of your business.</p>

      <section className="pillars section notes-index" id="notes">
        <div className="wrap">
          {lead && (
            <div className="notes-block reveal">
              <div className="notes-head">
                <h2>Current essays.</h2>
                <p>Newest first</p>
              </div>
              <article className="note-lead">
                <div className="n-main">
                  <h3>
                    <a href={lead.href}>{lead.t}</a>
                  </h3>
                  <NoteMeta n={lead} />
                </div>
                <div className="n-side">
                  <p className="n-dek">{lead.x}</p>
                  <ReadLink />
                </div>
                <span className="emberline" aria-hidden="true" />
              </article>
              {rest.map((n) => (
                <NoteRow n={n} key={n.href} />
              ))}
            </div>
          )}

          {archive.length > 0 && (
            <div className="notes-block notes-archive reveal d1">
              <div className="notes-head">
                <h2>Archive.</h2>
                <p>Earlier essays, kept as written. They describe offerings that have since changed.</p>
              </div>
              {archive.map((n) => (
                <NoteRow n={n} key={n.href} archived />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA
        eyebrow="Foundry Notes"
        title={
          <>
            Built in public, <em>on the record</em>.
          </>
        }
        lead="We write about the systems we're building and the principles behind them. Start with a short operational assessment of your business."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Get in touch {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="https://hiresabina.ai/evaluate">
              See Sabina work {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
