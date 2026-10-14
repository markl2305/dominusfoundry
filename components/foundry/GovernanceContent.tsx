'use client'
import type { CSSProperties } from 'react'
import { PageHero, ClosingCta, Section } from '@/components/site/primitives'
import '@/components/site/pages/pillars.css'
import RuleLedger from './RuleLedger'
const st = (i: number) => ({ '--i': i } as CSSProperties)
export default function GovernanceContent(){return <>
<PageHero crest eyebrow="Governance · Authority you define" title={<>Responsibility needs a boundary<br/><em>before it needs a result.</em></>} lead="Sabina’s understanding of the company can grow. Her authority continues to come from the permissions the company grants. What may she do? Which information may she use? What needs approval? What record will show what happened? Those decisions belong to the business." actions={<a className="btn btn-solid" href="#demonstration">Try the illustration →</a>}/>
<section className="section"><div className="wrap"><div className="grid g2">
<article className="card reveal" style={st(0)}><h2 className="h3">Scope the work.</h2><p className="tile-p">A responsibility needs explicit limits: the action, the information it may use, and the circumstances that require a person’s decision.</p></article>
<article className="card reveal" style={st(1)}><h2 className="h3">Make decisions traceable.</h2><p className="tile-p">The record should connect a decision to the instruction and authority behind it, with a clear outcome a business owner can understand.</p></article>
<article className="card reveal" style={st(2)}><h2 className="h3">Withdraw permission.</h2><p className="tile-p">Revocation stops future actions from using that grant. It does not unsend a message, reverse a completed payment, or erase the record. Work already underway needs its own handling.</p></article>
<article className="card reveal" style={st(3)}><h2 className="h3">Verify the workflow.</h2><p className="tile-p">The connected service, permissions, approval requirements, and failure handling need to be checked for each company. A simulation does not establish production coverage.</p></article>
</div></div></section>
<Section id="demonstration" className="band pg-governance" eyebrow="Interactive illustration · No live business actions" title="Try a grant. Review a decision. Revoke it." lead="This simplified simulation runs only in your browser and resets on reload. It illustrates granting a responsibility, checking an example request, and preserving history after revocation. It does not connect to a company account or execute real work.">
<RuleLedger/>
<p className="fine">The examples are illustrative rules, not a demonstration of a live permission service. Discuss your actual workflow and its limits with the team.</p>
</Section>
<ClosingCta title={<>Start with one <em>responsibility.</em></>} lead="Start with a short operational assessment of your business." actions={<><a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work</a><a className="btn btn-ghost" href="mailto:foundry@dominusfoundry.com">Contact the team →</a></>}/>
</>}
