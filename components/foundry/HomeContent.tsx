'use client'

/* HomeContent.tsx — home page sections (ported from sections.jsx + sections2.jsx). */
import Embers from './Embers'
import HyperionScan from './HyperionScan'
import { Medallion, Glyph, Icon } from './Marks'
import { CTA, useFoundry } from './FoundryShell'

function Hero() {
  const { emberI } = useFoundry()
  return (
    <section className="hero on-dark" id="top">
      <Embers className="embers-canvas" intensity={emberI} density={0.95} />
      <div className="hero-content">
        <div className="hero-inner">
          <Medallion className="hero-crest" scheme="ondark" />
          <p className="hero-motto serif">Fide et Familia</p>
          <h1 className="hero-title">
            We forge software that <em>endures</em>.
          </h1>
          <p className="hero-lead">
            A family-owned technology holding company forging AI-native operating systems for the industries that build the world — and the
            governance, patents, and people standing behind them.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="https://buildwithforge.app" target="_blank" rel="noopener">
              Enter Forge {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="/company">
              The company {Icon.arr}
            </a>
          </div>
        </div>
      </div>
      <div className="hero-meta wrap">
        <span className="col">
          Est. 2024 · <b>Albuquerque, NM</b>
        </span>
        <span className="col">
          18 provisional patents filed · <b>Fide et Familia</b>
        </span>
      </div>
    </section>
  )
}

function Thesis() {
  return (
    <section className="thesis section">
      <div className="wrap">
        <div className="thesis-grid">
          <div className="reveal">
            <p className="eyebrow">The Holding Company</p>
            <p className="thesis-line" style={{ marginTop: '22px' }}>
              We don&apos;t raise to build. <span className="dim">We</span> <em>build to compound</em>
              <span className="dim"> — one durable company at a time.</span>
            </p>
          </div>
          <div className="thesis-aside reveal d1">
            <p>
              Dominus Foundry is the parent above Forge. The flagship earns; the technology compounds into patents; the governance underneath
              is what lets an owner hand real work to software at all. No outside mandate, no exit clock — only what we&apos;d be proud to run
              for a generation.
            </p>
            <p>Built and held by the Lord family. Everything we ship carries the name.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const PILLARS = [
  {
    idx: '01',
    glyph: 'forge',
    kicker: 'Flagship · Operating',
    name: 'Forge',
    body: 'The AI operating system for the trades. One platform replaces D-Tools, ServiceTitan, and the half-dozen tools a contractor duct-tapes together — from LiDAR scan to final invoice.',
    href: 'https://buildwithforge.app',
    label: 'Enter Forge',
    ext: true,
  },
  {
    idx: '02',
    glyph: 'iris',
    kicker: 'The employee · Live',
    name: 'Sabina',
    body: 'The front office is one person, and everything waits on her. Sabina answers the customer, carries the money conversation, takes what you hand her, and carries it to done — inside a record the owner governs.',
    href: '/iris',
    label: 'Meet Sabina',
  },
  {
    idx: '03',
    glyph: 'hyperion',
    kicker: 'Technology · Patent estate',
    name: 'Hyperion',
    body: 'The quote takes days and the job goes to whoever answered first. Scan the site with a phone, price off the captured geometry, sign it in one visit. The IP layer everything else is built on.',
    href: '/technology',
    label: 'The technology',
  },
  {
    idx: '04',
    glyph: 'family',
    kicker: 'Stewardship · Fide et Familia',
    name: 'The Lord Family',
    body: 'Mark & Bri Lord build, hold, and steward every company under the Foundry. If a system fails, it’s our name on the line — and that is precisely the point.',
    href: '/company',
    label: 'The family',
  },
]

function Pillars() {
  return (
    <section className="pillars section" id="portfolio">
      <div className="wrap">
        <div className="pillars-head reveal">
          <h2 className="serif">
            Four pillars.
            <br />
            One foundry.
          </h2>
          <p className="eyebrow">What lives under the Foundry</p>
        </div>
        <div className="pillar-grid">
          {PILLARS.map((p, i) => (
            <a
              className={`pillar reveal d${i % 4}`}
              href={p.href}
              target={p.ext ? '_blank' : undefined}
              rel={p.ext ? 'noopener' : undefined}
              key={p.name}
            >
              <span className="idx">{p.idx}</span>
              <span className="glyph">{Glyph[p.glyph]}</span>
              <span className="kicker">{p.kicker}</span>
              <h3 className="serif">{p.name}</h3>
              <p>{p.body}</p>
              <span className="more">
                {p.label} <span className="arr">→</span>
              </span>
              <span className="emberline" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const HMODES = [
  { nm: 'Hyperion Scan', ds: 'iPhone LiDAR → 3D model → auto-BOM → auto-proposal' },
  { nm: 'Hyperion Vision', ds: 'Photo-based dimension estimation & equipment ID' },
  { nm: 'Hyperion Blueprint', ds: 'Spatial models extracted from plans & as-builts' },
  { nm: 'Hyperion SiteIQ', ds: 'Structured site assessment, scored & governed' },
]

function Hyperion() {
  return (
    <section className="hyperion section" id="hyperion">
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
            <p className="eyebrow reveal">Patent-Pending Technology</p>
            <h2 className="reveal d1">
              Hyperion <em>Spatial Intelligence</em>
            </h2>
            <p className="reveal d1">
              A technician walks a building with a phone. Hyperion returns a complete system design, a bill of materials, and a client-ready
              proposal — automatically. No manual takeoff. No spreadsheets. No waiting.
            </p>
            <p className="reveal d2">
              No competitor has filed anything comparable, and none can replicate it without rebuilding from the architecture up. Every scan
              feeds a single integrated record on infrastructure we own — the moat beneath everything the Foundry builds.
            </p>
            <div className="hyperion-modes reveal d2">
              {HMODES.map((m) => (
                <div className="hmode" key={m.nm}>
                  <span className="nm serif">{m.nm}</span>
                  <span className="ds">{m.ds}</span>
                </div>
              ))}
            </div>
            <a className="section-more reveal d2" href="/technology">
              Explore Hyperion <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const PROPERTIES = [
  { n: '01', nm: 'Scoped', ds: 'Authority is granted one responsibility at a time, each with a boundary the owner set.', tag: 'Grant' },
  { n: '02', nm: 'Attributed', ds: 'Every rule carries who wrote it and when. Every action carries the rule it applied.', tag: 'Record' },
  { n: '03', nm: 'Reversible', ds: 'Any grant can be revoked in one move. The cost of being wrong is one click.', tag: 'Revoke' },
  { n: '04', nm: 'Structural', ds: 'Not a layer above the model. Nothing executes outside it.', tag: 'Architecture' },
]

function Governance() {
  return (
    <section className="darkband section" id="governance">
      <div className="wrap">
        <p className="eyebrow reveal">Governance · The part nobody else can claim</p>
        <h2 className="reveal d1">Everyone sells an AI that can act on your business.</h2>
        <p className="darkband-lead reveal d1">
          Almost nobody can tell you what it is allowed to do, what it actually did, or how to take an ability back once it has it. That is
          not a safety footnote — it is the reason an owner cannot hand real work to any of them. Forge was built the other way round: the
          record first, the governance inside it, and nothing that executes outside it.
        </p>
        <div className="darkband-rows reveal d2">
          {PROPERTIES.map((p) => (
            <div className="vrow" key={p.n}>
              <span className="yr">{p.n}</span>
              <span className="nm serif">{p.nm}</span>
              <span className="ds">{p.ds}</span>
              <span className="stage">{p.tag}</span>
            </div>
          ))}
        </div>
        <a className="section-more on-dark-more reveal d2" href="/governance">
          Write a rule and revoke it yourself <span className="arr">→</span>
        </a>
      </div>
    </section>
  )
}

function Family() {
  const { crestScheme } = useFoundry()
  return (
    <section className="family section" id="company">
      <div className="wrap">
        <div className="family-grid">
          <div className="reveal">
            <Medallion className="family-crest" scheme={crestScheme} withScroll />
          </div>
          <div>
            <p className="eyebrow reveal">The Company · Fide et Familia</p>
            <blockquote className="reveal d1" style={{ marginTop: '22px' }}>
              The crest reads <em>Fide et Familia</em> — faith and family. It is not decoration. Every system we ship carries the Lord name,
              and if it falters, it is our reputation in the fire.
            </blockquote>
            <div className="attrib reveal d1">
              <span className="ln" />
              <span className="who">Mark Lord · Founder</span>
            </div>
            <div className="body reveal d2">
              <p>
                Dominus Foundry is built and run by Mark &amp; Bri Lord — operators who balance code, capital, and the day-to-day of a working
                company. We started here because we watched an entire industry run on disconnected tools and pricing designed to punish growth.
              </p>
              <p>
                The trades deserve the caliber of technology enterprise takes for granted — without the enterprise price or the enterprise
                theater. So we forge it ourselves, from Albuquerque, and we hold what we build.
              </p>
            </div>
            <a className="section-more reveal d2" href="/company">
              Meet the family <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { n: '17', l: 'Provisional Patents Filed' },
  { n: '50', l: 'States Compliant' },
  { n: '10', u: 'min', l: 'Scan to Proposal' },
  { n: '1', l: 'Family Name' },
]

function Stats() {
  return (
    <section className="stats section" style={{ paddingBlock: '0' }}>
      <div className="wrap" style={{ paddingBlock: 'clamp(64px,8vw,110px)' }}>
        <div className="stat-grid">
          {STATS.map((s, i) => (
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
  )
}

export default function HomeContent() {
  return (
    <>
      <Hero />
      <Thesis />
      <Pillars />
      <Hyperion />
      <Governance />
      <Family />
      <Stats />
      <CTA
        title={
          <>
            Build on something <em>forged to last</em>.
          </>
        }
        lead={
          <>
            See what the Foundry ships. Or talk with Mark &amp; Bri directly — you&apos;ll hear back within one business day with a clear next
            step.
          </>
        }
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
