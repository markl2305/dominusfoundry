'use client'
/* Dominus Foundry's twelve-part Managed AI investor narrative.
   2026-10-14: the approved redesign (local preview of 2026-10-13, Mark:
   "that was a tremendous improvement — deploy this as is"). Structure and copy
   are the preview's; every claim, status, date and figure still comes from
   claims.ts, financial-plan.json, income-assumptions.json and income-model.ts
   (finance.ts computes the costed plan and throws if the raise and the budget
   disagree). The founding charter's four exact paragraph checks remain intact;
   no gate is disabled.
   2026-10-12: owner-requested financial rebaseline. The former scenarios are
   retained unchanged inside a closed, explicitly superseded historical section.
   Current commercial pricing, company claims and financing reference terms
   still come from their existing sources. No customer status is upgraded.
   Cross-industry from the outset: see AGENTS.md; no trades-first proof lane.
*/
import { useRef, type ReactNode } from 'react'
import {
  PROOF, STATUS_LABEL, claim, AT_A_GLANCE,
  OBSERVED_BASELINE, FLOOR, FUNDED, HUMAN_COST,
  RAISE, USE_OF_FUNDS, MILESTONES, CONTACT_EMAIL,
} from './claims'
import { incomeAssumptions as a, incomeScenarios, financingTarget } from './income-model'
import { plan as p, target, reserve, usd } from './finance'
import { FOOTER_COLS } from '@/components/foundry/footer-links'
import { Badge, HeroEmbers, IncomeCase, LayerStack, PitchNav, ProofLedger, UseOfFunds, money, useReveal, type ChapterRef, type Layer } from './ui'

function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
const Arr = () => <span className="arr" aria-hidden="true">→</span>

/* short names are the chapter index's labels; the eyebrow carries the full kicker */
const CHAPTERS: (ChapterRef & { kicker: string })[] = [
  { id: 'company', n: 'I', name: 'Company thesis', kicker: 'Company thesis' },
  { id: 'problem', n: 'II', name: 'The problem', kicker: 'The problem customers recognize' },
  { id: 'buys', n: 'III', name: 'What the company buys', kicker: 'What the company buys' },
  { id: 'architecture', n: 'IV', name: 'Four-layer architecture', kicker: 'Four-layer architecture' },
  { id: 'reuse', n: 'V', name: 'Economics of reuse', kicker: 'Economics of reuse' },
  { id: 'proof', n: 'VI', name: 'What is already operating', kicker: 'What is already operating' },
  { id: 'cohort', n: 'VII', name: 'The first 10–20 companies', kicker: 'The first 10–20 companies' },
  { id: 'msp', n: 'VIII', name: 'MSP distribution', kicker: 'MSP distribution' },
  { id: 'intelligence', n: 'IX', name: 'Company intelligence', kicker: 'Company intelligence and the data thesis' },
  { id: 'position', n: 'X', name: 'Position and IP', kicker: 'Competitive position and defensibility' },
  { id: 'economics', n: 'XI', name: 'Capital and milestones', kicker: 'Economics, capital, and milestones' },
  { id: 'founders', n: 'XII', name: 'Founders', kicker: 'Founders and next action' },
]
const ch = (id: string) => CHAPTERS.find((c) => c.id === id)!

function Chapter({ id, title, lead, children, className = '', head }: { id: string; title: ReactNode; lead?: ReactNode; children: ReactNode; className?: string; head?: ReactNode }) {
  const c = ch(id)
  return <section className={`chapter ${className}`.trim()} id={id} data-n={c.n} data-name={c.name} aria-labelledby={`h-${id}`}>
    <div className="wrap">
      {head ?? <div className="ch-head reveal">
        <p className="eyebrow">{c.n} · {c.kicker}</p>
        <h2 className="h2" id={`h-${id}`}>{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>}
      <div className="ch-body">{children}</div>
    </div>
  </section>
}
const Tile = ({ k, t, children, i }: { k: string; t: string; children: ReactNode; i: number }) =>
  <div className="card reveal" style={{ '--i': i } as React.CSSProperties}><p className="tile-k">{k}</p><p className="tile-t">{t}</p><p className="tile-p">{children}</p></div>
const More = ({ summary, children, bodyClass = '' }: { summary: ReactNode; children: ReactNode; bodyClass?: string }) =>
  <details className="more reveal"><summary>{summary} <span className="plus" aria-hidden="true" /></summary><div className={`more-body ${bodyClass}`.trim()}>{children}</div></details>

const LAYERS: Layer[] = [
  { t: 'Trained core', what: 'Foundry trains and operates the core model that supplies Sabina’s reasoning and behavior.', platform: 'Custom-trained weights, training and evaluation methods, serving software.', company: 'Any additional adaptation explicitly included in that deployment; a new base training run is not implied.' },
  { t: 'Company identity and memory', what: 'Sabina starts with the relevant context of the company and its industry.', platform: 'Proprietary memory, context assembly and onboarding machinery, and industry starting points.', company: 'Identity, systems, people, records, relationships and private knowledge.' },
  { t: 'Company teaching and authority', what: 'The company teaches how work should be handled and defines what Sabina may do.', platform: 'The proprietary teaching and customization process and the authority machinery.', company: 'Operating instructions, responsibilities, grants, conditions, approvals and revocation.' },
  { t: 'Accumulating company intelligence', what: 'Authorized email, employee interactions, decisions and outcomes add useful knowledge for later work and analysis.', platform: 'Knowledge acquisition, memory maintenance, retrieval and synthesis.', company: 'Operational history, corrections, relationships, precedents and growing understanding.' },
]
const FILING_NOTES: Record<string, string> = {
  'nonprovisional': 'It describes proof-carrying governed execution of autonomous work, and the derivation of decision-grade operational intelligence across a multi-company panel.',
  'nonprovisional-2': 'It describes governed organizational commitment reconciliation, constraint-aware work execution and evidence-verified fulfillment: how a company’s promises are tracked across systems and closed only on evidence.',
}
const lc = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)

