'use client'
/* HomeContent.tsx — the company homepage.

   BRAND ARCHITECTURE, ruled 2026-09-16 (plan §0/§3/§7). The public hierarchy is
   Dominus Foundry → Sabina → Forge, with Hyperion as a specialized standalone
   trades product. This page states it in that order and in that shape:

     · Sabina FIRST — she is what a customer hires.
     · Forge as the governed platform and operating spine she runs on. ⛔ Not
       "our contractor vertical" any more, and never numbered above Sabina.
     · Hyperion as a standalone trades product hosted under Forge, ⛔ never as
       part of Sabina's general capability set.

   The compounding-intelligence section is plan §7.4 and it is the company
   thesis this domain exists to carry. ⛔ Two rails on it, both non-negotiable:
   confidentiality and governance boundaries are stated IN the section, not in a
   footnote; and the crude internal shorthand about who pays to build the
   dataset never appears in public copy. Customers pay for governed work. What
   accumulates is a record they own and control. */
import { Medallion, Icon } from './Marks'
import { CTA } from './FoundryShell'

/* Plan §7.4's four layers, in order. Each one says what is TRUE at that layer
   and what governs it — layer 4 carries the permission language inline because
   it is the layer a reader is right to be suspicious of.

   ⛔ LAYER 4 ALSO CARRIES ITS STATUS (kimi #4, round 3). /pitch files this layer
   as ROADMAP and qualifies it three ways — a roadmap badge, a chapter-IX note,
   and "described in the pending application, not operating today". This page
   carried the permission hedge but NO status marker, so a customer or an answer
   engine reading only dominusfoundry.com got the unqualified version of a claim
   the company itself files as not-yet-built. The boundary language governs HOW
   data crosses; it never said WHETHER the layer exists. Both sites now hold one
   evidentiary standard. ⛔ Do not drop the status clause to tighten the copy. */
const LAYERS: [string, string, string][] = [
  [
    'One',
    'Company memory',
    'Sabina learns one company’s processes, customers, decisions, outcomes, language, corrections and operating knowledge. That record belongs to the company that created it.',
  ],
  [
    'Two',
    'Company intelligence',
    'Internal signals connect to outcomes, and patterns, risks, opportunities and operating anomalies become visible to the business that created them — first, and on its own.',
  ],
  [
    'Three',
    'External context',
    'Where it is useful, internal outcomes can be read alongside weather, regional economics, commodities, market conditions, seasonality, geography and regulation — explanatory variables a single company cannot assemble alone.',
  ],
  [
    'Four',
    'Governed network intelligence',
    'Only where contracts, permissions and privacy design allow it, eligible derived patterns can support broader discovery, returned to each company as its own intelligence. Participation is a decision the company makes, and a decision it can take back. This layer is described in our pending patent application and is not operating today.',
  ],
]

