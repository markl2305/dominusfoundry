// CURRENT PUBLIC RULE: all products custom quoted — Mark, 2026-09-05.
'use client'

/* PricingContent.tsx - the holding company's reference page for what Forge costs.
   RULED by Mark 2026-08-07: "fix the dominus foundry pricing to discuss forge and be a
   range (but an accurate one) - its job is not to sell."

   SUPERSEDING RULING, Mark 2026-08-25 (PRICING_CANON_2026-08-05.md, block "IRIS IS A HIRE,
   NOT A MODULE"): Forge is sold on two ladders that are never interleaved.
     LADDER A - Iris, one tier. Core is INCLUDED and is never a line item.
                $2,000/mo at the founding rate, held for as long as the operator holds the
                seat; $3,500/mo standing, once the founding charter closes. RULED 2026-08-29
                (Mark): "we go with 2000 and 3500 - on every surface."
                Setup $2,500 once, due before onboarding work begins.
     LADDER B - the tools, a la carte on Core: Core $599, Sigil $49, Torch $35/number,
                Treasury coming soon (no price). Hyperion is $1,100/mo with Core included
                (not a la carte on top of Core) — see the bundle rule below. Ariadne is
                off every pricing surface.
   Iris appears on NO module rate card at ANY price. She is only ever sold as a hire.
   RULED 2026-08-26 (Mark): "The Hire" is retired as a product NAME - the SKU is Iris. The
   hire FRAMING stays; it is the whole pricing argument. Lowercase 'hire' is deliberate.
   RETIRED and never restored here: Iris $1,500 as a public price; $2,099 as a public
   "Core + Iris together" sum; the additive "$599 + $1,500" presentation.

   Constraints that remain load-bearing:
     1. It discusses Forge, using the real product and the real numbers. The legacy
        Engine/tier services sheet is gone, and "Forge" never names a build-fee tier again.
     2. Order of appearance: the ~$5,500 fully-loaded office-coordinator figure published on
        buildwithforge.app renders BEFORE any Forge price in DOM order. A price seen first
        is compared to software; a price seen after the salary is compared to payroll.
     3. Its job is not to sell. No CTA stack, no urgency, no competitor comparison -
        a reference table with exactly one link out, to buildwithforge.app.

   Every number here comes from PRICING_CANON_2026-08-05.md and nowhere else.

   SUPERSEDING RULING, Mark 2026-09-04: "Strip it — spec wins." Every Sabina price comes off
   every public surface; she is recruited, not sold. $2,000 founding, $3,500 standing and the
   $2,500 setup fee are RETIRED as public prices and no longer render on this page in any form
   — not as a line item, not inside the worked examples, not inside the discount arithmetic.
   The Founding Charter survives as a thing (ten seats, application-gated, seven open) with no
   figure attached; her rate is disclosed at the job-description call, never on a web surface.
   LADDER B tool prices are UNAFFECTED and stay exactly as ruled 2026-08-25: Core $599, Hyperion
   $1,100 (Core included), Sigil $49, Torch $35/number, Treasury coming soon. The $2,500 setup
   line that used to appear on BOTH ladders is removed from both — it was Sabina's onboarding
   fee reused for the tools ladder, and canon retires it outright, not per-ladder.

   AUDIT FIX, 2026-09-04 (cross-site review of the 09-04 realignment):
   (a) The "what she costs" line was the RETIRED aphorism ("We don't quote a number before we
       know the job. Nobody hires that way, and neither do we.") — superseded the same day by
       Mark's verbatim replacement, now in HIRE[2].d and in the Terms section below.
   (b) The worked-arithmetic EXAMPLES table used to carry a "Sabina + Hyperion" entry restating
       the list-minus-$600 discount rule for Sabina — that let a reader derive a concrete
       expansion figure ($1,100 - $600 = $500/mo to add Hyperion to a hire) purely from public
       tool prices, which publishes by arithmetic what canon says is still OPEN and unruled.
       That entry is REMOVED; the discount rule is now stated as tool-plus-tool only (constraint
       3 above is revised accordingly: the page now also links out to buildwithforge.app/evaluate
       from the Founding Charter note, so "exactly one link out" no longer holds literally —
       the intent, "not a sales page," still does).
   (c) The Founding Charter had no path from "awarded by application" to an actual application.
       Added the ruled CTA pair ("See if your company is ready." / "Request an interview.")
       linking to buildwithforge.app/evaluate. That route is on an unmerged forge-web branch as
       of 2026-09-04 — this site must not deploy before it is live. */
