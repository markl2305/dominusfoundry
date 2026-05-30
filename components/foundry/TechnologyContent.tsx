'use client'

/* TechnologyContent.tsx — Hyperion (the patent-pending technology). Ported from technology-page.jsx. */
import HyperionScan from './HyperionScan'
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'

const T_MODES = [
  { n: 'Hyperion Scan', tag: 'LiDAR capture', d: "A phone's LiDAR walks a space and returns a dimensioned 3D model, an automatic bill of materials, and a client-ready proposal." },
  { n: 'Hyperion Vision', tag: 'Photogrammetry', d: "Photo-based dimension estimation and equipment identification for when a full scan isn't available." },
  { n: 'Hyperion Blueprint', tag: 'Plans & as-builts', d: 'Spatial models reconstructed from existing drawings, blueprints, and as-built documentation.' },
  { n: 'Hyperion SiteIQ', tag: 'Assessment', d: 'A structured, scored site assessment — governed and auditable, built for decisions in the field.' },
]

const T_STEPS = [
  { n: '01', t: 'Capture', d: 'A technician walks the space with a phone. LiDAR and vision do the measuring — no tape, no tripod.' },
  { n: '02', t: 'Reconstruct', d: 'Hyperion builds a dimensioned 3D model of the site in minutes, not days of manual takeoff.' },
  { n: '03', t: 'Estimate', d: 'It generates a system design and bill of materials against real catalog and labor data.' },
  { n: '04', t: 'Propose', d: 'A branded, client-ready proposal comes out the other end — automatically, ready to send.' },
]

const T_STATS = [
  { n: '9', l: 'Patents Pending' },
  { n: '10', u: 'min', l: 'Scan to Proposal' },
  { n: '50', l: 'States Compliant' },
  { n: '1', l: 'Shared IP Estate' },
]

export default function TechnologyContent() {
  return (
    <>
      <PageHero
        eyebrow="Patent-Pending Technology"
        title={
          <>
            Hyperion — spatial intelligence for the <em>physical world</em>.
          </>
        }
        lead="A technician walks a building with a phone. Hyperion returns a complete system design, a bill of materials, and a client-ready proposal — automatically. The IP layer every company under the Foundry is built on."
        actions={
          <>
            <a className="btn btn-solid" href="#how">
              See how it works {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="#moat">
              The moat {Icon.arr}
            </a>
          </>
        }
        metaLeft={
          <>
            <b>9 patents pending</b> · Albuquerque, NM
          </>
        }
        metaRight={
          <>
            Phone-native · <b>No special hardware</b>
          </>
        }
      />

      <section className="hyperion section" id="capture">
        <div className="wrap">
          <div className="hyperion-grid">
            <div>
              <div className="scan-frame reveal">
                <HyperionScan />
                <span className="corner tl" />
                <span className="corner tr" />
                <span className="corner bl" />
                <span className="corner br" />
                <span className="label">Hyperion · spatial capture</span>
              </div>
            </div>
            <div>
              <p className="eyebrow reveal">From phone to proposal</p>
              <h2 className="reveal d1">
                A measuring tape <em>that thinks</em>.
              </h2>
              <p className="reveal d1">
                Manual takeoff is the bottleneck of every trade — hours of measuring, spreadsheets, and re-keying before a single proposal goes
                out. Hyperion collapses that into a walk-through.
              </p>
              <p className="reveal d2">
                The same capture feeds design, materials, pricing, and the proposal at once, so the number a technician quotes in the field is
                the number the model actually supports.
              </p>
              <a className="section-more reveal d2" href="#how">
                How a capture becomes a proposal <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars section">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">One engine, four ways in.</h2>
            <p className="eyebrow">The Hyperion suite</p>
          </div>
          <div className="modes-grid reveal d1">
            {T_MODES.map((m) => (
              <div className="mode" key={m.n}>
                <div className="m-n serif">{m.n}</div>
                <div className="m-tag">{m.tag}</div>
                <div className="m-d">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pillars section" id="how">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">
              Capture to proposal,
              <br />
              in four moves.
            </h2>
            <p className="eyebrow">How it works</p>
          </div>
          <div className="steps">
            {T_STEPS.map((p, i) => (
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

      <section className="pullband section" id="moat">
        <div className="wrap">
          <p className="eyebrow center reveal" style={{ marginBottom: '26px' }}>
            Why it compounds
          </p>
          <p className="big reveal d1">
            Every scan makes the <em>next one smarter</em>.
          </p>
          <p className="sub reveal d1">
            Hyperion isn&apos;t a feature — it&apos;s an architecture. No competitor has filed anything comparable, and none can replicate it
            without rebuilding from the ground up. Every capture feeds a model that improves with scale, and that model carries across every
            company the Foundry builds. The advantage isn&apos;t the demo. It&apos;s the depth underneath it.
          </p>
        </div>
      </section>

      <section className="stats section" style={{ paddingBlock: '0' }}>
        <div className="wrap" style={{ paddingBlock: 'clamp(56px,7vw,96px)' }}>
          <div className="stat-grid">
            {T_STATS.map((s, i) => (
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
            See Hyperion <em>inside Forge</em>.
          </>
        }
        lead="Hyperion ships today inside Forge, the operating system for the trades. Try it on a real space, or talk with the team about bringing it to your industry."
        actions={
          <>
            <a className="btn btn-solid" href="https://buildwithforge.app" target="_blank" rel="noopener">
              Enter Forge {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="mailto:foundry@dominusfoundry.com">
              Talk with the team {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
