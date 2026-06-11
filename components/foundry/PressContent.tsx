'use client'

/* PressContent.tsx — Press & Coverage. Ported from press-page.jsx.
   Links point at the existing on-site /press/spw redirect. */
import { Icon } from './Marks'
import { CTA, PageHero } from './FoundryShell'

export default function PressContent() {
  return (
    <>
      <PageHero
        eyebrow="Press · In the News"
        title={
          <>
            In the <em>news</em>.
          </>
        }
        lead="Coverage of Dominus Foundry and our flagship product, Forge — the operating system for the trades."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Press inquiries {Icon.arr}
            </a>
            <a className="btn btn-ghost" href="#coverage">
              Recent coverage {Icon.arr}
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
            <p className="eyebrow reveal">Featured</p>
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
            <p className="pf-who">Bri Lord · Co-Founder</p>
            <div className="pf-read">
              <a className="btn btn-ghost" href="/press/spw?src=press_page" target="_blank" rel="noopener">
                Read the article {Icon.arr}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '30px' }}>
            <p className="eyebrow reveal">All coverage</p>
          </div>
          <div className="coverage reveal d1">
            <a className="cov-row" href="/press/spw?src=press_page" target="_blank" rel="noopener">
              <span className="pub">Solar Power World</span>
              <span className="hed serif">Forge uses iPad LiDAR scanning for quick solar design proposals</span>
              <span className="when">Apr 15, 2026 →</span>
            </a>
          </div>
          <p style={{ marginTop: '26px', fontSize: '14.5px', lineHeight: 1.7, color: 'var(--ink-3)', maxWidth: '52ch' }}>
            More coverage as it runs. For interviews, assets, or analyst briefings, reach the team directly at{' '}
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
            Writing about the <em>trades</em>, AI, or the Foundry?
          </>
        }
        lead="We're glad to help with interviews, product demos, founder commentary, and high-resolution assets. Real person, fast reply."
        actions={
          <>
            <a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">
              Email Press {Icon.arr}
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