import { PageHero } from './FoundryShell'
import {
  TOTAL_SEATS_WORD,
  OPEN_SEATS_WORD,
  signedSeatsWord,
  spokenForSeatsWord,
  openSeatsWord,
} from '@/content/founding-charter.mjs'

/* LADDER A - the hire. One tier. Core is inside it and is never a line item.
   The first card is deliberately NOT a Forge price: it is the salary comparison
   already published on buildwithforge.app, and it renders first on purpose.
   RULED trio (2026-09-03/04): $5,500/mo headline · $32.50/hr at the desk ·
   BLS ECEC $5,474 as the citable method. This is the cost of a HUMAN hire, not
   Sabina's price — she has no published price and this card must not read as one. */
const HIRE = [
  {
    n: '~$5,500',
    u: '/mo',
    l: 'What it stands in for',
    d: 'A fully-loaded office coordinator — wage, employer tax, workers’ comp, health, retirement, the seat. That is about $32.50/hr at the desk, converging with the BLS Employer Costs for Employee Compensation figure of $5,474/mo. This is the figure Forge publishes on its own homepage as the comparison, and it is not a Forge price.',
    q: 'Published on buildwithforge.app · BLS ECEC $5,474',
  },
  {
    n: OPEN_SEATS_WORD,
    u: 'seats open',
    l: 'Founding charter',
    d: `${TOTAL_SEATS_WORD} seats, awarded by application — ${signedSeatsWord} signed, ${spokenForSeatsWord} spoken for, ${openSeatsWord} still open. She answers the customer, carries the money conversation, and carries what you hand her to done. Forge Core is included — it is not a second line, and it is never quoted separately on this ladder. Held for as long as an operator holds the seat.`,
    q: `${TOTAL_SEATS_WORD} seats total, application-gated`,
  },
  {
    n: 'Disclosed',
    u: 'not published',
    l: 'What she costs',
    d: 'The founding rate is one number, and we quote it on the call because we take on two companies at a time — her rate is set on the job-description call, before the interview.',
    q: 'Never on a web surface',
  },
]

/* LADDER B - the tools, bought a la carte on Core. A separate door for an operator
   who wants the system of record and is not hiring. This card is additive.
   Iris does not appear on it, and no hire is priced from it. */
// RULED 2026-09-05: every product is custom quoted; no public rate arithmetic.
const LINES = [
  { k: 'Forge Core', v: 'Custom quote', u: '', d: 'The shared record for jobs, proposals and client history. Scoped for your company.' },
  { k: 'Hyperion', v: 'Custom quote', u: '', d: 'LiDAR scan-to-proposal. Scan the site and build the proposal from captured geometry.' },
  { k: 'Sigil', v: 'Custom quote', u: '', d: 'E-signature in the record. The signed copy lands where the next person looks for it.' },
  { k: 'Torch', v: 'Custom quote', u: '', d: 'Calls, messages, recording and summaries connected to the record. The quote reflects your communication needs.' },
  { k: 'Treasury', v: null, u: null, d: 'Payroll and certified payroll, run off hours already in the record. In development.' },
]

const EXAMPLES = [
  { k: 'Recruit Sabina', v: 'We discuss the responsibilities and scope on the job-description call, then provide a quote before the interview.' },
  { k: 'Run Forge tools', v: 'We scope the products and services your company needs and provide a custom quote.' },
]

