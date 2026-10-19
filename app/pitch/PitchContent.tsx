'use client'
/* Dominus Foundry's Managed AI investor case, dominusfoundry.com/pitch.
   2026-10-19 ship candidate: the reworked narrative (David Wu's feedback: answer
   problem, solution, proof, why it grows and the ask in 30 seconds; tell it as a
   story with the money in it; make the data thesis plain). Reframed on Mark's
   direction the same day: Sabina is a company's own full AI and we build the
   agents they need from her; the problem is two-fold (more help with the work,
   and help deploying AI correctly and safely). Promise-keeping is one worked
   example of one agent, and the basis of the data thesis.
   Every claim, status and date comes from claims.ts; every figure from
   financial-plan.json, income-assumptions.json and income-model.ts (finance.ts
   throws if the raise and the budget disagree). The only price on the page is
   the planning-price line in the economics chapter (Mark, 2026-10-19).
   Cross-industry from the outset: see AGENTS.md; no trades-first proof lane. */
import { useRef, type ReactNode } from 'react'
import { PROOF, STATUS_LABEL, claim, AT_A_GLANCE, HUMAN_COST, RAISE, CONTACT_EMAIL } from './claims'
import { incomeAssumptions as a, incomeScenarios, financingTarget } from './income-model'
import { plan as p, target, reserve, usd } from './finance'
import SiteFooter from '@/components/site/SiteFooter'
import { Badge, HeroEmbers, IncomeCase, LayerStack, PitchNav, ProofLedger, UseOfFunds, money, useReveal, type ChapterRef, type Layer } from './ui'

function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
const Arr = () => <span className="arr" aria-hidden="true">→</span>
const st = (i: number) => ({ '--i': i } as React.CSSProperties)