export default function HomeContent() {
  return (
    <>
      <section className="hero on-dark company-hero" id="top">
        <div className="wrap company-hero-grid">
          <div>
            <p className="eyebrow">Dominus Foundry · Governed AI and commercial intelligence</p>
            <h1 className="hero-title">
              Governed AI.<br />
              Built around <em>your business.</em>
            </h1>
            <p className="hero-lead">
              Companies make commitments that disappear between the conversation and the work.
            </p>
            <p className="hero-lead">
              We build governed AI systems that become more valuable as they learn how real companies
              operate. Sabina is a company’s own AI, hired into one business and held to authority its
              owner grants her in writing. Forge is the platform beneath her.
            </p>
            <p className="hero-lead">
              Every commitment a company makes, and whether it was kept. The customer pays us to build
              the dataset. Sabina’s seats are the instrumentation.
            </p>
            <p className="hero-lead">
              Sabina captures what your company commits to, and acts only within the authority you give her.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="https://hiresabina.ai">Meet Sabina {Icon.arr}</a>
              <a className="btn btn-ghost" href="/pitch">For investors {Icon.arr}</a>
            </div>
          </div>
          <div className="company-seal">
            <Medallion scheme="ondark" />
            <p className="serif">Fide et Familia</p>
            <span>Built &amp; held by the Lord family</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap thesis-grid">
          <div>
            <p className="eyebrow">What we are building</p>
            <h2 className="thesis-line">
              Intelligence with a place<br /><em>in the company.</em>
            </h2>
          </div>
          <div className="thesis-aside">
            <p>
              A business has its own way of working: relationships, commitments, records, and decisions
              that carry consequences. Its AI should work within that context — and most AI does not,
              because it was never taught how that company actually runs.
            </p>
            <p>
              So we build the company’s own. Sabina is taught the work, given authority in writing, and
              held to it. Everything else we build exists to make that possible and to make what she
              learns useful to the business that taught her.
            </p>
            <a className="section-more" href="/sabina">Meet the company AI →</a>
          </div>
        </div>
      </section>

      {/* THE HIERARCHY — Sabina, then Forge, then Hyperion. Plan §7.3: this
          order is the ruling, not a layout preference. ⛔ Do not renumber. */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What Dominus Foundry builds</p>
          <h2 className="serif" style={{ fontSize: 'clamp(30px,4vw,52px)', marginTop: '16px' }}>
            One employee. One platform. <em>One specialist tool.</em>
          </h2>
          <div className="company-principles" style={{ marginTop: '44px' }}>
            <article>
              <h3>Sabina</h3>
              <p>
                A company’s own AI — hired into the business, taught how that business works,
                and given authority in writing. What the company authorizes is what she can do, and it
                can change that authority or take it back.
              </p>
              <a className="section-more" href="https://hiresabina.ai">Hire Sabina →</a>
            </article>
            <article>
              <h3>Forge</h3>
              <p>
                The governed technology platform and operating spine Sabina runs on: the application
                infrastructure, the data and workflow layer, and the trades tooling that make a
                company’s own AI usable inside a working company.
              </p>
              <a className="section-more" href="https://buildwithforge.app">Explore Forge →</a>
            </article>
            <article>
              <h3>Hyperion</h3>
              <p>
                A standalone trades product: iPad LiDAR capture that turns a walked site into roof
                geometry, a bill of materials and a proposal. Independently useful, hosted under Forge,
                and not part of Sabina’s general capability set.
              </p>
              <a className="section-more" href="https://buildwithforge.app/hyperion">See Hyperion →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section darkband">
        <div className="wrap">
          <p className="eyebrow">Authority belongs to the business</p>
          <h2>
            Useful work begins<br />with <em>clear boundaries.</em>
          </h2>
          <p className="darkband-lead">
            What may she do? What needs your approval? What happened? These are the questions that guide
            how we build.
          </p>
          <div className="company-principles">
            <article>
              <h3>Give her a responsibility.</h3>
              <p>Define the work, the information she can use, and the limits that matter to your team.</p>
            </article>
            <article>
              <h3>Keep the work visible.</h3>
              <p>Make decisions and outcomes understandable to the people responsible for them.</p>
            </article>
            <article>
              <h3>Change the authority.</h3>
              <p>Withdraw permission for future work when circumstances change. Completed actions keep their history.</p>
            </article>
          </div>
          <a className="section-more on-dark-more" href="/governance">Explore the governance approach →</a>
        </div>
      </section>

      {/* COMPOUNDING INTELLIGENCE — plan §7.4. This is the company thesis and
          the reason this domain is separate from the product sites. */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Why this compounds</p>
          <h2 className="serif" style={{ fontSize: 'clamp(30px,4vw,52px)', marginTop: '16px', maxWidth: '20ch' }}>
            The work creates the record. <em>The record is the asset.</em>
          </h2>
          <p style={{ marginTop: '22px', maxWidth: '62ch', lineHeight: 1.75 }}>
            Real businesses use Sabina and Forge for daily work, and that work produces something most
            software never captures: structured operational, decision, workflow, communication and
            outcome data, joined to the authority it was performed under. A company’s own system gets
            better at that company’s work as its people teach and correct it.
          </p>
          <div className="darkband-rows" style={{ marginTop: '44px', borderTop: '1px solid var(--hair)' }}>
            {LAYERS.map(([n, title, body]) => (
              <article
                key={title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,7ch) minmax(0,1fr)',
                  gap: '24px',
                  padding: '26px 0',
                  borderBottom: '1px solid var(--hair)',
                  alignItems: 'start',
                }}
              >
                <span className="eyebrow" style={{ marginTop: '6px' }}>{n}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: '26px' }}>{title}</h3>
                  <p style={{ marginTop: '12px', lineHeight: 1.75, color: 'var(--ink-2)', maxWidth: '62ch' }}>{body}</p>
                </div>
              </article>
            ))}
          </div>
          {/* ⛔ The boundary paragraph is part of the thesis, not a disclaimer
              under it. Plan §7.4: confidentiality, permissions, governance and
              data boundaries must remain explicit wherever this argument is
              made. Do not move it to a footer or shrink it to fine print. */}
          <p style={{ marginTop: '32px', maxWidth: '62ch', lineHeight: 1.75 }}>
            <strong>Where the boundaries are.</strong> A company’s data is that company’s. It is not
            pooled with anyone else’s by default, it is not sold, and we do not train a general model on
            it. Anything that crosses a company boundary crosses it only as eligible derived patterns,
            only under a written agreement, and only where privacy design and governance permit — a
            decision each company makes deliberately and can withdraw.
          </p>
          <p style={{ marginTop: '18px', maxWidth: '62ch', lineHeight: 1.75 }}>
            The result is not software automation with a reporting tab. It is a commercial intelligence
            system that grows out of governed work — which is the company we are building.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap company-paths">
          <article>
            <p className="eyebrow">The people behind her</p>
            <h2 className="serif">Mark &amp; Bri Lord.</h2>
            <p>
              We came to this work through running businesses. The missed handoffs, scattered
              information, and daily follow-through were familiar long before we started building
              Sabina.
            </p>
            <a className="section-more" href="/company">Meet the founders →</a>
          </article>
          <article>
            <p className="eyebrow">Capital</p>
            <h2 className="serif">Bootstrapped to date.</h2>
            <p>
              We are raising to increase onboarding capacity and accelerate distribution, without
              changing the core pricing discipline. The company thesis, what is already in production,
              and both the floor and funded scenarios are set out in full on the investor pitch.
            </p>
            <a className="section-more" href="/pitch">Read the investor pitch →</a>
          </article>
        </div>
      </section>

      <CTA
        eyebrow="Customers · Investors · Partners"
        title={<>Let’s talk about <em>your company.</em></>}
        lead="Explore Sabina for your business, or contact Mark and Bri about working together."
        actions={
          <>
            <a className="btn btn-solid" href="https://hiresabina.ai">Meet Sabina {Icon.arr}</a>
            <a className="btn btn-ghost" href="mailto:foundry@dominusfoundry.com">Contact the team {Icon.arr}</a>
          </>
        }
      />
    </>
  )
}
