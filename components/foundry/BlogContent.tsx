'use client'

/* BlogContent.tsx — Foundry Notes (the blog). Ported from blog-page.jsx.
   An editorial index: the newest current essay leads, the rest follow as
   ruled rows, and pieces tagged Archive sit in their own block below.
   Rows link to the existing on-site blog posts. Dates and bylines come
   only from the articles themselves; where an article carries none, say so.

   Quality pass D2 (2026-10-14): copy verbatim. The index is now a grid of
   article cards (topic, title, dek, byline and date), current essays and the
   archive as two groups. Each card is one target: the title link is stretched
   over the card, so the accessible name stays the title alone. */
import { Icon } from './Marks'
import type { CSSProperties } from 'react'
import { ClosingCta, PageHero } from '@/components/site/primitives'
import '@/components/site/pages/pricing-blog.css'
import '@/app/styles/pages/qp-b.css'
import '@/app/styles/pages/blog-index.css'

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
      <span className="n-by">{n.m}</span>{' '}
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

/* One card in the index. The title link is stretched over the whole card, so
   the card is one target while the accessible name stays the title alone. */
function NoteCard({ n, i, archived = false, lead = false }: { n: Note; i: number; archived?: boolean; lead?: boolean }) {
  return (
    <li className={`card reveal note-card${lead ? ' is-lead' : ''}${archived ? ' is-archived' : ''}`} style={{ '--i': i } as CSSProperties}>
      <article>
        <h3 className="tile-t">
          <a href={n.href}>{n.t}</a>
        </h3>
        <NoteMeta n={n} />
        <p className="tile-p n-dek">{n.x}</p>
        <ReadLink />
      </article>
    </li>
  )
}

export default function BlogContent() {
  return (
    <div className="pg-blog qp qp-blog">
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
        meta={
          <>
            <span>
              Notes from <b>Dominus Foundry</b>
            </span>{' '}
            <span>Albuquerque, NM</span>
          </>
        }
      />

      <section className="section" id="notes" data-name="Notes">
        <div className="wrap">
          <p className="note reveal blog-start">Start with a short operational assessment of your business.</p>

          {lead && (
            <div className="notes-block">
              <div className="sec-head reveal">
                <h2 className="h2">Current essays.</h2>
                <p className="fine">Newest first</p>
              </div>
              <ul className="note-grid">
                <NoteCard n={lead} i={0} lead />
                {rest.map((n, i) => (
                  <NoteCard n={n} i={i + 1} key={n.href} />
                ))}
              </ul>
            </div>
          )}

          {archive.length > 0 && (
            <div className="notes-block notes-archive">
              <div className="sec-head reveal">
                <h2 className="h2">Archive.</h2>
                <p className="lead">Earlier essays, kept as written. They describe offerings that have since changed.</p>
              </div>
              <ul className="note-grid">
                {archive.map((n, i) => (
                  <NoteCard n={n} i={i} key={n.href} archived />
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ClosingCta
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
    </div>
  )
}
