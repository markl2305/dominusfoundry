'use client'
/* October30: managed private company intelligence leads this investor case.
   Promise tracking is one supporting example. Current standard-offer acquisitions
   are modeled separately from signed founding agreements, whose terms are unchanged.
   Claims, dated evidence and financial inputs retain their source ownership;
   existing CSS, interaction logic, financing terms and cost plan are preserved. */
import { useRef, type ReactNode } from 'react'
import { PROOF, STATUS_LABEL, claim, AT_A_GLANCE, RAISE, CONTACT_EMAIL } from './claims'
import { incomeAssumptions as a, incomeScenarios, financingTarget } from './income-model'
import { plan as p, target, reserve, usd } from './finance'
import SiteFooter from '@/components/site/SiteFooter'
import { Badge, HeroEmbers, IncomeCase, LayerStack, PitchNav, ProofLedger, UseOfFunds, money, useReveal, type ChapterRef, type Layer } from './ui'

function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
const Arr = () => <span className="arr" aria-hidden="true">→</span>
const st = (i: number) => ({ '--i': i } as React.CSSProperties)

/* One model supplies both acquisition and retained-customer milestones. */
const BASE_CASE = incomeScenarios.find((s) => s.id === 'base')!
const BASE_GROSS_M18 = BASE_CASE.activations.reduce((t, n) => t + n, 0)
const BASE_ACTIVE_M18 = BASE_CASE.months[BASE_CASE.months.length - 1].activeCompanies.toFixed(1)

const CHAPTERS: (ChapterRef & { kicker: string })[] = [
  { id: 'story', n: 'I', name: 'Company intelligence', kicker: 'Company intelligence at work' },
  { id: 'problem', n: 'II', name: 'What it costs', kicker: 'The problem, in money' },
  { id: 'solution', n: 'III', name: 'The managed AI service', kicker: 'The solution' },
  { id: 'record', n: 'IV', name: 'The long game', kicker: 'The data thesis' },
  { id: 'how', n: 'V', name: 'How it is built', kicker: 'How it is built' },
  { id: 'proof', n: 'VI', name: 'Proof so far', kicker: 'What is already operating' },
  { id: 'plan', n: 'VII', name: 'The plan', kicker: `${BASE_GROSS_M18} activations planned, then MSPs` },
  { id: 'position', n: 'VIII', name: 'Why we win', kicker: 'Why we win' },
  { id: 'economics', n: 'IX', name: 'The money', kicker: 'The raise and what it buys' },
  { id: 'founders', n: 'X', name: 'Founders', kicker: 'Founders and next step' },
]
const ch = (id: string) => CHAPTERS.find((c) => c.id === id)!

function Chapter({ id, title, lead, children, className = '' }: { id: string; title: ReactNode; lead?: ReactNode; children: ReactNode; className?: string }) {
  const c = ch(id)
  return <section className={`chapter ${className}`.trim()} id={id} data-n={c.n} data-name={c.name} aria-labelledby={`h-${id}`}>
    <div className="wrap">
      <div className="ch-head reveal">
        <p className="eyebrow">{c.n} · {c.kicker}</p>
        <h2 className="h2" id={`h-${id}`}>{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      <div className="ch-body">{children}</div>
    </div>
  </section>
}
const Tile = ({ k, t, children, i }: { k: string; t: string; children: ReactNode; i: number }) =>
  <div className="card reveal" style={st(i)}><p className="tile-k">{k}</p><p className="tile-t">{t}</p><p className="tile-p">{children}</p></div>
const More = ({ summary, children, bodyClass = '' }: { summary: ReactNode; children: ReactNode; bodyClass?: string }) =>
  <details className="more reveal"><summary>{summary} <span className="plus" aria-hidden="true" /></summary><div className={`more-body ${bodyClass}`.trim()}>{children}</div></details>

const LAYERS: Layer[] = [
  { t: 'Foundry-operated models', what: 'Foundry trains and operates the core models behind Sabina.', platform: 'Custom-trained weights, training and evaluation methods, serving software.', company: 'Any extra adaptation written into that company’s deployment.' },
  { t: 'Her knowledge of your company', what: 'Configured with the approved company and industry context available for the agreed work.', platform: 'Memory, context assembly and onboarding machinery.', company: 'Identity, systems, people, records, relationships and private knowledge.' },
  { t: 'Your rules', what: 'You tell her, in plain English, how work is done and what she may and may not do.', platform: 'The teaching process and the permission system.', company: 'Instructions, responsibilities, approvals, and the ability to take any permission back.' },
  { t: 'The record she builds', what: 'Retain relevant sources, reviewed corrections, decisions and recorded outcomes for later questions and work.', platform: 'Capturing, maintaining and searching that record.', company: 'The company’s own history: what was promised, what happened, and why.' },
]
const FILING_NOTES: Record<string, string> = {
  'nonprovisional': 'It covers how autonomous work is carried out only with a recorded permission, and how decision-grade insight is drawn from many companies’ records.',
  'nonprovisional-2': 'It covers how a company’s promises are tracked across its systems and closed only when there is evidence they were kept.',
}
const lc = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)

