'use client'
/* 6 November 2026 (Mark): the page leads with company-owned intelligence made
   attainable by managed, distributed delivery. The thesis copy is read from
   thesis.json, shared with the Afore deck so the two media cannot drift; it is
   Codex-owned and not edited here. Agent and promise-tracking work is a
   supporting example further down. Claims, dated evidence and financial inputs
   keep their own sources; financing terms and the cost plan are unchanged. */
import { useRef, type ReactNode } from 'react'
import T from './thesis.json'
import { PROOF, STATUS_LABEL, claim, AT_A_GLANCE, RAISE, ENTITY, CONTACT_EMAIL } from './claims'
import { incomeAssumptions as a, incomeScenarios, financingTarget } from './income-model'
import { plan as p, target, reserve, usd, budgetRows } from './finance'
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
  { id: 'story', n: 'I', name: 'Early value', kicker: 'What a company gets early' },
  { id: 'problem', n: 'II', name: 'What it costs', kicker: 'The problem, in money' },
  { id: 'solution', n: 'III', name: 'Managed delivery', kicker: 'The solution' },
  { id: 'record', n: 'IV', name: 'The durable asset', kicker: 'What compounds' },
  { id: 'how', n: 'V', name: 'How it is delivered', kicker: 'How it is built and delivered' },
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
/* A two-sentence thesis title renders its second sentence in italic, as the page's headings do. */
const two = (t: string) => { const i = t.indexOf('. '); return i < 0 ? t : <>{t.slice(0, i + 1)} <em>{t.slice(i + 2)}</em></> }
/* The one token thesis.json carries; any other unreplaced token stops the page. */
const FIVE = T.five.map((f) => ({ q: f.question, a: f.answer.replaceAll('{raise}', RAISE.amount) }))
if (FIVE.some((f) => /[{}]/.test(f.a))) throw new Error('/pitch: unreplaced token in thesis.json five answers')

/* Proof, grouped for reading. Same rows as the detailed ledger (filings sit in
   the IP card); every row must land in exactly one group or the page refuses. */
const PROOF_GROUPS: { key: string; t: string; d: string; match: (s: string) => boolean }[] = [
  { key: 'live', t: 'Live', d: 'Operating today, in customer production or on our own account.', match: (s) => s === 'live_customer' || s === 'live_internal' },
  { key: 'measured', t: 'Measured or confirmed', d: 'Internal analyses and owner-confirmed architecture, not customer outcomes.', match: (s) => s === 'measured_internal' || s === 'owner_attested' },
  { key: 'progress', t: 'In progress', d: 'Contracted, in acceptance, or a proven path not yet in production.', match: (s) => ['contracted', 'in_acceptance', 'proven_path'].includes(s) },
  { key: 'notyet', t: 'Not yet', d: 'Distinct milestones that have not happened.', match: (s) => s === 'not_yet' },
  { key: 'roadmap', t: 'Roadmap', d: 'Planned, not built.', match: (s) => s === 'roadmap' },
]
const PROOF_ROWS = PROOF.filter((c) => c.status !== 'filed')
if (PROOF_ROWS.some((c) => PROOF_GROUPS.filter((g) => g.match(c.status)).length !== 1)) throw new Error('/pitch: a proof row is not in exactly one summary group')

/* Use of funds, aggregated from finance.ts budgetRows (financial-plan.json).
   Labels map rows to groups; an unmapped or double-mapped row stops the page.
   The founder-funding repayment stays its own disclosed line. */
