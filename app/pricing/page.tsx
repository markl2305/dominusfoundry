import type { Metadata } from "next";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Pricing | Dominus Foundry",
  description:
    "Three tiers. One standard: it works or it doesn't ship. AI systems forged for operators who can't afford to slow down.",
};

const tiers = [
  {
    name: "Forge",
    tagline: "First deployment. One Engine. Fully integrated.",
    price: "5,000",
    tags: ["1 Engine", "Client's Choice"],
    features: [
      "Single Engine — Intake, Revenue, or Ops (client selects)",
      "Core product configured to your business, fully live",
      "Up to 2 integrations (CRM, calendar, phone, or accounting)",
      "Single-channel deployment — voice OR chat OR SMS",
      "Standard knowledge base trained on your business",
      "14-day trial included — close target day 7",
      "Onboarding call + documentation handoff",
    ],
    bestFor: "Solo operators, micro-businesses, first AI deployment",
    featured: false,
  },
  {
    name: "Foundry",
    tagline: "The full revenue + intake motion. Built to compound.",
    price: "12,500",
    tags: ["2 Engines", "Multi-Channel", "Full Integration"],
    features: [
      "Two Engines — typically Intake + Revenue (or client-defined)",
      "Full integration stack — CRM, calendar, QuickBooks, phone, SMS",
      "Multi-channel: voice agent + chat + SMS running in parallel",
      "Custom trained on your business, services, pricing, and objections",
      "Automated lead capture \u2192 booking \u2192 invoice \u2192 follow-up pipeline",
      "Slack or email alert routing for human escalation",
      "14-day trial included — close target day 7",
      "Two onboarding calls + live workflow walkthrough",
    ],
    bestFor: "SMBs with 5\u201325 employees, founder-run service businesses",
    featured: true,
  },
  {
    name: "Dominus",
    tagline: "Full DominusOS. All Engines. Operator-grade governance.",
    price: "20,000",
    tags: ["All 3 Engines", "DominusOS", "White-Glove"],
    features: [
      "All three Engines — Intake, Revenue, and Ops deployed together",
      "Full DominusOS with audit trails, drift prevention, and authority controls",
      "Complete integration stack — every tool in your stack connected",
      "Custom AI brain trained on your SOPs, pricing, legal, and ops logic",
      "Vendor management, compliance reporting, and AR automation",
      "Priority build timeline — dedicated build sprint",
      "Paid discovery session applied toward build ($2,500 credit)",
      "Three onboarding calls + team training + runbook documentation",
    ],
    bestFor:
      "Mid-market operators, multi-location businesses, 25\u2013200 employees",
    featured: false,
  },
];

const maintenanceTable = [
  { engines: "1 Engine", monthly: "$500", annual: "$6,000" },
  { engines: "2 Engines", monthly: "$1,000", annual: "$12,000" },
  { engines: "3 Engines", monthly: "$1,500", annual: "$18,000" },
];

const usageTable = [
  { scenario: "Minimal usage", raw: "\u2264$17", billed: "$25 floor" },
  { scenario: "Light (300 min/mo)", raw: "~$40", billed: "~$60" },
  { scenario: "Moderate (700 min/mo)", raw: "~$80", billed: "~$120" },
  { scenario: "Heavy (1,500 min/mo)", raw: "~$175", billed: "~$263" },
  { scenario: "High volume (3,000 min/mo)", raw: "~$350", billed: "~$525" },
];

