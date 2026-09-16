'use client'
/* ─────────────────────────────────────────────────────────────────────────────
   dominusfoundry.com/pitch — THE CANONICAL INVESTOR PITCH

   Built 2026-09-16 to the execution plan's §9 content architecture and §10
   thesis language. The twenty sections below are §9's questions, IN ORDER.
   ⛔ Do not reorder them and do not merge two into one: the order is the
   argument — company, then employee, then problem, then why governance is the
   hard part, then why the record compounds, then what it is worth, then what
   the money does.

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
     · Sabina is hired, brought on, onboarded, taught. ⛔ Not installed,
       deployed, configured or licensed.
     · No absolute security claim ("cannot", "impossible", "every action")
       beyond what the verified mechanics support. */
import { PageHero, CTA } from '@/components/foundry/FoundryShell'
import { Icon } from '@/components/foundry/Marks'
import {
  PROOF, STATUS_LABEL, claim,
  OBSERVED_BASELINE, FLOOR, FUNDED, HUMAN_COST,
  RAISE, USE_OF_FUNDS, MILESTONES, SEATS, CONTACT_EMAIL,
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

  return (
    <>
      <PageHero
        crest
        eyebrow="Investor pitch · Dominus Foundry · Albuquerque, New Mexico"
        title={<>The governed intelligence layer<br /><em>for real businesses.</em></>}
        lead="Sabina is the customer-facing AI employee. Forge is the platform beneath her. Every company that teaches and uses the system makes its own intelligence more useful — while eligible derived patterns can make the broader network smarter over time."
        actions={
          <>
            <a className="btn btn-solid" href="#economics">See the economics {Icon.arr}</a>
            <a className="btn btn-ghost" href={mailto('Request a meeting — Dominus Foundry')}>Request a meeting {Icon.arr}</a>
          </>
        }
        metaLeft={<>Seed · <b>{RAISE.amount}</b> post-money SAFE · {RAISE.cap}</>}
        metaRight={<>Terms as of <b>{RAISE.asOf}</b></>}
      />

      {/* ── 1 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="I" kicker="The company" id="company" title={<>Dominus Foundry builds governed AI systems — and the <em>commercial intelligence</em> that grows from their use.</>}>
        <p>
          We build company AI, the infrastructure beneath it, and the intelligence that accumulates when
          real businesses do real work on it. That is one company with one motion, not a holding
          structure with three logos.
        </p>
        <p>
          The public shape is simple and it is deliberate. <strong>Sabina</strong> is what a customer
          hires. <strong>Forge</strong> is the governed platform and operating spine she runs on.
          <strong> Hyperion</strong> is a specialized standalone trades product hosted under Forge. The
          company is Dominus Foundry, family-held, built and run from Albuquerque.
        </p>
        <p className="pitch-note">
          Company AI becomes infrastructure. Infrastructure becomes intelligence. The rest of this page
          is the argument for that sentence, with what is real separated from what is not.
        </p>
      </Chapter>

      {/* ── 2 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="II" kicker="The employee" id="sabina" title={<>Sabina becomes the company’s <em>own AI employee.</em></>}>
        <p>
          Employees can teach her. Leadership decides her authority. The company can change that
          authority or take it back. She is hired into a business, taught how that business works, and
          given authority in writing — and she becomes increasingly specific to that company through
          governed memory, teaching, correction, workflows and business context.
        </p>
        <p>
          She holds a seat the way a person does: her own address, her own line, her own scope of work.
          She is brought on and onboarded rather than installed, because the thing that makes her useful
          is not the software — it is what her employer has taught her and what they have authorized
          her to do about it.
        </p>
        <p className="pitch-note">
          She becomes company-specific through governed memory and teaching. That is not a claim that
          every customer receives a separately fine-tuned foundation model.
        </p>
      </Chapter>

      {/* ── 3 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="III" kicker="The problem" id="problem" dark title={<>Generic AI does not know how <em>your company</em> works.</>}>
        <p className="darkband-lead">
          Seven related problems, and they compound on each other rather than sitting side by side:
        </p>
        <ul className="pitch-list">
          <li>Generic AI does not understand how a particular company actually operates.</li>
          <li>Point AI tools fragment what the company knows across a dozen products.</li>
          <li>Employees use unsanctioned AI because the useful internal alternative is weak or absent.</li>
          <li>Companies need AI that can <em>act</em>, not only answer.</li>
          <li>Action without bounded authority creates risk a business cannot accept.</li>
          <li>Business knowledge disappears across inboxes, calls, chats, documents, employees and systems.</li>
          <li>Most software captures the transaction and loses the reasoning and operating context around it.</li>
        </ul>
        <p className="darkband-lead">
          The last one is the expensive one. A record of what was booked is common. A record of why, on
          whose authority, against which alternatives, and how it turned out is not — and that is the
          part a business cannot reconstruct afterwards.
        </p>
      </Chapter>

      {/* ── 4 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="IV" kicker="Why governance is the hard part" id="governance" title={<>What you authorize <em>is what she can do.</em></>}>
        <p>
          Capability stopped being the constraint some time ago. What stops a business putting AI on its
          own phone line is not whether the model can hold the conversation — it is that nobody can say
          in writing what it is permitted to do, or show afterwards what it did and under whose
          authority.
        </p>
        <p>
          Consequential actions route through authority granted by the company, in writing. Authority
          can differ by employee, role, customer, object, condition and responsibility. The authority
          model is durable and auditable, and withdrawing a grant stops future work under it.
        </p>
        <p className="pitch-note">
          Revocation withdraws permission for future work. It does not unsend a message or reverse a
          completed action, and this page makes no claim that it does. The execution path described
          here is in acceptance testing — see <a href="#proof">what is already real</a>.
        </p>
      </Chapter>

      {/* ── 5 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="V" kicker="Why company-specific learning matters" id="learning" title={<>A general model is <em>replaceable.</em> A taught one is not.</>}>
        <p>
          Two companies in the same trade, on the same street, do not run the same way. Their escalation
          rules differ, their customers differ, their tolerance for a judgment call differs. Generic
          competence cannot close that gap, and prompt engineering closes it only until someone changes
          the prompt.
        </p>
        <p>
          So the useful unit is not the model. It is what one company has taught, corrected and
          authorized — accumulated over months, attached to outcomes, and owned by them. That is also
          the part a competitor cannot copy by shipping the same feature, and the part a customer cannot
          take to a rival product by exporting a table.
        </p>
      </Chapter>

      {/* ── 6 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="VI" kicker="Why Forge exists" id="forge" title={<>Forge is the <em>operating platform</em> beneath Sabina.</>}>
        <p>
          An AI employee needs somewhere to work. Forge is the governed technology platform and
          operating spine: the application infrastructure, the data and workflow layer, and the system
          of record she acts on rather than visiting through a narrow integration.
        </p>
        <p>
          It is also why the proof is real rather than a pilot. Forge has been in production at a
          commercial roofer since March 2026, and is also used inside a founder-affiliated commercial
          AV and security integrator. Sabina runs on that foundation.
        </p>
        <p className="pitch-note">
          Forge is infrastructure and specialized tooling. It is not the company-level thesis, and this
          pitch is deliberately not a catalog of its modules.
        </p>
      </Chapter>

      {/* ── 7 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="VII" kicker="What is already real" id="proof" title={<>Built first. <em>Measured next.</em></>}>
        <p>
          This is the one place on this page where status is exhaustively qualified. Every other section
          reads from it, and nothing elsewhere states a stronger version of any row.
        </p>
        <div className="pitch-ledger">
          {PROOF.map((c) => (
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
          <summary>Evidence and source notes</summary>
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

      {/* ── 8 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="VIII" kicker="Why the data compounds" id="compounding" dark title={<>The work creates the record. <em>The record is the asset.</em></>}>
        <p className="darkband-lead">
          Companies bring Sabina on because she can do the work. Doing the work under written authority
          produces something most software never captures — and it accrues in four layers, each one
          only possible because the one beneath it exists.
        </p>
        <ol className="pitch-layers">
          <li>
            <h3>Company memory</h3>
            <p>Her employer’s processes, customers, decisions, outcomes, language, corrections and operating knowledge. That record belongs to the company that created it.</p>
          </li>
          <li>
            <h3>Company intelligence</h3>
            <p>Internal signals connect to outcomes, surfacing patterns, risks, opportunities, operating anomalies and relationships people may not notice — for the business that created them, first and on its own.</p>
          </li>
          <li>
            <h3>External context</h3>
            <p>Where it is useful, internal outcomes are read alongside weather, regional economics, commodities, market conditions, seasonality, geography, regulation and other explanatory variables no single company can assemble alone.</p>
          </li>
          <li>
            <h3>Governed network intelligence</h3>
            <p>Where contracts, permissions, privacy design and governance allow it, eligible derived patterns can support broader discovery, and those discoveries return to each company as its own intelligence.</p>
          </li>
        </ol>
        <p className="darkband-lead">
          <strong>Where the boundaries are.</strong> A company’s data is that company’s. It is not
          pooled with anyone else’s by default, it is not sold, and no general model is trained on it.
          Anything crossing a company boundary crosses it only as eligible derived patterns, only under
          a written agreement, and only where privacy design and governance permit — a decision each
          company makes deliberately and can withdraw.
        </p>
      </Chapter>

      {/* ── 9 ─────────────────────────────────────────────────────────────── */}
      <Chapter n="IX" kicker="Why this becomes a network" id="network" title={<>One substrate. One compounding record. <em>Several things to sell.</em></>}>
        <p>
          The structural precedent is not field-service software. It is data and intelligence
          infrastructure — companies whose durable value came from a standardized proprietary record
          created inside the work their customers were already paying for, rather than from the
          workflow product itself.
        </p>
        <p>
          Verisk is the clearest version of the pattern: data contributed by customers and data
          generated inside the transactions its products support, turned into risk analytics embedded
          back in the workflow. CoStar is the other half of the argument — the enduring value of a
          comprehensive standardized record, assembled from research, public, user and acquired
          sources. Our thesis applies that pattern to <em>business decisions</em> rather than claims or
          properties: decisions joined to authority, evidence, alternatives and outcomes.
        </p>
        <p className="pitch-note">
          These are business-model analogies. They are not evidence that our future intelligence
          products or their margins already exist — the network layer is described in the pending
          application and is not operating today.
        </p>
        <div className="pitch-chain">
          {['Sabina seat revenue', 'funds governed execution', 'which creates a decision-grade record', 'which improves company intelligence', 'which scales into network and external intelligence'].map((s, i) => (
            <span className="pitch-chain-step" key={s}>{i > 0 && <em>↓</em>}{s}</span>
          ))}
        </div>
      </Chapter>

      {/* ── 10 ────────────────────────────────────────────────────────────── */}
      <Chapter n="X" kicker="The moat" id="moat" title={<>Features can be copied. <em>Governed history cannot be backfilled.</em></>}>
        <ol className="pitch-layers pitch-layers-compact">
          <li><h3>Residency</h3><p>She works on the system of record rather than visiting one task through a narrow integration.</p></li>
          <li><h3>A mandatory governance path</h3><p>Consequential effects traverse the authority and execution boundary rather than going around it.</p></li>
          <li><h3>Decision chronology</h3><p>The record is created before the outcome, which is why it cannot be manufactured afterwards.</p></li>
          <li><h3>Company-specific institutional learning</h3><p>Months of teaching, correction and accumulated operating context, owned by the employer — and the switching cost that useful company memory creates.</p></li>
          <li><h3>Owned model and training path</h3><p>We control the weights, training and inference path needed to turn governed episodes into durable improvement.</p></li>
          <li><h3>Filings and real deployment</h3><p>A pending application over the mechanism, and a substrate already carrying paid production work.</p></li>
        </ol>
        <p>
          Point agents know the conversation. Vertical platforms know the transaction. What neither
          preserves is the governed decision in between — and the company that has been accumulating it
          since the first instrumented customer is the one holding the asset.
        </p>
      </Chapter>

      {/* ── 11 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XI" kicker="The IP" id="ip" title={<>Filed with the USPTO. <em>Pending, not issued.</em></>}>
        <p>
          {provisionals.publicCopy}, {provisionals.detailCopy.charAt(0).toLowerCase() + provisionals.detailCopy.slice(1)}
        </p>
        <p>
          {nonprov.publicCopy} was {nonprov.detailCopy.charAt(0).toLowerCase() + nonprov.detailCopy.slice(1)} It
          describes proof-carrying governed execution of autonomous work, and the contamination-resistant
          derivation of decision-grade operational intelligence across a multi-company panel — the
          mechanism behind both the governance argument and the compounding one.
        </p>
        <p className="pitch-note">
          ⛔ Stated precisely, because the difference matters in diligence: these are <strong>filings,
          not granted rights</strong>. Nothing here is patented, issued or protected by an issued
          patent, and nothing on this page claims a competitor is blocked. The correct reading is
          patent pending.
        </p>
      </Chapter>

      {/* ── 12 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XII" kicker="Market entry" id="market" dark title={<>The trades are the <em>proof lane</em>, not the market.</>}>
        <p className="darkband-lead">
          Sabina is horizontal at the product level. Every office that carries a front desk has the
          problem she is built for: calls that go unanswered, follow-through that depends on one
          person’s memory, and knowledge that leaves when they do.
        </p>
        <p className="darkband-lead">
          We enter through commercial trade contractors for four reasons, and none of them is that the
          product only works there. Forge already has production history in the trades. Workflow density
          is high. Owner-operated and midmarket firms carry substantial repetitive coordination work.
          And the operational data is unusually rich, which matters for everything in chapter VIII.
        </p>
        <p className="darkband-lead">
          The initial Forge customer profile is commercial trade contractors of roughly 12–50 employees;
          roofing, security and AV reflect where we are working today. That is a first go-to-market
          segment, and it is deliberately not the addressable market for Sabina or for Dominus Foundry.
        </p>
      </Chapter>

      {/* ── 13 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XIII" kicker="The founding-customer motion" id="founding" title={<>She is <em>recruited</em>, not sold.</>}>
        <p>
          A limited number of Founding Seats, awarded by application. A company completes a readiness
          assessment; we review it; there is a call where the employer writes the job description —
          what she will handle, what she must never do, who supervises her, how escalation works. Then
          they interview her, provisioned with their own material, and she asks qualifying questions
          back. If there is a fit, they bring her on. Founding Employers help polish the product through
          real use.
        </p>
        <div className="pitch-figures">
          <Figure value={String(SEATS.total)} label="Founding Seats, ever" />
          <Figure value={String(SEATS.signed)} label="signed" foot="All Weather Roofing" />
          <Figure value={String(SEATS.spokenFor)} label="spoken for" foot="verbal, not contracted" />
          <Figure value={String(SEATS.open)} label="open" foot={`as of ${SEATS.asOf}`} />
        </div>
        <p className="pitch-note">
          Pricing is custom to each company, built from what the interview establishes about the job,
          and sent afterwards as a written proposal. There is no rate card and no published figure on
          any surface — which is also why the qualification work sits in the readiness assessment
          rather than in a price a visitor self-selects against.
        </p>
      </Chapter>

      {/* ── 14 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XIV" kicker="The economics" id="economics" title={<>Two scenarios. One shows we survive a no. <em>The other shows what the round buys.</em></>}>
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
      </Chapter>

      {/* ── 15 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XV" kicker="Without a raise" id="floor" title={<>The floor case exists to show <em>the business does not die on a no.</em></>}>
        <p>
          The conservative case assumes no raise, no hires, and one new company a month — the throughput
          two founders can actually onboard. It reaches <strong>{FLOOR.seats} seats</strong> and{' '}
          <strong>{FLOOR.arr}</strong> of recurring revenue at month 36.
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
      </Chapter>

      {/* ── 16 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XVI" kicker="What funding changes" id="funded" title={<>Capital buys <em>onboarding capacity.</em> It does not buy the answer to whether this works.</>}>
        <p>
          The funded case holds revenue per seat constant and changes one thing: how many companies we
          can bring on. It reaches <strong>{FUNDED.seats} seats</strong> and <strong>{FUNDED.arr}</strong>{' '}
          at month 36 — while churning off roughly a fifth of the book every year, which the floor case
          does not model at all.
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
      </Chapter>

      {/* ── 17 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XVII" kicker="The capital" id="raise" dark title={<>{RAISE.amount} to turn founder-built proof into <em>repeatable deployment.</em></>}>
        <div className="pitch-terms">
          <div><span>Instrument</span><strong>{RAISE.instrument}</strong></div>
          <div><span>Raise</span><strong>{RAISE.amount}</strong></div>
          <div><span>Valuation cap</span><strong>{RAISE.cap}</strong></div>
          <div><span>Dilution at full raise</span><strong>{RAISE.dilution}</strong></div>
          <div><span>Minimum check</span><strong>{RAISE.minimum}</strong></div>
        </div>
        <div className="pitch-rows pitch-rows-dark">
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
        <p className="darkband-lead">
          Bootstrapped to date. We are raising to increase onboarding capacity and accelerate
          distribution, without changing the core pricing discipline. The round funds speed,
          repeatability and a larger margin of safety while the product moves from founder deployment to
          a company-owned operating system.
        </p>
        <p className="pitch-note">{RAISE.sourceLabel} · as of {RAISE.asOf}. The use-of-funds split is the founder’s stated intent; the 30 August workbook models no raise.</p>
      </Chapter>

      {/* ── 18 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XVIII" kicker="Why now" id="why-now" title={<>The constraint moved from <em>capability</em> to <em>authority.</em></>}>
        <p>
          Models crossed the line where they can carry consequential business work about eighteen months
          ago. What did not arrive with them was any way for an owner to say, in writing and in advance,
          what the system may do — and to show afterwards what it did and on whose authority. That gap
          is why so much corporate AI is still confined to drafting.
        </p>
        <p>
          Meanwhile employees are already using unsanctioned AI on company work, because the sanctioned
          internal option is weak or does not exist. Every month that continues, a business accumulates
          exposure and no record. The companies that will own the operating record of the next decade
          are the ones instrumenting it now, before the volume exists to make it valuable.
        </p>
        <p>
          The other half is cost. Running owned weights for a book of companies is affordable at a scale
          it was not eighteen months ago, which is what makes the layer beneath the product ours rather
          than rented — and it is a line item in this round.
        </p>
      </Chapter>

      {/* ── 19 ────────────────────────────────────────────────────────────── */}
      <Chapter n="XIX" kicker="The founders" id="founders" title={<>Built by operators who have lived <em>the back office.</em></>}>
        <div className="pitch-founders">
          <article>
            <h3>Mark Lord</h3>
            <p className="pitch-role">Founder</p>
            <p>
              Product, technology and commercial architecture. Built Forge, the owned model and training
              program, and the patent-pending governance and intelligence architecture. Prior operating
              experience spans small-business ownership, technical work, and sales into the trades.
            </p>
          </article>
          <article>
            <h3>Bri Lord</h3>
            <p className="pitch-role">Co-founder</p>
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
          Family-held, and built and held by the Lord family. <em>Fide et Familia.</em> That is the
          company’s identity and the reason it is built for a long hold — it is not the investment
          thesis, which is everything above it.
        </p>
      </Chapter>

      {/* ── 20 ────────────────────────────────────────────────────────────── */}
      <CTA
        eyebrow="Next step"
        title={<>Customers hire Sabina for what she does.<br /><em>Investors back Dominus Foundry for what her governed work becomes.</em></>}
        lead={`${awrSabina.publicCopy}. ${SEATS.openWord.charAt(0).toUpperCase()}${SEATS.openWord.slice(1)} Founding Seats remain open. We are glad to put you in front of the customer before we put you in front of the model.`}
        actions={
          <>
            <a className="btn btn-solid" href={mailto('Request a meeting — Dominus Foundry')}>Request a meeting {Icon.arr}</a>
            <a className="btn btn-ghost" href={mailto('Reference call — All Weather Roofing')}>Request the customer reference {Icon.arr}</a>
            <a className="btn btn-ghost" href={mailto('Diligence pack — Dominus Foundry')}>Request the diligence pack {Icon.arr}</a>
          </>
        }
      />
    </>
  )
}
