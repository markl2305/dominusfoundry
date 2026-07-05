'use client'

/* VenturesContent.tsx — Foundry Capital, the long-term thesis. Not yet funded or investing; reframed 2026-07-05 off Mark's ruling that Dominus Foundry is family-funded only, no outside money. */
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'

const V_PRINCIPLES = [
  { n: '01', t: 'Operator-owned', d: 'We only back what we would be willing to run ourselves — and often have.' },
  { n: '02', t: 'Vertical-first', d: 'Software for the industries the platforms skipped, not another horizontal tool.' },
  { n: '03', t: 'Compounding IP', d: 'Every venture plugs into one shared patent estate. The moat grows with each build.' },
  { n: '04', t: 'Cash-flow native', d: 'Built to profit, not to raise. No exit clock, no outside mandate.' },
]

const V_CRITERIA = [
  { k: 'An operator at the helm', v: 'Someone who has done the work, carried the pager, and felt the broken process firsthand.' },
  { k: 'A vertical the platforms skipped', v: 'Fragmented, unglamorous industries that run the physical world and were left on spreadsheets.' },
  { k: 'Software as the wedge', v: "A product that becomes the system of record — not a feature bolted onto someone else's." },
  { k: 'A reason it compounds', v: 'Data, distribution, or IP that makes year five far harder to replicate than year one.' },
  { k: 'Real economics', v: 'Cash flow today or an honest, near line of sight to it. We forge durable, not hypothetical.' },
]

const V_STEPS = [
  { n: '01', t: 'We listen', d: 'A real conversation with the people doing the work — no deck theater, no process gauntlet.' },
  { n: '02', t: 'We diligence as operators', d: 'We pressure-test the model the way someone who has to run it would, not from a spreadsheet.' },
  { n: '03', t: 'We forge', d: 'Capital, plus access to Hyperion, the Forge playbook, and a team that has shipped to the trades.' },
  { n: '04', t: 'We hold', d: 'No countdown to a sale. We partner for the long build and steward it like our own name is on it — because it is.' },
]

const V_MARKS = [
  { n: '0', l: 'Exit Clocks Planned' },
  { n: '1', l: 'Shared Patent Estate' },
  { n: '100', u: '%', l: 'Operator-Led, By Design' },
  { n: '∞', l: 'Intended Time Horizon' },
]

export default function VenturesContent() {
  return (
    <>
      <PageHero
        eyebrow="Foundry Capital · The Long-Term Thesis"
        title={
          <>
            We intend to back the industries that <em>software forgot</em>.
          </>
        }
        lead="Foundry Capital isn't funded or investing yet — it's the thesis we're building toward. As cash flow from the flagship compounds, we plan to forge it into the next vertical, on the Foundry's own terms: patient, profitable, and led by operators who have done the work, not just modeled it."
        actions={
          <>
            <a className="btn btn-solid" href="#contact">
              Talk with us {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="#principles">
              Our principles {Icon.arr}
            </a>
          </>
        }
        metaLeft={
          <>
            Operator-led · <b>Albuquerque, NM</b>
          </>
        }
        metaRight={
          <>
            <b>Family-funded</b> · Pre-investment
          </>
        }
      />

      <section className="pullband section">
        <div className="wrap">
          <p className="eyebrow center reveal" style={{ marginBottom: '26px' }}>
            The Model
          </p>
          <p className="big reveal d1">
            We won&apos;t deploy a fund. <em>We plan to forge companies</em> — and hold them.
          </p>
          <p className="sub reveal d1">
            The flagship earns. As it compounds, we intend to put that cash into the next operator-led vertical, with a patent estate that
            carries across every one of them. The model is a holding company that invests, not a fund that exits — once there&apos;s
            capital behind it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="intro-grid">
            <h2 className="i-head reveal">
              A future investment arm with an <em>operator&apos;s instincts</em>.
            </h2>
            <div className="i-body reveal d1">
              <p>
                Most capital arrives with a thesis and a timeline. We plan to arrive with a workbench instead. Dominus Foundry is
                family-funded today, with no outside money — but because we run Forge every day, we know what it takes to turn a broken,
                paper-run industry into software that earns. When Foundry Capital has capital to deploy, that&apos;s the kind of founder
                we intend to back.
              </p>
              <p>
                We won&apos;t be looking for the next thing everyone is chasing. We&apos;ll be looking for the trades, the field services,
                the physical-world businesses that the platforms wrote off as too small or too hard. That is precisely where durable
                companies get forged.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars section" id="principles">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">How we plan to invest.</h2>
            <p className="eyebrow">Four principles</p>
          </div>
          <div className="steps">
            {V_PRINCIPLES.map((p, i) => (
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

      <section className="section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '44px' }}>
            <p className="eyebrow reveal">What we&apos;ll look for</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,48px)', marginTop: '16px' }}>
              Five things, before anything else — once we&apos;re investing.
            </h2>
          </div>
          <div className="criteria reveal d1">
            {V_CRITERIA.map((c) => (
              <div className="crow" key={c.k}>
                <span className="c-k serif">{c.k}</span>
                <span className="c-v">{c.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pillars section">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">How we plan to partner.</h2>
            <p className="eyebrow">From first call to long hold</p>
          </div>
          <div className="steps">
            {V_STEPS.map((p, i) => (
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

      <section className="stats section" style={{ paddingBlock: '0' }}>
        <div className="wrap" style={{ paddingBlock: 'clamp(56px,7vw,96px)' }}>
          <p className="eyebrow center reveal" style={{ marginBottom: '26px' }}>
            Commitments, not a track record — Foundry Capital hasn&apos;t invested yet
          </p>
          <div className="stat-grid">
            {V_MARKS.map((s, i) => (
              <div className={`stat reveal d${i % 4}`} key={s.l}>
                <div className="n serif">
                  {s.n}
                  {s.u && <span className="u">{s.u}</span>}
                </div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={
          <>
            Building in a <em>forgotten vertical</em>?
          </>
        }
        lead="Foundry Capital isn't funded or making investments yet — but if you're an operator turning a physical-world industry into software, we'd still like to know you exist. Real conversation, no process theater, no promise of capital today."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Introduce yourself {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="tel:+18667103313">
              Call (866) 710-3313 {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
