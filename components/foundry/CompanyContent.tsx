'use client'

/* CompanyContent.tsx — the Company / the Lord family. Ported from company-page.jsx. */
import { Medallion, Icon } from './Marks'
import { CTA, PageHero, useFoundry } from './FoundryShell'

const C_VALUES = [
  { k: 'Fide et Familia', t: 'Faith & family', d: "Every system we ship carries the Lord name. That isn't branding — it's accountability you can call." },
  { k: 'Built to last', t: 'Durability over hype', d: "We optimize for the company we'd be proud to run in twenty years, not the headline this quarter." },
  { k: 'Operators, always', t: 'We do the work', d: 'Code, capital, and the day-to-day of a real business — carried by the same hands, on purpose.' },
]

/* Bios are verbatim from FOUNDERS_CANON.md — the single source for every
   "about us" surface. Do not paraphrase, reorder, or trim. */

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
        lead="Dominus Foundry is a family-owned technology holding company in Albuquerque, New Mexico — the parent behind Forge, Iris, and Hyperion. We build what we'd be proud to run for the rest of our lives, and we hold it."
        actions={
          <>
            <a className="btn btn-solid" href="#leadership">
              Meet the founders {Icon.arr}
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
            <p className="eyebrow reveal">The Founders</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(30px,4.4vw,54px)', marginTop: '16px' }}>
              Two founders and nobody else.
            </h2>
          </div>

          <div className="founders reveal d1">
            <figure className="founders-photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/founders/founders-800.webp 800w, /founders/founders-1600.webp 1600w"
                  sizes="(max-width: 900px) 92vw, 46vw"
                />
                <img
                  src="/founders/founders-1600.jpg"
                  srcSet="/founders/founders-800.jpg 800w, /founders/founders-1600.jpg 1600w"
                  sizes="(max-width: 900px) 92vw, 46vw"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  alt="Mark and Bri Lord, co-founders of Dominus Foundry."
                />
              </picture>
              <figcaption>Mark &amp; Bri Lord · Albuquerque, New Mexico</figcaption>
            </figure>

            <div className="founders-copy">
              <h3 className="serif">How we work together</h3>
              <p>
                We have spent our days together since Covid. A lot of couples came apart in that stretch — we found we worked better in the
                same room. For years that meant different employers and a shared commute. Last year, with CalLord, it meant the same goal for
                the first time.
              </p>
              <p>
                The division is clean. Mark takes the business, the design and the technology. Bri takes everything else a company stands on:
                the client relationships, the investor relationships, the calendar, the follow-through, and the hundred daily things that let
                him keep his head down and build.
              </p>
              <p>
                Nine months of this so far. Faith is a tenet of the company rather than a decoration on it — the way a constitution is not a
                preface to a government but the thing the government is made of. It is written into how the software governs itself.
              </p>
            </div>
          </div>

          <div className="founder-bios reveal d2">
            <article className="fbio">
              <h3 className="fb-name serif">Mark Lord</h3>
              <p className="fb-role">Co-Founder</p>
              <p>
                Storefronts first — two Cold Stone shops in Albuquerque, where he learned what a small business actually runs on. Eighteen
                months in a lab on the team that helped bring LED lighting to market. Then years in sales and business development, watching
                which tools the trades got sold and which ones they used.
              </p>
              <p>
                His whole career has been on the operator&apos;s side of the line where a physical trade meets its technology. Forge came from
                ending up on the wrong side of it. His own company bought a software platform so bad he refused to spend the hours to learn
                it. Then he found out how the work was actually getting done: the project manager was running it off a spreadsheet she had
                built herself. The software had been paid for. The business was on Excel.
              </p>
              <p>
                He does not list his degree here as a credential. He will tell you the business school was the most expensive decision he ever
                made and taught him less than one quarter of owning a storefront. What he knows about running a company, he learned by running
                companies.
              </p>
            </article>

            <article className="fbio">
              <h3 className="fb-name serif">Bri Lord</h3>
              <p className="fb-role">Co-Founder</p>
              <p>
                A decade in the back office of small service businesses, which is the exact seat Forge is built for. A music school front desk,
                where she learned that in a small service business the office <em>is</em> the business. A residential solar canvass team she
                built and walked doors with — which is why her line on soft costs isn&apos;t a statistic she read. New Mexico&apos;s 811
                call-before-you-dig system. A CPA firm&apos;s AP and AR, close enough to the books to see where an owner is fooling himself.
                Then foreclosure billing across four states, sole coverage of the firm&apos;s busiest.
              </p>
              <p>
                Today she runs business operations at CalLord, the commercial security and AV integrator — which keeps her inside a working
                contractor&apos;s office every day.
              </p>
              <p className="fb-line">Every function Forge automates, she has personally been the person doing by hand.</p>
            </article>
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
