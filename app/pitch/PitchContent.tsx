'use client'
/* ─────────────────────────────────────────────────────────────────────────────
   dominusfoundry.com/pitch — THE CANONICAL INVESTOR PITCH

   ⭐ RESTRUCTURED 2026-10-07 to the twelve-part Managed AI narrative (site
   retool HANDOFF §6, brief ruling 4). The Chapter shell, hero, CTA, ledger,
   figures, terms and rows components are unchanged; only the content and the
   chapter count moved (nineteen → twelve). Folded in, not lost: Why now →
   chapter I; IP / patent-pending status → chapter X; Forge as the operating
   platform and independent paid Forge use → chapters IV and VI; floor case and
   what funding changes → chapter XI; the founding-seat motion and the trades
   as proof lane → chapter VII (the founding offer is NOT the 10–20 target).

   ⛔ FOUR BLOCKS ON THIS PAGE ARE PINNED BY HASH in
   scripts/check-founding-charter.mjs (route "pitch"): the evaluations evidence
   paragraph, the human-cost paragraph, and the floor and funded paragraphs in
   chapter XI. Do not reword them; the gate fails (R12) if any goes missing.

   ⛔ EVERY FIGURE AND EVERY STATUS COMES FROM ./claims. Nothing on this page is
   hardcoded. See that file for what deliberately did NOT travel from the pitch
   this page supersedes.

   ⛔ LANGUAGE RAILS carried from the plan and standing canon:
     · Sabina carries NO price, no range, no "starting at". Pricing is custom to
       each company, built from the job, and sent afterwards as a written
       proposal. $5,500 on this page is the cost of a HUMAN hire, never hers.
     · Forge tool prices do not appear either — everything is custom quoted.
     · "Filed with the USPTO" / "patent pending" only. ⛔ Never patented,
       granted, protected, blocked or exclusive. ⛔ No claim count and no
       consolidation count, ever.
     · "Founding Employer" / "Founding Seat". ⛔ Never "Founding Partner".
     · TAM is not constrained to contractors. The trades are the proof lane.
     · "Trained core" wording is Mark's ruling (2026-10-07, brief ruling 2):
       "a core model trained and operated by Foundry". ⛔ Never "built from
       scratch", never a new base training run per customer, never a transfer
       of Foundry model weights.
     · Managed-service verbs (configures, deploys, operates) are the handoff's
       own words for what FOUNDRY does; Sabina is still hired and taught.
     · 10–20 direct companies is the NEXT operating milestone, not traction.
       MSP distribution is a plan: no program, rates, partners or dates.
     · No absolute security claim ("cannot", "impossible", "every action")
       beyond what the verified mechanics support. */
import { PageHero, CTA } from '@/components/foundry/FoundryShell'
import { Icon } from '@/components/foundry/Marks'
import {
  PROOF, STATUS_LABEL, claim,
  OBSERVED_BASELINE, FLOOR, FUNDED, HUMAN_COST,
  RAISE, USE_OF_FUNDS, MILESTONES, CONTACT_EMAIL,
  type PitchClaim,
} from './claims'

function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

function Chapter({
  n, kicker, title, children, dark = false, id,
}: {
  n: string; kicker: string; title: React.ReactNode; children: React.ReactNode; dark?: boolean; id: string
}) {
  return (
    <section className={`section pitch-chapter${dark ? ' darkband' : ''}`} id={id}>
      <div className="wrap">
        <p className="eyebrow">{n} · {kicker}</p>
        <h2 className="pitch-h2">{title}</h2>
        <div className="pitch-body">{children}</div>
      </div>
    </section>
  )
}

function Badge({ status }: { status: PitchClaim['status'] }) {
  return <span className={`pitch-badge pitch-badge-${status}`}>{STATUS_LABEL[status]}</span>
}

function Figure({ value, label, foot }: { value: string; label: string; foot?: string }) {
  return (
    <div className="pitch-figure">
      <span className="pitch-figure-v">{value}</span>
      <span className="pitch-figure-l">{label}</span>
      {foot && <span className="pitch-figure-f">{foot}</span>}
    </div>
  )
}

