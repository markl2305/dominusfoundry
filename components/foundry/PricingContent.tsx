'use client'

/* PricingContent.tsx — the holding company's reference page for what Forge costs.
   RULED by Mark 2026-08-07: "fix the dominus foundry pricing to discuss forge and be a
   range (but an accurate one) — its job is not to sell."

   Three constraints follow, and they are load-bearing:
     1. It discusses Forge, using the real product and the real numbers. The legacy
        Engine/tier services sheet is gone, and "Forge" never names a build-fee tier again.
     2. The range is additive and its endpoints are real configurations: $599/mo (Core
        alone) to $2,099/mo (Core + Iris). No invented top-end figure.
     3. Its job is not to sell. No CTA stack, no urgency, no competitor comparison —
        a reference table with exactly one link out, to buildwithforge.app.

   Every number here comes from PRICING_CANON_2026-08-05.md and nowhere else. */
import { PageHero } from './FoundryShell'

/* The range, stated as three real figures. Nothing here is a package or a tier —
   they are the floor, the common configuration, and the one-time charge. */
const RANGE = [
  {
    n: '$599',
    u: '/mo',
    l: 'The floor',
    d: 'Forge Core on its own. Flat for the whole company, unlimited users. Nothing runs below this line, because every module reads and writes to Core.',
    q: 'Forge Core only',
  },
  {
    n: '$2,099',
    u: '/mo',
    l: 'The common shape',
    d: 'The record plus the employee — the configuration most businesses ask about. $599 and $1,500, added up in front of you rather than bundled into one number.',
    q: 'Forge Core + Iris',
  },
  {
    n: '$1,000',
    u: 'once',
    l: 'Setup',
    d: 'A single one-time charge. It applies to Core, to à-la-carte builds, and to Iris deals alike. Waived for the founding ten.',
    q: 'One-time · not monthly',
  },
]

/* The rate card. Order: base first, then modules, then the one-time line. */
const LINES = [
  {
    k: 'Forge Core',
    v: '$599',
    u: '/mo',
    d: 'The record every other product reads and writes. The required base — no module runs without it. Flat for the whole company, unlimited users, no per-seat charge.',
  },
  {
    k: 'Iris',
    v: '$1,500',
    u: '/mo*',
    d: 'The employee, added to Core like any other module. She answers the customer, carries the money conversation, and carries what you hand her to done. No per-call meter.',
  },
  {
    k: 'Hyperion',
    v: '$499',
    u: '/mo',
    d: 'LiDAR scan-to-proposal, priced per trade. Scan the site, price off the captured geometry, sign it in one visit.',
  },
  {
    k: 'Ariadne',
    v: '$499',
    u: '/mo',
    d: 'Dispatch and field execution. Signed work routes itself to a real crew slot instead of waiting for somebody to re-key it into a calendar.',
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
    d: 'Telephony. Priced per active phone number, quantity-priced — not per user. Four numbers is four lines of $35.',
  },
  {
    k: 'Treasury',
    v: null,
    u: null,
    d: 'Payroll and certified payroll, run off hours already in the record. In development — no published price.',
  },
  {
    k: 'Setup',
    v: '$1,000',
    u: 'one-time',
    d: 'One-time, on Core, à-la-carte builds and Iris deals alike. Waived for the founding ten.',
  },
]

/* Worked arithmetic. Every line is a configuration that actually exists, priced
   from the rate card above — this is what "range" means here. */
const EXAMPLES = [
  {
    k: 'Core alone',
    v: '$599 / mo, plus $1,000 once at setup. The floor: the record, the whole company on it, and nothing else added.',
  },
  {
    k: 'Core + Iris',
    v: '$599 + $1,500 = $2,099 / mo, plus $1,000 once. The top of the range as most businesses buy it.',
  },
  {
    k: 'Core + Iris + Hyperion',
    v: '$599 + $1,500 + $499 = $2,598 / mo, plus $1,000 once. Past the top of the range, because a module was added — not because a bigger package was bought.',
  },
  {
    k: 'Core + Hyperion + Sigil + four Torch numbers',
    v: '$599 + $499 + $49 + (4 × $35) = $1,287 / mo, plus $1,000 once. No Iris in this one.',
  },
]

export default function PricingContent() {
  return (
    <>
      <PageHero
        eyebrow="Reference · What Forge costs"
        title={
          <>
            One base, then <em>lines on top</em>.
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
            <b>Additive</b> · no tiers, no packages, no per-seat charge
          </>
        }
      />

      <section className="section" id="structure">
        <div className="wrap">
          <div className="intro-grid">
            <h2 className="i-head reveal">
              A quote is <em>arithmetic</em> you can do yourself.
            </h2>
            <div className="i-body reveal d1">
              <p>
                Forge Core is the record. It is the required base: every module reads and writes to it, so nothing runs without it. Core is flat
                for the whole company — unlimited users, no per-seat charge — which means adding people does not change the bill.
              </p>
              <p>
                Everything else is a line added to that base. There are no tiers to climb and no packages to decode. A business picks the
                modules it actually needs, and the price is $599 plus those lines.
              </p>
              <p>
                That is why the honest answer to “what does Forge cost” is a range with named endpoints rather than a single headline number —
                and why there is no ceiling figure on this page. A ceiling would have to be invented, because no configuration produces one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section figures-section" id="range">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ marginBottom: '30px' }}>
            The range, with its endpoints named
          </p>
          <div className="figures reveal d1">
            {RANGE.map((f) => (
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
            A business that adds Hyperion, Ariadne, Sigil or Torch pays more than $2,099, and the rate card below says exactly how much more.
            There is no figure above $2,099 to publish as a maximum, because there is no package that produces one.
          </p>
        </div>
      </section>

      <section className="section" id="rate-card">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <p className="eyebrow reveal">The rate card</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              Every line that can appear on a Forge invoice.
            </h2>
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
          <p className="pricenote">*$1,500 covers typical volume. Very heavy users may move to a higher tier.</p>
        </div>
      </section>

      <section className="section" id="examples">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <p className="eyebrow reveal">Worked out</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              Four real configurations, added up.
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
            Core is flat for the whole company, so hiring does not raise the bill. Iris is not metered per call — $1,500 covers typical volume,
            and a very heavy user moves to a higher tier rather than onto a meter. Torch is the one line that scales with something countable:
            active phone numbers, at $35 each. Setup is charged once, on every kind of deal, and is waived for the founding ten.
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
            All prices in USD. Monthly lines bill monthly; setup is a single one-time charge. Torch is billed per active phone number.
            Treasury is in development and carries no published price.
          </p>
        </div>
      </section>
    </>
  )
}
