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
   accumulates is a record they own and control.

   ⭐ RETOOL 2026-10-07 (HANDOFF §5.1, brief rulings 1–3): wording only, layout
   frozen. Category is Managed AI; hero H1/eyebrow/opening are the handoff's
   wording; the speculative network-intelligence section is compressed to the
   immediate company-learning benefit plus an investor link; the obsolete shared-infrastructure / outside-processing sentence is removed.
   LAYERS now carries HANDOFF §2.1's four architecture layers in the same row
   component; the product relationships (Sabina, Forge, Hyperion, DominusOS)
   are stated in the cards and the authority band.
   Site-entry CTA = "See Sabina work" → hiresabina.ai/evaluate (brief ruling 3). */
import { Medallion, Icon } from './Marks'
import { CTA } from './FoundryShell'

/* HANDOFF §2.1's four architecture layers (2026-10-07), replacing plan §7.4's
   memory → company intelligence → external context → network sequence, which
   was a roadmap of value development, not the technical architecture. That
   roadmap now lives only on /pitch (chapter IX), with its staging. ⛔ Layer four
   says "for later work", not "analysis/forecasts available today": shipped
   capability decides what is live. */
const LAYERS: [string, string, string][] = [
  [
    'One',
    'Trained core',
    'Foundry trains and operates the core model that supplies Sabina’s reasoning and behavior.',
  ],
  [
    'Two',
    'Company identity and memory',
    'Sabina starts with the relevant context of your company and its industry: your systems, people, records and relationships.',
  ],
  [
    'Three',
    'Company teaching and authority',
    'Your team teaches how work should be handled and defines what Sabina may do, including approvals and revocation.',
  ],
  [
    'Four',
    'Accumulating company knowledge',
    'Authorized email, employee interactions, decisions and outcomes add useful knowledge for later work.',
  ],
]

