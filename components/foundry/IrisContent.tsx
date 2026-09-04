'use client'

/* IrisContent.tsx — the depth surface for the employee herself.
   Copy source: MESSAGE_CANON.md §1 (the pain) and §3 (what she solves).
   Prices: PRICING_CANON_2026-08-05.md only. */
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'

const WHAT_SHE_DOES = [
  {
    n: '01',
    t: 'She answers',
    d: 'The phone gets picked up at 4:50 on a Friday, and at 7:10 on a Monday, and while the owner is on a roof with his phone in the truck. The call is answered, understood, and written into the record before it can be forgotten.',
  },
  {
    n: '02',
    t: 'She carries the money',
    d: 'The proposal that has been sitting for two days goes out. The invoice that went out months ago gets chased, politely and on schedule. The change order becomes a number instead of a conversation somebody meant to have.',
  },
  {
    n: '03',
    t: 'She takes what you hand her',
    d: 'You give her one responsibility, in a sentence, with a boundary on it. Not a configuration screen and not an integration project — a rule an owner can write and can read back six months later.',
  },
  {
    n: '04',
    t: 'She carries it to done',
    d: 'Not a draft in somebody’s inbox. The permit date is watched, the follow-up happens, and the thing that was supposed to close, closes — inside the same record everything else lives in.',
  },
]

const FIGURES = [
  {
    n: '~1 in 4',
    l: 'Inbound calls unanswered',
    d: 'Roughly one in four inbound calls to small contractors goes unanswered; 78% of customers buy from the vendor that responds first.',
    src: 'Source · industry lead-response benchmarks',
  },
  {
    n: '42 hrs',
    l: 'Average reply to a quote',
    d: 'Average time-to-quote for small commercial trades, measured from first contact to a number in the customer’s hands.',
    src: 'Source · trade lead-response studies',
  },
  {
    n: '~83 days',
    l: 'Days sales outstanding',
    d: 'Construction days-sales-outstanding sits near 83 days industry-wide, among the slowest-collecting sectors in the economy.',
    src: 'Source · construction DSO surveys',
  },
]

const CHEST = [
  {
    k: 'Core',
    v: 'The business is being run out of somebody’s head and somebody’s spreadsheet. Core is the record every other product — and Sabina — reads and writes. Required base, whole company, unlimited users.',
  },
  {
    k: 'Hyperion',
    v: 'The quote takes days and the job goes to whoever answered first. Scan the site with a phone, price off the captured geometry, sign it in one visit.',
  },
  {
    k: 'Ariadne',
    v: 'Signed work sits until somebody re-keys it into a calendar. Signed work routes itself to a real crew slot, weather-gated, with a live link to the customer.',
  },
  {
    k: 'Sigil',
    v: 'The signed copy is in somebody’s email. Send for signature, file the executed copy where the next person looks.',
  },
  {
    k: 'Torch',
    v: 'The call happened and nothing about it reached the file. Answer, record, and write the summary into the record while it is still true.',
  },
  {
    k: 'Plate',
    v: 'Closeout is a shoebox. Submittals, as-builts and the commissioning packet in one place.',
  },
  {
    k: 'Treasury',
    v: 'Payroll runs off a spreadsheet instead of hours already in the record. In development — coming soon.',
  },
]

