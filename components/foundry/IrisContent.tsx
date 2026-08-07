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
    v: 'The business is being run out of somebody’s head and somebody’s spreadsheet. Core is the record every other product — and Iris — reads and writes. Required base, whole company, unlimited users.',
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
        eyebrow="Iris · The employee you hire"
        title={
          <>
            The call at 4:50 <em>gets answered</em>.
          </>
        }
        lead="The front office is one person, and everything waits on her. Iris answers the customer, carries the money conversation, takes what you hand her, and carries it to done — inside a record you govern and can take back."
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
            A module on Forge Core · <b>Albuquerque, NM</b>
          </>
        }
        metaRight={
          <>
            <b>Scoped</b> · Attributed · Reversible
          </>
        }
      />

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
            Iris is <em>who you hire</em>. The chest is what she reaches for.
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

      <section className="section" id="price">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '36px' }}>
            <p className="eyebrow reveal">What she costs</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              Two lines, added up in front of you.
            </h2>
          </div>
          <div className="pricelines reveal d1">
            <div className="pline">
              <span className="pl-k serif">Forge Core</span>
              <span className="pl-v serif">
                $599<span className="pl-u">/mo</span>
              </span>
              <span className="pl-d">The record. Flat, whole company, unlimited users — no per-seat charge. The required base every module runs on.</span>
            </div>
            <div className="pline">
              <span className="pl-k serif">Iris</span>
              <span className="pl-v serif">
                $1,500<span className="pl-u">/mo*</span>
              </span>
              <span className="pl-d">The employee, added to Core like any other module. No per-call meter.</span>
            </div>
          </div>
          <p className="pricesum">
            $2,099 / mo together <span>· Hyperion, Ariadne, Sigil and Torch add to the same bill when you want them.</span>
          </p>
          <p className="pricenote">*$1,500 covers typical volume. Very heavy users may move to a higher tier.</p>
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
