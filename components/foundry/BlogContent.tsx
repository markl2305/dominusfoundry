'use client'

/* BlogContent.tsx — Foundry Notes (the blog). Ported from blog-page.jsx.
   Cards link to the existing on-site blog posts. */
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'

const NOTES = [
  {
    k: 'Synthetic Intelligence',
    t: 'The Case for Constitutional Synthetic Intelligence',
    x: 'The AI industry is racing toward capability. Almost no one is racing toward accountability. What if we built the governance layer first?',
    href: '/blog/the-case-for-constitutional-synthetic-intelligence',
  },
  {
    k: 'Synthetic Intelligence',
    t: 'Synthetic Intelligence Is the Next Layer of AI',
    x: "From answers to accountable action: synthetic intelligence is AI that executes with memory, policies, verification, and audit trails. Here's what's coming.",
    href: '/blog/synthetic-intelligence-mentis',
  },
  {
    k: 'Operations Intelligence',
    t: 'Beyond Chatbots: Why Teams Need Operations Intelligence',
    x: 'Most “AI features” don’t understand how your operation works. Operations intelligence is the layer that remembers the story across calls, invoices, and orders.',
    href: '/blog/operations-intelligence-for-small-teams',
  },
  {
    k: 'Reflection',
    t: 'Between Human and AI — A Preserved Conversation',
    x: 'What happens when you treat your AI like an employee for 1,000 hours? A founder and his AI on trust, pushback, mortality, and the framework that might prevent the dystopia.',
    href: '/blog/between-human-and-ai',
  },
]

export default function BlogContent() {
  return (
    <>
      <PageHero
        eyebrow="Foundry Notes · The Blog"
        title={
          <>
            Foundry <em>Notes</em>.
          </>
        }
        lead="Short essays on where operations, AI-backed systems, and teams are headed — and how to stay in control as the tools keep changing."
        actions={
          <>
            <a className="btn btn-solid" href="#notes">
              Read the notes {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="https://buildwithforge.app" target="_blank" rel="noopener">
              See it in Forge {Icon.arr}
            </a>
          </>
        }
        metaLeft={
          <>
            Essays from the <b>Lord family</b>
          </>
        }
        metaRight={<>Albuquerque, NM</>}
      />

      <section className="pillars section" id="notes">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">Recent essays.</h2>
            <p className="eyebrow">On synthetic &amp; operations intelligence</p>
          </div>
          <div className="post-grid reveal d1">
            {NOTES.map((n) => (
              <a className="post" href={n.href} key={n.t}>
                <span className="p-k">{n.k}</span>
                <span className="p-t serif">{n.t}</span>
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
        lead="We write about the systems we're building and the principles behind them. Want the next note, or to compare notes with the team?"
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Get in touch {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="https://buildwithforge.app" target="_blank" rel="noopener">
              Enter Forge {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