export default function PitchContent({ fontClass = '' }: { fontClass?: string }) {
  const root = useRef<HTMLDivElement>(null)
  useReveal(root)
  const awrSabina = claim('awr-sabina')
  const awrForge = claim('awr-forge')
  const base = incomeScenarios.find((s) => s.id === 'base')!
  const trough = base.months.reduce((lo, m) => (m.cash < lo.cash ? m : lo), base.months[0])
  const g = AT_A_GLANCE

  return <div className={`dfp ${fontClass}`.trim()} ref={root}>
    <a className="skip" href="#main">Skip to the pitch</a>
    <PitchNav chapters={CHAPTERS} ctaHref={mailto('Discuss the investment — Dominus Foundry')} />

    <main id="main">
      {/* HERO */}
      <section className="hero on-dark" id="top" aria-labelledby="hero-title">
        <HeroEmbers />
        <div className="wrap hero-in">
          {/* eslint-disable-next-line @next/next/no-img-element -- same crest file the site already serves */}
          <img className="crest" src="/brand/crest-full.png" alt="Dominus Foundry crest, Fide et Familia" width="124" height="140" />
          <p className="eyebrow">Dominus Foundry · Managed AI</p>
          <h1 className="display" id="hero-title">Customized company AI. <em>A platform built to scale.</em></h1>
          <p className="lead">Dominus Foundry deploys and operates Sabina, a company’s own AI. A shared trained core, proprietary memory, company-defined authority, and accumulating operational knowledge make each deployment specific to its customer.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={mailto('Discuss the investment — Dominus Foundry')}>Discuss the investment <Arr /></a>
            <a className="btn btn-ghost" href="https://hiresabina.ai">See Sabina <Arr /></a>
          </div>
          <div className="chips">
            <span className="chip">Seed · <b className="num">{RAISE.amount}</b> post-money SAFE · <b className="num">{RAISE.cap}</b></span>
            <span className="chip">Terms as of <b className="num">{RAISE.asOf}</b></span>
          </div>
        </div>
        <a className="scroll-cue" href="#glance" aria-label="Scroll to the summary"><span />Scroll</a>
      </section>

      {/* AT A GLANCE */}
      <section className="glance" id="glance" aria-label="At a glance">
        <div className="wrap glance-grid">
          <div className="glance-item reveal" style={{ '--i': 0 } as React.CSSProperties}><span className="glance-v num" id="gTarget">{usd(target)}</span><span className="glance-l">Proposed financing target</span><span className="glance-f">planning budget · {p.asOf}</span></div>
          <div className="glance-item reveal" style={{ '--i': 1 } as React.CSSProperties}><span className="glance-v num">{p.horizonMonths} months</span><span className="glance-l">Operating horizon from financing close</span><span className="glance-f">no forecast receipts required by this budget</span></div>
          <div className="glance-item reveal" style={{ '--i': 2 } as React.CSSProperties}><span className="glance-v num">{g.forgeDeployments.value}</span><span className="glance-l">Forge production deployments, one independent and one related-party</span><span className="glance-f">{STATUS_LABEL[g.forgeDeployments.status].toLowerCase()} · {g.forgeDeployments.asOf}</span></div>
          <div className="glance-item reveal" style={{ '--i': 3 } as React.CSSProperties}><span className="glance-v num">{g.filings.value}</span><span className="glance-l">U.S. provisional and non-provisional applications</span><span className="glance-f">patent pending · filed, not issued</span></div>
        </div>
      </section>

      {/* I */}
      <Chapter id="company" title={<>Managed AI, starting with the work <em>companies already need handled.</em></>}
        lead="We work with businesses across industries, starting with the responsibilities each company needs its own AI to handle. Our next operating milestone is 10–20 direct customer companies, establishing customer value and repeatable delivery before expanding distribution through managed service providers.">
        <ol className="sequence reveal" aria-label="The sequence">
          {['Direct company value', 'Repeatable Managed AI delivery', 'MSP distribution', 'The company intelligence that grows from the work'].map((s) => <li key={s}><span>{s}</span></li>)}
        </ol>
        <div className="grid g4 products">
          <Tile i={0} k="The company AI" t="Sabina">The company AI customers hire.</Tile>
          <Tile i={1} k="Operating platform" t="Forge">Supplies operating records and specialist tools beneath and alongside her.</Tile>
          <Tile i={2} k="Specialist product" t="Hyperion">A specialist trades product with its own scope.</Tile>
          <Tile i={3} k="Control" t="DominusOS">Supplies authority and execution control.</Tile>
        </div>
        <p className="note reveal">The product shape is deliberate. The company is Dominus Foundry, family-held, built and run from Albuquerque.</p>
        <div className="two-col reveal">
          <h3 className="h3">Why now</h3>
          <div className="prose">
            <p>Models crossed the line where they can carry consequential business work about eighteen months ago. What did not arrive with them was a practical way for a business to say, in advance, what the system may do, and to see afterwards what it did and on whose authority. Meanwhile employees are already using unsanctioned AI on company work, because the sanctioned internal option is weak or does not exist.</p>
            <p>Operating a trained core for many companies is affordable at a scale it was not eighteen months ago, and inference capacity is a line item in this round. Most businesses still cannot build and operate that stack themselves. That is the gap Managed AI fills.</p>
          </div>
        </div>
      </Chapter>

      {/* II */}
      <Chapter id="problem" className="on-dark center" title={<>Calls, handoffs, and company knowledge <em>keep falling back on people.</em></>}
        lead="Calls go unanswered. Follow-ups get buried. Employees repeat questions someone else already answered. Work stalls between systems, and the owner becomes the backup memory. Businesses need useful work carried through with the right context and authority.">
        <div className="grid g2 problem-grid">
          {['A missed call is a missed customer, and the callback depends on someone remembering it.', 'Follow-up lives in inboxes, notes and people’s heads rather than in one place.', 'The same explanations are given again because the last answer was never captured.', 'Work that should move on its own comes back to the owner.'].map((t, i) =>
            <div className="card reveal" style={{ '--i': i } as React.CSSProperties} key={t}><span className="ix">0{i + 1}</span><p>{t}</p></div>)}
        </div>
        <p className="closing reveal">The cost shows up in each company’s own workload: the calls, the follow-ups and the hours that return to the people running it. That is where a first responsibility is chosen.</p>
      </Chapter>

      {/* III */}
      <Chapter id="buys" title={<>A company AI, <em>deployed and operated for the business.</em></>}
        lead="Foundry configures Sabina around the company’s systems, people, knowledge, and agreed responsibilities. We operate the underlying AI and support the deployment as the company teaches her how work should be handled.">
        <div className="grid g3">
          {[['Setup', 'Company identity, sources and initial configuration.'], ['Approved connections', 'The systems the company agrees she may use, and no others.'], ['Agreed workflows', 'The responsibilities set out for that company.'], ['Authority configuration', 'What she may do, what needs approval, and how a grant is withdrawn.'], ['Operation', 'Foundry runs the model and the systems around it.'], ['Support and updates', 'Ongoing support for the deployment and updates to the common platform.']].map(([t, d], i) =>
            <Tile key={t} i={i} k={`0${i + 1}`} t={t}>{d}</Tile>)}
        </div>
        <p className="note reveal">Scope, terms and price are set in each company’s written proposal. There is no rate card and no published figure on any surface.</p>
      </Chapter>

      {/* IV */}
      <Chapter id="architecture" title={<>One trained core. <em>A distinct company system for every customer.</em></>}
        lead="Company-specific memory, teaching, and authority shape the deployment around the business. Foundry develops and improves the common model and platform.">
        <LayerStack layers={LAYERS} />
        <div className="prose reveal">
          <p>Sabina’s understanding of the company can grow. Her authority continues to come from the permissions the company grants. Company teaching and memory are not foundation-model weight updates.</p>
          <p><strong>Forge</strong> is the operating platform beneath and alongside her: operating records and specialist tools. Some Forge tools are also sold on their own, and Forge is already in paid production at an independent customer (<a href="#proof">chapter VI</a>).</p>
        </div>
      </Chapter>

      {/* V */}
      <Chapter id="reuse" className="on-dark" title={null} head={<div className="two-col">
        <div className="ch-head reveal">
          <p className="eyebrow">V · Economics of reuse</p>
          <h2 className="h2" id="h-reuse">Platform economics for <em>customized company AI.</em></h2>
        </div>
        <div className="prose reveal" style={{ '--i': 1 } as React.CSSProperties}>
          <p>The trained core, memory machinery, authority system, integrations, and deployment tools are reusable assets. Each additional company brings its own context, rules, and workload to that platform. The scale opportunity is to make customer-specific deployment repeatable while spreading common engineering and model development across a growing customer base.</p>
          <p>This is mass customization: a common platform, delivered as a distinct system for each company. Inference, onboarding, support and capacity remain real costs in the operating model, and the use of funds in <a href="#economics">chapter XI</a> carries them as such.</p>
        </div>
      </div>}>
        <figure className="reuse-fig reveal">
          <ReuseWide />
          <ReuseTall />
          <figcaption>Illustration of the structure described above, not a count of customers.</figcaption>
        </figure>
      </Chapter>

      {/* VI */}
      <Chapter id="proof" title={<>The operating foundation and <em>the evidence to date.</em></>}
        lead="Each row carries its own status and source date. A signature, an activation, completed work, an invoice and a renewal are different facts.">
        <ProofLedger />
        <div className="callout reveal">
          <p><strong>Talk to the customer, not the pitch.</strong> {awrForge.publicCopy}. A reference call with the owner of All Weather Roofing is available on request.</p>
          <p><a className="link" href={mailto('Reference call — All Weather Roofing')}>Ask for the reference call →</a></p>
        </div>
        <More summary="Diligence: evidence and source notes" bodyClass="src-list">
          {PROOF.map((c) => <p key={c.id}><strong>{c.publicCopy}</strong> — {c.detailCopy}<span className="src">{c.sourceLabel} · as of {c.asOf}</span></p>)}
        </More>
      </Chapter>

      {/* VII */}
      <Chapter id="cohort" title={<>Prove the service. <em>Make the deployment repeatable.</em></>}
        lead="The next cohort establishes which responsibilities customers value, how reliably Sabina carries them, what setup and support require, and how company knowledge improves subsequent work.">
        <div className="rows reveal">
          {[['Company setup', 'Repeatable identity, private data boundary, sources, and initial configuration'], ['Phone and workflows', 'Reliable execution of the agreed responsibilities'], ['Company context', 'Useful ingestion, retrieval, corrections, and continuity'], ['Authority', 'Teaching, approved scopes, runtime checks, approvals, revocation, and action records'], ['Ongoing learning', 'Knowledge from authorized work used in later work or analysis'], ['Operations', 'Monitoring, updates, support, recoverability, and capacity'], ['Economics', 'Deployment effort, recurring service cost, continuation, and customer value']].map(([k, v]) =>
            <div key={k}><span>{k}</span><span>{v}</span></div>)}
        </div>
        <p className="note reveal">This is a delivery milestone, not a claim that these customers already exist. Direct deployments do not wait on the MSP channel or on future network capabilities.</p>
        <More summary="Customer fit, across industries" bodyClass="prose">
          <p>Initial customers are selected by their need for company-specific AI, the responsibilities they want handled, and the fit with their systems and deployment requirements. The initial 10–20 direct customer companies are drawn from a cross-industry market; no industry is the required starting point.</p>
          <p>Founding seats are a separate, limited offer, awarded by application, with the founding employer helping shape the product through real use. The founding offer is part of this cohort, not the size of it.</p>
          <p><a href="https://hiresabina.ai/hire#founding">See current founding availability</a></p>
        </More>
      </Chapter>

      {/* VIII */}
      <Chapter id="msp" className="on-dark" title={<>A service MSPs can bring to <em>the companies they already support.</em></>}
        lead="Once direct delivery is repeatable, the intended channel is managed service providers. MSPs bring customer relationships and operating familiarity. Foundry supplies the trained model, proprietary systems, platform operation, and continued development.">
        <div className="grid g3 split3">
          <div className="card reveal" style={{ '--i': 0 } as React.CSSProperties}><p className="tile-k">Responsibility</p><p className="who">Foundry</p><p className="tile-p">Model and platform engineering, inference operation, updates, core controls, escalated platform support.</p></div>
          <div className="card reveal" style={{ '--i': 1 } as React.CSSProperties}><p className="tile-k">Responsibility</p><p className="who">MSP</p><p className="tile-p">Customer relationship, local systems context, agreed onboarding assistance, adoption, and account support.</p></div>
          <div className="card joint reveal" style={{ '--i': 2 } as React.CSSProperties}><p className="tile-k">Shared</p><p className="who">Jointly defined</p><p className="tile-p">Administration, support boundaries, billing, service measurement, and economics.</p></div>
        </div>
        <p className="note reveal">This is the intended responsibility split, not a live program. There are no published partner terms, rates or launch dates.</p>
      </Chapter>

      {/* IX */}
      <Chapter id="intelligence" title={<>Useful work builds a deeper <em>understanding of the company.</em></>}
        lead="The operational record can connect instructions, communications, decisions, and outcomes. That company-specific understanding can support better questions, richer analysis, and additional responsibilities within the company’s authority.">
        <ol className="horizon reveal">
          <li><span className="when">Initial service</span><h3 className="h3">Company context and learning</h3><p>Supporting the initial service: what the company teaches, corrects and authorizes informs the next piece of work.</p></li>
          <li><span className="when">As evidence develops</span><h3 className="h3">Deeper company analysis</h3><p>As supported capabilities and evidence develop.</p></li>
          <li><span className="when">Later · separate agreement</span><h3 className="h3">External context and permissioned derived patterns</h3><p>Later: analysis alongside external context, and broader intelligence from eligible derived patterns, only with separate, specific agreement.</p></li>
        </ol>
        <div className="prose reveal"><p>The structural precedent is data and intelligence infrastructure, such as Verisk and CoStar, whose durable value came from a standardized record created inside the work their customers were already paying for. These are business-model analogies, not evidence that our future intelligence products already exist.</p></div>
        <p className="note reveal">Broader intelligence is a longer-term opportunity. Raw company email is not pooled into a shared model or sold, any use of eligible derived information beyond a company’s own service requires its separate, specific agreement, and the initial customer offer does not depend on future network revenue. The current operating funding plan in chapter XI does not rely on that revenue.</p>
      </Chapter>

      {/* X */}
      <Chapter id="position" title={<>The advantage is in <em>the delivered company system.</em></>}
        lead="Foundry combines model adaptation, company memory, defined authority, and ongoing operation in a company-specific service. Its commercial objective is to make that complete system practical and affordable for businesses that cannot build and operate the stack themselves.">
        <div className="grid g4">
          <Tile i={0} k="01" t="Residency">She works on the system of record rather than visiting one task through a narrow integration.</Tile>
          <Tile i={1} k="02" t="A mandatory authority path">Consequential effects traverse the authority and execution boundary rather than going around it.</Tile>
          <Tile i={2} k="03" t="Decision chronology">The record is created before the outcome, which is why it cannot be manufactured afterwards.</Tile>
          <Tile i={3} k="04" t="Company-specific learning">Company instructions, corrections and recorded outcomes provide context for subsequent work, on a core Foundry trains and operates.</Tile>
        </div>
        <More summary="Comparable companies">
          <ul className="comp-list">
            <li>Leena AI and WRITER publish meaningful architecture overlap: custom or company models, memory, and governed execution.</li>
            <li>H2O.ai and Personal AI are further relevant comparisons for private or custom models and persistent memory.</li>
            <li>Physical, on-premises deployments are one comparison group; hosted enterprise platforms are another.</li>
            <li>Low-cost agent subscriptions are not the price of a complete, comparable company system, and no like-for-like service price was verified.</li>
          </ul>
        </More>
        <div className="card ip-card reveal">
          <p className="eyebrow">Intellectual property · patent pending</p>
          <ul className="filings" id="filings">
            {['provisionals', 'nonprovisional', 'nonprovisional-2'].map((id) => {
              const c = claim(id)
              return <li key={id}><span className="f-t">{c.publicCopy}</span>{' '}<Badge status={c.status} />{' '}<span className="f-d">{id === 'provisionals' ? c.detailCopy : `Was ${lc(c.detailCopy)} ${FILING_NOTES[id]}`}</span></li>
            })}
          </ul>
          <p className="note">These are <strong>filings, not granted rights</strong>. Nothing here is patented or issued, and nothing on this page claims exclusivity or that a competitor is blocked.</p>
        </div>
      </Chapter>

      {/* XI */}
      <Chapter id="economics" title={<>Capital to establish <em>repeatable Managed AI delivery.</em></>}
        lead="Capital funds direct customer deployment, repeatable operation and the people carrying the business. Production AI runs on Foundry-operated models on its AWS servers. External AI tools used to build, review and maintain the software are budgeted separately as development tools.">
        <div className="figures" id="figures">
          {[[usd(target), 'Proposed financing target', `planning budget · ${p.asOf}`], [`${p.horizonMonths} months`, 'Operating horizon from financing close', 'no forecast receipts required by this budget'], [usd(reserve), 'Reserve after planned outflows', 'cash retained, not operating expense']].map(([v, l, f]) =>
            <div className="card figure" key={l}><span className="v num">{v}</span><span className="l">{l}</span><span className="f">{f}</span></div>)}
        </div>
        <p className="note reveal" id="budgetNote">Current planning budget: {p.asOf}. Month one starts at financing close. Costs are planning allowances unless identified as founder-directed, not audited actuals, current bank balances, vendor quotations or customer-capacity guarantees. Earlier financial scenarios are retained below only as a clearly marked historical reference.</p>

        <div className="sub reveal">
          <h3 className="h3">The financing target</h3>
          <div className="terms">
            <div><span>Instrument</span><strong>{RAISE.instrument}</strong></div>
            <div><span>Raise</span><strong className="num">{RAISE.amount}</strong></div>
            <div><span>Valuation cap</span><strong className="num">{RAISE.cap}</strong></div>
            <div><span>Investment / post-money cap</span><strong>{RAISE.dilution}</strong></div>
            <div><span>Minimum check</span><strong className="num">{RAISE.minimum}</strong></div>
          </div>
          <p className="note">Financing reference terms dated {RAISE.asOf}; actual financing documents govern conversion and later dilution. Revised use of funds: {p.asOf}.</p>
        </div>

        <div className="sub reveal">
          <h3 className="h3">Use of funds: a costed operating plan</h3>
          <UseOfFunds />
          <p className="note" id="targetNote">The target is calculated from the forward budget plus a {p.contingencyRate * 100}% contingency allowance, the proposed founder-funding repayment, and rounding to the next {usd(p.roundingIncrement)}. No existing cash, forecast customer collections, prospective cloud credits, MSP revenue or future data revenue reduces this funding requirement. Actual overruns consume the reserve; actual collections extend operating room or support separately approved growth. Any additional historical liabilities must be reconciled before closing.</p>
        </div>

        <More summary="Founder funding: explicit, limited and documented" bodyClass="prose">
          <p id="founderFunding">The plan includes up to {usd(p.founderFundingRepayment)} to repay part of the founder funding used for the business before this round. Payment is subject to supporting records, accounting classification, applicable company and investor approvals, and financing terms. It is separate from compensation and is not an automatic payment at every closing. Other historical founder funding and credit-card balances are not assumed repaid by this plan.</p>
        </More>

        <div className="sub reveal">
          <h3 className="h3">What the operating period must establish</h3>
          <ol className="num-list">
            <li>Paying direct deployments carrying agreed responsibilities with inspectable outcomes.</li>
            <li>Repeatable setup, customer adoption and support, with human effort measured.</li>
            <li>Measured AWS workload capacity and cost of service on the accepted production configuration.</li>
            <li>Company context, corrections and governed follow-through supporting subsequent work.</li>
            <li>Documented operations, recovery and security readiness for the qualified service.</li>
            <li>A defined MSP responsibility and economics model after direct delivery is repeatable.</li>
          </ol>
          <div className="prose"><p>A smaller first close requires its own spending schedule; it does not automatically fund this complete plan. Revenue forecasts remain separate scenarios with explicit activation, collection, retention and delivery assumptions.</p></div>
        </div>

        <div className="sub reveal" id="income-projection">
          <h3 className="h3">Revenue, operating income and cash</h3>
          <div className="prose"><p>The operating budget and the income case belong together. This direct-customer forecast uses the same founder compensation, development tools, AWS, staffing and overhead plan shown above. Initial customers come from across industries; no trades-first starting point or MSP launch is assumed.</p></div>
          <p className="note" id="incomeNote1">Illustrative planning scenarios dated {a.asOf}, not achieved results or guaranteed growth. Amounts are USD. Months begin at financing close. The model starts with zero new modeled Sabina customers; it does not restate current company traction. Company counts are expected values after modeled churn, not fractional actual customers.</p>
          <IncomeCase />
          <p className="note" id="incomeNote3">Slower activation: {incomeScenarios[0].description} Faster activation: {incomeScenarios[2].description} These vary activation timing and volume, not prices or the fixed spending schedule. They are sensitivity cases, not statistical confidence bounds or demonstrated sales/deployment capacity.</p>
          <h4 className="h3" style={{ fontSize: '1.35rem' }}>How the cash and cost figures connect</h4>
          <div className="prose"><p id="cashConnect">Each scenario includes the full {money(financingTarget())} financing at the start and the proposed founder-funding repayment under the closing conditions stated above. Investment proceeds are not revenue; repayment of founder funding is not operating expense. The base-case cash low is {money(trough.cash)} in month {trough.month}. Cash is not the same as earned profit.</p></div>
          <p className="note" id="incomeNote4">In addition to the fixed operating budget, the income scenarios allow {money(a.incrementalDeliveryPerCompany)} per billable company-month for incremental delivery costs and {money(a.incrementalOnboardingPerActivation)} per activation for incremental setup costs. These are extra cash allowances, not a second allocation of existing salaries or AWS spending. No setup-fee income, existing Forge revenue, MSP income, data-product income, existing cash, cloud credits or further financing is included. No bad debt, tax, interest or additional capital expenditure is modeled. Actual workload may require different capacity and staffing costs. Detailed monthly assumptions and formulas are available in diligence.</p>
        </div>

        <More summary="Historical financial scenarios — superseded by the operating budget dated 12 October 2026" bodyClass="prose">
          <p className="note"><strong>Historical reference only.</strong> The following August and September scenarios and allocations are superseded. Their cash, hiring, capacity and revenue assumptions are not current operating facts or the current financing budget. They are preserved unchanged for comparison, not presented as a guaranteed floor.</p>
          <div className="figures">
            <div className="figure card"><span className="v num">{OBSERVED_BASELINE.value}</span><span className="l">{OBSERVED_BASELINE.label}</span><span className="f">observed · as of {OBSERVED_BASELINE.asOf}</span></div>
            <div className="figure card"><span className="v num">{FLOOR.arr}</span><span className="l">Month-36 recurring revenue, floor case</span><span className="f">modeled · as of {FLOOR.asOf}</span></div>
            <div className="figure card"><span className="v num">{FUNDED.arr}</span><span className="l">Month-36 recurring revenue, funded case</span><span className="f">modeled · as of {FUNDED.asOf}</span></div>
          </div>
          <p>The comparison against a human hire is the one number a buyer already knows. A fully loaded front-office coordinator — wage, employer tax, workers’ compensation, health, retirement, the seat — runs about <strong>{HUMAN_COST.monthly} a month</strong>, roughly {HUMAN_COST.hourly} an hour at the desk, converging with the {HUMAN_COST.methodLabel} figure of {HUMAN_COST.method} a month.</p>
          <p className="note">That is the modeled cost of a <strong>human</strong> hire and an anchor assumption, not an observed customer figure — and not Sabina’s price, which is quoted per company and appears on no surface.</p>
          <h4 className="h3">Without a raise: the floor case</h4>
          <p>The conservative case assumes no raise and one new company a month — the throughput two founders can actually onboard — and it models the same <strong>2% monthly logo churn</strong>{' '}the funded case does, roughly a fifth of the book a year (about 22%). It reaches{' '}<strong>{FLOOR.seats} seats</strong> and <strong>{FLOOR.arr}</strong> of recurring revenue at month 36.</p>
          <p>With churn in the model it still never runs out of money. The trough is in month 5, it is cash-flow positive from month 6, and it ends month 36 with roughly twenty-seven times the cash it started with. The point is not that this is the plan, but that a no does not end the company.</p>
          <div className="rows">{FLOOR.rows.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}</div>
          <p className="note">Modeled, not observed — {FLOOR.sourceLabel}, as of {FLOOR.asOf}. It is the floor, not the plan. <strong>It assigns $0 of revenue to the future network business.</strong></p>
          <h4 className="h3">What funding changes</h4>
          <p>The funded case holds revenue per seat constant and the churn assumption identical, and changes one thing: how many companies we can bring on. It reaches <strong>{FUNDED.seats} seats</strong>{' '}and <strong>{FUNDED.arr}</strong> at month 36.</p>
          <div className="rows">{FUNDED.rows.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}</div>
          <p className="note">Modeled, not observed — {FUNDED.sourceLabel}. Neither scenario is a new pricing quote, and the funded case also assigns <strong>$0</strong> to the network business.</p>
          <h4 className="h3">The raise</h4>
          <div className="terms"><div><span>Instrument</span><strong>{RAISE.instrument}</strong></div><div><span>Raise</span><strong>{RAISE.amount}</strong></div><div><span>Valuation cap</span><strong>{RAISE.cap}</strong></div><div><span>Dilution at full raise</span><strong>{RAISE.dilution}</strong></div><div><span>Minimum check</span><strong>{RAISE.minimum}</strong></div></div>
          <div className="rows">{USE_OF_FUNDS.map((r) => <div key={r.use}><span>{r.use} — {r.amount} <em>({r.share}%)</em></span><span>{r.note}</span></div>)}</div>
          <h4 className="h3">Milestones this raise funds</h4>
          <ol className="num-list">{MILESTONES.map((m) => <li key={m}>{m}</li>)}</ol>
          <p>Bootstrapped to date. The round funds speed, repeatability and a larger margin of safety while delivery moves from founder deployment to a repeatable Managed AI operation.</p>
          <p className="note">{RAISE.sourceLabel} · as of {RAISE.asOf}. The use-of-funds split is the founder’s stated intent; the 30 August workbook models no raise.</p>
        </More>
      </Chapter>

      {/* XII */}
      <Chapter id="founders" title={<>Built by operators who have lived <em>the back office.</em></>}>
        <div className="grid g2 founders">
          <article className="card reveal" style={{ '--i': 0 } as React.CSSProperties}><p className="role">CTO</p><h3>Mark Lord</h3><p>Product, technology and commercial architecture. Built Forge and the patent-pending governance and intelligence architecture. Prior operating experience spans small-business ownership, technical work, and sales into the trades.</p></article>
          <article className="card reveal" style={{ '--i': 1 } as React.CSSProperties}><p className="role">CEO</p><h3>Brianna Lord</h3><p>Co-founder and co-owner, Citizen Potawatomi Nation member. Operations, customer onboarding and company stewardship. A decade in the back office of service businesses — scheduling, AP/AR, client operations and high-volume casework — which is the work Sabina is built to carry. She owns customer relationships and onboarding for Dominus Foundry.</p></article>
        </div>
        <div className="callout reveal"><p><strong>Founder-led today.</strong> The current plan funds specialist development, sales support and deployment capacity, with hiring tied to operating requirements.</p></div>
        <div className="motto reveal">
          <p className="latin">Fide et Familia</p>
          <p>Owned by Mark and Bri Lord, and built and held by the Lord family. That is the company’s identity and the reason it is built for a long hold — it is not the investment thesis, which is everything above it.</p>
        </div>
      </Chapter>

      {/* CTA */}
      <section className="chapter on-dark cta" aria-labelledby="h-cta">
        <div className="wrap">
          <div className="ch-head reveal">
            <p className="eyebrow">Next step</p>
            <h2 className="h2" id="h-cta">Direct company value. Repeatable Managed AI delivery. <em>MSP distribution, and the company intelligence that grows from the work.</em></h2>
            <p className="lead">{awrSabina.publicCopy}. <a className="link" href="https://hiresabina.ai/hire#founding">See current founding availability</a>. We are glad to put you in front of the customer before we put you in front of the model.</p>
            <div className="cta-actions">
              <a className="btn btn-solid" href={mailto('Discuss the investment — Dominus Foundry')}>Discuss the investment <Arr /></a>
              <a className="btn btn-ghost" href={mailto('Reference call — All Weather Roofing')}>Request the customer reference <Arr /></a>
              <a className="btn btn-ghost" href={mailto('Diligence pack — Dominus Foundry')}>Request the diligence pack <Arr /></a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="f-brand">
            <a className="f-lock" href="/" aria-label="Dominus Foundry home">
              {/* eslint-disable-next-line @next/next/no-img-element -- same crest file the site already serves */}
              <img src="/brand/crest-full.png" alt="" width="32" height="36" />
              <span>Dominus Foundry</span>
            </a>
            <p className="f-blurb">Built and held by Mark &amp; Bri Lord in Albuquerque, New Mexico.</p>
          </div>
          {FOOTER_COLS.map((col) => <div className="f-col" key={col.h}>
            <h4>{col.h}</h4>
            {col.links.map((l) => <a key={l.t} href={l.href} target={l.ext ? '_blank' : undefined} rel={l.ext ? 'noopener' : undefined}>{l.t}</a>)}
          </div>)}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dominus Foundry. Built &amp; held by the Lord family.</span>
          <span className="f-motto">Fide et Familia</span>
        </div>
        <div className="locatefaith-badge">
          {/* eslint-disable-next-line @next/next/no-img-element -- exact external badge markup, as on every other Foundry route */}
          <a href="https://locatefaith.com/business/sabina-by-dominus-foundry"><img src="https://locatefaith.com/brand/verified-badge-v2.svg" alt="Verified Christian Business on LocateFaith" width="240" height="107" /></a>
        </div>
      </div>
    </footer>
  </div>
}