export default function IrisContent() {
  return (
    <>
      <PageHero
        eyebrow="Sabina · The employee you hire"
        title={
          <>
            The call at 4:50 <em>gets answered</em>.
          </>
        }
        lead="The front office is one person, and everything waits on her. Sabina answers the customer, carries the money conversation, takes what you hand her, and carries it to done — inside a record you govern and can take back."
        actions={
          <>
            <a className="btn btn-solid" href="#what">
              What she does {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="/governance">
              Why she can be trusted {Icon.arr}
            </a>
          </>
        }
        metaLeft={
          <>
            A hire, not a module · <b>Albuquerque, NM</b>
          </>
        }
        metaRight={
          <>
            <b>Scoped</b> · Attributed · Reversible
          </>
        }
      />

      <section className="section" style={{ paddingBlock: '20px' }}>
        <div className="wrap">
          <p className="fg-src">Sabina was previously named Iris. Same product, same company; the name changed in August 2026.</p>
        </div>
      </section>

      <section className="section" id="friday">
        <div className="wrap">
          <div className="intro-grid">
            <h2 className="i-head reveal">
              It is 4:50 on a Friday. <em>The GC is calling.</em>
            </h2>
            <div className="i-body reveal d1">
              <p>
                The change order needs an answer. The one person who answers the phone left at 4:30. The owner is on a roof in Rio Rancho with
                his phone in the truck.
              </p>
              <p>
                That call is worth $14,200. Nobody answers it. Nobody knows it happened.
              </p>
              <p>
                The same person who missed that call is also the person who was going to chase the invoice that went out 83 days ago, send the
                proposal that has been sitting for two days, and notice that the permit expires Friday. One person, four jobs — and the
                business grows exactly as fast as that one person can absorb.
              </p>
              <p>
                When she leaves, everything she knew about how this business runs leaves with her. Not the files. The judgment: which GC pays
                late, which invoice not to chase this week, what the owner would have said.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section figures-section">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ marginBottom: '30px' }}>
            The shape of it, with the receipts
          </p>
          <div className="figures reveal d1">
            {FIGURES.map((f) => (
              <div className="figure" key={f.l}>
                <div className="fg-n serif">{f.n}</div>
                <div className="fg-l">{f.l}</div>
                <p className="fg-d">{f.d}</p>
                <p className="fg-src">{f.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pillars section" id="what">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">
              What she actually
              <br />
              does all day.
            </h2>
            <p className="eyebrow">The job, not the feature list</p>
          </div>
          <div className="steps">
            {WHAT_SHE_DOES.map((p, i) => (
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

      <section className="pullband section">
        <div className="wrap">
          <p className="eyebrow center reveal" style={{ marginBottom: '26px' }}>
            The positioning, plainly
          </p>
          <p className="big reveal d1">
            Sabina is <em>who you hire</em>. The chest is what she reaches for.
          </p>
          <p className="sub reveal d1">
            Forge is a complete operating platform for commercial installation contractors — not a CRM. You do not buy her a toolset and hope
            she uses it; you give her a responsibility, and she picks up whichever of these the job needs.
          </p>
        </div>
      </section>

      <section className="section" id="chest">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '44px' }}>
            <p className="eyebrow reveal">What she reaches for</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              One business problem each.
            </h2>
          </div>
          <div className="criteria reveal d1">
            {CHEST.map((c) => (
              <div className="crow" key={c.k}>
                <span className="c-k serif">{c.k}</span>
                <span className="c-v">{c.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULED 2026-08-25 (Mark): she is a hire, not a module. One number, Core inside it.
          The salary she is measured against renders BEFORE the price, in DOM order, on purpose.
          RETIRED here and never restored: $1,500 as a public price, $2,099 as a public sum,
          and the additive "$599 + $1,500" presentation.
          RULED 2026-08-29 (Mark): "we go with 2000 and 3500 - on every surface." The founding
          rate is $2,000/mo, held for as long as the operator holds the seat; the standing rate
          is $3,500/mo once the charter closes.
          SEAT COUNT, RULED 2026-08-29 (Mark): two surface classes. Sales/marketing counts
          contracts PLUS verbals in onboarding and publishes SEVEN OPEN; investor surfaces
          (/pitch, markflord.com/thesis, markflord.com/onepage) count contracts only and say
          nine. dominusfoundry.com is a public marketing site carrying no investor instrument,
          so it is SALES class: seven. Do not "correct" this back to nine.
          SUPERSEDED 2026-09-04 (Mark): "Strip both — site and table." Every Sabina price comes
          off every public surface; she is recruited, not sold. $2,000 and $3,500 no longer
          render below — the section now names the founding charter (still seven open, no
          figure attached) and states that her rate is disclosed on the job-description call,
          never on a web surface. Seat count and continuity language are unaffected by this
          change and stand as ruled above.
          AUDIT FIX, 2026-09-04 (cross-site review of the 09-04 realignment): the "what she
          costs" pline carried the RETIRED aphorism ("We don't quote a number before we know
          the job. Nobody hires that way, and neither do we.") — superseded the same day by
          Mark's verbatim replacement, now below. Also added: a link from the founding-charter
          note to buildwithforge.app/evaluate (the "awarded by application" line had no
          application to link to) using the ruled CTA pair, "See if your company is ready." /
          "Request an interview." That route is on an unmerged forge-web branch as of
          2026-09-04 — this site must not deploy before it is live. */}
      <section className="section" id="price">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '36px' }}>
            <p className="eyebrow reveal">What she costs</p>
            {/* Mark's copy, RULED 2026-08-26 - VERBATIM. Headline, subhead and deck line are not
                to be rewritten, paraphrased, reflowed or split, and they appear exactly ONCE on
                this surface: here, at the primary moment Iris and her price are introduced
                together. The em-dash and the curly apostrophes are load-bearing.
                The prior headline is kept verbatim directly beneath, demoted one level. */}
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              The hire you’ve needed and couldn’t justify.
            </h2>
            <p className="reveal d1" style={{ marginTop: '18px', fontSize: '18px', lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: '58ch' }}>
              You’ve had this seat open for two years — not for lack of need. For lack of anyone worth trusting with it.
            </p>
            <p className="eyebrow reveal d1" style={{ marginTop: '14px' }}>The AI employee who answers to you.</p>
            <p className="serif reveal d1" style={{ marginTop: '26px', fontSize: 'clamp(20px,2.4vw,28px)', lineHeight: 1.3, color: 'var(--ink-1)' }}>
              Read against a salary, not listed as a price.
            </p>
            <p className="reveal d1" style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: '62ch' }}>
              The person she stands in for costs about <strong>$5,500 a month</strong> fully loaded — wage, employer tax, workers&rsquo; comp, health, retirement, the seat. That is the
              figure Forge publishes as the comparison, and it is the one her rate is meant to be read against.
            </p>
          </div>
          <div className="pricelines reveal d1">
            <div className="pline">
              <span className="pl-k serif">Founding charter</span>
              <span className="pl-v serif">Seven seats open</span>
              <span className="pl-d">
                Ten seats, awarded by application. One signed, two spoken for, seven still open. Forge Core is included &mdash; the
                record she works inside is not a second line and is never quoted separately. No per-call meter, no per-seat charge.
                Held for as long as you hold the seat.
              </span>
            </div>
            <div className="pline">
              <span className="pl-k serif">What she costs</span>
              <span className="pl-v serif">Disclosed, not published</span>
              <span className="pl-d">
                The founding rate is one number, and we quote it on the call because we take on two companies at a time &mdash; her
                rate is disclosed on the job-description call, before you interview her, never on a web surface.
              </span>
            </div>
          </div>
          <p className="pricenote">
            There is no second or third hire package. Hyperion, Sigil and Torch are bought on their own rate card and are quoted
            separately — this page publishes no combined figure, because none has been set.
          </p>
          <div style={{ marginTop: '22px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a className="btn btn-solid" href="https://buildwithforge.app/evaluate" target="_blank" rel="noopener">
              See if your company is ready. {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="https://buildwithforge.app/evaluate" target="_blank" rel="noopener">
              Request an interview. {Icon.arr}
            </a>
          </div>
        </div>
      </section>

      <section className="darkband section" id="trust">
        <div className="wrap">
          <p className="eyebrow reveal">Why you can hand her the work</p>
          <h2 className="reveal d1">She starts with almost nothing and earns the rest.</h2>
          <p className="darkband-lead reveal d1">
            Authority is granted one responsibility at a time, with a boundary you set. Every rule carries who wrote it and when; every action
            carries the rule it applied. Any grant is revoked in one move — which is exactly why you can afford to give her more, faster. And
            none of it is a layer above the model: nothing executes outside it, so capability can never outrun permission.
          </p>
          <a className="section-more on-dark-more reveal d2" href="/governance">
            Write a rule and revoke it yourself <span className="arr">→</span>
          </a>
        </div>
      </section>

      <CTA
        title={
          <>
            Give her <em>one job</em> on Monday.
          </>
        }
        lead="Pick the thing you would most like off your plate this week. Write the boundary yourself. Widen it when the record earns it — or take it back."
        actions={
          <>
            <a className="btn btn-solid" href="https://buildwithforge.app" target="_blank" rel="noopener">
              Enter Forge {Icon.arr}
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
