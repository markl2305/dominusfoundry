'use client'

/* PressContent.tsx — Press & Coverage. Ported from press-page.jsx.
   Links point at the existing on-site /press/spw redirect.
   External coverage (dated, attributed) is kept apart from the media kit,
   which is company-supplied copy. Keep the boilerplate in step with public/llms.txt.
   2026-10-14: restyled in the /pitch language (components/site). Copy unchanged;
   the featured blockquote stays one element (the render gate pins it by hash). */
import { Icon } from './Marks'
import { ClosingCta, PageHero, Section, Tile } from '@/components/site/primitives'
import '@/components/site/pages/company-press.css'

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
        meta={
          <>
            <span>Media &amp; analyst relations</span>{' '}
            <span>
              <b>foundry@dominusfoundry.com</b>
            </span>
          </>
        }
      />

      <Section
        id="coverage"
        className="pg-press"
        eyebrow="External coverage"
        lead="Independent reporting, shown with its publication date and byline. It describes the company as it stood on that date."
      >
        <div className="card feature reveal">
          <div className="pub">
            <span className="badge gold">Featured</span>{' '}
            <span className="nm">Solar Power World</span>{' '}
            <span className="meta">April 15, 2026 · by Kelly Pickerel</span>
          </div>
          <h2 className="h3">Forge software platform uses iPad LiDAR scanning for quick solar design proposals</h2>
          <figure className="quote">
            <blockquote>
              &ldquo;The solar industry has been fighting soft-cost pressure for a decade, and one of the biggest hidden costs is the gap between
              site visit and signed contract.&rdquo;
            </blockquote>
            <figcaption>Brianna Lord, CEO</figcaption>
          </figure>
          <div className="actions">
            <a className="btn btn-ghost" href="/press/spw?src=press_page" target="_blank" rel="noopener">
              Read the article {Icon.arr}
            </a>
          </div>
        </div>

        <ul className="list-rows reveal">
          <li>
            <a className="list-row" href="/press/spw?src=press_page" target="_blank" rel="noopener">
              <span className="lr-k">Solar Power World</span>{' '}
              <span className="lr-t">Forge uses iPad LiDAR scanning for quick solar design proposals</span>{' '}
              <span className="lr-m">Apr 15, 2026 →</span>
            </a>
          </li>
        </ul>
      </Section>

      <Section id="media-kit" className="pg-press" eyebrow="Media kit · Company-supplied" title="About Dominus Foundry">
        <div className="prose reveal">
          <p>
            Dominus Foundry builds and operates Managed AI for businesses. Its product, Sabina, is a company&apos;s own AI, shaped around
            its systems, knowledge, people, and authority. Foundry combines a trained core model with proprietary memory and operating
            controls to deploy company-specific systems from a reusable platform. Dominus Foundry LLC is family-owned, based in
            Albuquerque, New Mexico, and led by Brianna Lord, CEO, and Mark Lord, CTO.
          </p>
          <p className="muted">
            Names: <b>Dominus Foundry</b> (the company) · <b>Sabina</b> (your company&apos;s own AI) · <b>Forge</b> (the operating platform, a product of
            Dominus Foundry) · <b>DominusOS</b> (authority and execution control). Brianna Lord, CEO; Mark Lord, CTO.
          </p>
        </div>

        <div className="grid g3">
          {KIT_PRODUCTS.map((v, i) => (
            <Tile key={v.k} k={v.k} t={v.t} i={i}>
              {v.d}
            </Tile>
          ))}
        </div>

        <ul className="list-rows reveal">
          <li>
            <a className="list-row" href="/logo-full.svg" download>
              <span className="lr-k">Logo</span>{' '}
              <span className="lr-t">Dominus Foundry full logo (SVG)</span>{' '}
              <span className="lr-m">Download →</span>
            </a>
          </li>
          <li>
            <a className="list-row" href="/founders/founders-1600.jpg" download>
              <span className="lr-k">Photo</span>{' '}
              <span className="lr-t">Brianna Lord, CEO, and Mark Lord, CTO (JPEG, 1600 × 900)</span>{' '}
              <span className="lr-m">Download →</span>
            </a>
          </li>
        </ul>

        <div className="prose reveal">
          <p className="muted">
            Suggested photo caption: &ldquo;Brianna Lord, CEO, and Mark Lord, CTO, of Dominus Foundry.&rdquo; For other file formats, media requests or
            fact-checking, email{' '}
            <a className="wrap-any" href="mailto:foundry@dominusfoundry.com">
              foundry@dominusfoundry.com
            </a>
            .
          </p>
        </div>
      </Section>

      <ClosingCta
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