export default function PitchContent() {
  const awrSabina = claim('awr-sabina')
  const awrForge = claim('awr-forge')
  const nonprov = claim('nonprovisional')
  const provisionals = claim('provisionals')
  /* Filings are IP, not operating status: they render in chapter X. */
  const operating = PROOF.filter((c) => c.status !== 'filed')

  return (
    <>
      {/* ── Pitch 1 — hero ──────────────────────────────────────────────── */}
      <PageHero
        crest
        eyebrow="Dominus Foundry · Managed AI"
        title={<>Customized company AI.<br /><em>A platform built to scale.</em></>}
        lead="Dominus Foundry deploys and operates Sabina, a company’s own AI. A shared trained core, proprietary memory, company-defined authority, and accumulating operational knowledge make each deployment specific to its customer."
        actions={
          <>
            <a className="btn btn-solid" href={mailto('Discuss the investment — Dominus Foundry')}>Discuss the investment {Icon.arr}</a>
            <a className="btn btn-ghost" href="https://hiresabina.ai">See Sabina {Icon.arr}</a>
          </>
        }
        metaLeft={<>Seed · <b>{RAISE.amount}</b> post-money SAFE · {RAISE.cap}</>}
        metaRight={<>Terms as of <b>{RAISE.asOf}</b></>}
      />

      {/* ── I ─────────────────────────────────────────────────────────────── */}
      <Chapter n="I" kicker="Company thesis" id="company" title={<>Managed AI, starting with the work <em>companies already need handled.</em></>}>
        <p>
          We begin with phone and workflow responsibilities companies already need handled. Our next
          operating milestone is 10–20 direct customer companies, establishing customer value and
          repeatable delivery before expanding distribution through managed service providers.
        </p>
        <div className="pitch-chain">
          {['Direct company value', 'repeatable Managed AI delivery', 'MSP distribution', 'the company intelligence that grows from the work'].map((s, i) => (
            <span className="pitch-chain-step" key={s}>{i > 0 && <em>↓</em>}{s}</span>
          ))}
        </div>
        <p>
          The product shape is deliberate. <strong>Sabina</strong> is the company AI customers hire.
          <strong> Forge</strong> supplies operating records and specialist tools beneath and alongside
          her. <strong>Hyperion</strong> is a specialist trades product with its own scope.
          <strong> DominusOS</strong> supplies authority and execution control. The company is Dominus
          Foundry, family-held, built and run from Albuquerque.
        </p>
        <h3 className="pitch-h3">Why now</h3>
        <p>
          Models crossed the line where they can carry consequential business work about eighteen months
          ago. What did not arrive with them was a practical way for a business to say, in advance, what
          the system may do, and to see afterwards what it did and on whose authority. Meanwhile employees
          are already using unsanctioned AI on company work, because the sanctioned internal option is weak
          or does not exist.
        </p>
        <p>
          Operating a trained core for many companies is affordable at a scale it was not eighteen months
          ago, and inference capacity is a line item in this round. Most businesses still cannot build and
          operate that stack themselves. That is the gap Managed AI fills.
        </p>
      </Chapter>

      {/* ── II ────────────────────────────────────────────────────────────── */}
      <Chapter n="II" kicker="The problem customers recognize" id="problem" dark title={<>Calls, handoffs, and company knowledge <em>keep falling back on people.</em></>}>
        <p className="darkband-lead">
          Calls go unanswered. Follow-ups get buried. Employees repeat questions someone else already
          answered. Work stalls between systems, and the owner becomes the backup memory. Businesses need
          useful work carried through with the right context and authority.
        </p>
        <ul className="pitch-list">
          <li>A missed call is a missed customer, and the callback depends on someone remembering it.</li>
          <li>Follow-up lives in inboxes, notes and people’s heads rather than in one place.</li>
          <li>The same explanations are given again because the last answer was never captured.</li>
          <li>Work that should move on its own comes back to the owner.</li>
        </ul>
        <p className="darkband-lead">
          The cost shows up in each company’s own workload: the calls, the follow-ups and the hours
          that return to the people running it. That is where a first responsibility is chosen.
        </p>
      </Chapter>

      {/* ── III ───────────────────────────────────────────────────────────── */}
      <Chapter n="III" kicker="What the company buys" id="buys" title={<>A company AI, <em>deployed and operated for the business.</em></>}>
        <p>
          Foundry configures Sabina around the company’s systems, people, knowledge, and agreed
          responsibilities. We operate the underlying AI and support the deployment as the company teaches
          her how work should be handled.
        </p>
        <div className="pitch-rows">
          <div><span>Setup</span><span>Company identity, sources and initial configuration.</span></div>
          <div><span>Approved connections</span><span>The systems the company agrees she may use, and no others.</span></div>
          <div><span>Agreed workflows</span><span>The responsibilities set out for that company.</span></div>
          <div><span>Authority configuration</span><span>What she may do, what needs approval, and how a grant is withdrawn.</span></div>
          <div><span>Operation</span><span>Foundry runs the model and the systems around it.</span></div>
          <div><span>Support and updates</span><span>Ongoing support for the deployment and updates to the common platform.</span></div>
        </div>
        <p className="pitch-note">
          Scope, terms and price are set in each company’s written proposal. There is no rate card and no
          published figure on any surface.
        </p>
      </Chapter>

      {/* ── IV ────────────────────────────────────────────────────────────── */}
      <Chapter n="IV" kicker="Four-layer architecture" id="architecture" title={<>One trained core. <em>A distinct company system for every customer.</em></>}>
        <p>
          Company-specific memory, teaching, and authority shape the deployment around the business.
          Foundry develops and improves the common model and platform.
        </p>
        <ol className="pitch-layers">
          <li>
            <h3>Trained core</h3>
            <p>Foundry trains and operates the core model that supplies Sabina’s reasoning and behavior.</p>
            <p>Reusable platform: custom-trained weights, training and evaluation methods, serving software. Company state: any additional adaptation explicitly included in that deployment; a new base training run is not implied.</p>
          </li>
          <li>
            <h3>Company identity and memory</h3>
            <p>Sabina starts with the relevant context of the company and its industry.</p>
            <p>Reusable platform: proprietary memory, context assembly and onboarding machinery, and industry starting points. Company state: identity, systems, people, records, relationships and private knowledge.</p>
          </li>
          <li>
            <h3>Company teaching and authority</h3>
            <p>The company teaches how work should be handled and defines what Sabina may do.</p>
            <p>Reusable platform: the proprietary teaching and customization process and the authority machinery. Company state: operating instructions, responsibilities, grants, conditions, approvals and revocation.</p>
          </li>
          <li>
            <h3>Accumulating company intelligence</h3>
            <p>Authorized email, employee interactions, decisions and outcomes add useful knowledge for later work and analysis.</p>
            <p>Reusable platform: knowledge acquisition, memory maintenance, retrieval and synthesis. Company state: operational history, corrections, relationships, precedents and growing understanding.</p>
          </li>
        </ol>
        <p>
          Sabina’s understanding of the company can grow. Her authority continues to come from the
          permissions the company grants. Company teaching and memory are not foundation-model weight
          updates.
        </p>
        <p>
          <strong>Forge</strong> is the operating platform beneath and alongside her: operating records and
          specialist tools. Some Forge tools are also sold on their own, and Forge is already in paid
          production at an independent customer (chapter VI).
        </p>
      </Chapter>

      {/* ── V ─────────────────────────────────────────────────────────────── */}
      <Chapter n="V" kicker="Economics of reuse" id="reuse" dark title={<>Platform economics for <em>customized company AI.</em></>}>
        <p className="darkband-lead">
          The trained core, memory machinery, authority system, integrations, and deployment tools are
          reusable assets. Each additional company brings its own context, rules, and workload to that
          platform. The scale opportunity is to make customer-specific deployment repeatable while spreading
          common engineering and model development across a growing customer base.
        </p>
        <p className="darkband-lead">
          This is mass customization: a common platform, delivered as a distinct system for each company.
          Inference, onboarding, support and capacity remain real costs in the operating model, and the
          use of funds in chapter XI carries them as such.
        </p>
      </Chapter>

      {/* ── VI ────────────────────────────────────────────────────────────── */}
      <Chapter n="VI" kicker="What is already operating" id="proof" title={<>The operating foundation and <em>the evidence to date.</em></>}>
        <p>
          Each row carries its own status and source date. A signature, an activation, completed work, an
          invoice and a renewal are different facts.
        </p>
        <div className="pitch-ledger">
          {operating.map((c) => (
            <div className="pitch-ledger-row" key={c.id}>
              <Badge status={c.status} />
              <span className="pitch-ledger-copy">
                {c.publicCopy}
                <span className="pitch-ledger-detail">{c.detailCopy}</span>
              </span>
              <span className="pitch-ledger-date">{c.asOf}</span>
            </div>
          ))}
        </div>
        <p className="pitch-callout">
          <strong>Talk to the customer, not the pitch.</strong> {awrForge.publicCopy}. A reference call
          with the owner of All Weather Roofing is available on request.
          {' '}<a href={mailto('Reference call — All Weather Roofing')}>Ask for the reference call →</a>
        </p>
        <details className="pitch-evidence">
          <summary>Diligence: evidence and source notes</summary>
          <div>
            {PROOF.map((c) => (
              <p key={c.id}>
                <strong>{c.publicCopy}</strong> — {c.detailCopy}
                <span className="pitch-src">{c.sourceLabel} · as of {c.asOf}</span>
              </p>
            ))}
          </div>
        </details>
      </Chapter>

      {/* ── VII ───────────────────────────────────────────────────────────── */}
      <Chapter n="VII" kicker="The first 10–20 companies" id="cohort" title={<>Prove the service. <em>Make the deployment repeatable.</em></>}>
        <p>
          The next cohort establishes which responsibilities customers value, how reliably Sabina carries
          them, what setup and support require, and how company knowledge improves subsequent work.
        </p>
        <div className="pitch-rows">
          <div><span>Company setup</span><span>Repeatable identity, private data boundary, sources, and initial configuration</span></div>
          <div><span>Phone and workflows</span><span>Reliable execution of the agreed responsibilities</span></div>
          <div><span>Company context</span><span>Useful ingestion, retrieval, corrections, and continuity</span></div>
          <div><span>Authority</span><span>Teaching, approved scopes, runtime checks, approvals, revocation, and action records</span></div>
          <div><span>Ongoing learning</span><span>Knowledge from authorized work used in later work or analysis</span></div>
          <div><span>Operations</span><span>Monitoring, updates, support, recoverability, and capacity</span></div>
          <div><span>Economics</span><span>Deployment effort, recurring service cost, continuation, and customer value</span></div>
        </div>
        <p className="pitch-note">
          This is a delivery milestone, not a claim that these customers already exist. Direct deployments
          do not wait on the MSP channel or on future network capabilities.
        </p>
        <h3 className="pitch-h3">Where the first companies come from</h3>
        <p>
          The trades are the proof lane, not the market. Forge already has production history there,
          workflow density is high, and owner-operated firms carry substantial repetitive coordination
          work. Sabina is horizontal at the product level; the trades are where we enter.
        </p>
        <p>
          Founding seats are a separate, limited offer, awarded by application, with the founding
          employer helping shape the product through real use. The founding offer is part of this cohort,
          not the size of it.
        </p>
        <p><a href="https://hiresabina.ai/hire#founding">See current founding availability</a></p>
      </Chapter>

      {/* ── VIII ──────────────────────────────────────────────────────────── */}
      <Chapter n="VIII" kicker="MSP distribution" id="msp" dark title={<>A service MSPs can bring to <em>the companies they already support.</em></>}>
        <p className="darkband-lead">
          Once direct delivery is repeatable, the intended channel is managed service providers. MSPs bring
          customer relationships and operating familiarity. Foundry supplies the trained model, proprietary
          systems, platform operation, and continued development.
        </p>
        <div className="pitch-rows">
          <div><span>Foundry</span><span>Model and platform engineering, inference operation, updates, core controls, escalated platform support.</span></div>
          <div><span>MSP</span><span>Customer relationship, local systems context, agreed onboarding assistance, adoption, and account support.</span></div>
          <div><span>Jointly defined</span><span>Administration, support boundaries, billing, service measurement, and economics.</span></div>
        </div>
        <p className="darkband-lead">
          This is the intended responsibility split, not a live program. There are no published partner
          terms, rates or launch dates.
        </p>
      </Chapter>

      {/* ── IX ────────────────────────────────────────────────────────────── */}
      <Chapter n="IX" kicker="Company intelligence and the data thesis" id="intelligence" title={<>Useful work builds a deeper <em>understanding of the company.</em></>}>
        <p>
          The operational record can connect instructions, communications, decisions, and outcomes. That
          company-specific understanding can support better questions, richer analysis, and additional
          responsibilities within the company’s authority.
        </p>
        <ol className="pitch-layers pitch-layers-compact">
          <li><h3>Company context and learning</h3><p>Supporting the initial service: what the company teaches, corrects and authorizes informs the next piece of work.</p></li>
          <li><h3>Deeper company analysis</h3><p>As supported capabilities and evidence develop.</p></li>
          <li><h3>External context and permissioned derived patterns</h3><p>Later: analysis alongside external context, and broader intelligence from eligible derived patterns, only with separate, specific agreement.</p></li>
        </ol>
        <p>
          The structural precedent is data and intelligence infrastructure, such as Verisk and CoStar, whose
          durable value came from a standardized record created inside the work their customers were
          already paying for. These are business-model analogies, not evidence that our future intelligence
          products already exist.
        </p>
        <p className="pitch-note">
          Broader intelligence is a longer-term opportunity. Raw company email is not pooled into a shared
          model or sold, any use of eligible derived information beyond a company’s own service requires
          its separate, specific agreement, and the initial customer offer does not depend on future network
          revenue. Both financial scenarios in chapter XI assign it $0.
        </p>
      </Chapter>

      {/* ── X ─────────────────────────────────────────────────────────────── */}
      <Chapter n="X" kicker="Competitive position and defensibility" id="position" title={<>The advantage is in <em>the delivered company system.</em></>}>
        <p>
          Foundry combines model adaptation, company memory, defined authority, and ongoing operation in a
          company-specific service. Its commercial objective is to make that complete system practical and
          affordable for businesses that cannot build and operate the stack themselves.
        </p>
        <ul className="pitch-list">
          <li>Leena AI and WRITER publish meaningful architecture overlap: custom or company models, memory, and governed execution.</li>
          <li>H2O.ai and Personal AI are further relevant comparisons for private or custom models and persistent memory.</li>
          <li>Physical, on-premises deployments are one comparison group; hosted enterprise platforms are another.</li>
          <li>Low-cost agent subscriptions are not the price of a complete, comparable company system, and no like-for-like service price was verified.</li>
        </ul>
        <ol className="pitch-layers pitch-layers-compact">
          <li><h3>Residency</h3><p>She works on the system of record rather than visiting one task through a narrow integration.</p></li>
          <li><h3>A mandatory authority path</h3><p>Consequential effects traverse the authority and execution boundary rather than going around it.</p></li>
          <li><h3>Decision chronology</h3><p>The record is created before the outcome, which is why it cannot be manufactured afterwards.</p></li>
          <li><h3>Company-specific learning</h3><p>Company instructions, corrections and recorded outcomes provide context for subsequent work, on a core Foundry trains and operates.</p></li>
        </ol>
        <h3 className="pitch-h3">Intellectual property · patent pending</h3>
        <p>
          {provisionals.publicCopy}, {provisionals.detailCopy.charAt(0).toLowerCase() + provisionals.detailCopy.slice(1)}
        </p>
        <p>
          {nonprov.publicCopy} was {nonprov.detailCopy.charAt(0).toLowerCase() + nonprov.detailCopy.slice(1)} It
          describes proof-carrying governed execution of autonomous work, and the derivation of
          decision-grade operational intelligence across a multi-company panel.
        </p>
        <p className="pitch-note">
          These are <strong>filings, not granted rights</strong>. Nothing here is patented or issued, and
          nothing on this page claims exclusivity or that a competitor is blocked.
        </p>
      </Chapter>

      {/* ── XI ────────────────────────────────────────────────────────────── */}
      {/* ⛔ THE FLOOR CARRIES 2% MONTHLY LOGO CHURN — ruled by Mark 2026-09-16,
          "Pitch has 2%" (R10). Every figure here comes from ./claims; FLOOR is
          derived by scripts/floor-churn-model.mjs. Do not hand-edit a number.
          ⛔ The owned-inference milestone (FUNDED rows) is carried as modeled
          and NOT reconciled here — see the 2026-10-07 retool report. */}
      <Chapter n="XI" kicker="Economics, capital, and milestones" id="economics" title={<>Capital to expand <em>repeatable Managed AI delivery.</em></>}>
        <div className="pitch-figures">
          <Figure value={OBSERVED_BASELINE.value} label={OBSERVED_BASELINE.label} foot={`observed · as of ${OBSERVED_BASELINE.asOf}`} />
          <Figure value={FLOOR.arr} label="Month-36 recurring revenue, floor case" foot={`modeled · as of ${FLOOR.asOf}`} />
          <Figure value={FUNDED.arr} label="Month-36 recurring revenue, funded case" foot={`modeled · as of ${FUNDED.asOf}`} />
        </div>
        <p>
          The comparison against a human hire is the one number a buyer already knows. A fully loaded
          front-office coordinator — wage, employer tax, workers’ compensation, health, retirement, the
          seat — runs about <strong>{HUMAN_COST.monthly} a month</strong>, roughly {HUMAN_COST.hourly} an
          hour at the desk, converging with the {HUMAN_COST.methodLabel} figure of {HUMAN_COST.method} a
          month.
        </p>
        <p className="pitch-note">
          That is the modeled cost of a <strong>human</strong> hire and an anchor assumption, not an
          observed customer figure — and not Sabina’s price, which is quoted per company and appears on
          no surface.
        </p>

        <h3 className="pitch-h3">Without a raise: the floor case</h3>
        <p>
          The conservative case assumes no raise and one new company a month — the throughput two
          founders can actually onboard — and it models the same <strong>2% monthly logo churn</strong>{' '}
          the funded case does, roughly a fifth of the book a year (about 22%). It reaches{' '}
          <strong>{FLOOR.seats} seats</strong> and <strong>{FLOOR.arr}</strong> of recurring revenue at
          month 36.
        </p>
        <p>
          With churn in the model it still never runs out of money. The trough is in month 5, it is
          cash-flow positive from month 6, and it ends month 36 with roughly twenty-seven times the cash it
          started with. The point is not that this is the plan, but that a no does not end the company.
        </p>
        <div className="pitch-rows">
          {FLOOR.rows.map(([k, v]) => (
            <div key={k}><span>{k}</span><span>{v}</span></div>
          ))}
        </div>
        <p className="pitch-note">
          Modeled, not observed — {FLOOR.sourceLabel}, as of {FLOOR.asOf}. It is the floor, not the
          plan. <strong>It assigns $0 of revenue to the future network business.</strong>
        </p>

        <h3 className="pitch-h3">What funding changes</h3>
        <p>
          The funded case holds revenue per seat constant and the churn assumption identical, and changes
          one thing: how many companies we can bring on. It reaches <strong>{FUNDED.seats} seats</strong>{' '}
          and <strong>{FUNDED.arr}</strong> at month 36.
        </p>
        <div className="pitch-rows">
          {FUNDED.rows.map(([k, v]) => (
            <div key={k}><span>{k}</span><span>{v}</span></div>
          ))}
        </div>
        <p className="pitch-note">
          Modeled, not observed — {FUNDED.sourceLabel}. Neither scenario is a new pricing quote, and the
          funded case also assigns <strong>$0</strong> to the network business.
        </p>

        <h3 className="pitch-h3">The raise</h3>
        <div className="pitch-terms">
          <div><span>Instrument</span><strong>{RAISE.instrument}</strong></div>
          <div><span>Raise</span><strong>{RAISE.amount}</strong></div>
          <div><span>Valuation cap</span><strong>{RAISE.cap}</strong></div>
          <div><span>Dilution at full raise</span><strong>{RAISE.dilution}</strong></div>
          <div><span>Minimum check</span><strong>{RAISE.minimum}</strong></div>
        </div>
        <div className="pitch-rows">
          {USE_OF_FUNDS.map((r) => (
            <div key={r.use}>
              <span>{r.use} — {r.amount} <em>({r.share}%)</em></span>
              <span>{r.note}</span>
            </div>
          ))}
        </div>
        <h3 className="pitch-h3">Milestones this raise funds</h3>
        <ol className="pitch-list pitch-list-num">
          {MILESTONES.map((m) => <li key={m}>{m}</li>)}
        </ol>
        <p>
          Bootstrapped to date. The round funds speed, repeatability and a larger margin of safety while
          delivery moves from founder deployment to a repeatable Managed AI operation.
        </p>
        <p className="pitch-note">{RAISE.sourceLabel} · as of {RAISE.asOf}. The use-of-funds split is the founder’s stated intent; the 30 August workbook models no raise.</p>
      </Chapter>

      {/* ── XII ───────────────────────────────────────────────────────────── */}
      <Chapter n="XII" kicker="Founders and next action" id="founders" title={<>Built by operators who have lived <em>the back office.</em></>}>
        <div className="pitch-founders">
          <article>
            <h3>Mark Lord</h3>
            <p className="pitch-role">CTO</p>
            <p>
              Product, technology and commercial architecture. Built Forge and the patent-pending
              governance and intelligence architecture. Prior
              operating experience spans small-business ownership, technical work, and sales into the
              trades.
            </p>
          </article>
          <article>
            <h3>Brianna Lord</h3>
            <p className="pitch-role">CEO</p>
            <p>
              Co-founder and co-owner, Citizen Potawatomi Nation member. Operations, customer onboarding
              and company stewardship. A decade in the back office of service businesses — scheduling,
              AP/AR, client operations and high-volume casework — which is the work Sabina is built to
              carry. She owns customer relationships and onboarding for Dominus Foundry.
            </p>
          </article>
        </div>
        <p className="pitch-callout">
          <strong>Founder-led today.</strong> The round adds the first account executive and deployment
          lead, so selling and onboarding become systems rather than founder-only work.
        </p>
        <p className="pitch-note">
          Owned by Mark and Bri Lord, and built and held by the Lord family. <em>Fide et Familia.</em>
          That is the company’s identity and the reason it is built for a long hold — it is not the
          investment thesis, which is everything above it.
        </p>
      </Chapter>

      <CTA
        eyebrow="Next step"
        title={<>Direct company value. Repeatable Managed AI delivery.<br /><em>MSP distribution, and the company intelligence that grows from the work.</em></>}
        lead={<>{awrSabina.publicCopy}. <a href="https://hiresabina.ai/hire#founding">See current founding availability</a>. We are glad to put you in front of the customer before we put you in front of the model.</>}
        actions={
          <>
            <a className="btn btn-solid" href={mailto('Discuss the investment — Dominus Foundry')}>Discuss the investment {Icon.arr}</a>
            <a className="btn btn-ghost" href={mailto('Reference call — All Weather Roofing')}>Request the customer reference {Icon.arr}</a>
            <a className="btn btn-ghost" href={mailto('Diligence pack — Dominus Foundry')}>Request the diligence pack {Icon.arr}</a>
          </>
        }
      />
    </>
  )
}
