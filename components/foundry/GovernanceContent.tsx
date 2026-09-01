'use client'

/* GovernanceContent.tsx — the depth surface for the governance argument.
   Copy source: MESSAGE_CANON.md §2. If this page and that file disagree,
   this page is wrong. */
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'
import RuleLedger from './RuleLedger'

const PROPERTIES = [
  {
    n: '01',
    t: 'Scoped',
    d: 'Authority is granted one responsibility at a time, and each grant has a boundary the owner set. “Clear anything under $25,000 with me first” is a rule, not a preference.',
  },
  {
    n: '02',
    t: 'Attributed',
    d: 'Every rule carries who wrote it and when. Every action carries which rule it applied. The record is readable by the owner, not by an engineer.',
  },
  {
    n: '03',
    t: 'Reversible',
    d: 'Any grant can be revoked in one move. No notice, no conversation, no six weeks. That is the reason an owner can afford to give her more, faster — the cost of being wrong is one click.',
  },
  {
    n: '04',
    t: 'Structural',
    d: 'Governance is not a layer above the model. Nothing executes outside it, so there is no path where capability outruns permission.',
  },
]

const MECHANISM = [
  {
    k: 'The execution path',
    v: 'Everything Sabina can do is a named capability, and every capability runs the same way: request, check the canon, decide, write the decision down, then act. There is no second path that skips the check — not for an urgent job, not for an internal tool, not for the owner in a hurry.',
  },
  {
    k: 'Default deny',
    v: 'A capability with no active grant behind it is refused, not attempted. Sabina starts with almost nothing and earns the rest, which is why an owner can start her on one job on a Monday instead of auditing a permissions matrix first.',
  },
  {
    k: 'What is refused, and why',
    v: 'Two refusals exist and they read differently on purpose. No grant covers this — nothing in the canon names that capability. Outside the boundary — a grant exists, the action is past its limit. Both name the rule and route the work to a human rather than dropping it.',
  },
  {
    k: 'What is written to the record',
    v: 'The action, the decision, the rule it cited, the person who wrote that rule, and when. Grants and revocations land in the same append-only record as the decisions they governed, so the record explains itself without a second system to reconcile against.',
  },
  {
    k: 'What a revocation actually does',
    v: 'It withdraws the capability at the very next check — there is no drain period and no in-flight exception. It does not delete anything. The grant stays on the page struck through, annotated with who revoked it and when, because a record that quietly loses its own history is not a record.',
  },
  {
    k: 'What survives a model change',
    v: 'The canon is not a prompt and the record is not a transcript. Both are structure underneath. Swap the model and the grants, the refusals, the boundaries and everything the company has taught her come across intact.',
  },
]