/* V — the reuse diagram: wide above 820px, the vertical phone version below. */
const COMPANIES = ['A', 'B', 'C', 'D']
function ReuseWide() {
  return <svg className="reuse-wide" viewBox="0 0 920 300" role="img" aria-labelledby="reuseTitle"><title id="reuseTitle">One shared platform beneath many distinct company systems</title>
    <defs><linearGradient id="coreG" x1="0" x2="1"><stop offset="0" stopColor="#c87f4a" /><stop offset="1" stopColor="#e3cba8" /></linearGradient></defs>
    <g fill="none" stroke="rgba(227,203,168,.3)" strokeWidth="1"><path d="M108 112 C108 168 460 168 460 214" /><path d="M284 112 C284 168 460 168 460 214" /><path d="M460 112 L460 214" /><path d="M636 112 C636 168 460 168 460 214" /><path d="M812 112 C812 168 460 168 460 214" /></g>
    <g textAnchor="middle">
      {COMPANIES.map((k, i) => { const x = 26 + i * 176; return <g key={k}><rect x={x} y="40" width="164" height="72" rx="14" fill="rgba(240,231,215,.04)" stroke="rgba(240,231,215,.16)" /><text x={x + 82} y="70" fill="#e3cba8" fontSize="12" letterSpacing="1.6">COMPANY {k}</text><text x={x + 82} y="92" fill="#9da39e" fontSize="10.5">context · rules · work</text></g> })}
      <rect x="730" y="40" width="164" height="72" rx="14" fill="rgba(240,231,215,.02)" stroke="rgba(240,231,215,.2)" strokeDasharray="4 5" /><text x="812" y="81" fill="#9da39e" fontSize="12" letterSpacing="1.6">NEXT COMPANY</text>
      <rect x="120" y="214" width="680" height="64" rx="16" fill="url(#coreG)" /><text x="460" y="241" fill="#14201f" fontSize="12.5" fontWeight="500" letterSpacing="2">SHARED PLATFORM</text><text x="460" y="262" fill="#14201f" fontSize="10.5">trained core · memory machinery · authority system · integrations · deployment tools</text>
    </g></svg>
}
function ReuseTall() {
  return <svg className="reuse-tall" viewBox="0 0 344 430" role="img" aria-label="One shared platform beneath many distinct company systems">
    <defs><linearGradient id="coreG2" x1="0" x2="1"><stop offset="0" stopColor="#c87f4a" /><stop offset="1" stopColor="#e3cba8" /></linearGradient></defs>
    <g fill="none" stroke="rgba(227,203,168,.3)" strokeWidth="1"><path d="M284 39 H322" /><path d="M284 97 H322" /><path d="M284 155 H322" /><path d="M284 213 H322" /><path d="M284 271 H322" /><path d="M322 39 V330" /></g>
    <g>
      {COMPANIES.map((k, i) => { const y = 16 + i * 58; return <g key={k}><rect x="16" y={y} width="268" height="46" rx="12" fill="rgba(240,231,215,.04)" stroke="rgba(240,231,215,.16)" /><text x="32" y={y + 20} fill="#e3cba8" fontSize="11.5" letterSpacing="1.4">COMPANY {k}</text><text x="32" y={y + 36} fill="#9da39e" fontSize="10">context · rules · work</text></g> })}
      <rect x="16" y="248" width="268" height="46" rx="12" fill="rgba(240,231,215,.02)" stroke="rgba(240,231,215,.2)" strokeDasharray="4 5" /><text x="32" y="276" fill="#9da39e" fontSize="11.5" letterSpacing="1.4">NEXT COMPANY</text>
      <rect x="16" y="330" width="312" height="88" rx="16" fill="url(#coreG2)" /><text x="32" y="356" fill="#14201f" fontSize="12" fontWeight="500" letterSpacing="2">SHARED PLATFORM</text><text x="32" y="377" fill="#14201f" fontSize="10">trained core · memory machinery</text><text x="32" y="393" fill="#14201f" fontSize="10">authority system · integrations</text><text x="32" y="409" fill="#14201f" fontSize="10">deployment tools</text>
    </g></svg>
}
