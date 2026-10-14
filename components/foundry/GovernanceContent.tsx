'use client'
/* 2026-10-14, quality pass (D-page-briefs): the four principles as a /pitch
   sequence, and the demonstration as an interactive walk-through (RuleLedger).
   Copy is the live page's, unchanged. */
import { PageHero, ClosingCta } from '@/components/site/primitives'
import '@/components/site/pages/pillars.css'
import '@/app/styles/pages/qp-hero.css'
import '@/app/styles/pages/governance.css'
import RuleLedger from './RuleLedger'
import { Sec } from './qp-parts'
const STEPS: [string, string][] = [
  ['Scope the work.', 'A responsibility needs explicit limits: the action, the information it may use, and the circumstances that require a person’s decision.'],
  ['Make decisions traceable.', 'The record should connect a decision to the instruction and authority behind it, with a clear outcome a business owner can understand.'],
  ['Withdraw permission.', 'Revocation stops future actions from using that grant. It does not unsend a message, reverse a completed payment, or erase the record. Work already underway needs its own handling.'],
  ['Verify the workflow.', 'The connected service, permissions, approval requirements, and failure handling need to be checked for each company. A simulation does not establish production coverage.'],
]
export default function GovernanceContent(){return <div className="qp pg-governance-qp">
<PageHero crest eyebrow="Governance · Authority you define" title={<>Responsibility needs a boundary<br/><em>before it needs a result.</em></>} lead="Sabina’s understanding of the company can grow. Her authority continues to come from the permissions the company grants. What may she do? Which information may she use? What needs approval? What record will show what happened? Those decisions belong to the business." actions={<a className="btn btn-solid" href="#demonstration">Try the illustration →</a>}/>
<Sec id="principles" name="Four principles">
<ol className="sequence principles reveal" style={{ '--cols': 4 } as React.CSSProperties}>
{STEPS.map(([t, p]) => <li key={t}><h2 className="s-t">{t}</h2><p className="s-p">{p}</p></li>)}
</ol>
</Sec>
<Sec id="demonstration" name="Try a grant" className="band pg-governance" eyebrow="Interactive illustration · No live business actions" title="Try a grant. Review a decision. Revoke it." lead="This simplified simulation runs only in your browser and resets on reload. It illustrates granting a responsibility, checking an example request, and preserving history after revocation. It does not connect to a company account or execute real work.">
<RuleLedger/>
<p className="fine">The examples are illustrative rules, not a demonstration of a live permission service. Discuss your actual workflow and its limits with the team.</p>
</Sec>
<ClosingCta title={<>Start with one <em>responsibility.</em></>} lead="Start with a short operational assessment of your business." actions={<><a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work</a><a className="btn btn-ghost" href="mailto:foundry@dominusfoundry.com">Contact the team →</a></>}/>
</div>}
