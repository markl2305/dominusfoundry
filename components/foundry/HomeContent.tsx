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
   Site-entry CTA = "See Sabina work" → hiresabina.ai/evaluate (brief ruling 3).

   2026-10-14 (ORDER B, site-wide /pitch language): structure only, copy
   verbatim. The hero is the shared PageHero (crest, centred, tall); sections use
   the site.css chapter head; the family seal moved from the hero into the
   founders band beside the two paths, since the hero now carries the crest. */
import type { CSSProperties } from 'react'
import { Medallion, Icon } from './Marks'
import { PageHero, Section, ClosingCta } from '@/components/site/primitives'
import '@/components/site/pages/home.css'

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
    <div className="pg-home">
      <PageHero
        crest
        center
        tall
        eyebrow="Dominus Foundry · Managed AI"
        title={<>
          Your company’s AI.<br />
          <em>Built around your business.</em>
        </>}
        lead="Dominus Foundry builds and manages Sabina, your company’s own AI. Start with calls, follow-up, and the workflows taking time from your team. She learns your business, works within the authority you define, and carries that understanding into the next responsibility."
        actions={<>
          <a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work {Icon.arr}</a>
          <a className="btn btn-ghost" href="/pitch">Read the investor case {Icon.arr}</a>
        </>}
      >
        <a className="hero-note" href="https://hiresabina.ai/evaluate">Start with a short operational assessment of your business. <span className="arr" aria-hidden="true">→</span></a>
      </PageHero>

      <section className="section" id="how" aria-labelledby="h-how">
        <div className="wrap two-col">
          <div className="sec-head reveal">
            <p className="eyebrow">How Managed AI works</p>
            <h2 className="h2" id="h-how">
              One trained core. <em>Your company around it.</em>
            </h2>
          </div>
          <div className="prose reveal">
            <p>
              We combine a core model trained by Foundry with proprietary memory, company teaching, and
              defined authority. Each business gets a system shaped around its own operations, while Foundry
              manages the underlying platform and its continued development.
            </p>
            <p>
              Foundry configures, deploys, and operates Sabina for your company. Your team teaches her the
              business and decides what she may handle.
            </p>
            <a className="more-link" href="https://hiresabina.ai/evaluate">See Sabina work</a>
          </div>
        </div>
      </section>

      {/* THE HIERARCHY — Sabina, then Forge, then DominusOS, then Hyperion.
          RULED by Mark 2026-10-14: "dominusOS is more important here than
          hyperion". Supersedes Plan §7.3's Sabina → Forge → Hyperion order.
          ⛔ Do not renumber. */}
      <Section
        id="builds"
        eyebrow="What Dominus Foundry builds"
        title={<>Your company’s AI. Her platform. <em>A specialist tool.</em></>}
      >
        <div className="grid g2">
          <article className="card reveal path-card" style={{ '--i': 0 } as CSSProperties}>
            <h3 className="h3">Sabina</h3>
            <p className="tile-p">
              Sabina is your company&apos;s own AI, the one customers hire. Start with calls, follow-up, and
              the workflows taking time from your team, then teach her more of the business. Agree each
              responsibility and the authority she needs before she takes it on.
            </p>
            <a className="more-link" href="https://hiresabina.ai/evaluate">See Sabina work</a>
          </article>
          <article className="card reveal path-card" style={{ '--i': 1 } as CSSProperties}>
            <h3 className="h3">Forge</h3>
            <p className="tile-p">
              Operating records and specialist tools beneath and alongside Sabina. Some Forge tools are
              sold independently, and each has its own scope and readiness. Forge capabilities are not
              automatically part of every Sabina deployment.
            </p>
            <a className="more-link" href="https://buildwithforge.app">Explore Forge →</a>
          </article>
          <article className="card reveal path-card" style={{ '--i': 2 } as CSSProperties}>
            <h3 className="h3">DominusOS</h3>
            <p className="tile-p">
              DominusOS supplies the authority and execution-control architecture behind what Sabina is
              permitted to do. Company rules define what she may do, when approval is required, and how
              permitted work is recorded.
            </p>
            <a className="more-link" href="https://dominusos.ai">Explore DominusOS →</a>
          </article>
          <article className="card reveal path-card" style={{ '--i': 3 } as CSSProperties}>
            <h3 className="h3">Hyperion</h3>
            <p className="tile-p">
              A specialist trades product with its own scope: iPad LiDAR capture that turns a walked site
              into roof geometry, a bill of materials and a proposal. Independently useful, hosted under
              Forge, and not part of Sabina’s general capability set.
            </p>
            <a className="more-link" href="https://buildwithforge.app/hyperion">See Hyperion →</a>
          </article>
        </div>
      </Section>

      <Section
        id="authority"
        className="on-dark"
        eyebrow="Authority belongs to the business"
        title={<>Knowing isn’t permission.<br /><em>You define her authority.</em></>}
        lead={<p className="lead">
          Sabina’s understanding of the company can grow. Her authority continues to come from the
          permissions the company grants. DominusOS supplies the authority and execution control: define
          what she may do, what needs your approval, and what evidence will show that the agreed work is done.
        </p>}
      >
        <div className="grid g3">
          <article className="card reveal" style={{ '--i': 0 } as CSSProperties}>
            <h3 className="tile-t">Give her a responsibility.</h3>
            <p className="tile-p">Define the work, the information she can use, and the limits that matter to your team.</p>
          </article>
          <article className="card reveal" style={{ '--i': 1 } as CSSProperties}>
            <h3 className="tile-t">Keep the work visible.</h3>
            <p className="tile-p">Make decisions and outcomes understandable to the people responsible for them.</p>
          </article>
          <article className="card reveal" style={{ '--i': 2 } as CSSProperties}>
            <h3 className="tile-t">Change the authority.</h3>
            <p className="tile-p">Withdraw permission for future work when circumstances change. Completed actions keep their history.</p>
          </article>
        </div>
        <a className="more-link reveal" href="/governance">Explore the governance approach →</a>
      </Section>

      {/* COMPOUNDING INTELLIGENCE — plan §7.4. This is the company thesis and
          the reason this domain is separate from the product sites. */}
      <Section
        id="carries"
        eyebrow="What carries forward"
        title={<>Useful company knowledge <em>carries forward.</em></>}
        lead={<p className="lead">
          What your team teaches Sabina, the corrections it makes, and the context gathered through
          authorized work can inform the next conversation, handoff, and responsibility. Your company’s
          knowledge, memory, operating instructions, and permissions remain specific to your company.
          Access follows the sources and authority you approve.
        </p>}
      >
        <div className="rows layer-rows reveal">
          {LAYERS.map(([n, title, body]) => (
            <div key={title}>
              <div className="layer-head">
                <span className="tile-k">{n}</span>
                <h3 className="tile-t">{title}</h3>
              </div>
              <p>{body}</p>
            </div>
          ))}
        </div>
        {/* ⛔ The boundary paragraph is part of the thesis, not a disclaimer
            under it. Plan §7.4: confidentiality, permissions, governance and
            data boundaries must remain explicit wherever this argument is
            made. Do not move it to a footer or shrink it to fine print.
            2026-10-07 (HANDOFF §5.1): the obsolete shared-infrastructure /
            third-party-processing sentence is removed; the link now names
            the trust page by its subject, not by the retired narrative.
            2026-10-14: it sits in a full-size callout, never inside a
            disclosure, for the same reason. */}
        <div className="callout reveal">
          <p>
            <strong>Where the boundaries are.</strong> Any future use of eligible derived information beyond providing your company’s service
            requires separate, specific agreement. The value of Sabina’s work for your company does not depend on
            joining a broader intelligence program. Read how{' '}
            <a className="link" href="https://hiresabina.ai/trust">company data and authority are handled</a>.
          </p>
        </div>
        <div className="prose reveal">
          <p>
            The longer-term company-intelligence thesis, and how it builds from direct customer
            deployments, is set out in the <a href="/pitch">investor case</a>.
          </p>
        </div>
      </Section>

      <section className="section" id="people">
        <div className="wrap grid g3">
          <div className="card band-dark on-dark reveal seal" style={{ '--i': 0 } as CSSProperties}>
            <Medallion scheme="ondark" />
            <p className="serif seal-motto">Fide et Familia</p>
            <span className="seal-by">Built &amp; held by the Lord family</span>
          </div>
          <article className="card reveal path-card" style={{ '--i': 1 } as CSSProperties}>
            <p className="eyebrow">The people behind her</p>
            <h2 className="h3">Built by Mark and Bri Lord.</h2>
            <p className="tile-p">
              We came to this through the responsibilities of running businesses: serving customers,
              coordinating people, and carrying the work that nobody could afford to lose. Fide et Familia
              is the standard behind the company we are building.
            </p>
            <a className="more-link" href="/company">Meet the founders →</a>
          </article>
          <article className="card reveal path-card" style={{ '--i': 2 } as CSSProperties}>
            <p className="eyebrow">Capital</p>
            <h2 className="h3">Bootstrapped to date.</h2>
            <p className="tile-p">
              We are raising to expand repeatable Managed AI delivery. The company thesis, what is
              already operating, the next 10–20 direct customer companies, and both the floor and funded
              scenarios are set out in full on the investor pitch.
            </p>
            <a className="more-link" href="/pitch">Read the investor pitch →</a>
          </article>
        </div>
      </section>

      <ClosingCta
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
    </div>
  )
}
