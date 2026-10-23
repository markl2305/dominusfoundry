'use client'

/* PressContent.tsx — Press & Coverage. Ported from press-page.jsx.
   Links point at the existing on-site /press/spw redirect.
   External coverage (dated, attributed) is kept apart from the media kit,
   which is company-supplied copy. Keep the boilerplate in step with public/llms.txt.
   2026-10-14: restyled in the /pitch language (components/site). Copy unchanged;
   the featured blockquote stays one element (the render gate pins it by hash).
   2026-10-14, quality pass (D-page-briefs): the article as a large feature
   card (headline, outlet, date, link), the boilerplate in a card with a copy
   button (shown once the page script runs; without it the text is still
   selectable), every section named for the nav. Copy unchanged. */
import { useEffect, useRef, useState } from 'react'
import { Icon } from './Marks'
import { ClosingCta, PageHero, Tile } from '@/components/site/primitives'
import { Sec } from './qp-parts'
import '@/components/site/pages/company-press.css'
import '@/app/styles/pages/qp-hero.css'
import '@/app/styles/pages/press.css'

/* Copies the boilerplate paragraph as plain text. */
function CopyButton({ target }: { target: React.RefObject<HTMLElement> }) {
  const [live, setLive] = useState(false)
  const [done, setDone] = useState(false)
  useEffect(() => setLive(true), [])
  useEffect(() => { if (!done) return; const t = window.setTimeout(() => setDone(false), 2000); return () => window.clearTimeout(t) }, [done])
  if (!live) return null
  const copy = async () => {
    const text = (target.current?.textContent || '').replace(/\s+/g, ' ').trim()
    try { await navigator.clipboard.writeText(text); setDone(true) } catch {
      const sel = window.getSelection(); const r = document.createRange()
      if (target.current && sel) { r.selectNodeContents(target.current); sel.removeAllRanges(); sel.addRange(r) }
    }
  }
  return <button type="button" className="btn btn-ghost btn-sm copy-btn" onClick={copy} aria-live="polite">{done ? 'Copied' : 'Copy'}</button>
}

const KIT_PRODUCTS = [
  {
    k: 'Sabina',
    t: "your company's own AI",
    d: "Sabina is a company’s own AI, shaped around its systems, knowledge, people, and authority. Foundry configures, deploys, and operates her, with Forge included; the company teaches her the business and decides what she may handle.",
  },
  {
    k: 'Forge',
    t: 'The operating platform',
    d: 'Forge comes with Sabina and is available independently. The structured workspace, records and specialist tools have agreed scopes. A Dominus Foundry product, not a separate company.',
  },
  {
    k: 'Founders',
    t: 'Brianna Lord, CEO · Mark Lord, CTO',
    d: 'Mark leads product and technical work; Brianna leads client and investor relationships and operations.',
  },
]

export default function PressContent() {
  const boiler = useRef<HTMLParagraphElement>(null)
  return (
    <div className="qp pg-press-qp">
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

      <Sec
        id="coverage"
        name="External coverage"
        className="pg-press"
        eyebrow="External coverage"
        lead="Independent reporting, shown with its publication date and byline. It describes the company as it stood on that date."
      >
        <article className="card feature press-feature reveal">
          <div className="pub">
            <span className="badge gold">Featured</span>{' '}
            <span className="nm">Solar Power World</span>{' '}
            <span className="meta">April 15, 2026 · by Kelly Pickerel</span>
          </div>
          <div className="press-body">
            <h2 className="h3 press-h">Forge software platform uses iPad LiDAR scanning for quick solar design proposals</h2>
            <figure className="quote">
              <blockquote>
                &ldquo;The solar industry has been fighting soft-cost pressure for a decade, and one of the biggest hidden costs is the gap between
                site visit and signed contract.&rdquo;
              </blockquote>
              <figcaption>Brianna Lord, CEO</figcaption>
            </figure>
          </div>
          <div className="actions">
            <a className="btn btn-solid" href="/press/spw?src=press_page" target="_blank" rel="noopener">
              Read the article {Icon.arr}
            </a>
          </div>
        </article>

        <ul className="list-rows reveal">
          <li>
            <a className="list-row" href="/press/spw?src=press_page" target="_blank" rel="noopener">
              <span className="lr-k">Solar Power World</span>{' '}
              <span className="lr-t">Forge uses iPad LiDAR scanning for quick solar design proposals</span>{' '}
              <span className="lr-m">Apr 15, 2026 →</span>
            </a>
          </li>
        </ul>
      </Sec>

      <Sec id="media-kit" name="Media kit" className="pg-press band" eyebrow="Media kit · Company-supplied" title="About Dominus Foundry">
        <div className="card boiler reveal">
          <div className="boiler-head">
            <p className="tile-k">Company-supplied</p>
            <CopyButton target={boiler} />
          </div>
          <p className="boiler-p" ref={boiler}>
            Dominus Foundry builds and operates Managed AI for businesses. Its product, Sabina, is a company&apos;s own AI, shaped around
            its systems, knowledge, people, and authority. Foundry combines a trained core model with proprietary memory and operating
            controls to deploy company-specific systems from a reusable platform. Dominus Foundry LLC is family-owned, based in
            Albuquerque, New Mexico, and led by Brianna Lord, CEO, and Mark Lord, CTO.
          </p>
          <p className="muted boiler-names">
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
      </Sec>

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
    </div>
  )
}