const FUND_GROUPS: { t: string; d: string; rows: string[] }[] = [
  /* Same five operating groups as the Afore deck (6 Nov 2026), so both media show one split. */
  { t: 'Product and customer delivery', d: 'The implementation engineer, deployment and customer support, and specialist engineering.', rows: ['Technical delivery team', 'Deployment and customer support', 'Specialist engineering'] },
  { t: 'Sales and acquisition', d: 'Two account executives, plus research and acquisition support.', rows: ['Sales team', 'Sales, research and acquisition'] },
  { t: 'Founders and employer costs', d: 'Combined founder gross pay and its employer-cost allowance.', rows: ['Founder compensation', 'Founder employer-cost allowance'] },
  { t: 'Compute and development tools', d: 'AWS compute for Sabina’s models and infrastructure, and external developer AI tools.', rows: ['AWS compute and infrastructure', 'External developer AI tools'] },
  { t: 'Business, legal and security', d: 'Administration and business software, financing and corporate work, and security readiness.', rows: ['Administration and business software', 'Legal and security readiness'] },
]
{
  const mapped = FUND_GROUPS.flatMap((g) => g.rows)
  if (mapped.length !== budgetRows.length || new Set(mapped).size !== mapped.length || budgetRows.some(([l]) => !mapped.includes(l)))
    throw new Error('/pitch: use-of-funds groups do not cover the budget exactly once')
}
const FUNDS = [
  ...FUND_GROUPS.map((g) => ({ t: g.t, d: g.d, amt: budgetRows.filter(([l]) => g.rows.includes(l)).reduce((s, r) => s + r[1], 0), disclosed: false })),
  { t: 'Founder-funding repayment', d: `Proposed repayment of part of the founder funding put into the business before this round, up to ${usd(p.founderFundingRepayment)}. Separately disclosed; not operating expense.`, amt: p.founderFundingRepayment, disclosed: true },
  { t: 'Contingency and working-capital reserve', d: 'Cash retained against timing differences and overruns; not counted again as expense.', amt: reserve, disclosed: false },
]
if (Math.round(FUNDS.reduce((s, f) => s + f.amt, 0)) !== target) throw new Error('/pitch: use-of-funds groups do not sum to the financing target')
const FUND_TONES = ['#e3cba8', '#c87f4a', '#dd9244', '#b9a17c', '#8f7a5c', '#5f6e72', '#3f4c51']

/* Real Sabina product screens only: Sabina inside Forge (buildwithforge.app),
   captured 6 Nov 2026 in Foundry's own internal workspace, cropped before any
   individual or personal record; pixels unaltered. They show the interface,
   not a customer result or an enforcement test. Never a mock-up, never a
   screen with private customer or person data, and never the separate Command
   dashboard (Mark, 6 Nov 2026). */
