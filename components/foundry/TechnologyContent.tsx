'use client'
import type { CSSProperties } from 'react'
import { PageHero, ClosingCta } from '@/components/site/primitives'
import { Badge, LayerStack, type Layer } from '@/app/pitch/ui'
import { claim } from '@/app/pitch/claims'
import { Sec } from './qp-parts'
import '@/components/site/pages/pillars.css'
import '@/app/styles/pages/qp-hero.css'
import '@/app/styles/pages/technology.css'
/* RETOOL 2026-10-07 (HANDOFF §5.3, §2.1): the generic middle is replaced by the
   four-layer architecture, in the existing principles grid (one body paragraph
   per card, as before; restyled 2026-10-14 as /pitch cards). Each body names the reusable asset and the company state. ⛔ Do not
   describe a new base training run per customer; ⛔ do not publish a
   database-level boundary claim until it is verified against the settled
   technical source (see the retool report).
   2026-10-14, quality pass (D-page-briefs): the four layers run in /pitch's
   interactive layer stack (the same component, with this page's text: each
   body's first sentence is what the layer does, and its second sentence's two
   halves, either side of the semicolon, are the reusable platform and the
   company state — word for word). The operating paragraph becomes a two-column
   split card with its caveat beneath; the IP paragraph sits in /pitch's filings
   card (row titles and status from the claim layer, app/pitch/claims.ts; no
   claim counts); Forge and DominusOS are two product cards. */
const layers: Layer[] = [
  { t: 'Trained core', what: 'Foundry trains and operates the core model behind Sabina’s reasoning.', platform: 'The weights, evaluation methods and serving software are reused across companies;', company: 'a new base training run per company is not implied.' },
  { t: 'Company identity and memory', what: 'Sabina starts with the context of the company and its industry.', platform: 'Foundry’s memory and onboarding machinery are reusable;', company: 'the company’s identity, systems, people, records and private knowledge are its own.' },
  { t: 'Company teaching and authority', what: 'The company teaches how work should be handled and defines what Sabina may do.', platform: 'The teaching process and authority machinery are reusable;', company: 'instructions, grants, approvals and revocation belong to the company.' },
  { t: 'Accumulating company intelligence', what: 'Authorized email, interactions, decisions and outcomes add knowledge for later work.', platform: 'Acquisition, retrieval and synthesis are reusable;', company: 'the history, corrections and understanding stay with the company.' },
]
const FILINGS = ['provisionals', 'nonprovisional', 'nonprovisional-2']
const st = (i: number) => ({ '--i': i } as CSSProperties)

export default function TechnologyContent(){return <div className="qp pg-technology-qp">
<PageHero crest eyebrow="Technology · The system behind Sabina" title={<>One trained core.<br/><em>AI shaped around each company.</em></>} lead="Sabina runs on a core model trained and operated by Foundry. Our proprietary memory and teaching systems shape that foundation around your company, while your permissions define what she may do." actions={<><a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work</a><a className="btn btn-ghost" href="/governance">Explore governance →</a></>}/>

<Sec id="layers" name="Four layers" eyebrow="Four layers · reusable platform and private company state">
<LayerStack layers={layers}/>
</Sec>

<section className="section on-dark" id="operated" data-name="Operated by Foundry" aria-labelledby="h-operated"><div className="wrap">
<div className="sec-head reveal"><p className="eyebrow">Operated by Foundry</p><h2 className="h2" id="h-operated">We run the system.<br/><em>You decide the work.</em></h2></div>
<div className="sec-body">
<div className="grid g2 runs">
<div className="card reveal" style={st(0)}><p className="tile-k">Foundry runs</p><p className="runs-p">Foundry operates the model and the systems around it, reusing provisioning, integrations, evaluations and support across companies, so you do not buy AI hardware or build an AI department.</p></div>
<div className="card reveal" style={st(1)}><p className="tile-k">You decide</p><p className="runs-p">Your company’s knowledge, memory, instructions and permissions stay specific to your company, and access follows the sources and authority you approve.</p></div>
</div>
<p className="note reveal">What a company can delegate still depends on its connected systems and the workflows agreed for it; the film and governance simulation explain the approach and are not proof that every integration is available.</p>
</div>
</div></section>

<Sec id="ip" name="Intellectual property" className="pg-technology" eyebrow="Research &amp; development" title="Intellectual property.">
<div className="card ip-card reveal">
<ul className="filings">{FILINGS.map((id) => { const c = claim(id); return <li key={id}><span className="f-t">{c.publicCopy}</span>{' '}<Badge status={c.status}/></li> })}</ul>
<p className="tile-p ip-p">Patent pending. Two U.S. non-provisional applications are on file: 19/791,511, filed 30 August 2026, and 19/817,646, a continuation-in-part filed 23 September 2026 covering governed organizational commitment reconciliation, constraint-aware work execution and evidence-verified fulfillment. They follow 19 provisional applications filed March–August 2026. These are filings, not granted patents, and a filing does not mean a product is available. For the delivery and scale plan, read the <a className="link" href="/pitch">investor case</a>.</p>
</div>
</Sec>

<Sec id="platform" name="Forge and DominusOS" className="band pg-technology" eyebrow="The platform beneath" title="Forge and DominusOS.">
<div className="grid g2 products">
<article className="card product reveal" style={st(0)}><h3 className="tile-t">Forge</h3><p className="tile-p">Forge supplies operating records and specialist tools beneath and alongside Sabina; some Forge tools are sold on their own.</p><p className="note">Forge tools are not automatically part of every Sabina deployment.</p><div className="actions pillar-a"><a className="btn btn-ghost btn-sm" href="https://buildwithforge.app">Explore Forge →</a></div></article>
<article className="card product reveal" style={st(1)}><h3 className="tile-t">DominusOS</h3><p className="tile-p">DominusOS supplies the authority and execution-control architecture behind what Sabina is permitted to do.</p></article>
</div>
</Sec>

<ClosingCta title={<>Bring us a <em>real workflow.</em></>} lead="Tell us what your team needs help with. We can discuss fit, boundaries, and what would need to be demonstrated." actions={<a className="btn btn-solid" href="mailto:foundry@dominusfoundry.com">Contact the team →</a>}/>
</div>}
