import ApplicationForm from "../../../components/ApplicationForm";
import ContactCTA from "../../../components/ContactCTA";
import {
  openSeatsWord,
  totalSeatsWord,
} from "../../../content/founding-charter.mjs";

export const metadata = {
  title: "Careers — Founding Sales Rep | Dominus Foundry™",
  description:
    "Join the founding sales team at Dominus Foundry™. 19 provisional patent applications plus a non-provisional filing — patent pending — fully built vertical SaaS for the trades, 100% first-month commission + 15% residual forever. Ground floor opportunity.",
};

const platformFeatures = [
  "Design & Proposals — product library, system design canvas, BOM generation, e-signature proposals, rack elevations, wire schedules",
  "Project Management — portfolio dashboard, task engine, Gantt, dispatch & scheduling, change orders, job costing",
  "Mobile Field App — offline capability, photo gates, compliance checklists, inventory, sub-contractor management",
  "AI Intelligence — AI-powered reports, design generation, natural language queries, automation engine",
  "50-State Regulatory Compliance — licensing, bonding, insurance, lien law, prevailing wage, credential alerts",
  "Hyperion™ Spatial Intelligence (Patent-Pending) — LiDAR scanning, AI design from scan, automated measurement, 3D modeling, instant proposals from a building scan",
];

const commissionTable = [
  {
    type: "SaaS — First Month",
    rate: "100% of MRR",
    terms:
      "Full first month\u2019s subscription paid on collection. Close a $1,100/mo Hyperion™ deal, you earn $1,100 on day one.",
  },
  {
    type: "SaaS — Ongoing Residual",
    rate: "15% of MRR \u2014 FOREVER",
    terms:
      "Monthly, on collection, for as long as the customer pays and you remain active. No decay. No step-down. No production minimum.",
  },
  {
    type: "Installation Projects",
    rate: "18% of Gross Profit",
    terms:
      "Paid on collection. GP = contract value minus equipment and sub labor.",
  },
  {
    type: "Monitoring / Service Agreements",
    rate: "10% of Year 1 RMR",
    terms:
      "One-time bonus on recurring monitoring or service contracts from an installation.",
  },
];

const qualifications = [
  "Documented commission earnings of $100K+ in a year \u2014 multiple years preferred",
  "You generate your own pipeline: cold calls, email, LinkedIn, referrals, events",
  "B2B SaaS, technology services, or trades/construction/field service sales experience",
  "You think in conversion rates and revenue, not activity metrics",
  "You take direct feedback and apply it the same day",
  "You will log every call, note, and disposition in the CRM \u2014 non-negotiable",
];

const disqualifiers = [
  "You need a base salary to cover rent while you ramp",
  "You\u2019ve never built your own pipeline from scratch",
  "You need someone to teach you discovery calls or objection handling",
  "\u201CCRM discipline\u201D sounds like micromanagement to you",
  "You\u2019re looking for a job instead of an opportunity",
];