export default function PitchContent({ fontClass = '' }: { fontClass?: string }) {
  const root = useRef<HTMLDivElement>(null)
  useReveal(root)
  const awrSabina = claim('awr-sabina')
  const awrForge = claim('awr-forge')
  const policy = claim('policy-path')
  const agents = claim('sabina-agents')
  const modelPath = claim('model-path')
  const night = claim('mail-overnight').figures!
  const fh = claim('mail-history-foundry').figures!
  const cl = claim('mail-history-callord').figures!
  const base = incomeScenarios.find((s) => s.id === 'base')!
  const trough = base.months.reduce((lo, m) => (m.cash < lo.cash ? m : lo), base.months[0])
  const g = AT_A_GLANCE
  /* the hires the raise pays for, named from financial-plan.json rather than retyped */
  const count = (n: number, role: string) => `${['no', 'one', 'two', 'three', 'four'][n] ?? n} ${role.toLowerCase()}${n === 1 ? '' : 's'}`
  const hires = [count(p.salesHires.length, p.salesHires[0].role), count(p.technicalDeliveryHires.length, p.technicalDeliveryHires[0].role)].join(' and ')

  return <div className={`dfp ${fontClass}`.trim()} ref={root}>
    <a className="skip" href="#main">Skip to the pitch</a>
    <PitchNav chapters={CHAPTERS} ctaHref={mailto('Discuss the investment — Dominus Foundry')} />

    <main id="main">
      {/* HERO — the one-sentence version, with the ask kept on the front page */}
      <section className="hero on-dark" id="top" aria-labelledby="hero-title">
        <HeroEmbers />
        <div className="wrap hero-in">
          {/* eslint-disable-next-line @next/next/no-img-element -- same crest file the site already serves */}
          <img className="crest" src="/brand/crest-full.png" alt="Dominus Foundry crest, Fide et Familia" width="124" height="140" />
          <p className="eyebrow">Dominus Foundry · Managed private AI</p>
          <h1 className="display" id="hero-title">Managed private AI. <em>Company intelligence that carries forward.</em></h1>
          <p className="lead">Dominus Foundry builds and operates Sabina, a company’s own AI for small and midsize businesses. Approved records, what the team teaches her, and reviewed outcomes become useful company context for questions, analysis and work. Company knowledge is kept separately from the core model. Foundry runs the service; the business controls her authority.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={mailto('Discuss the investment — Dominus Foundry')}>Discuss the investment <Arr /></a>
            <a className="btn btn-ghost" href="#thirty">The 30-second version <Arr /></a>
          </div>
          <div className="chips">
            <span className="chip">Raising <b className="num">{RAISE.amount}</b> · SAFE · <b className="num">{RAISE.cap}</b> cap</span>
            <span className="chip">Terms as of <b className="num">{RAISE.asOf}</b></span>
          </div>
        </div>
        <a className="scroll-cue" href="#thirty" aria-label="Scroll to the 30-second version"><span />Scroll</a>
      </section>

      {/* THE 30-SECOND VERSION — David's five questions, answered in order */}
      <section className="chapter" id="thirty" aria-labelledby="h-thirty">
        <div className="wrap">
          <div className="ch-head reveal">
            <p className="eyebrow">The 30-second version</p>
            <h2 className="h2" id="h-thirty">Five questions, <em>five answers.</em></h2>
          </div>
          <div className="rows reveal">
            <div><span>The problem</span><span>A business has years of knowledge spread across its people, inboxes and systems, but no dependable way to bring it together for the next question or decision. Most small and midsize companies also lack a team to choose, connect, govern and operate AI for that work.</span></div>
            <div><span>What we built</span><span>Sabina, managed private company AI with Forge included. Foundry operates the models and supporting systems. Company-specific memory and teaching carry relevant context into questions, analysis, preparation and supported workflows. The company decides the sources, scope and authority.</span></div>
            <div><span>Proof so far</span><span>Forge is in paid production at an independent customer. Internal Sabina work includes company mailbox analysis, with historical runs and their limits documented below. Internal use, a signed Sabina engagement and independently measured customer outcomes are separate stages.</span></div>
            <div><span>Why it gets bigger</span><span>Each deployment can accumulate useful company knowledge, corrections and a record of outcomes, separately from the model underneath. The reusable model and platform support repeatable delivery; retained company context is the customer’s continuing value. Broader permissioned intelligence remains a separate, longer-term opportunity.</span></div>
            <div><span>The ask</span><span>{RAISE.amount} on a post-money SAFE at {RAISE.cap}, to make direct delivery repeatable. The base planning case models {BASE_GROSS_M18} new activations and {BASE_ACTIVE_M18} active company equivalents after churn by month {p.horizonMonths}. These are projections, not current customers.</span></div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="glance" id="glance" aria-label="At a glance">
        <div className="wrap glance-grid">
          <div className="glance-item reveal" style={st(0)}><span className="glance-v num">{usd(target)}</span><span className="glance-l">Proposed financing target</span><span className="glance-f">planning budget · {p.asOf}</span></div>
          <div className="glance-item reveal" style={st(1)}><span className="glance-v num">{p.horizonMonths} months</span><span className="glance-l">Operating horizon from financing close</span><span className="glance-f">no forecast receipts required by this budget</span></div>
          <div className="glance-item reveal" style={st(2)}><span className="glance-v num">{g.forgeDeployments.value}</span><span className="glance-l">{g.forgeDeployments.label}</span><span className="glance-f">{STATUS_LABEL[g.forgeDeployments.status].toLowerCase()} · {g.forgeDeployments.asOf}</span></div>
          <div className="glance-item reveal" style={st(3)}><span className="glance-v num">{g.filings.value}</span><span className="glance-l">U.S. provisional and non-provisional applications</span><span className="glance-f">{g.filings.caption}</span></div>
        </div>
      </section>

      {/* I — COMPANY INTELLIGENCE; operational agents are supporting capabilities. */}
      <Chapter id="story" title={<>Understand the business. <em>Then help run it.</em></>}
        lead="A company should be able to ask about its customers, its work and its decisions without rebuilding the context for every question. Sabina brings relevant, authorized information into that work, with the sources and uncertainty available for review.">
        <div className="two-col reveal">
          <h3 className="h3">Company context is the starting point</h3>
          <div className="prose">
            <p>An owner asks why a customer relationship has stalled. The answer may span earlier conversations, a changed requirement, work already delivered and a decision nobody recorded in the main system. Reading one message is not enough; the useful task is connecting the relevant evidence and identifying what still needs an answer.</p>
            <p>Start with the records and responsibilities the company approves. Retain useful instructions, reviewed corrections and outcomes with the work. That context can help with the next question, the next report and the next handoff, without granting any new permission to act.</p>
          </div>
        </div>
        <div className="grid g4">
          <Tile i={0} k="01" t="Understand the company">Bring approved company records, people, decisions and operating instructions into relevant context.</Tile>
          <Tile i={1} k="02" t="Find relationships">Examine information across available records for patterns, conflicting accounts and questions worth investigating. Show the supporting evidence.</Tile>
          <Tile i={2} k="03" t="Prepare useful work">Develop answers, summaries, reports and options for the responsible person to review, within the supported scope.</Tile>
          <Tile i={3} k="04" t="Carry agreed responsibilities">Use that context in supported calls, handoffs and follow-through. Actions remain bounded by the company’s authority.</Tile>
        </div>
        <More summary="One supporting example: tracking a customer commitment" bodyClass="prose">
          <p>Suppose someone asks for a document by tomorrow. A useful workflow identifies the request, its owner and due date; checks the relevant record for completion; and prepares a follow-up if the evidence is missing. Completion needs supporting evidence, not merely a plausible reply.</p>
          <p>This describes a workflow to demonstrate within an agreed scope. The historical mailbox analyses below establish extraction results; they do not establish continuous monitoring, a polling frequency, automated closure or reminder delivery.</p>
        </More>
        <div className="callout reveal">
          <p><strong>Internal evidence, from company records.</strong> A historical analysis of {night.emails} Foundry emails identified {night.commitments} commitments without a recorded closure in the inspected data, across {night.conversations} conversations with {night.people} people. Separate full-history runs flagged about {fh.about} possible commitments at Foundry and about {cl.about} at related company CalLord.</p>
        </div>
        <p className="note reveal">The overnight run is dated {claim('mail-overnight').asOf}; the Foundry full-history run is dated {claim('mail-history-foundry').asOf}, and CalLord’s is dated {claim('mail-history-callord').asOf}. These are internal historical analyses, not measured customer outcomes or a finding that every flagged commitment was unfulfilled.</p>
      </Chapter>

      {/* II — WHAT IT COSTS */}
      <Chapter id="problem" className="on-dark" title={<>The knowledge is there. <em>The business needs a way to use it.</em></>}
        lead="Important context is scattered across records and people. Teams spend time reconstructing it, miss relationships between events, and repeat decisions without the earlier lessons. Connecting and operating useful AI for that work is a second job most businesses are not equipped to take on.">
        <h3 className="h3 reveal">Problem one: knowledge that is hard to put to work</h3>
        <div className="grid g2 problem-grid">
          <div className="card reveal" style={st(0)}><span className="ix">01</span><p><strong>The search.</strong> A useful answer requires reading several systems and asking the people who remember what happened. Context has to be assembled before the real work starts.</p></div>
          <div className="card reveal" style={st(1)}><span className="ix">02</span><p><strong>The blind spots.</strong> A pattern can span customers, decisions and outcomes. Individual records tell only part of the story; teams need a way to connect the evidence.</p></div>
          <div className="card reveal" style={st(2)}><span className="ix">03</span><p><strong>The repeat.</strong> The same explanation, correction or decision is reconstructed because the earlier context did not carry forward.</p></div>
          <div className="card reveal" style={st(3)}><span className="ix">04</span><p><strong>The owner.</strong> The person running the business becomes its backup memory, while also deciding which tools can be trusted with its information.</p></div>
        </div>
        <div className="sub reveal">
          <h3 className="h3">Problem two: deploying AI correctly and safely</h3>
          <div className="prose">
            <p>A large company that wants AI working inside its business hires people to choose the tools, connect them to email, phone and records, decide what the AI may and may not do, keep customer data safe, and fix it when it breaks. A smaller company often has no dedicated AI team. The owner needs a provider responsible for the supported service, its information boundaries and its ongoing operation.</p>
            <p>A general AI subscription can help an individual. Company-specific intelligence also needs maintained records, permitted connections, reviewed changes and clear responsibility when something fails.</p>
          </div>
          <div className="rows">
            <div><span>They don’t know what’s possible</span><span>Which jobs AI can safely carry today, and which it can’t.</span></div>
            <div><span>They can’t wire it in</span><span>Connecting it to the phone, the inbox and the records the work actually lives in.</span></div>
            <div><span>They can’t govern it</span><span>Deciding what it may do on its own, what needs approval, and seeing what it did.</span></div>
            <div><span>They can’t run it</span><span>Keeping it working, updated and secure month after month.</span></div>
          </div>
          <p className="note">That is the gap Managed AI fills: we do all four, for them.</p>
        </div>
        <div className="sub reveal">
          <h3 className="h3">Choose a useful result and measure it</h3>
          <div className="rows">
            <div><span>Questions answered</span><span>Can the team get a supported answer across the relevant company records? Record correctness, missing evidence and time spent checking it.</span></div>
            <div><span>Analysis prepared</span><span>Does a report reveal a relationship or decision worth investigating? Separate a plausible suggestion from a finding the team can verify.</span></div>
            <div><span>Work carried forward</span><span>Does approved context reduce repeated explanation or make a handoff more useful? Compare the accepted result and review effort with the current process.</span></div>
          </div>
          <p className="note">These are evaluation questions, not measured savings or guaranteed results. Start with representative work and agree how the result, review effort and service cost will be assessed.</p>
        </div>
      </Chapter>

      {/* III — WHAT SABINA DOES */}
      <Chapter id="solution" title={<>Company intelligence, <em>delivered as a managed service.</em></>}
        lead="Foundry configures Sabina around the company’s information, people and approved work, with Forge included. We operate the models and supporting systems; the company supplies its expertise and decides her authority. Supported agents and connections serve that company context, from analysis and preparation to agreed operational work.">
        <div className="grid g3">
          {[['Company understanding', 'Relevant records and what the team teaches her inform the agreed work.'], ['Questions and analysis', 'Bring together available evidence, identify uncertainty and prepare useful answers.'], ['Preparation', 'Draft reports, summaries and options for the responsible person to review.'], ['Operational work', 'Support enabled communication, handoffs and follow-through within the written scope.'], ['Company control', 'Define permitted sources, approval requirements and the actions she may take.'], ['Managed operation', 'Foundry maintains the supported environment, connections and service.']].map(([t, d], i) =>
            <Tile key={t} i={i} k={`0${i + 1}`} t={t}>{d}</Tile>)}
        </div>
        <div className="callout reveal">
          <p><strong>Supporting agents and workflows.</strong> {agents.publicCopy}. <Badge status={agents.status} /> — {agents.detailCopy}</p>
          <p><strong>The owner’s rules, in plain English.</strong> {policy.publicCopy} <Badge status={policy.status} /> — {policy.detailCopy}</p>
        </div>
        <p className="note reveal">The standard offer is $1,500/month with Forge included and no setup fee. Large accounts receive custom pricing. Supported work and connections are confirmed in the written proposal.</p>
        <More summary="Why now" bodyClass="prose">
          <p>Useful models alone do not create useful company intelligence. A business also needs the right records, a way to retain what it learns, evaluations drawn from its work, and control over access and actions.</p>
          <p>The opportunity is to operate that whole service for businesses that do not want to assemble an AI department. Judge model and configuration changes against the company’s work while carrying its relevant knowledge forward.</p>
        </More>
      </Chapter>

      {/* IV — THE DATA THESIS */}
      <Chapter id="record" className="on-dark" title={<>The work is the business today. <em>The record is the business long term.</em></>}
        lead="Company information becomes more useful when its context survives: which source supported an answer, what the team corrected, why a decision was made and what followed. The opportunity is to connect that record with later questions, analysis and agreed work.">
        <ol className="horizon reveal">
          <li><span className="when">Year one · one company</span><h3 className="h3">She remembers</h3><p>Relevant, authorized records and reviewed instructions can inform later questions and work. Keep their sources, access limits and corrections with them.</p></li>
          <li><span className="when">Years two and three · the same company</span><h3 className="h3">She notices</h3><p>With sufficient relevant history, analysis can connect patterns across customers, decisions and outcomes. The team reviews the evidence and tests useful suggestions; stored history does not by itself establish accuracy or cause.</p></li>
          <li><span className="when">Long term · many companies, by agreement</span><h3 className="h3">The industry learns</h3><p>A future permissioned network could compare eligible derived patterns across companies, such as response times or recurring sources of delay. It needs separate, specific agreements and validated methods; raw company email is not pooled or sold.</p></li>
        </ol>
        <div className="two-col reveal">
          <h3 className="h3">Why this is hard to copy</h3>
          <div className="prose">
            <p><strong>Context accumulates through use.</strong> Retaining the source, the instruction or decision, its timing and the later outcome provides a richer basis for review than an isolated answer. Provenance and recorded changes help inspection; a record alone is not a guarantee that history cannot be altered.</p>
            <p><strong>The customer gets value first.</strong> The service must answer useful questions or carry worthwhile responsibilities. Relevant knowledge and reviewed outcomes can then improve the context for later work. Future network revenue is not needed to justify that service.</p>
            <p><strong>There is a precedent.</strong> Verisk and CoStar became data companies by standardizing a record created inside work their customers were already paying for. Those are business-model comparisons, not a claim that our future data products exist today.</p>
          </div>
        </div>
        <div className="callout reveal"><p><strong>We intend Dominus Foundry to become a data company; Sabina is how the record gets made.</strong></p></div>
        <p className="note reveal">The guardrails are part of the design. Raw company email is never pooled into a shared model or sold. Anything beyond a company’s own service needs that company’s separate, specific agreement. The customer offer, the operating plan and the raise do not depend on any future data revenue.</p>
      </Chapter>

      {/* V — HOW IT IS BUILT */}
      <Chapter id="how" title={<>Models we operate. <em>Company knowledge that carries forward.</em></>}
        lead="Foundry trains and operates Sabina’s core models and platform. Company-specific memory, instructions and permissions are kept separately from the core model. Shared engineering can support repeatable deployment while each company’s context and authority remain specific to its service.">
        <LayerStack layers={LAYERS} />
        <p className="note reveal"><strong>{modelPath.publicCopy}.</strong> <Badge status={modelPath.status} /> {modelPath.detailCopy}</p>
        <div className="callout reveal"><p><strong>Better models should build on the company’s knowledge.</strong> Keep the company record, reviewed instructions and representative tasks when evaluating a core-model change. Check answers, permissions and regressions before accepting the change, with a recovery path if results worsen. This is the operating standard to evaluate, not a claim of automatic improvement.</p><p><a className="link" href="https://managedprivateai.com/#own-your-intelligence">Read our guide to owning useful company intelligence →</a>{' '}<a className="link" href="https://withsabina.ai/trust">Current architecture and data terms →</a></p></div>
        <More summary="The operating platform and the economics of reuse" bodyClass="prose">
          <p><strong>Forge</strong> comes with Sabina and is also available independently: the workspace and structured records for agreed work. Specialist tools have defined scopes. Paid Forge use at All Weather Roofing is distinct from Sabina, whose onboarding there has not begun.</p>
          <p>The trained model, memory machinery, permission system, integrations and deployment tools are reusable. Each new company brings its own context and rules to that shared platform. The scale opportunity is making each company-specific deployment repeatable while spreading the engineering across a growing customer base. Inference, onboarding and support stay real per-company costs, and the use of funds carries them.</p>
          <p>Company teaching and memory are distinct from model training. Retained company knowledge does not grant new authority or transfer ownership of Foundry’s model weights and software.</p>
        </More>
      </Chapter>

      {/* VI — PROOF */}
      <Chapter id="proof" title={<>What is real today, <em>and what is not yet.</em></>}
        lead="Each row carries its own status and date. A signature, an activation, finished work, an invoice and a renewal are different facts, and we keep them apart.">
        <ProofLedger />
        <div className="callout reveal">
          <p><strong>Talk to the customer, not the pitch.</strong> {awrForge.publicCopy}. A reference call with the owner of All Weather Roofing is available on request.</p>
          <p><a className="link" href={mailto('Reference call — All Weather Roofing')}>Ask for the reference call →</a></p>
        </div>
        <More summary="Diligence: evidence and source notes" bodyClass="src-list">
          {PROOF.map((c) => <p key={c.id}><strong>{c.publicCopy}</strong> — {c.detailCopy}<span className="src">{c.sourceLabel} · as of {c.asOf}</span></p>)}
        </More>
      </Chapter>

      {/* VII — THE PLAN */}
      <Chapter id="plan" className="on-dark" title={<>First, repeatable direct delivery. <em>Then MSP distribution.</em></>}
        lead={`The base planning case models ${BASE_GROSS_M18} new activations and ${BASE_ACTIVE_M18} active company equivalents after churn by month ${p.horizonMonths}. The work is to prove customer value and repeatable setup and support across industries. MSP distribution follows qualified direct delivery, not an assumed launch date.`}>
        <ol className="sequence reveal" aria-label="The sequence">
          {['Direct company value', 'Repeatable setup and support', 'MSP distribution', 'The record grows into data'].map((s) => <li key={s}><span>{s}</span></li>)}
        </ol>
        <div className="grid g3 split3">
          <div className="card reveal" style={st(0)}><p className="tile-k">We do</p><p className="who">Foundry</p><p className="tile-p">The model, the platform, running it, updates, and escalated support.</p></div>
          <div className="card reveal" style={st(1)}><p className="tile-k">They do</p><p className="who">MSP</p><p className="tile-p">The customer relationship, local systems, onboarding help and day-to-day support.</p></div>
          <div className="card joint reveal" style={st(2)}><p className="tile-k">Together</p><p className="who">Agreed per partner</p><p className="tile-p">Billing, support boundaries, service measurement and economics.</p></div>
        </div>
        <p className="note reveal">The {BASE_GROSS_M18} activations are cumulative additions; {BASE_ACTIVE_M18} is the projected active customer base after churn. Neither is current traction or a capacity guarantee. The MSP split is the intended model, not a live program; there are no published partner terms, rates or dates.</p>
      </Chapter>

      {/* VIII — WHY WE WIN */}
      <Chapter id="position" title={<>A company system. <em>With an operator accountable for it.</em></>}
        lead="Our proposition combines Foundry-operated models, retained company context, defined authority and ongoing operation in a scoped service for small and midsize businesses. The investment case depends on delivering that combination repeatedly, with useful results and sustainable service costs.">
        <div className="grid g4">
          <Tile i={0} k="01" t="She lives where the work is">Work with the company’s approved records and supported systems, in the responsibilities agreed for its service.</Tile>
          <Tile i={1} k="02" t="Authority is defined">State which capabilities are enabled, what requires approval and how access or authority is withdrawn.</Tile>
          <Tile i={2} k="03" t="The record comes first">Keep the source, relevant context, corrections and recorded outcome available for review. Integrity controls need their own evidence.</Tile>
          <Tile i={3} k="04" t="She gets better at your company">Relevant instructions, reviewed corrections and outcomes can inform later work; evaluate whether the change helped.</Tile>
        </div>
        <More summary="Comparable companies">
          <ul className="comp-list">
            <li>Leena AI and WRITER publish meaningful architecture overlap: custom or company models, memory, and governed execution.</li>
            <li>H2O.ai and Personal AI are further relevant comparisons for private or custom models and persistent memory.</li>
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

      {/* IX — THE MONEY (full depth kept; detail behind expanders) */}
      <Chapter id="economics" title={<>{RAISE.amount} to make it <em>repeatable.</em></>}
        lead={`The money pays for direct deployments, the people doing them — including ${hires} — and running Sabina’s model on our own servers. The amounts are planning allowances with explicit assumptions.`}>
        <p className="note reveal" id="planningPrice">Current standard offer: {usd(a.standardMonthlyRevenue)}/month with Forge included and no setup fee. Large accounts receive custom pricing. This forecast covers new standard-offer customers only; no custom-account premium is assumed.</p>
        <p className="note reveal">Existing signed founding agreements and their revenue are outside this projection. Their signed terms are unchanged.</p>
        <div className="figures" id="figures">
          {[[usd(target), 'Proposed financing target', `planning budget · ${p.asOf}`], [`${p.horizonMonths} months`, 'Operating horizon from financing close', 'no forecast receipts required by this budget'], [usd(reserve), 'Reserve after planned outflows', 'cash retained, not operating expense']].map(([v, l, f]) =>
            <div className="card figure" key={l}><span className="v num">{v}</span><span className="l">{l}</span><span className="f">{f}</span></div>)}
        </div>
        <div className="sub reveal">
          <h3 className="h3">The terms</h3>
          <div className="terms">
            <div><span>Instrument</span><strong>{RAISE.instrument}</strong></div>
            <div><span>Raise</span><strong className="num">{RAISE.amount}</strong></div>
            <div><span>Valuation cap</span><strong className="num">{RAISE.cap}</strong></div>
            <div><span>Investment / post-money cap</span><strong>{RAISE.dilution}</strong></div>
            <div><span>Minimum check</span><strong className="num">{RAISE.minimum}</strong></div>
          </div>
          <p className="note">Financing reference terms dated {RAISE.asOf}; actual financing documents govern conversion and later dilution.</p>
        </div>
        <div className="sub reveal">
          <h3 className="h3">Where the money goes</h3>
          <UseOfFunds />
          <p className="note" id="targetNote">The target is the forward budget plus a {p.contingencyRate * 100}% contingency allowance, the proposed founder-funding repayment, and rounding to the next {usd(p.roundingIncrement)}. No existing cash, forecast customer collections, cloud credits, MSP revenue or future data revenue reduces it.</p>
        </div>
        <div className="sub reveal">
          <h3 className="h3">What it has to prove</h3>
          <ol className="num-list">
            <li>Paying companies with Sabina carrying agreed work, and results you can inspect.</li>
            <li>Setup and support that repeat, with the human effort measured.</li>
            <li>The real cost of running each company on our servers.</li>
            <li>Her record of each company making her next piece of work better.</li>
            <li>Operations, recovery and security ready for a wider rollout.</li>
            <li>An MSP model defined once direct delivery repeats.</li>
          </ol>
        </div>
        <More summary="Revenue, operating income and cash — the full model" bodyClass="prose">
          <p className="note">Illustrative planning scenarios dated {a.asOf}, not achieved results. Months begin at financing close. The model starts with zero new standard-offer customers and assumes no premium from custom-priced large accounts.</p>
          <IncomeCase />
          <p id="cashConnect">Each scenario includes the full {money(financingTarget())} financing at the start and the proposed founder-funding repayment. Investment proceeds are not revenue. The base-case cash low is {money(trough.cash)} in month {trough.month}.</p>
          <p className="note">Slower activation: {incomeScenarios[0].description} Faster activation: {incomeScenarios[2].description}</p>
        </More>
        <More summary="Founder funding: explicit, limited and documented" bodyClass="prose">
          <p>The plan includes up to {usd(p.founderFundingRepayment)} to repay part of the founder funding used for the business before this round, subject to supporting records, accounting classification, approvals and financing terms. It is separate from compensation.</p>
        </More>
      </Chapter>

      {/* X — FOUNDERS */}
      <Chapter id="founders" title={<>Built by operators who have lived <em>the back office.</em></>}>
        <div className="grid g2 founders">
          <article className="card reveal" style={st(0)}><p className="role">CTO</p><h3>Mark Lord</h3><p>Product, technology and commercial architecture. Built Forge, Sabina and the patent-pending architecture behind them. Prior operating experience spans small-business ownership, technical work, and sales into the trades.</p></article>
          <article className="card reveal" style={st(1)}><p className="role">CEO</p><h3>Brianna Lord</h3><p>Co-founder and co-owner, Citizen Potawatomi Nation member. A decade in the back office of service businesses — scheduling, AP/AR, client operations and high-volume casework — which is exactly the work Sabina is built to carry. She owns customer relationships and onboarding.</p></article>
        </div>
        <div className="motto reveal">
          <p className="latin">Fide et Familia</p>
          <p>Owned by Mark and Bri Lord, and built and held by the Lord family, for a long hold.</p>
        </div>
      </Chapter>

      {/* CTA */}
      <section className="chapter on-dark cta" aria-labelledby="h-cta">
        <div className="wrap">
          <div className="ch-head reveal">
            <p className="eyebrow">Next step</p>
            <h2 className="h2" id="h-cta">Build useful company intelligence. <em>Make its delivery repeatable.</em></h2>
            <p className="lead">{awrSabina.publicCopy}. <a className="link" href="https://withsabina.ai/hire#founding">See current founding availability</a>. The Forge reference is evidence of paid platform use; it is distinct from a Sabina customer outcome. Ask for the evidence behind the proposed service and the next deployment milestone.</p>
            <div className="cta-actions">
              <a className="btn btn-solid" href={mailto('Discuss the investment — Dominus Foundry')}>Discuss the investment <Arr /></a>
              <a className="btn btn-ghost" href={mailto('Reference call — All Weather Roofing')}>Request the customer reference <Arr /></a>
              <a className="btn btn-ghost" href={mailto('Diligence pack — Dominus Foundry')}>Request the diligence pack <Arr /></a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter blurb={<>Dominus Foundry builds and operates Managed AI for businesses. Sabina is your company&apos;s own AI, shaped around your systems, knowledge, people, and authority. Built and held by Mark &amp; Bri Lord in Albuquerque, New Mexico.</>} />
  </div>
}