export default function HomeContent() {
  return (
    <>
      <section className="hero on-dark company-hero" id="top">
        <div className="wrap company-hero-grid">
          <div>
            <p className="eyebrow">Dominus Foundry · Managed AI</p>
            <h1 className="hero-title">
              Your company’s AI.<br />
              <em>Built around your business.</em>
            </h1>
            <p className="hero-lead">
              Dominus Foundry builds and manages Sabina, your company’s own AI. Start with calls, follow-up,
              and the workflows taking time from your team. She learns your business, works within the
              authority you define, and carries that understanding into the next responsibility.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work {Icon.arr}</a>
              <a className="btn btn-ghost" href="/pitch">Read the investor case {Icon.arr}</a>
            </div>
            <p>Start with a short operational assessment of your business.</p>
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
            <p className="eyebrow">How Managed AI works</p>
            <h2 className="thesis-line">
              One trained core. <em>Your company around it.</em>
            </h2>
          </div>
          <div className="thesis-aside">
            <p>
              We combine a core model trained by Foundry with proprietary memory, company teaching, and
              defined authority. Each business gets a system shaped around its own operations, while Foundry
              manages the underlying platform and its continued development.
            </p>
            <p>
              Foundry configures, deploys, and operates Sabina for your company. Your team teaches her the
              business and decides what she may handle.
            </p>
            <a className="section-more" href="https://hiresabina.ai/evaluate">See Sabina work</a>
          </div>
        </div>
      </section>

      {/* THE HIERARCHY — Sabina, then Forge, then Hyperion. Plan §7.3: this
          order is the ruling, not a layout preference. ⛔ Do not renumber. */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What Dominus Foundry builds</p>
          <h2 className="serif" style={{ fontSize: 'clamp(30px,4vw,52px)', marginTop: '16px' }}>
            Your company’s AI. Her platform. <em>A specialist tool.</em>
          </h2>
          <div className="company-principles" style={{ marginTop: '44px' }}>
            <article>
              <h3>Sabina</h3>
              <p>
                Sabina is your company&apos;s own AI, the one customers hire. Start with calls, follow-up, and
                the workflows taking time from your team, then teach her more of the business. Agree each
                responsibility and the authority she needs before she takes it on.
              </p>
              <a className="section-more" href="https://hiresabina.ai/evaluate">See Sabina work</a>
            </article>
            <article>
              <h3>Forge</h3>
              <p>
                Operating records and specialist tools beneath and alongside Sabina. Some Forge tools are
                sold independently, and each has its own scope and readiness. Forge capabilities are not
                automatically part of every Sabina deployment.
              </p>
              <a className="section-more" href="https://buildwithforge.app">Explore Forge →</a>
            </article>
            <article>
              <h3>Hyperion</h3>
              <p>
                A specialist trades product with its own scope: iPad LiDAR capture that turns a walked site
                into roof geometry, a bill of materials and a proposal. Independently useful, hosted under
                Forge, and not part of Sabina’s general capability set.
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
            Knowing isn’t permission.<br /><em>You define her authority.</em>
          </h2>
          <p className="darkband-lead">
            Sabina’s understanding of the company can grow. Her authority continues to come from the
            permissions the company grants. DominusOS supplies the authority and execution control: define
            what she may do, what needs your approval, and what evidence will show that the agreed work is done.
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
          <p className="eyebrow">What carries forward</p>
          <h2 className="serif" style={{ fontSize: 'clamp(30px,4vw,52px)', marginTop: '16px', maxWidth: '20ch' }}>
            Useful company knowledge <em>carries forward.</em>
          </h2>
          <p style={{ marginTop: '22px', maxWidth: '62ch', lineHeight: 1.75 }}>
            What your team teaches Sabina, the corrections it makes, and the context gathered through
            authorized work can inform the next conversation, handoff, and responsibility. Your company’s
            knowledge, memory, operating instructions, and permissions remain specific to your company.
            Access follows the sources and authority you approve.
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
              made. Do not move it to a footer or shrink it to fine print.
              2026-10-07 (HANDOFF §5.1): the obsolete shared-infrastructure /
              third-party-processing sentence is removed; the link now names
              the trust page by its subject, not by the retired narrative. */}
          <p style={{ marginTop: '32px', maxWidth: '62ch', lineHeight: 1.75 }}>
            <strong>Where the boundaries are.</strong> Any future use of eligible derived information beyond providing your company’s service
            requires separate, specific agreement. The value of Sabina’s work for your company does not depend on
            joining a broader intelligence program. Read how{' '}
            <a href="https://hiresabina.ai/trust">company data and authority are handled</a>.
          </p>
          <p style={{ marginTop: '18px', maxWidth: '62ch', lineHeight: 1.75 }}>
            The longer-term company-intelligence thesis, and how it builds from direct customer
            deployments, is set out in the <a href="/pitch">investor case</a>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap company-paths">
          <article>
            <p className="eyebrow">The people behind her</p>
            <h2 className="serif">Built by Mark and Bri Lord.</h2>
            <p>
              We came to this through the responsibilities of running businesses: serving customers,
              coordinating people, and carrying the work that nobody could afford to lose. Fide et Familia
              is the standard behind the company we are building.
            </p>
            <a className="section-more" href="/company">Meet the founders →</a>
          </article>
          <article>
            <p className="eyebrow">Capital</p>
            <h2 className="serif">Bootstrapped to date.</h2>
            <p>
              We are raising to expand repeatable Managed AI delivery. The company thesis, what is
              already operating, the next 10–20 direct customer companies, and both the floor and funded
              scenarios are set out in full on the investor pitch.
            </p>
            <a className="section-more" href="/pitch">Read the investor pitch →</a>
          </article>
        </div>
      </section>

      <CTA
        eyebrow="Customers · Investors · Partners"
        title={<>Let’s talk about <em>your company.</em></>}
        lead="Start with a short operational assessment of your business."
        actions={
          <>
            <a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work {Icon.arr}</a>
            <a className="btn btn-ghost" href="mailto:foundry@dominusfoundry.com">Contact the team {Icon.arr}</a>
          </>
        }
      />
    </>
  )
}
