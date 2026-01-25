import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Ops Reporting & Intelligence | Dominus Foundry",
  description:
    "Unified visibility across sales, delivery, finance, and operations.",
};

export default function OpsReportingIntelligencePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <p className="text-sm font-medium text-forge-300">
            <Link href="/mentis" className="hover:text-white transition-colors">
              Designed with Mentis
            </Link>
          </p>
          <h1 className="heading-forge-xl text-white">Ops Reporting &amp; Intelligence</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Unified visibility across sales, delivery, finance, and operations.
          </p>
          <Button href="#ops-cta" className="justify-center">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Operators shouldn&apos;t live in dashboards.
          </p>
          <p className="body-foundry text-slate-800">
            But without clear reporting, exceptions hide until they become crises.
          </p>
          <p className="body-foundry text-slate-800">
            Ops Reporting &amp; Intelligence surfaces what matters — anomalies, trends, blockers — without requiring you to hunt.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Aggregates data across sales, delivery, and finance",
              "Detects anomalies and flags exceptions",
              "Generates weekly operator briefings",
              "Tracks KPIs without manual compilation",
              "Surfaces trends before they become problems",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">How It&apos;s Built</h2>
          <p className="body-foundry text-slate-800">
            This system pulls from your existing tools and synthesizes — it doesn&apos;t replace your stack.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Data connectors to CRM, accounting, and operations systems",
              "Anomaly detection rules tuned to your thresholds",
              "Briefings generated and delivered on schedule",
              "Exceptions highlighted, not buried",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Orchestration via n8n — reporting stays current without manual refresh.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Faster awareness of operational issues",
              "Fewer surprises",
              "Less time spent building reports",
              "Better decisions with less effort",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Who It&apos;s For</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Operators and founders",
              "Operations and finance leaders",
              "Teams managing multiple systems",
              "Organizations that need clarity without micromanagement",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Integrations</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Accounting systems",
              "CRM platforms",
              "Operations tools",
              "Internal data sources",
              "Notification channels",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 space-y-4">
            <h3 className="heading-forge-md text-slate-900">Part of something larger</h3>
            <p className="body-foundry text-slate-700">
              Ops Reporting &amp; Intelligence is designed with Mentis — the same architecture that powers all our systems. Use it standalone, or connect it with Lead-to-Cash, Support Triage, and more. When you&apos;re ready to run your entire operation on one unified platform, everything clicks.
            </p>
            <Link href="/mentis" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Learn about Mentis →
            </Link>
          </div>
        </div>
      </section>

      <section id="ops-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">See what matters. Ignore what doesn&apos;t.</h2>
          <Button href="/contact?interest=Ops%20Reporting%20%26%20Intelligence#contact" className="justify-center">
            Talk to Us About Ops Reporting &amp; Intelligence
          </Button>
          <p className="text-sm text-slate-600">Designed with Mentis. Governed, auditable, and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
