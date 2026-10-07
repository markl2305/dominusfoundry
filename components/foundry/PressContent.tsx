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
    t: "your company's own AI",
    d: "Sabina is a company’s own AI, shaped around its systems, knowledge, people, and authority. Foundry configures, deploys, and operates her; the company teaches her the business and decides what she may handle.",
  },
  {
    k: 'Forge',
    t: 'The operating platform',
    d: 'Operating records and specialist tools beneath and alongside Sabina. Some Forge tools are sold independently. A Dominus Foundry product, not a separate company.',
  },
  {
    k: 'Founders',
    t: 'Brianna Lord, CEO · Mark Lord, CTO',
    d: 'Mark leads product and technical work; Brianna leads client and investor relationships and operations.',
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
        lead="Dominus Foundry builds and operates Managed AI for businesses. Its product, Sabina, is a company's own AI. Coverage, approved company copy, logos and founder photography are below."
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
            <p className="pf-who">Brianna Lord, CEO</p>
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
              Dominus Foundry builds and operates Managed AI for businesses. Its product, Sabina, is a company&apos;s own AI, shaped around
              its systems, knowledge, people, and authority. Foundry combines a trained core model with proprietary memory and operating
              controls to deploy company-specific systems from a reusable platform. Dominus Foundry LLC is family-owned, based in
              Albuquerque, New Mexico, and led by Brianna Lord, CEO, and Mark Lord, CTO.
            </p>
            <p style={{ marginTop: '12px', color: 'var(--ink-3)' }}>
              Names: <b>Dominus Foundry</b> (the company) · <b>Sabina</b> (your company&apos;s own AI) · <b>Forge</b> (the operating platform, a product of
              Dominus Foundry) · <b>DominusOS</b> (authority and execution control). Brianna Lord, CEO; Mark Lord, CTO.
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
              <span className="hed serif">Brianna Lord, CEO, and Mark Lord, CTO (JPEG, 1600 × 900)</span>
              <span className="when">Download →</span>
            </a>
          </div>
          <p style={{ ...kitRow, marginTop: '22px', color: 'var(--ink-3)' }}>
            Suggested photo caption: &ldquo;Brianna Lord, CEO, and Mark Lord, CTO, of Dominus Foundry.&rdquo; For other file formats, media requests or
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
        lead="We're glad to help with media requests, founder commentary, fact-checking and assets."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Email Press {Icon.arr}
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
