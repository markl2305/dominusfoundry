'use client'

/* CompanyContent.tsx — the Company / the Lord family. Ported from company-page.jsx. */
import { Medallion, Icon } from './Marks'
import { CTA, PageHero, useFoundry } from './FoundryShell'

const C_VALUES = [
  { k: 'Fide et Familia', t: 'Faith & family', d: "Every system we ship carries the Lord name. That isn't branding — it's accountability you can call." },
  { k: 'Built to last', t: 'Durability over hype', d: "We optimize for the company we'd be proud to run in twenty years, not the headline this quarter." },
  { k: 'Operators, always', t: 'We do the work', d: 'Code, capital, and the day-to-day of a real business — carried by the same hands, on purpose.' },
]

const C_LEADERS = [
  {
    id: 'portrait-mark',
    name: 'Mark Lord',
    role: 'Founder',
    drop: "Drop Mark's portrait",
    bio: 'Builds the product and the company in the same week. Mark started the Foundry after watching an entire industry run on disconnected tools and pricing designed to punish growth — and decided to forge the alternative himself.',
  },
  {
    id: 'portrait-bri',
    name: 'Bri Lord',
    role: 'Co-Founder',
    drop: "Drop Bri's portrait",
    bio: 'Partner in the build and the business. Bri keeps the Foundry honest to its name — that what we make is worthy of the family it’s named for, and the people who depend on it.',
  },
]

export default function CompanyContent() {
  const { crestScheme } = useFoundry()
  return (
    <>
      <PageHero
        crest
        eyebrow="The Company · Fide et Familia"
        title={
          <>
            Built by a family. <em>Held</em> for a generation.
          </>
        }
        lead="Dominus Foundry is a family-owned technology holding company in Albuquerque, New Mexico — the parent behind Forge, Hyperion, and Foundry Capital. We build what we'd be proud to run for the rest of our lives, and we hold it."
        actions={
          <>
            <a className="btn btn-solid" href="#leadership">
              Meet the family {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch {Icon.arr}
            </a>
          </>
        }
        metaLeft={
          <>
            Est. 2024 · <b>Albuquerque, NM</b>
          </>
        }
        metaRight={
          <>
            <b>Mark &amp; Bri Lord</b> · Founders
          </>
        }
      />

      <section className="family section" id="story">
        <div className="wrap">
          <div className="family-grid">
            <div className="reveal">
              <Medallion className="family-crest" scheme={crestScheme} withScroll />
            </div>
            <div>
              <p className="eyebrow reveal">The Crest</p>
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
                  We started the Foundry because we watched an entire industry — the trades that build and maintain the physical world — run on
                  disconnected tools and pricing designed to punish the businesses that grow.
                </p>
                <p>
                  The trades deserve the caliber of technology that enterprise takes for granted, without the enterprise price or the enterprise
                  theater. So we forge it ourselves, from Albuquerque, and we hold what we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars section">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2 className="serif">What we hold to.</h2>
            <p className="eyebrow">Three commitments</p>
          </div>
          <div className="values-grid reveal d1">
            {C_VALUES.map((v) => (
              <div className="value" key={v.k}>
                <div className="v-k serif">{v.k}</div>
                <div className="v-t serif">{v.t}</div>
                <div className="v-d">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="leadership">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '48px' }}>
            <p className="eyebrow reveal">Leadership</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(30px,4.4vw,54px)', marginTop: '16px' }}>
              The hands on the work.
            </h2>
          </div>
          <div className="leader-grid reveal d1">
            {C_LEADERS.map((l) => (
              <div className="leader" key={l.id}>
                <div className="portrait">
                  <span className="drop">{l.drop}</span>
                </div>
                <div className="l-name serif">{l.name}</div>
                <div className="l-role">{l.role}</div>
                <p className="l-bio">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pullband section">
        <div className="wrap">
          <p className="eyebrow center reveal" style={{ marginBottom: '26px' }}>
            The long view
          </p>
          <p className="big reveal d1">
            From Albuquerque, <em>for the people who build the world</em>.
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Careers · Press · Partnership"
        title={
          <>
            Come <em>forge</em> with us.
          </>
        }
        lead="Whether you want to build here, write about us, or partner with the Foundry — reach out. You'll hear back from a real person within one business day."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Email the Foundry {Icon.arr}
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