const repGets = [
  "A product that exists and works \u2014 not a prototype or a roadmap",
  "19 provisional patent applications plus a non-provisional filing — patent pending",
  "Defined pricing, competitive comparison docs, and demo environments",
  "Power dialer, CRM, and AI-assisted sales tools built in-house",
  "Direct founder access for deal strategy and closing support",
  "Objection tracking and conversion analytics",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p className="label-foundry text-orange-200">Now Hiring &mdash; 2-3 Positions</p>
            <h1 className="heading-forge-xl text-white leading-tight">
              Founding Sales Rep
            </h1>
            <div className="divider-forged mx-auto max-w-xs" />
            <p className="body-foundry text-white/90 md:text-lg">
              Ground floor of a patent-protected SaaS company with a fully built product, paying customers, and zero sales team. The entire addressable market is open.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-semibold text-white">
                Remote
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-semibold text-white">
                Commission Only
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-semibold text-white">
                19 Provisional Patents · Patent Pending
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 space-y-8">
          <div className="space-y-4">
            <p className="label-foundry">The Opportunity</p>
            <h2 className="heading-forge-lg">This is not a sales job. This is the founding revenue team of a SaaS company.</h2>
          </div>
          <div className="body-foundry space-y-4 text-slate-800">
            <p>
              Dominus Foundry™ built <strong>Forge™</strong> &mdash; a vertical operating system for the trades (low-voltage, roofing, electrical, HVAC). It replaces D-Tools, ServiceTitan, ProjX360, ConnectWise, and 3-4 other tools a contractor is currently paying for &mdash; in a single platform at a fraction of the cost.
            </p>
            <p>
              Our flagship technology, <strong>Hyperion™</strong>, is a patent-pending spatial intelligence engine. A technician scans a building with their iPhone and the system generates a complete design, bill of materials, and proposal automatically — one integrated record from scan to invoice.
            </p>
            <p>
              <strong>We have 19 provisional patent applications plus a non-provisional filing, a fully built product, paying customers, and no sales team.</strong> The reps who establish themselves in the next 6 months will own customer relationships and territory that compound as this company scales. There are roughly 900,000 trade businesses in the US. We need to be in thousands of them.
            </p>
          </div>
        </div>
      </section>

      {/* What You'd Be Selling */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 space-y-8">
          <div className="space-y-4">
            <p className="label-foundry">The Product</p>
            <h2 className="heading-forge-lg">What you&apos;d be selling</h2>
            <p className="body-foundry text-slate-800">
              A platform that service businesses actually need &mdash; not a nice-to-have. These companies are running on spreadsheets, disconnected apps, and paper. There are two things to sell: <strong>Sabina</strong>, one tier, hired onto the founding charter &mdash; {openSeatsWord} of the {totalSeatsWord} seats are open &mdash; with Forge Core included and never a separate line, her rate disclosed on the job-description call once she&apos;s the right fit for the account &mdash; and <strong>the tools</strong>, bought a line at a time on Forge Core at <strong>$599/mo</strong>, flat-rate with unlimited users. Every competitor charges per-user &mdash; their pricing works against the customer as they grow. Ours doesn&apos;t.
            </p>
          </div>
          <ul className="space-y-3">
            {platformFeatures.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="text-forge-700 font-bold mt-0.5 shrink-0">&bull;</span>
                <span className="body-foundry text-slate-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 space-y-8">
          <div className="space-y-4">
            <p className="label-foundry">Compensation</p>
            <h2 className="heading-forge-lg">Read this carefully</h2>
            <p className="body-foundry text-slate-800">
              This is not a standard commission plan. This is a wealth-building structure designed for the founding team.
            </p>
          </div>

          <div className="space-y-4">
            {commissionTable.map((row) => (
              <div
                key={row.type}
                className="card-forged rounded-2xl p-6 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-crimson text-xl font-bold text-slate-900">
                    {row.type}
                  </h3>
                  <span className="text-forge-700 font-bold text-lg whitespace-nowrap">
                    {row.rate}
                  </span>
                </div>
                <p className="text-sm text-slate-700">{row.terms}</p>
              </div>
            ))}
          </div>

          <div className="card-forged-premium rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="font-crimson text-2xl font-bold text-slate-900">
              Do the math
            </h3>
            {/* COPY REVIEW — approved by Mark 2026-08-25 with the assumption made explicit,
                and RE-STRUCK 2026-08-29 by his founding-ten ruling: "first 10 is 20k and then we
                jump to 3500 per person". The first ten hires book $2,000 each, so a bare
                "10 x $3,500 = $35,000" was the standing rate applied to seats that cannot be
                sold at it yet. Both endpoints and the seat count that separates them are now
                named inline.
                No total on this page may rest on a mix the reader cannot see: the count and the
                per-account price are stated as separate, named inputs, and the paragraph that
                follows names what a different mix does to the result. Do not compress this back
                into "10 Forge accounts a month at $3,500/mo" — that is the hidden-assumption
                form this rewrite exists to remove.
                SUPERSEDED 2026-09-04 — Mark ruled every Sabina price off every public surface
                (strip both site and table). The worked dollar totals above could not be stated
                without her founding/standing rate, so this paragraph was rewritten to carry the
                same meaning on percentages alone: what a rep earns per seat, and that it doesn't
                decay or step down. The per-account dollar figure is unaffected — it still isn't
                published — reps see it on their onboarding call. Do not restore a dollar total
                here; that is exactly what this rewrite removes. */}
            <p className="body-foundry text-slate-800">
              <strong>Every Sabina hire pays the rep the same way</strong>: 100% of her first month&apos;s fee, plus a <strong>15% residual on top of that for as long as the account stays active</strong> &mdash; no decay, no step-down, no production minimum to keep it. <strong>{openSeatsWord} of the {totalSeatsWord} founding seats are still open.</strong> The founding rate and the standing rate that follows once the charter closes are different sizes of account, but the percentage is identical on both, so a book of ten compounds the same way whichever rate closed each seat &mdash; the number to remember is 15%, forever, not a dollar total that depends on the mix. Your rate card for a given deal is confirmed before you quote it.
            </p>
            <p className="body-foundry text-slate-800">
              That structure is for <em>Sabina</em> hires specifically, not for accounts of any kind. The tools price differently &mdash; Forge Core is $599/mo, Hyperion is $1,100/mo with Core included &mdash; so a book with tools deals in it earns against a different per-account figure. The commission percentages are identical either way; only the per-account figure moves. Run your own mix.
            </p>
            <p className="body-foundry text-slate-800">
              <strong>Separation tail: 6 months</strong> (industry standard is 90 days). This is not a commission plan. This is an equity-equivalent income stream without dilution.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should / Shouldn't Apply */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="label-foundry">Requirements</p>
                <h2 className="heading-forge-md">Who should apply</h2>
              </div>
              <ul className="space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex gap-3">
                    <span className="text-forge-700 font-bold mt-0.5 shrink-0">&#10003;</span>
                    <span className="body-foundry text-slate-800">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="label-foundry">Honest Filter</p>
                <h2 className="heading-forge-md">Who should not apply</h2>
              </div>
              <ul className="space-y-3">
                {disqualifiers.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="text-red-500 font-bold mt-0.5 shrink-0">&times;</span>
                    <span className="body-foundry text-slate-800">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 space-y-8">
          <div className="space-y-4">
            <p className="label-foundry">What We Provide</p>
            <h2 className="heading-forge-lg">What you get from us</h2>
          </div>
          <ul className="space-y-3">
            {repGets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold mt-0.5 shrink-0">&#10003;</span>
                <span className="body-foundry text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            <strong>The bottom line:</strong> The people who build the revenue engine of this company will have options &mdash; career, financial, and otherwise &mdash; that don&apos;t exist at companies that already have a sales team. We&apos;re not making promises. We&apos;re pointing at the math and asking if you can do addition.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-[var(--foundry-bg-alt)]" id="apply">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2 space-y-4">
              <p className="label-foundry">Apply Now</p>
              <h2 className="heading-forge-lg">Show us the numbers</h2>
              <p className="body-foundry text-slate-800">
                No cover letters. No &ldquo;I&apos;m a self-starter&rdquo; paragraphs. Results speak.
              </p>
              <div className="space-y-2 pt-4">
                <p className="text-sm font-semibold text-slate-900">Requirements</p>
                <p className="text-sm text-slate-700">3+ years B2B sales</p>
                <p className="text-sm text-slate-700">Documented commission earnings</p>
                <p className="text-sm text-slate-700">Remote &bull; 1099 Independent Contractor</p>
              </div>
            </div>
            <div className="lg:col-span-3 card-forged-premium rounded-2xl p-6 md:p-10 shadow-xl">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Questions before applying?</h2>
            <p className="body-foundry text-slate-800">
              Reach out directly. If you&apos;re the right fit, we want to talk.
            </p>
          </div>
          <div className="flex justify-center">
            <ContactCTA />
          </div>
        </div>
      </section>
    </>
  );
}
