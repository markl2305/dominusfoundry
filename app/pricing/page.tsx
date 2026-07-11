import type { Metadata } from "next";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Pricing | Dominus Foundry™",
  description:
    "Forge pricing — one flat platform price, unlimited users, no per-seat games. Add only the modules you use. Founding Charter open for a limited number of operators.",
};

// Forge pricing — source of truth: vault `Forge Pricing Canon.md` (LOCKED 2026-07-05).
// Dominus Foundry sells one product: Forge. These numbers mirror the Forge canon.
const plans = [
  {
    name: "Starter",
    tagline: "The micro-shop on-ramp.",
    price: "349",
    unit: "/mo",
    pricePrefix: "",
    tags: ["Under 4 seats", "Auto-upgrades to Core"],
    features: [
      "Project & client management essentials",
      "Proposals, invoicing, and scheduling",
      "Mobile app + client portal",
      "Automatically upgrades to Core as you grow past 4 working seats",
    ],
    bestFor: "Solo operators and micro shops getting off spreadsheets",
    featured: false,
  },
  {
    name: "Forge Core",
    tagline: "The full operating platform. Flat price, unlimited users.",
    price: "599",
    unit: "/mo",
    pricePrefix: "",
    tags: ["Unlimited users", "No per-seat"],
    features: [
      "Full project lifecycle — lead to close to service",
      "CRM, proposals, invoices, and document management",
      "Scheduling, dispatch, and labor tracking",
      "QuickBooks sync, client portal, and mobile app",
      "Unlimited users — you are never charged per seat",
      "$1,000 one-time setup (waived for the founding ten)",
    ],
    bestFor: "Installation contractors running their whole operation on one system",
    featured: true,
  },
  {
    name: "Founding Charter",
    tagline: "The founding rate. About half off, locked for life.",
    price: "299",
    unit: "/mo",
    pricePrefix: "from",
    tags: ["9 of 10 seats left", "Setup waived"],
    features: [
      "Everything in Forge Core",
      "~50% off the $599 rate, locked for the life of your subscription",
      "$1,000 setup fee waived",
      "Application-gated — first ten operators only",
      "Direct line to the founders during build and beyond",
    ],
    bestFor: "Early operators who want in at the founding rate before it closes",
    featured: false,
  },
];