const CHAPTERS: (ChapterRef & { kicker: string })[] = [
  { id: 'story', n: 'I', name: 'One agent at work', kicker: 'One agent, worked through' },
  { id: 'problem', n: 'II', name: 'What it costs', kicker: 'The problem, in money' },
  { id: 'solution', n: 'III', name: 'Sabina and her agents', kicker: 'The solution' },
  { id: 'record', n: 'IV', name: 'The long game', kicker: 'The data thesis' },
  { id: 'how', n: 'V', name: 'How it is built', kicker: 'How it is built' },
  { id: 'proof', n: 'VI', name: 'Proof so far', kicker: 'What is already operating' },
  { id: 'plan', n: 'VII', name: 'The plan', kicker: '10–20 companies, then MSPs' },
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
  { t: 'One trained brain', what: 'Foundry trains and runs the core model behind every Sabina.', platform: 'Custom-trained weights, training and evaluation methods, serving software.', company: 'Any extra adaptation written into that company’s deployment.' },
  { t: 'Her knowledge of your company', what: 'She starts out knowing your people, systems, customers and how the industry works.', platform: 'Memory, context assembly and onboarding machinery.', company: 'Identity, systems, people, records, relationships and private knowledge.' },
  { t: 'Your rules', what: 'You tell her, in plain English, how work is done and what she may and may not do.', platform: 'The teaching process and the permission system.', company: 'Instructions, responsibilities, approvals, and the ability to take any permission back.' },
  { t: 'The record she builds', what: 'Every request, promise, decision and outcome she handles is written down as it happens.', platform: 'Capturing, maintaining and searching that record.', company: 'The company’s own history: what was promised, what happened, and why.' },
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
          <p className="eyebrow">Dominus Foundry · Sabina</p>
          <h1 className="display" id="hero-title">Sabina is a company’s own full AI. <em>We build the agents they need from her, and run them safely.</em></h1>
          <p className="lead">Sabina joins a company with her own email and phone line, and a place on the team. From her we build the agents that business needs — answering calls and the inbox, following up, scheduling and booking, chasing quotes and reminders, keeping track of every promise — and we set them up, govern them and run them, so the business gets the help without having to become an AI company. Everything she handles becomes a record of how that company really works, and that record is the long-term asset.</p>
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
            <div><span>The problem</span><span>Two of them. First, businesses lose on all of it, not just the missed call or the broken promise: they need more help with the everyday work — answering, following up, scheduling, quoting, chasing — and those tasks are what Sabina’s agents take on. Second, they need help deploying AI correctly and safely. Nobody on staff can choose it, connect it to the business, govern it and keep it running. That is Managed AI.</span></div>
            <div><span>What we built</span><span>Sabina, a company’s own full AI, and the Managed AI service around her. She joins with her own email and phone line, and a place on the team; from her we build the agents the company needs, and we run them. Every agent acts only within the permissions the owner sets, and everything she does leaves a record. The business gets real AI without needing to become an AI company.</span></div>
            <div><span>Proof so far</span><span>One agent, the promise tracker, running on our own company today: pointed at {night.emails} of our own emails overnight, she found {night.commitments} commitments that had no record of being closed. Run across full mailbox histories, she flagged about {fh.about} possible commitments at our company and about {cl.about} at a related company. Our platform, Forge, is in paid production at an independent customer.</span></div>
            <div><span>Why it gets bigger</span><span>Every company she works in leaves behind a record of requests, promises and outcomes that nobody else captures. Across hundreds of companies — with their permission — that becomes data no one else has. We intend Dominus Foundry to become a data company; Sabina is how the record gets made.</span></div>
            <div><span>The ask</span><span>{RAISE.amount} on a post-money SAFE at {RAISE.cap}, to put Sabina into 10–20 companies over {p.horizonMonths} months and make that repeatable.</span></div>
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

      {/* I — THE STORY */}
      <Chapter id="story" title={<>“Can you send me the deck <em>by tomorrow?”</em></>}
        lead="An investor emails on a Tuesday afternoon. You reply “Absolutely.” Then forty more emails land, two customers call, and a supplier problem eats the evening. Wednesday comes and goes.">
        <p className="note reveal">This is one of the agents we build from Sabina — the one that keeps track of promises — worked through end to end. It is the easiest one to show, and the one whose record feeds the data thesis in chapter IV.</p>
        <div className="two-col reveal">
          <h3 className="h3">Nobody forgot on purpose</h3>
          <div className="prose">
            <p>The promise was made in writing, in your own inbox. It just had nowhere to live except your head. That is how most small businesses run: every “I’ll get back to you” is held by one busy person, and when they are busy, it drops.</p>
            <p>With Sabina, the moment you write “Absolutely,” she notes it: <strong>who</strong> asked, <strong>what</strong> you promised, and <strong>by when</strong>. She watches your outbox. If the deck goes out, she quietly closes it. If it has not gone out by the deadline — or within 24 hours when no deadline was given — she sends you one short note with a link straight to the thread.</p>
          </div>
        </div>
        <div className="grid g4">
          <Tile i={0} k="01" t="She reads">Read-only access to the company mailbox, checked every minute.</Tile>
          <Tile i={1} k="02" t="She spots the promise">“I’ll send it tomorrow” becomes an open commitment, with a due time.</Tile>
          <Tile i={2} k="03" t="She watches for it to close">A reply, a sent file or a booked call closes it. No noise if it is done.</Tile>
          <Tile i={3} k="04" t="She nudges">If it is not done in time, one reminder, with the link to pick it back up.</Tile>
        </div>
        <div className="callout reveal">
          <p><strong>We did this to ourselves first.</strong> We connected {night.emails} of our own company emails overnight. By morning Sabina had found <strong>{night.commitments} commitments</strong> in them with no record of ever being closed, across {night.conversations} conversations with {night.people} different people. Run across each company’s full mailbox history, she flagged about <strong>{fh.about}</strong> possible commitments in ours ({fh.people} people) and about <strong>{cl.about}</strong> at a related company ({cl.people} people).</p>
          <p className="note">Measured on Dominus Foundry’s own account, 14 October 2026.</p>
        </div>
      </Chapter>

      {/* II — WHAT IT COSTS */}
      <Chapter id="problem" className="on-dark" title={<>Two problems: they need more help with the work, <em>and help putting AI to work safely.</em></>}
        lead="Businesses don’t lose only on the missed call or the broken promise; they lose on all of it, because there is more work than hands. The second problem is why it hasn’t been fixed: the tools exist, but a small business has no one to deploy them correctly and safely.">
        <h3 className="h3 reveal">Problem one: more work than hands</h3>
        <div className="grid g2 problem-grid">
          <div className="card reveal" style={st(0)}><span className="ix">01</span><p><strong>The hire.</strong> A fully loaded front-office coordinator — wage, employer tax, insurance, benefits, the desk — costs about <strong>{HUMAN_COST.monthly} a month</strong>, roughly {HUMAN_COST.hourly} an hour. Much of that day is answering, following up and remembering.</p></div>
          <div className="card reveal" style={st(1)}><span className="ix">02</span><p><strong>The leak.</strong> The missed call goes to the next company on the list. The quote that never got its follow-up is a sale lost after all the work to win it. The appointment nobody confirmed, the reminder nobody sent. None of it shows up on a statement, so nobody totals it.</p></div>
          <div className="card reveal" style={st(2)}><span className="ix">03</span><p><strong>The repeat.</strong> The same question gets answered again because the last answer was never written down.</p></div>
          <div className="card reveal" style={st(3)}><span className="ix">04</span><p><strong>The owner.</strong> Everything that should move on its own comes back to the person running the business.</p></div>
        </div>
        <div className="sub reveal">
          <h3 className="h3">Problem two: deploying AI correctly and safely</h3>
          <div className="prose">
            <p>A large company that wants AI working inside its business hires people to choose the tools, connect them to email, phone and records, decide what the AI may and may not do, keep customer data safe, and fix it when it breaks. A 15-person company has none of those people. The owner is already the backup memory; they are not going to become the AI department too.</p>
            <p>So small businesses end up with the worst of both: staff pasting company work into whatever free chatbot they found, with no rules and no record, while the real gains go to companies big enough to staff for them.</p>
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
          <h3 className="h3">Do the math on one week (problem one)</h3>
          <div className="rows">
            <div><span>Calls missed</span><span>Five a week that never get a callback. If one in five would have become a $4,000 job, that is $4,000 a week walking to a competitor.</span></div>
            <div><span>Follow-ups dropped</span><span>Three quotes a week with no second touch. Recover one a month and it pays for a year of most software.</span></div>
            <div><span>Owner hours</span><span>Ten hours a week chasing what should have chased itself — a quarter of a full-time job, done by the most expensive person in the building.</span></div>
          </div>
          <p className="note">Illustrative arithmetic to show the shape of the cost, not customer results. The {HUMAN_COST.monthly} figure is a modeled cost of a human hire ({HUMAN_COST.methodLabel}: {HUMAN_COST.method}), not Sabina’s price, which is quoted per company.</p>
        </div>
      </Chapter>

      {/* III — WHAT SABINA DOES */}
      <Chapter id="solution" title={<>A company’s own full AI, <em>and the agents built from her.</em></>}
        lead="This answers both problems. Sabina joins the company with her own email and phone line, and a place on the team. From her we build the agents the work needs, agree with the owner exactly what each one handles, and run them for the company. She takes on the work; we carry the AI work they have no one to do.">
        <div className="grid g3">
          {[['Answers', 'The phone and the inbox, in the company’s name, around the clock.'], ['Books and follows up', 'Appointments, callbacks, quotes and reminders, within agreed limits.'], ['Keeps promises', 'Tracks every commitment, inbound and outbound, until it is closed.'], ['Learns the company', 'Remembers people, customers, past answers and corrections.'], ['Asks before she acts', 'Anything outside her permissions goes to a person for approval.'], ['Shows her work', 'Every action has a record: what she did, when, and on whose authority.']].map(([t, d], i) =>
            <Tile key={t} i={i} k={`0${i + 1}`} t={t}>{d}</Tile>)}
        </div>
        <div className="callout reveal">
          <p><strong>Agents, built from her.</strong> {agents.publicCopy}. <Badge status={agents.status} /> — {agents.detailCopy}</p>
          <p><strong>The owner’s rules, in plain English.</strong> {policy.publicCopy} <Badge status={policy.status} /> — {policy.detailCopy}</p>
        </div>
        <p className="note reveal">Scope, terms and price are set in each company’s written proposal. There is no rate card.</p>
        <More summary="Why now" bodyClass="prose">
          <p>About eighteen months ago, AI models became good enough to carry real business work. What did not arrive with them was a practical way for a business to say in advance what the system may do, and to see afterwards what it did. Meanwhile employees are already pasting company work into unsanctioned AI tools because there is no good sanctioned option.</p>
          <p>Running a trained model for many companies is now affordable in a way it was not eighteen months ago. Most small businesses still cannot build and operate that themselves. That is the gap.</p>
        </More>
      </Chapter>

      {/* IV — THE DATA THESIS */}
      <Chapter id="record" className="on-dark" title={<>The work is the business today. <em>The record is the business long term.</em></>}
        lead="A call transcript tells you what was said. Sabina’s record tells you what was promised, by whom, by when — and whether it happened. Almost no business keeps that record, because until now nobody could afford to write it down.">
        <ol className="horizon reveal">
          <li><span className="when">Year one · one company</span><h3 className="h3">She remembers</h3><p>Every request, promise and outcome at that company is written down as it happens. The owner can ask “what did we tell this customer in March?” and get an answer. This is part of what a company hires her for.</p></li>
          <li><span className="when">Years two and three · the same company</span><h3 className="h3">She notices</h3><p>With enough history she can show the owner patterns they could never see: which kinds of promises slip, which customers wait longest, where the work actually gets stuck. The company starts to run on its own evidence instead of memory.</p></li>
          <li><span className="when">Long term · many companies, by agreement</span><h3 className="h3">The industry learns</h3><p>Across hundreds of companies, and only with each company’s separate agreement, derived patterns — never raw emails — become benchmarks nobody else has: what normal response times look like, what a healthy follow-up rate is, which practices win more work.</p></li>
        </ol>
        <div className="two-col reveal">
          <h3 className="h3">Why this is hard to copy</h3>
          <div className="prose">
            <p><strong>It is written down before the outcome is known.</strong> You cannot go back and reconstruct when a promise was made and whether it was kept; the record has to be captured at the moment the work happens. That is why it only comes from being inside the work.</p>
            <p><strong>Customers pay us to create it.</strong> Nobody hires Sabina for the data. They hire her to carry the work, and the record is a by-product of doing that work well.</p>
            <p><strong>There is a precedent.</strong> Verisk and CoStar became data companies by standardizing a record created inside work their customers were already paying for. Those are business-model comparisons, not a claim that our future data products exist today.</p>
          </div>
        </div>
        <div className="callout reveal"><p><strong>We intend Dominus Foundry to become a data company; Sabina is how the record gets made.</strong></p></div>
        <p className="note reveal">The guardrails are part of the design. Raw company email is never pooled into a shared model or sold. Anything beyond a company’s own service needs that company’s separate, specific agreement. The customer offer, the operating plan and the raise do not depend on any future data revenue.</p>
      </Chapter>

      {/* V — HOW IT IS BUILT */}
      <Chapter id="how" title={<>One brain we run. <em>A separate Sabina for every company.</em></>}
        lead="Every company gets its own Sabina, with its own knowledge, rules and record. Underneath, they share one trained model and one platform that we build and run. That is what lets the hundredth deployment cost less than the first.">
        <LayerStack layers={LAYERS} />
        <p className="note reveal"><strong>{modelPath.publicCopy}.</strong> <Badge status={modelPath.status} /> {modelPath.detailCopy}</p>
        <More summary="The operating platform and the economics of reuse" bodyClass="prose">
          <p><strong>Forge</strong> is the operating platform beneath and alongside Sabina: the company’s records and specialist tools. Some Forge tools are sold on their own, and Forge is already in paid production at an independent customer.</p>
          <p>The trained model, memory machinery, permission system, integrations and deployment tools are reusable. Each new company brings its own context and rules to that shared platform. The scale opportunity is making each company-specific deployment repeatable while spreading the engineering across a growing customer base. Inference, onboarding and support stay real per-company costs, and the use of funds carries them.</p>
          <p>Company teaching and memory are not changes to the model itself, and Sabina’s permissions always come from the company.</p>
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
      <Chapter id="plan" className="on-dark" title={<>First 10–20 companies. <em>Then the partners who already serve thousands.</em></>}
        lead="Step one is direct: put Sabina into 10–20 companies across industries and learn exactly what setup, support and results look like. Step two is distribution: managed IT providers (MSPs) offer her to the businesses they already look after.">
        <ol className="sequence reveal" aria-label="The sequence">
          {['Direct company value', 'Repeatable setup and support', 'MSP distribution', 'The record grows into data'].map((s) => <li key={s}><span>{s}</span></li>)}
        </ol>
        <div className="grid g3 split3">
          <div className="card reveal" style={st(0)}><p className="tile-k">We do</p><p className="who">Foundry</p><p className="tile-p">The model, the platform, running it, updates, and escalated support.</p></div>
          <div className="card reveal" style={st(1)}><p className="tile-k">They do</p><p className="who">MSP</p><p className="tile-p">The customer relationship, local systems, onboarding help and day-to-day support.</p></div>
          <div className="card joint reveal" style={st(2)}><p className="tile-k">Together</p><p className="who">Agreed per partner</p><p className="tile-p">Billing, support boundaries, service measurement and economics.</p></div>
        </div>
        <p className="note reveal">The 10–20 companies are the milestone this raise funds, not customers we already have. The MSP split is the intended model, not a live program; there are no published partner terms, rates or dates.</p>
      </Chapter>

      {/* VIII — WHY WE WIN */}
      <Chapter id="position" title={<>Others sell a chatbot. <em>We deliver a running company system.</em></>}
        lead="Plenty of tools answer a phone or draft an email. What a small business cannot get anywhere else is the whole thing done for them: a model, memory of their company, rules they control, and someone running it.">
        <div className="grid g4">
          <Tile i={0} k="01" t="She lives where the work is">Inside the company’s phone, email and records — not a one-task plug-in.</Tile>
          <Tile i={1} k="02" t="Nothing happens without permission">Every consequential action passes through the owner’s rules first.</Tile>
          <Tile i={2} k="03" t="The record comes first">Promises are captured as they are made, so the history cannot be faked later.</Tile>
          <Tile i={3} k="04" t="She gets better at your company">Instructions, corrections and outcomes shape her next piece of work.</Tile>
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
        lead={`The money pays for direct deployments, the people doing them — including ${hires} — and running Sabina’s model on our own servers. It is a costed operating plan, not a guess.`}>
        <p className="note reveal" id="planningPrice">Planning price points: $750 a month for founding companies and $1,500 a month thereafter. Each company is custom quoted.</p>
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
          <p className="note">Illustrative planning scenarios dated {a.asOf}, not achieved results. Months begin at financing close; the model starts with zero new Sabina customers and does not restate current traction.</p>
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
            <h2 className="h2" id="h-cta">Put Sabina to work today. <em>Own the record tomorrow.</em></h2>
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

    <SiteFooter blurb={<>Dominus Foundry builds and operates Managed AI for businesses. Sabina is your company&apos;s own AI, shaped around your systems, knowledge, people, and authority. Built and held by Mark &amp; Bri Lord in Albuquerque, New Mexico.</>} />
  </div>
}
