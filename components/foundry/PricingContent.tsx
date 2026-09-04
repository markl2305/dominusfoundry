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

/* LADDER A - the hire. One tier. Core is inside it and is never a line item.
   The first card is deliberately NOT a Forge price: it is the salary comparison
   already published on buildwithforge.app, and it renders first on purpose. */
const HIRE = [
  {
    n: '~$5,500',
    u: '/mo',
    l: 'What it stands in for',
    d: 'A fully-loaded office coordinator — wage, employer tax, workers’ comp, health, retirement, the seat. This is the figure Forge publishes on its own homepage as the comparison, and it is not a Forge price.',
    q: 'Published on buildwithforge.app',
  },
  {
    n: 'Seven',
    u: 'seats open',
    l: 'Founding charter',
    d: 'Ten seats, awarded by application — one signed, two spoken for, seven still open. She answers the customer, carries the money conversation, and carries what you hand her to done. Forge Core is included — it is not a second line, and it is never quoted separately on this ladder. Held for as long as an operator holds the seat.',
    q: 'Ten seats total, application-gated',
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
const LINES = [
  {
    k: 'Forge Core',
    v: '$599',
    u: '/mo',
    d: 'The record every other product reads and writes. The required base of this ladder — no module runs without it. Flat for the whole company, unlimited users, no per-seat charge.',
  },
  {
    k: 'Hyperion',
    v: '$1,100',
    u: '/mo',
    d: 'LiDAR scan-to-proposal, priced per trade. Forge Core is included — not billed as a separate line. Scan the site, price off the captured geometry, sign it in one visit.',
  },
  {
    k: 'Sigil',
    v: '$49',
    u: '/mo',
    d: 'Unlimited e-signature, executed in-record. The signed copy lands where the next person looks for it.',
  },
  {
    k: 'Torch',
    v: '$35',
    u: '/number/mo',
    d: 'Telephony. Priced per active phone number — a provisioned quantity, not a meter and not a per-user charge. Four numbers is four lines of $35.',
  },
  {
    k: 'Treasury',
    v: null,
    u: null,
    d: 'Payroll and certified payroll, run off hours already in the record. In development — no published price.',
  },
]

/* Worked arithmetic. Every line is a configuration that actually exists.
   Iris is one number and is shown as one number; only Ladder B adds up. */
const EXAMPLES = [
  {
    k: 'Sabina',
    v: 'One number, not itemized. Core is inside it, not beside it, so there is nothing to add up. The rate itself is disclosed on the job-description call, not published here.',
  },
  {
    k: 'Core + Sigil + four Torch numbers',
    v: '$599 + $49 + (4 × $35) = $788 / mo. The tools ladder, added up.',
  },
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
        lead="Dominus Foundry is the holding company behind Forge. This page is a reference — what the platform costs and how the pricing is put together, so an investor or a partner can read it without a call. Forge itself is bought at buildwithforge.app."
        metaLeft={
          <>
            All prices <b>USD</b> · monthly unless noted
          </>
        }
        metaRight={
          <>
            <b>Two ladders</b> · no tiers to climb, no per-seat charge
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
                person, and the figure for that person appears before the price below.
              </p>
              <p>
                The second way is the tools, bought a line at a time on Forge Core. That ladder is additive and the arithmetic is yours to do:
                Core is flat for the whole company — unlimited users, no per-seat charge — and most modules are a line on top of it. Hyperion is
                the one exception: Core is already inside its price, so it is never billed as a separate line beneath it.
              </p>
              <p>
                Neither ladder has tiers to climb or packages to decode, and this page publishes no ceiling figure. A ceiling would have to be
                invented, because no configuration produces one.
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
            rate card below is quoted for it separately — this page publishes no combined figure, because none has been set.
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
              Bought a line at a time, on Core.
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
                  <span className="pl-v serif">
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
            Every line above is flat and monthly. Torch is the one that scales with something countable — active phone numbers you have
            provisioned, not calls placed.
          </p>
        </div>
      </section>

      <section className="section" id="examples">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <p className="eyebrow reveal">Worked out</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              Three real configurations.
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
          <h2 className="reveal d1">No per-seat charge. No per-call meter.</h2>
          <p className="darkband-lead reveal d1">
            The hire is one flat monthly number and is not metered per call. Core is flat for the whole company, so adding people does not
            raise the bill. Torch is the one line that scales with something countable: active phone numbers you have provisioned, at $35
            each.
          </p>
          <p className="darkband-lead reveal d1" style={{ marginTop: '18px' }}>
            An account pays for Forge Core once. The highest-priced tool carries it at full list; every additional tool is billed at
            list minus $600, and Core is never billed twice — that rule applies to tool-plus-tool accounts only. Sabina is priced
            separately, on the job-description call, and is not part of this discount arithmetic; no combined figure for a
            Sabina-plus-tool account is published here or anywhere else.
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
            All prices in USD. Monthly lines bill monthly. Torch is billed per active phone number. Treasury is in development and carries
            no published price. The Founding Charter rate is not published here or anywhere else.
          </p>
        </div>
      </section>
    </>
  )
}