// Modules — add only what you use, on top of Core. Prices per the Forge canon.
const modules = [
  { name: "Hyperion", price: "$499/mo", desc: "iPad LiDAR scan-to-proposal — design and price a job from a scan." },
  { name: "Iris", price: "from $1,500/mo", desc: "AI chat + voice CSR that answers every call and text, day or night." },
  { name: "Ariadne", price: "$499/mo", desc: "Dispatch and crew coordination across the whole schedule." },
  { name: "Torch", price: "$35 / number", desc: "Communication intelligence on every line — per number, not per seat." },
  { name: "Sigil", price: "$49/mo", desc: "Unlimited e-signature built into your proposals and contracts." },
  { name: "Tribute", price: "0.5–0.75% of volume", desc: "Embedded payments and recurring revenue, collected in-platform." },
  { name: "Treasury", price: "Coming soon", desc: "Payroll and certified payroll, native to the platform." },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 relative">
          <p className="label-foundry text-forge-300 mb-4">Pricing &amp; Packaging</p>
          <h1 className="heading-forge-xl text-white">What Forge Costs</h1>
          <p className="mt-4 text-xl font-medium text-forge-300">
            One flat platform price. Unlimited users. Add only what you use.
          </p>
          <p className="mt-6 max-w-2xl body-foundry text-white/80 md:text-lg">
            Forge is one platform that replaces a stack of fragmented point tools —
            typically around <strong className="text-white">$2,645/mo</strong> of
            them. Start on Core, add the modules your operation actually runs, and
            never pay per seat. No hidden costs. No surprises.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">The Platform</p>
          <h2 className="heading-forge-lg mb-4">Forge Plans</h2>
          <p className="body-foundry text-sm mb-10 max-w-2xl text-[var(--foundry-text-muted)]">
            One flat monthly price for the whole platform — unlimited users, no
            per-seat pricing. The Founding Charter opens the same platform at about
            half off for the first ten operators.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 md:p-8 ${plan.featured ? "card-forged-premium" : "card-forged"}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="label-foundry rounded-full bg-[var(--foundry-accent)] px-3 py-1 text-[10px] text-[var(--foundry-button-text)]">
                      Most Common
                    </span>
                  </div>
                )}
                <h3 className="font-crimson text-3xl font-bold text-[var(--foundry-heading)]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm italic text-[var(--foundry-text-muted)]">
                  {plan.tagline}
                </p>

                <div className="mt-6 border-b border-[var(--foundry-border)] pb-6">
                  {plan.pricePrefix && (
                    <span className="mr-1 text-xs uppercase tracking-wider text-[var(--foundry-text-muted)]">
                      {plan.pricePrefix}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-[var(--foundry-accent-2)]">$</span>
                  <span className="font-crimson text-5xl font-bold text-[var(--foundry-accent-2)]">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-[var(--foundry-text-muted)]">
                    {plan.unit}
                  </span>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--foundry-text-muted)]">
                    Flat — unlimited users
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {plan.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[var(--foundry-accent)] bg-[var(--foundry-accent)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--foundry-accent-2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-0 divide-y divide-[var(--foundry-border)]">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 py-3 text-sm text-[var(--foundry-text)]"
                    >
                      <span className="mt-0.5 flex-shrink-0 text-[var(--foundry-accent-2)]">&mdash;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-[var(--foundry-border)] pt-4 text-xs italic text-[var(--foundry-text-muted)]">
                  <span className="not-italic font-semibold text-[var(--foundry-accent-2)]">Best for:</span>{" "}
                  {plan.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">Add What You Use</p>
          <h2 className="heading-forge-lg mb-4">Modules</h2>
          <p className="body-foundry text-sm mb-10 max-w-2xl text-[var(--foundry-text-muted)]">
            Core runs the operation. Add the modules your business actually needs —
            each one priced on its own, so you only pay for what you run.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div key={m.name} className="card-forged rounded-2xl p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-crimson text-2xl font-bold text-[var(--foundry-heading)]">
                    {m.name}
                  </h3>
                  <span className="font-semibold text-[var(--foundry-accent-2)] whitespace-nowrap">
                    {m.price}
                  </span>
                </div>
                <p className="mt-3 body-foundry text-sm text-[var(--foundry-text-muted)]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-[var(--foundry-text-muted)] italic max-w-2xl">
            Bundles that combine Core with the modules above are available — ask us
            for the current Working Stack and Full Platform pricing.
          </p>
        </div>
      </section>

      {/* Reference framing */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="rounded-2xl border-l-4 border-[var(--foundry-accent)] bg-[var(--foundry-surface)] p-6 md:p-8">
            <h3 className="font-crimson text-2xl md:text-3xl font-bold text-[var(--foundry-accent-2)] mb-3">
              One platform instead of a dozen tools.
            </h3>
            <p className="text-base md:text-lg text-[var(--foundry-text)]">
              Most contractors stitch together a CRM, a proposal tool, a scheduler, a
              phone system, an e-sign app, and an accounting bridge — roughly
              $2,645/mo of point tools that don&apos;t talk to each other. Forge is
              the one system that does all of it, on one login, with unlimited users.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 text-center">
          <h2 className="heading-forge-lg mb-4">Ready to get started?</h2>
          <p className="mb-8 body-foundry text-slate-700 max-w-2xl mx-auto">
            Tell us about your operation. We&apos;ll walk you through Core, the
            modules that fit, and whether a Founding Charter seat is still open for you.
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
            All prices in USD. Forge Core is a flat monthly price with unlimited
            users. Modules are optional and priced individually. Founding Charter
            pricing is locked for the life of the subscription and limited to the
            first ten operators.
          </p>
        </div>
      </section>
    </>
  );
}
