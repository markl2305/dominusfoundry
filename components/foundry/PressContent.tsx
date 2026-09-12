'use client'

/* PressContent.tsx — Press & Coverage. Ported from press-page.jsx.
   Links point at the existing on-site /press/spw redirect.
   External coverage (dated, attributed) is kept apart from the media kit,
   which is company-supplied copy. Keep the boilerplate in step with public/llms.txt. */
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'

const KIT_PRODUCTS = [
  {
    k: 'Sabina',
    t: 'The company AI',
    d: 'A dedicated company AI system, custom to the business she works for. She works on the responsibilities its owner grants her, and those grants can be withdrawn.',
  },
  {
    k: 'Forge',
    t: 'The contractor vertical',
    d: 'Operations software for commercial trade contractors, and the first vertical where Sabina works. A Dominus Foundry product, not a separate company.',
  },
  {
    k: 'Founders',
    t: 'Mark & Bri Lord',
    d: 'Co-founders. Mark leads the business, design and technology; Bri leads client and investor relationships and operations.',
  },
]

const kitRow = { fontSize: '14.5px', lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: '64ch' } as const

export default function PressContent() {
  return (
    <>
      <PageHero
        eyebrow="Press · Media Kit"
        title={
          <>
            Press &amp; <em>media</em>.
          </>
        }
        lead="Dominus Foundry builds Sabina, a dedicated company AI system custom to the business she works for. Coverage, approved company copy, logos and founder photography are below."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Press inquiries {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="#media-kit">
              Media kit {Icon.arr}
            </a>
          </>
        }
        metaLeft={<>Media &amp; analyst relations</>}
        metaRight={
          <>
            <b>foundry@dominusfoundry.com</b>
          </>
        }
      />

      <section className="section" id="coverage">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <p className="eyebrow reveal">External coverage</p>
            <p className="reveal d1" style={{ ...kitRow, marginTop: '14px', color: 'var(--ink-3)' }}>
              Independent reporting, shown with its publication date and byline. It describes the company as it stood on that date.
            </p>
          </div>
          <div className="press-feature reveal d1">
            <div className="pf-pub">
              <span className="pf-tag">Featured</span>
              <span className="nm">Solar Power World</span>
              <span className="meta">April 15, 2026 · by Kelly Pickerel</span>
            </div>
            <h2 className="serif">Forge software platform uses iPad LiDAR scanning for quick solar design proposals</h2>
            <blockquote>
              &ldquo;The solar industry has been fighting soft-cost pressure for a decade, and one of the biggest hidden costs is the gap between
              site visit and signed contract.&rdquo;
            </blockquote>
            <p className="pf-who">Bri Lord · Co-founder</p>
            <div className="pf-read">
              <a className="btn btn-ghost" href="/press/spw?src=press_page" target="_blank" rel="noopener">
                Read the article {Icon.arr}
              </a>
            </div>
          </div>

          <div className="coverage reveal d1" style={{ marginTop: '40px' }}>
            <a className="cov-row" href="/press/spw?src=press_page" target="_blank" rel="noopener">
              <span className="pub">Solar Power World</span>
              <span className="hed serif">Forge uses iPad LiDAR scanning for quick solar design proposals</span>
              <span className="when">Apr 15, 2026 →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="media-kit" style={{ paddingTop: '0' }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '30px' }}>
            <p className="eyebrow reveal">Media kit · Company-supplied</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(28px,4vw,46px)', marginTop: '16px' }}>
              About Dominus Foundry
            </h2>
          </div>

          <div className="reveal d1" style={kitRow}>
            <p>
              Dominus Foundry LLC is a family-owned intelligence company in Albuquerque, New Mexico, founded by Mark and Bri Lord. It builds
              Sabina, a dedicated company AI system shaped around one business — its knowledge, its work, and the authority its owner grants
              her. Forge, the company&apos;s software for commercial trade contractors, is its first vertical.
            </p>
            <p style={{ marginTop: '12px', color: 'var(--ink-3)' }}>
              Names: <b>Dominus Foundry</b> (the company) · <b>Sabina</b> (the company AI) · <b>Forge</b> (the contractor vertical, a product of
              Dominus Foundry). Mark Lord and Bri Lord are both co-founders.
            </p>
          </div>

          <div className="values-grid reveal d1" style={{ marginTop: '36px' }}>
            {KIT_PRODUCTS.map((v) => (
              <div className="value" key={v.k}>
                <div className="v-k serif">{v.k}</div>
                <div className="v-t serif">{v.t}</div>
                <div className="v-d">{v.d}</div>
              </div>
            ))}
          </div>

          <div className="coverage reveal d1" style={{ marginTop: '36px' }}>
            <a className="cov-row" href="/logo-full.svg" download>
              <span className="pub">Logo</span>
              <span className="hed serif">Dominus Foundry full logo (SVG)</span>
              <span className="when">Download →</span>
            </a>
            <a className="cov-row" href="/founders/founders-1600.jpg" download>
              <span className="pub">Photo</span>
              <span className="hed serif">Mark &amp; Bri Lord, co-founders (JPEG, 1600 × 900)</span>
              <span className="when">Download →</span>
            </a>
          </div>
          <p style={{ ...kitRow, marginTop: '22px', color: 'var(--ink-3)' }}>
            Suggested photo caption: &ldquo;Mark and Bri Lord, co-founders of Dominus Foundry.&rdquo; For other file formats, interviews or
            fact-checking, email{' '}
            <a href="mailto:foundry@dominusfoundry.com" style={{ color: 'var(--gold)' }}>
              foundry@dominusfoundry.com
            </a>
            .
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Press · Media · Analysts"
        title={
          <>
            Writing about <em>company AI</em> or the Foundry?
          </>
        }
        lead="We're glad to help with interviews, founder commentary, fact-checking and assets."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Email Press {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="tel:+18668492113">
              Call (866) 849-2113 {Icon.arr}
            </a>
          </>
        }
      />
    </>
  )
}