type Screen = { src: string; w: number; h: number; alt: string; caption: string }
const SCREENS: Record<'example' | 'solution', Screen[]> = {
  example: [{ src: '/pitch-afore/forge-sabina-work.png', w: 1200, h: 466,
    alt: 'Sabina’s Knowledge view in Forge: what she has picked up about the company, with aggregate counts of facts held, reachable by meaning and unclassified',
    caption: 'Actual Sabina Knowledge view in Forge, Foundry’s internal workspace, captured 6 November 2026. Aggregate counts only; it shows the interface, not a customer result.' }],
  solution: [{ src: '/pitch-afore/forge-sabina-home.png', w: 905, h: 542,
    alt: 'Sabina’s Authority view in Forge: company-wide starting switches for booking, invoices, discounts, quoting and the largest amount she may commit',
    caption: 'Actual Sabina Authority view in Forge, Foundry’s internal workspace, captured 6 November 2026. Settings shown as they were; it shows the controls, not an enforcement test.' }],
}
function Screens({ items }: { items: Screen[] }) {
  if (!items.length) return null
  return <div className={`shots shots-${items.length > 1 ? 'n' : '1'} reveal`}>
    {items.map((s) => <figure className="shot" key={s.src} style={{ maxWidth: s.w }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static product capture */}
      <img src={s.src} width={s.w} height={s.h} alt={s.alt} loading="lazy" decoding="async" />
      <figcaption>{s.caption}</figcaption>
    </figure>)}
  </div>
}

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
          <p className="eyebrow">{T.eyebrow}</p>
          <h1 className="display" id="hero-title">{T.hero.line1} <em>{T.hero.line2}</em></h1>
          <p className="lead">{T.hero.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={mailto('Discuss the investment — Dominus Foundry')}>Discuss the investment <Arr /></a>
            <a className="btn btn-ghost" href="#thirty">The 30-second version <Arr /></a>
          </div>
          <div className="chips">
            <span className="chip">Raising <b className="num">{RAISE.amount}</b> · SAFE · <b className="num">{RAISE.cap}</b> cap</span>
            <span className="chip">{ENTITY.plan}</span>
            <span className="chip">Terms as of <b className="num">{RAISE.asOf}</b></span>
          </div>
        </div>
        <a className="scroll-cue" href="#thirty" aria-label="Scroll to the 30-second version"><span />Scroll</a>
      </section>

      {/* THE 30-SECOND VERSION — five questions from thesis.json */}
      <section className="chapter" id="thirty" aria-labelledby="h-thirty">
        <div className="wrap">
          <div className="ch-head reveal">
            <p className="eyebrow">The 30-second version</p>
            <h2 className="h2" id="h-thirty">Five questions, <em>five answers.</em></h2>
          </div>
          <div className="rows rows-five reveal">
            {FIVE.map((f) => <div key={f.q}><span>{f.q}</span><span>{f.a}</span></div>)}
          </div>
          <p className="note reveal">{RAISE.amount} · {RAISE.instrument} · {RAISE.cap} cap. {ENTITY.plan}. Projections below are planning scenarios, not current customers.</p>
        </div>
      </section>

      {/* WHY NOW — two independent market theses, linked to their primary sources.
          Context only: not an evaluation or endorsement of Dominus Foundry. */}
      <section className="chapter market on-dark" id="market" aria-labelledby="h-market">
        <div className="wrap">
          <div className="ch-head reveal">
            <p className="eyebrow">{T.market.eyebrow}</p>
            <h2 className="h2" id="h-market">{T.market.title}</h2>
            <p className="lead">{T.market.lead}</p>
          </div>
          <div className="ch-body">
          <div className="grid g2 market-grid">
            {T.market.sources.map((m, i) => <article className="card market-card reveal" style={st(i)} key={m.url}>
              <p className="mk-pub">{m.publisher} · {m.author}</p>
              <h3 className="mk-t"><a href={m.url} target="_blank" rel="noopener noreferrer">{m.title}<span className="sr-only"> (opens the source in a new tab)</span></a></h3>
              <p className="mk-d num">{m.date}</p>
              <p className="mk-s">{m.summary}</p>
              <p className="mk-link"><a className="link" href={m.url} target="_blank" rel="noopener noreferrer">Read the source <Arr /></a></p>
            </article>)}
          </div>
          <div className="callout reveal"><p><strong>{T.market.bet}</strong></p></div>
          <p className="note reveal">{T.market.note}</p>
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
      <Chapter id="story" title={two(T.earlyValue.title)} lead={T.earlyValue.lead}>
        <div className="grid g3">
          {T.earlyValue.items.map((it, i) => <Tile key={it.title} i={i} k={`0${i + 1}`} t={it.title}>{it.body}</Tile>)}
        </div>
        <Screens items={SCREENS.example} />
        <div className="two-col reveal">
          <h3 className="h3">An example question</h3>
          <div className="prose">
            <p>An owner asks why a customer relationship has stalled. The answer may span earlier conversations, a changed requirement, work already delivered and a decision nobody recorded in the main system. Reading one message is not enough; the useful task is connecting the relevant evidence and identifying what still needs an answer.</p>
            <p>Start with the records and responsibilities the company approves. Retain useful instructions, reviewed corrections and outcomes with the work. That context can help with the next question, the next report and the next handoff, without granting any new permission to act.</p>
          </div>
        </div>
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
      <Chapter id="solution" title={two(T.delivery.title)} lead={T.delivery.lead}>
        <div className="band-line reveal"><p>{T.delivery.band}</p></div>
        <div className="grid g3">
          {[['Company understanding', 'Relevant records and what the team teaches her inform the agreed work.'], ['Questions and analysis', 'Bring together available evidence, identify uncertainty and prepare useful answers.'], ['Preparation', 'Draft reports, summaries and options for the responsible person to review.'], ['Operational work', 'Support enabled communication, handoffs and follow-through within the written scope.'], ['Company control', 'Define permitted sources, approval requirements and the actions she may take.'], ['Managed operation', 'Foundry maintains the supported environment, connections and service.']].map(([t, d], i) =>
            <Tile key={t} i={i} k={`0${i + 1}`} t={t}>{d}</Tile>)}
        </div>
        <Screens items={SCREENS.solution} />
        <div className="callout reveal">
          <p><strong>Supporting agents and workflows.</strong> {agents.publicCopy}. <Badge status={agents.status} /> — {agents.detailCopy}</p>
          <p><strong>The owner’s rules, in plain English.</strong> {policy.publicCopy} <Badge status={policy.status} /> — {policy.detailCopy}</p>
        </div>
        <More summary="A supporting workflow example: tracking a customer commitment" bodyClass="prose">
          <p>Suppose someone asks for a document by tomorrow. A useful workflow identifies the request, its owner and due date; checks the relevant record for completion; and prepares a follow-up if the evidence is missing. Completion needs supporting evidence, not merely a plausible reply.</p>
          <p>This describes a workflow to demonstrate within an agreed scope. The historical mailbox analyses below establish extraction results; they do not establish continuous monitoring, a polling frequency, automated closure or reminder delivery.</p>
        </More>
        <p className="note reveal">The standard offer is $1,500/month with Forge included and no setup fee. Large accounts receive custom pricing. Supported work and connections are confirmed in the written proposal.</p>
        <More summary="Why now" bodyClass="prose">
          <p>Useful models alone do not create useful company intelligence. A business also needs the right records, a way to retain what it learns, evaluations drawn from its work, and control over access and actions.</p>
          <p>The opportunity is to operate that whole service for businesses that do not want to assemble an AI department. Judge model and configuration changes against the company’s work while carrying its relevant knowledge forward.</p>
        </More>
      </Chapter>

      {/* IV — THE DATA THESIS */}
      <Chapter id="record" className="on-dark" title={two(T.compounding.title)} lead={T.compounding.lead}>
        <div className="grid g3">
          {T.compounding.items.map((it, i) => <Tile key={it.title} i={i} k={`0${i + 1}`} t={it.title}>{it.body}</Tile>)}
        </div>
        <p className="note reveal">{T.compounding.note}</p>
        <p className="note reveal">The guardrails are part of the design. Raw company email is never pooled into a shared model or sold. Anything beyond a company’s own service needs that company’s separate, specific agreement. The customer offer, the operating plan and the raise do not depend on any future data revenue.</p>
        <More summary="Longer term, and separate: a permissioned network across companies" bodyClass="prose">
        <ol className="horizon">
          <li><span className="when">Year one · one company</span><h3 className="h3">She remembers</h3><p>Relevant, authorized records and reviewed instructions can inform later questions and work. Keep their sources, access limits and corrections with them.</p></li>
          <li><span className="when">Years two and three · the same company</span><h3 className="h3">She notices</h3><p>With sufficient relevant history, analysis can connect patterns across customers, decisions and outcomes. The team reviews the evidence and tests useful suggestions; stored history does not by itself establish accuracy or cause.</p></li>
          <li><span className="when">Long term · many companies, by agreement</span><h3 className="h3">The industry learns</h3><p>A future permissioned network could compare eligible derived patterns across companies, such as response times or recurring sources of delay. It needs separate, specific agreements and validated methods; raw company email is not pooled or sold.</p></li>
        </ol>
        <div className="two-col">
          <h3 className="h3">Why this is hard to copy</h3>
          <div className="prose">
            <p><strong>Context accumulates through use.</strong> Retaining the source, the instruction or decision, its timing and the later outcome provides a richer basis for review than an isolated answer. Provenance and recorded changes help inspection; a record alone is not a guarantee that history cannot be altered.</p>
            <p><strong>The customer gets value first.</strong> The service must answer useful questions or carry worthwhile responsibilities. Relevant knowledge and reviewed outcomes can then improve the context for later work. Future network revenue is not needed to justify that service.</p>
            <p><strong>There is a precedent.</strong> Verisk and CoStar became data companies by standardizing a record created inside work their customers were already paying for. Those are business-model comparisons, not a claim that our future data products exist today.</p>
          </div>
        </div>
        <div className="callout"><p><strong>We intend Dominus Foundry to become a data company; Sabina is how the record gets made.</strong></p></div>
          <p className="note">Roadmap, not a current product. It needs each company’s separate, specific agreement and validated methods.</p>
        </More>
      </Chapter>

      {/* V — HOW IT IS BUILT */}
      <Chapter id="how" title={<>Models we operate. <em>Company knowledge that carries forward.</em></>}
        lead="Foundry trains and operates Sabina’s core models and platform. Company-specific memory, instructions and permissions are kept separately from the core model. Shared engineering can support repeatable deployment while each company’s context and authority remain specific to its service.">
        <div className="sub reveal">
          <h3 className="h3 h3-lg">{T.deliveryEconomics.title}</h3>
          <p className="lead-sm">{T.deliveryEconomics.lead}</p>
        </div>
        <div className="grid g3">
          {T.deliveryEconomics.items.map((it, i) => <Tile key={it.title} i={i} k={`0${i + 1}`} t={it.title}>{it.body}</Tile>)}
        </div>
        <h3 className="h3 reveal">The layers, and who holds each</h3>
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
        <p className="note stage-note reveal">{T.investment.stage}</p>
        <div className="proof-sum">
          {PROOF_GROUPS.map((g, i) => {
            const rows = PROOF_ROWS.filter((c) => g.match(c.status))
            return <div className={`card proof-group pg-${g.key} reveal`} style={st(i)} key={g.key}>
              <div className="pg-head"><span className="pg-n num">{rows.length}</span><h3 className="pg-t">{g.t}</h3></div>
              <p className="pg-d">{g.d}</p>
              <ul className="pg-list">{rows.map((c) => <li key={c.id}>{c.publicCopy}</li>)}</ul>
            </div>
          })}
        </div>
        {/* Own wrapper: the ledger carries its closed source sheet (a hidden dialog),
            so this disclosure is not one of the plain-text disclosure bodies. */}
        <div className="ledger-more">
          <More summary={`The full proof ledger: all ${PROOF_ROWS.length} rows, each with its status, date and source`}>
            <ProofLedger />
          </More>
        </div>
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
      <Chapter id="economics" title={<>{RAISE.amount}. <em>{T.investment.title}</em></>} lead={T.investment.lead}>
        <div className="callout reveal"><p><strong>Stage.</strong> {T.investment.stage}</p></div>
        <p className="note reveal">The money pays for direct deployments, the people doing them — including {hires} — and running Sabina’s model on our own servers. The amounts are planning allowances with explicit assumptions.</p>
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
            <div><span>Corporate plan</span><strong>{ENTITY.plan}</strong></div>
          </div>
          <p className="note entity-note"><strong>{ENTITY.plan}.</strong> {ENTITY.note}</p>
          <p className="note">Financing reference terms dated {RAISE.asOf}; actual financing documents govern conversion and later dilution.</p>
        </div>
        <div className="sub reveal">
          <h3 className="h3">Where the money goes</h3>
          <div className="funds-sum">
            <div className="funds-sum-bar" aria-hidden="true">
              {FUNDS.map((f, i) => <span key={f.t} style={{ flexGrow: f.amt, background: FUND_TONES[i] }} />)}
            </div>
            <ul className="funds-sum-rows">
              {FUNDS.map((f, i) => <li key={f.t} className={f.disclosed ? 'disclosed' : undefined}>
                <span className="sw" style={{ background: FUND_TONES[i] }} aria-hidden="true" />
                <span className="t">{f.t}</span>
                <span className="a num">{usd(f.amt)} <span className="pct">{(f.amt / target * 100).toFixed(0)}%</span></span>
                <span className="d">{f.d}</span>
              </li>)}
              <li className="total"><span className="sw" aria-hidden="true" /><span className="t">Financing target</span><span className="a num">{usd(target)}</span></li>
            </ul>
          </div>
          <More summary="Line-by-line budget, with the basis for every amount">
            <UseOfFunds />
          </More>
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
          <article className="card reveal" style={st(0)}>{/* eslint-disable-next-line @next/next/no-img-element -- founder headshot */}<img className="headshot" src="/pitch-afore/mark-lord.jpg" width="640" height="640" alt="Mark Lord" loading="lazy" decoding="async" /><p className="role">CTO</p><h3>Mark Lord</h3><p>Product, technology and commercial architecture. Built Forge, Sabina and the patent-pending architecture behind them. Prior operating experience spans small-business ownership, technical work, and sales into the trades.</p></article>
          <article className="card reveal" style={st(1)}>{/* eslint-disable-next-line @next/next/no-img-element -- founder headshot */}<img className="headshot" src="/pitch-afore/bri-lord.jpg" width="640" height="640" alt="Brianna Lord" loading="lazy" decoding="async" /><p className="role">CEO</p><h3>Brianna Lord</h3><p>Co-founder and co-owner, Citizen Potawatomi Nation member. A decade in the back office of service businesses — scheduling, AP/AR, client operations and high-volume casework — which is exactly the work Sabina is built to carry. She owns customer relationships and onboarding.</p></article>
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
            <h2 className="h2" id="h-cta">{T.cta.line1} <em>{T.cta.line2}</em></h2>
            <p className="lead">{T.cta.lead}</p>
            <p className="note cta-note">{awrSabina.publicCopy}. <a className="link" href="https://withsabina.ai/hire#founding">See current founding availability</a>. The Forge reference is evidence of paid platform use; it is distinct from a Sabina customer outcome. Ask for the evidence behind the proposed service and the next deployment milestone.</p>
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
