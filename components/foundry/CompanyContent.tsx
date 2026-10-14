'use client'

/* CompanyContent.tsx — the Company / the Lord family. Ported from company-page.jsx.
   2026-10-14: restyled in the /pitch language (components/site). Copy unchanged. */
import type { CSSProperties } from 'react'
import { Medallion, Icon } from './Marks'
import { ClosingCta, PageHero, Section, Tile } from '@/components/site/primitives'
import '@/components/site/pages/company-press.css'

const C_VALUES = [
  { k: 'Under your authority', t: 'The owner decides', d: 'Sabina works on the responsibilities a business owner grants her, and a grant can be withdrawn.' },
  { k: 'Built to last', t: 'Durability over hype', d: "We optimize for the company we'd be proud to run in twenty years, not the headline this quarter." },
  { k: 'Operators, always', t: 'We do the work', d: 'Code, capital, and the day-to-day of a real business — carried by the same hands, on purpose.' },
]

/* Bios are verbatim from FOUNDERS_CANON.md — the single source for every
   "about us" surface. Do not paraphrase, reorder, or trim. Each paragraph
   stays one element: the render gate pins one of them by hash. */

export default function CompanyContent() {
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
        lead="Dominus Foundry is a family-owned Managed AI company in Albuquerque, New Mexico. We build and operate Sabina, your company's own AI, shaped around your systems, knowledge, people, and authority. Forge supplies the operating records and specialist tools beneath and alongside her, and DominusOS supplies the authority and execution control behind the work she is permitted to carry out."
        actions={
          <>
            <a className="btn btn-solid" href="#leadership">
              Meet the founders {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact the founders {Icon.arr}
            </a>
          </>
        }
        meta={
          <>
            <span>
              Est. 2024 · <b>Albuquerque, NM</b>
            </span>{' '}
            <span>
              <b>Brianna Lord, CEO · Mark Lord, CTO</b>
            </span>
          </>
        }
      />

      <section className="section pg-company" id="story">
        <div className="wrap">
          <div className="two-col">
            <div className="crest-panel reveal">
              <Medallion scheme="ondark" withScroll />
            </div>
            <div className="stack-lg">
              <p className="eyebrow reveal">Why the Foundry exists</p>
              <figure className="quote reveal" style={{ '--i': 1 } as CSSProperties}>
                <blockquote>
                  The crest reads <em>Fide et Familia</em> — faith and family. Every system we ship carries the Lord name, and if it falters, it
                  is our reputation in the fire.
                </blockquote>
                <figcaption>Mark Lord, CTO</figcaption>
              </figure>
              <div className="prose reveal" style={{ '--i': 2 } as CSSProperties}>
                <p>
                  Most of what a small company knows lives in a few people&apos;s heads and a stack of tools that do not talk to each other. We
                  saw it first in the trades, from the operator&apos;s side of the desk.
                </p>
                <p>
                  So we build and operate Sabina, your company&apos;s own AI, working on the responsibilities its owner grants her. Forge,
                  our operating platform, began with commercial trade contractors. We build it from Albuquerque, and we hold what we
                  build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="band" eyebrow="Three commitments" title="What we hold to.">
        <div className="grid g3">
          {C_VALUES.map((v, i) => (
            <Tile key={v.k} k={v.k} t={v.t} i={i}>
              {v.d}
            </Tile>
          ))}
        </div>
      </Section>

      <Section id="leadership" className="pg-company" eyebrow="The Founders" title="Two founders. One family company.">
        <div className="split">
          <figure className="photo reveal">
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
                alt="Brianna Lord, CEO, and Mark Lord, CTO, of Dominus Foundry."
              />
            </picture>
            <figcaption>Mark &amp; Bri Lord · Albuquerque, New Mexico</figcaption>
          </figure>

          <div className="stack reveal" style={{ '--i': 1 } as CSSProperties}>
            <h3 className="h3">How we work together</h3>
            <div className="prose">
              <p>
                The division is clean. Mark takes the business, the design and the technology. Bri takes everything else a company stands on:
                the client relationships, the investor relationships, the calendar, the follow-through, and the hundred daily things that let
                him keep his head down and build.
              </p>
              <p>
                We have spent our days together since Covid. A lot of couples came apart in that stretch — we found we worked better in the
                same room. For years that meant different employers and a shared commute. With CalLord, it meant the same goal for the first
                time.
              </p>
              <p>
                Faith is a tenet of the company rather than a decoration on it — the way a constitution is not a preface to a government but
                the thing the government is made of. It is written into how the software governs itself.
              </p>
            </div>
          </div>
        </div>

        <div className="grid g2">
          <article className="card bio reveal" style={{ '--i': 0 } as CSSProperties}>
            <h3 className="h3">Mark Lord</h3>
            <p className="tile-k">CTO</p>
            <div className="prose">
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
            </div>
          </article>

          <article className="card bio reveal" style={{ '--i': 1 } as CSSProperties}>
            <h3 className="h3">Brianna Lord</h3>
            <p className="tile-k">CEO</p>
            <div className="prose">
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
              <p className="bio-line">Every function Forge automates, she has personally been the person doing by hand.</p>
            </div>
          </article>
        </div>
      </Section>

      <section className="section band pg-company">
        <div className="wrap">
          <div className="sec-head center">
            <p className="eyebrow reveal">The long view</p>
            <p className="big reveal" style={{ '--i': 1 } as CSSProperties}>
              From Albuquerque, <em>for the people who run the business</em>.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Contact · Press · Partnership"
        title={
          <>
            Talk to <em>the founders</em>.
          </>
        }
        lead="Customers, partners, press and prospective colleagues all reach the same inbox."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Email the Foundry {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="mailto:foundry@dominusfoundry.com?subject=Careers%20and%20collaboration">
              Careers {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="tel:+15055201433">
              Call (505) 520-1433 {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