export default function PricingContent() {
  return (
    <>
      <PageHero
        eyebrow="Reference · What Forge costs"
        title={
          <>
            Two doors, and they <em>are not the same door</em>.
          </>
        }
        lead="Dominus Foundry is the holding company behind Forge. This page is a reference — how we scope the work and prepare a custom quote. Forge itself is bought at buildwithforge.app."
        metaLeft={
          <>
            <b>Custom quotes</b> · scope and terms agreed up front
          </>
        }
        metaRight={
          <>
            <b>Sabina and Forge tools</b> · quoted for your company
          </>
        }
      />

      <section className="section" id="structure">
        <div className="wrap">
          <div className="intro-grid">
            <h2 className="i-head reveal">
              A hire is <em>not</em> a line item.
            </h2>
            <div className="i-body reveal d1">
              <p>
                Forge is sold two ways, and they are quoted separately on purpose. A business either hires the employee or buys the tools.
                Those are different purchases, read against different budgets, and putting them on one list would misfile both.
              </p>
              <p>
                The first way is a hire. One number covers her and the system of record she works inside; the record is not itemised, for the
                same reason a salary is not quoted as base plus benefits plus payroll tax. The comparison it is meant to be read against is a
                person, and the figure for that person appears as a reference for the work.
              </p>
              <p>
                The second way is the tools. We discuss your workflow, choose the products and services it needs, and prepare a custom quote.
                There is no public rate card or bundle calculation.
              </p>
              <p>
                The quote states the scope and terms before you commit. Product prices depend on the work required for your company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section figures-section" id="hire">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ marginBottom: '30px' }}>
            The first way · a hire, quoted against a salary
          </p>
          <div className="figures reveal d1">
            {HIRE.map((f) => (
              <div className="figure" key={f.l}>
                {/* --ink-2, not --ink-3: at this size --ink-3 measures 4.49:1 on --panel, a hair under AA. */}
                <div className="fg-n serif">
                  {f.n}{' '}
                  <span style={{ fontSize: '0.34em', color: 'var(--ink-2)', letterSpacing: '0.04em' }}>{f.u}</span>
                </div>
                <div className="fg-l">{f.l}</div>
                <p className="fg-d">{f.d}</p>
                <p className="fg-src">{f.q}</p>
              </div>
            ))}
          </div>
          <p className="pricenote" style={{ marginTop: '26px' }}>
            One tier at either rate. There is no second or third hire package to move up to; the founding rate and the standing rate buy the
            same Sabina, and the only thing that separates them is whether the charter was still open. A business that also wants a tool from the
            tool scope below is quoted for your company — product prices are not published on this page.
          </p>
          <div style={{ marginTop: '22px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a className="btn btn-solid" href="https://buildwithforge.app/evaluate" target="_blank" rel="noopener">
              See if your company is ready. <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="https://buildwithforge.app/evaluate" target="_blank" rel="noopener">
              Request an interview. <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="rate-card">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <p className="eyebrow reveal">The second way · the tools</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              Scoped for the work you need.
            </h2>
            <p className="reveal d1" style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: '62ch' }}>
              A separate door, for an operator who wants the system of record and is not hiring. The hire above is not on this card and is not
              priced from it.
            </p>
          </div>
          <div className="pricelines reveal d1">
            {LINES.map((l) => (
              <div className="pline" key={l.k}>
                <span className="pl-k serif">{l.k}</span>
                {l.v ? (
                  <span className="pl-v serif" style={{ fontSize: '18px', whiteSpace: 'normal' }}>
                    {l.v}
                    <span className="pl-u">{l.u?.startsWith('/') ? l.u : ` ${l.u}`}</span>
                  </span>
                ) : (
                  <span className="pl-v serif" style={{ fontSize: '18px', color: 'var(--ink-3)' }}>
                    Coming soon
                  </span>
                )}
                <span className="pl-d">{l.d}</span>
              </div>
            ))}
          </div>
          <p className="pricenote">
            Each product is custom quoted. We discuss your workflows and communication needs, then state the scope and terms before you commit.
          </p>
        </div>
      </section>

      <section className="section" id="examples">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <p className="eyebrow reveal">Worked out</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              Two ways to scope the work.
            </h2>
          </div>
          <div className="criteria reveal d1">
            {EXAMPLES.map((e) => (
              <div className="crow" key={e.k}>
                <span className="c-k serif">{e.k}</span>
                <span className="c-v">{e.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="darkband section" id="terms">
        <div className="wrap">
          <p className="eyebrow reveal">Terms, plainly</p>
          <h2 className="reveal d1">A quote for your company.</h2>
          <p className="darkband-lead reveal d1">
            Sabina and every Forge product are custom quoted. The proposal sets out the responsibilities, products, services and terms for your company.
          </p>
          <p className="darkband-lead reveal d1" style={{ marginTop: '18px' }}>
            We do not publish product prices or bundle discounts. We scope the work with you and give you a quote for the circumstances.
          </p>
        </div>
      </section>

      <section className="section" id="where">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow reveal">Where Forge is sold</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(26px,3.4vw,40px)', marginTop: '16px' }}>
              Not here.
            </h2>
            <p className="reveal d1" style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: '58ch' }}>
              Dominus Foundry is the holding company. Forge is configured, bought and billed on its own platform, and that is the only place a
              price becomes an agreement.
            </p>
            <a
              className="section-more reveal d2"
              href="https://buildwithforge.app"
              target="_blank"
              rel="noopener"
              style={{ marginTop: '26px', display: 'inline-flex' }}
            >
              buildwithforge.app <span className="arr">→</span>
            </a>
          </div>
          <p className="pricenote" style={{ marginTop: '44px' }}>
            Your quote sets out the price, billing terms and any onboarding work before you commit. Treasury remains in development.
          </p>
        </div>
      </section>
    </>
  )
}