const financingTable = [
  {
    tier: "Forge",
    standard: "$5,000",
    payFull: "$4,500",
    sixDeposit: "$2,500",
    sixMonthly: "$500 \u00d7 5",
    twelveDeposit: "$1,313",
    twelveMonthly: "$341 \u00d7 11",
  },
  {
    tier: "Foundry",
    standard: "$12,500",
    payFull: "$11,250",
    sixDeposit: "$6,250",
    sixMonthly: "$1,250 \u00d7 5",
    twelveDeposit: "$3,281",
    twelveMonthly: "$899 \u00d7 11",
  },
  {
    tier: "Dominus",
    standard: "$20,000",
    payFull: "$18,000",
    sixDeposit: "$10,000",
    sixMonthly: "$2,000 \u00d7 5",
    twelveDeposit: "$5,250",
    twelveMonthly: "$1,432 \u00d7 11",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 relative">
          <p className="label-foundry text-forge-300 mb-4">
            Pricing &amp; Packaging
          </p>
          <h1 className="heading-forge-xl text-white">
            What It Costs
          </h1>
          <p className="mt-4 text-xl font-medium text-forge-300">
            Three tiers. One standard: it works or it doesn&apos;t ship.
          </p>
          <p className="mt-6 max-w-2xl body-foundry text-white/80 md:text-lg">
            AI systems forged for operators who can&apos;t afford to slow down.
            Pick the tier that matches where you are, pay the way that works for
            you, and get a live system — not a proposal.
          </p>
        </div>
      </section>

      {/* Build Tiers */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">Build Investment</p>
          <h2 className="heading-forge-lg mb-10">The Three Tiers</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-6 md:p-8 ${
                  tier.featured ? "card-forged-premium" : "card-forged"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="label-foundry rounded-full bg-[var(--foundry-accent)] px-3 py-1 text-[10px] text-[var(--foundry-button-text)]">
                      Most Common
                    </span>
                  </div>
                )}
                <h3 className="font-crimson text-3xl font-bold text-[var(--foundry-heading)]">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm italic text-[var(--foundry-text-muted)]">
                  {tier.tagline}
                </p>

                <div className="mt-6 border-b border-[var(--foundry-border)] pb-6">
                  <span className="text-sm font-semibold text-[var(--foundry-accent-2)]">
                    $
                  </span>
                  <span className="font-crimson text-5xl font-bold text-[var(--foundry-accent-2)]">
                    {tier.price}
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--foundry-text-muted)]">
                    One-time build fee
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tier.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[var(--foundry-accent)] bg-[var(--foundry-accent)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--foundry-accent-2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-0 divide-y divide-[var(--foundry-border)]">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 py-3 text-sm text-[var(--foundry-text)]"
                    >
                      <span className="mt-0.5 flex-shrink-0 text-[var(--foundry-accent-2)]">
                        &mdash;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-[var(--foundry-border)] pt-4 text-xs italic text-[var(--foundry-text-muted)]">
                  <span className="not-italic font-semibold text-[var(--foundry-accent-2)]">
                    Best for:
                  </span>{" "}
                  {tier.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Maintenance */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">Ongoing Service</p>
          <h2 className="heading-forge-lg mb-8">Monthly Maintenance</h2>

          {/* Callout */}
          <div className="mb-10 rounded-xl border-l-4 border-[var(--foundry-accent-2)] bg-[var(--foundry-surface)] p-5 md:p-6">
            <p className="body-foundry">
              <strong className="text-[var(--foundry-accent-2)]">
                $500/month per Engine, all-inclusive.
              </strong>{" "}
              Every client pays this — whether your product runs on a $20 Vercel
              site or a full voice agent stack. This covers hosting, support,
              monitoring, and maintenance. No surprises, no line-item creep.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* What's Included */}
            <div className="card-forged rounded-2xl p-6 md:p-8">
              <h3 className="label-foundry text-forge-700 mb-4">
                What&apos;s Included &mdash; Every Product
              </h3>
              <p className="body-foundry text-sm mb-4">
                All costs of keeping your Engine running, monitored, and current.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "VPS / Supabase Hosting",
                  "Vercel Deployment",
                  "24/7 Uptime Monitoring",
                  "Bug Fixes & Patches",
                  "Knowledge Base Updates",
                  "Integration Maintenance",
                  "Monthly Health Report",
                  "Security & Credential Rotation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded bg-[var(--foundry-surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--foundry-text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Multi-Engine Pricing */}
            <div className="card-forged rounded-2xl p-6 md:p-8">
              <h3 className="label-foundry text-forge-700 mb-4">
                Multi-Engine Pricing
              </h3>
              <p className="body-foundry text-sm mb-4">
                Maintenance scales with the number of Engines active on your
                account.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--foundry-border)]">
                      <th className="label-foundry pb-3 text-left text-[10px]">
                        Engines Active
                      </th>
                      <th className="label-foundry pb-3 text-left text-[10px]">
                        Monthly
                      </th>
                      <th className="label-foundry pb-3 text-left text-[10px]">
                        Annual
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenanceTable.map((row) => (
                      <tr
                        key={row.engines}
                        className="border-b border-[var(--foundry-border)] last:border-0"
                      >
                        <td className="py-3 font-medium text-[var(--foundry-heading)]">
                          {row.engines}
                        </td>
                        <td className="py-3 font-semibold text-[var(--foundry-accent-2)]">
                          {row.monthly}
                        </td>
                        <td className="py-3 text-[var(--foundry-text-muted)]">
                          {row.annual}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Voice Usage Passthrough */}
          <div className="mt-6 card-forged-premium rounded-2xl p-6 md:p-8">
            <h3 className="label-foundry text-forge-700 mb-4">
              Voice Agent Clients &mdash; Usage Passthrough
            </h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <p className="body-foundry text-sm mb-3">
                  Voice agent clients pay the $500/month base plus actual usage
                  costs (ElevenLabs + Twilio) with a{" "}
                  <strong className="text-[var(--foundry-accent-2)]">
                    50% markup
                  </strong>
                  . The $500 floor already covers your overhead — the markup is
                  clean margin on a managed, monitored service.
                </p>
                <p className="text-sm text-[var(--foundry-text-muted)]">
                  <strong className="text-[var(--foundry-accent-2)]">
                    $25/month minimum usage floor
                  </strong>{" "}
                  applies to all voice products, even in light-use months.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--foundry-border)]">
                      <th className="label-foundry pb-3 text-left text-[10px]">
                        Usage Scenario
                      </th>
                      <th className="label-foundry pb-3 text-left text-[10px]">
                        Raw Cost
                      </th>
                      <th className="label-foundry pb-3 text-left text-[10px]">
                        Client Billed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usageTable.map((row) => (
                      <tr
                        key={row.scenario}
                        className="border-b border-[var(--foundry-border)] last:border-0"
                      >
                        <td className="py-3 font-medium text-[var(--foundry-heading)]">
                          {row.scenario}
                        </td>
                        <td className="py-3 text-[var(--foundry-text-muted)]">
                          {row.raw}
                        </td>
                        <td className="py-3 font-semibold text-[var(--foundry-accent-2)]">
                          {row.billed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-[11px] text-[var(--foundry-text-muted)]">
                  Voice base rate ~$0.08&ndash;0.12/min raw. Billed at cost +
                  50%. All usage invoiced monthly with itemized statement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Structures */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">
            Payment Structures
          </p>
          <h2 className="heading-forge-lg mb-10">How You Can Pay</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Pay In Full */}
            <div className="relative card-forged-premium rounded-2xl p-6 md:p-8">
              <div className="absolute -top-3 left-6">
                <span className="label-foundry rounded-full bg-[var(--foundry-accent)] px-3 py-1 text-[10px] text-[var(--foundry-button-text)]">
                  Recommended
                </span>
              </div>
              <h3 className="font-crimson text-2xl font-bold text-[var(--foundry-heading)] mb-5">
                Pay In Full
              </h3>
              <div className="space-y-0 divide-y divide-[var(--foundry-border)]">
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Discount
                  </span>
                  <span className="font-semibold text-[var(--foundry-accent-2)]">
                    10% off build fee
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Deposit required
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    100% at signing
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Financing charge
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    None
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Build priority
                  </span>
                  <span className="font-semibold text-[var(--foundry-accent-2)]">
                    Immediate start
                  </span>
                </div>
              </div>
              <div className="mt-5 rounded-lg bg-[var(--foundry-surface-2)] p-4 text-sm text-[var(--foundry-text-muted)]">
                <strong className="text-[var(--foundry-accent-2)]">
                  Example &mdash; Foundry ($12,500):
                </strong>
                <br />
                Pay $11,250 at signing. Save $1,250. Work begins same week.
              </div>
            </div>

            {/* 6-Month Plan */}
            <div className="card-forged rounded-2xl p-6 md:p-8">
              <h3 className="font-crimson text-2xl font-bold text-[var(--foundry-heading)] mb-5">
                6-Month Plan
              </h3>
              <div className="space-y-0 divide-y divide-[var(--foundry-border)]">
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Discount
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    None &mdash; standard price
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Deposit at signing
                  </span>
                  <span className="font-semibold text-[var(--foundry-accent-2)]">
                    50% upfront
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Remaining balance
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    5 equal monthly payments
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Financing charge
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    None
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Build start
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    Upon deposit receipt
                  </span>
                </div>
              </div>
              <div className="mt-5 rounded-lg bg-[var(--foundry-surface-2)] p-4 text-sm text-[var(--foundry-text-muted)]">
                <strong className="text-[var(--foundry-accent-2)]">
                  Example &mdash; Foundry ($12,500):
                </strong>
                <br />
                $6,250 deposit. Then{" "}
                <strong className="text-[var(--foundry-accent-2)]">
                  5 &times; $1,250/mo
                </strong>{" "}
                = $12,500 total.
              </div>
            </div>

            {/* 12-Month Plan */}
            <div className="card-forged rounded-2xl p-6 md:p-8">
              <h3 className="font-crimson text-2xl font-bold text-[var(--foundry-heading)] mb-5">
                12-Month Plan
              </h3>
              <div className="space-y-0 divide-y divide-[var(--foundry-border)]">
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Price
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    Standard + 5%
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Deposit at signing
                  </span>
                  <span className="font-semibold text-[var(--foundry-accent-2)]">
                    25% upfront
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Remaining balance
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    11 equal monthly payments
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Financing charge
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    Embedded (5% total)
                  </span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span className="text-[var(--foundry-text-muted)]">
                    Build start
                  </span>
                  <span className="font-medium text-[var(--foundry-text)]">
                    Upon deposit receipt
                  </span>
                </div>
              </div>
              <div className="mt-5 rounded-lg bg-[var(--foundry-surface-2)] p-4 text-sm text-[var(--foundry-text-muted)]">
                <strong className="text-[var(--foundry-accent-2)]">
                  Example &mdash; Foundry ($12,500 &rarr; $13,125):
                </strong>
                <br />
                $3,281 deposit. Then{" "}
                <strong className="text-[var(--foundry-accent-2)]">
                  11 &times; $899/mo
                </strong>{" "}
                = $13,125 total.
              </div>
            </div>
          </div>

          {/* Full Comparison Table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--foundry-border)]">
                  <th className="label-foundry pb-3 text-left text-[10px]">
                    Tier
                  </th>
                  <th className="label-foundry pb-3 text-left text-[10px]">
                    Standard
                  </th>
                  <th className="label-foundry pb-3 text-left text-[10px]">
                    Pay-in-Full
                  </th>
                  <th className="label-foundry pb-3 text-left text-[10px]">
                    6-Mo Deposit
                  </th>
                  <th className="label-foundry pb-3 text-left text-[10px]">
                    6-Mo Monthly
                  </th>
                  <th className="label-foundry pb-3 text-left text-[10px]">
                    12-Mo Deposit
                  </th>
                  <th className="label-foundry pb-3 text-left text-[10px]">
                    12-Mo Monthly
                  </th>
                </tr>
              </thead>
              <tbody>
                {financingTable.map((row) => (
                  <tr
                    key={row.tier}
                    className="border-b border-[var(--foundry-border)] last:border-0"
                  >
                    <td className="py-3 font-semibold text-[var(--foundry-heading)]">
                      {row.tier}
                    </td>
                    <td className="py-3 text-[var(--foundry-text)]">
                      {row.standard}
                    </td>
                    <td className="py-3 font-semibold text-[var(--foundry-accent-2)]">
                      {row.payFull}
                    </td>
                    <td className="py-3 text-[var(--foundry-text)]">
                      {row.sixDeposit}
                    </td>
                    <td className="py-3 text-[var(--foundry-text)]">
                      {row.sixMonthly}
                    </td>
                    <td className="py-3 text-[var(--foundry-text)]">
                      {row.twelveDeposit}
                    </td>
                    <td className="py-3 text-[var(--foundry-text)]">
                      {row.twelveMonthly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Late Payment */}
          <div className="mt-8 rounded-xl border-l-4 border-[var(--foundry-accent-2)] bg-[var(--foundry-surface)] p-5 md:p-6">
            <p className="text-sm text-[var(--foundry-text)]">
              <strong className="text-[var(--foundry-accent-2)]">
                Late payment:
              </strong>{" "}
              Invoices unpaid past Net 15 accrue 1.5%/month (18% annualized).
              Build work pauses on overdue accounts. Maintenance services suspend
              at 30 days past due.
            </p>
          </div>
        </div>
      </section>

      {/* 14-Day Trial */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-300 mb-4">Risk-Free Entry</p>
          <h2 className="heading-forge-lg text-white mb-6">
            The 14-Day Trial
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="label-foundry text-forge-300 mb-3">
                How It Works
              </h3>
              <p className="body-foundry text-white/80 md:text-base">
                We build the core product of your chosen Engine — fully
                configured to your business, fully integrated with your tools —
                and put it to work. No demo environment. No dummy data. Your
                phone number, your CRM, your customers.
              </p>
              <p className="mt-4 body-foundry text-white/80 md:text-base">
                We target a close at{" "}
                <strong className="text-[var(--foundry-accent)]">day 7</strong>.
                You have until day 14. If you don&apos;t commit, we take it
                back. If you do, the product is already live and earning.
              </p>
            </div>

            <div>
              <h3 className="label-foundry text-forge-300 mb-3">
                What &ldquo;Take It Back&rdquo; Means
              </h3>
              <p className="body-foundry text-white/80 md:text-base">
                During the trial, all infrastructure stays under Dominus
                accounts — ElevenLabs key, Twilio number, Supabase instance, n8n
                workflows. You&apos;re using access to our system, not owning
                it. On commit, everything transfers cleanly to your account. No
                commit, clean disconnect.
              </p>
            </div>
          </div>

          {/* Trial scope */}
          <div className="mt-10 rounded-xl border border-white/20 bg-white/5 p-5 md:p-6">
            <p className="text-sm text-white/70">
              <strong className="text-[var(--foundry-accent)]">
                Trial scope:
              </strong>{" "}
              Core product of one Engine only. Additional Engines, advanced
              integrations, and full multi-channel deployment are post-commit.
              Trial is available on Forge and Foundry tiers. Dominus tier begins
              with a paid discovery session ($2,500, credited at signing).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 text-center">
          <h2 className="heading-forge-lg mb-4">Ready to get started?</h2>
          <p className="mb-8 body-foundry text-slate-700 max-w-2xl mx-auto">
            Tell us what you need. We&apos;ll tell you which tier fits, walk
            through the financing, and scope a trial if it makes sense.
          </p>
          <Button href="/start" className="justify-center">
            Talk with Mark &amp; Bri
          </Button>
        </div>
      </section>

      {/* Footer disclaimer */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <p className="text-center text-xs text-[var(--foundry-text-muted)]">
            All prices in USD. Pricing subject to change with 30-day notice for
            existing clients. Maintenance invoiced monthly. Build fees invoiced
            per payment structure above. Usage billed monthly with itemized
            statement.
          </p>
        </div>
      </section>
    </>
  );
}