export default function GovernanceContent() {
  return (
    <>
      <PageHero
        eyebrow="Governance · The architecture"
        title={
          <>
            Governance is the <em>architecture</em>, not the claim.
          </>
        }
        lead="Everyone is now selling an AI that can act on your business. Almost nobody can tell you what it is allowed to do, what it actually did, or how to take an ability back once it has it. This page shows you ours, and then lets you break it."
        actions={
          <>
            <a className="btn btn-solid" href="#demonstration">
              Write a rule yourself {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="/iris">
              Meet Sabina {Icon.arr}
            </a>
          </>
        }
        metaLeft={
          <>
            Scoped · Attributed · <b>Reversible</b> · Structural
          </>
        }
        metaRight={
          <>
            <b>19 provisional patents filed</b> · Albuquerque, NM
          </>
        }
      />

      <section className="section" id="problem">
        <div className="wrap">
          <div className="intro-grid">
            <h2 className="i-head reveal">
              You would not hand a new hire <em>the checkbook</em> on day one.
            </h2>
            <div className="i-body reveal d1">
              <p>
                You would not give someone the checkbook, the customer list, and the ability to promise delivery dates in their first week.
                You would give them one job, watch how it went, and give them the next one. Every AI product on the market asks you to skip
                that entirely, and calls the risk your problem.
              </p>
              <p>
                That is not a safety footnote. It is the whole reason an owner cannot hand real work to any of them — not because the software
                is not clever enough, but because there is no honest answer to <em>what happens if it is wrong at 4:50 on a Friday.</em>
              </p>
              <p>
                So the question is not how capable the thing is. The question is whether you can grant it one responsibility, see exactly what
                it did with that responsibility, and take it back in a single move when you change your mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pullband section" id="trap">
        <div className="wrap">
          <p className="eyebrow center reveal" style={{ marginBottom: '26px' }}>
            The trap most vendors are in
          </p>
          <p className="big reveal d1">
            An approval prompt <em>is not governance</em>.
          </p>
          <p className="sub reveal d1">
            They built capability first and are now bolting consent on top of it. An approval prompt moves the decision back to the human for
            every action, forever — which is the same bottleneck the owner was trying to escape, with an extra step. Governance is not being
            asked every time. It is having decided once, in writing, and being able to change your mind.
          </p>
        </div>
      </section>

      <section className="pillars section" id="properties">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">
              Four properties,
              <br />
              in this order.
            </h2>
            <p className="eyebrow">How Forge solves it</p>
          </div>
          <div className="steps">
            {PROPERTIES.map((p, i) => (
              <div className={`step reveal d${i % 4}`} key={p.n}>
                <span className="s-n">{p.n}</span>
                <span className="s-t">{p.t}</span>
                <span className="s-d">{p.d}</span>
                <span className="s-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section demo-section" id="demonstration">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <p className="eyebrow reveal">The demonstration</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(30px,4.4vw,54px)', marginTop: '16px' }}>
              Don&apos;t take the claim. Take the controls.
            </h2>
            <p className="reveal d1 demo-lead">
              Write a grant in plain English and watch it land in the canon with your name and today&apos;s date on it. Send work at it and
              watch each decision cite the rule it applied. Then revoke the grant and watch the capability disappear while the rule stays
              exactly where it was, struck through. That last part is the point: a ledger annotates, it does not erase.
            </p>
          </div>
          <RuleLedger />
          <p className="demo-foot">
            This runs entirely in your browser and resets when you reload. It is a faithful model of the execution path — default deny, the
            citation, the append-only record — not a connection to a live tenant.
          </p>
        </div>
      </section>

      <section className="section" id="mechanism">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '44px' }}>
            <p className="eyebrow reveal">The mechanism</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              For the person who intends to interrogate it.
            </h2>
          </div>
          <div className="criteria reveal d1">
            {MECHANISM.map((c) => (
              <div className="crow" key={c.k}>
                <span className="c-k serif">{c.k}</span>
                <span className="c-v">{c.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="darkband section" id="claim">
        <div className="wrap">
          <p className="eyebrow reveal">The claim that is ours alone</p>
          <h2 className="reveal d1">Governed, reversible learning.</h2>
          <p className="darkband-lead reveal d1">
            Competitors can match conversation quality in a quarter. To match this they would have to have built the system of record first,
            and then built the governance into it rather than onto it. That is an architecture decision made years earlier, not a feature on a
            roadmap — which is why we would rather show you the ledger than tell you about it.
          </p>
          <a className="section-more on-dark-more reveal d2" href="#demonstration">
            Go back and revoke something <span className="arr">→</span>
          </a>
        </div>
      </section>

      <CTA
        title={
          <>
            Hand her one job. <em>Take it back</em> whenever you like.
          </>
        }
        lead="That is the whole offer. Start Sabina on the one thing you would most like off your plate, watch the record, and widen it when you're ready — or don't."
        actions={
          <>
            <a className="btn btn-solid" href="/iris">
              Meet Sabina {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="mailto:foundry@dominusfoundry.com">
              Talk with Mark &amp; Bri {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
