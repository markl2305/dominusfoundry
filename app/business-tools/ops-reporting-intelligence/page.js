import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Ops Reporting & Intelligence | Dominus Foundry",
  description:
    "Automated operator briefings, anomaly detection, and KPI tracking across your entire business — without manual compilation.",
};

export default function OpsReportingIntelligencePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <p className="text-sm font-medium text-forge-300">
            <Link href="/business-tools" className="hover:text-white transition-colors">
              Operational Control System
            </Link>
          </p>
          <h1 className="heading-forge-xl text-white">Ops Reporting &amp; Intelligence</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Unified visibility across sales, delivery, finance, and operations.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What You&apos;re Missing
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Operators shouldn&apos;t live in dashboards. But most do — because nothing else surfaces what actually matters.
          </p>
          <p className="body-foundry text-slate-800">
            The problem isn&apos;t data. You have plenty. The problem is that nobody surfaces the right information until it&apos;s too late — until the anomaly becomes a fire, until the trend becomes a loss, until the miss becomes a pattern.
          </p>
          <p className="body-foundry text-slate-800">
            Ops Reporting &amp; Intelligence exists so the important things come to you — anomalies, trends, blockers — without requiring you to hunt.
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
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Data connectors to your CRM, accounting, and operations systems",
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
          <h2 className="heading-forge-lg">What Changes When This Runs</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Weekly operator briefings delivered automatically — no one has to build them",
              "Anomalies surface the day they happen — not at month-end",
              "KPIs tracked without manual spreadsheet compilation",
              "One place to see everything that matters across the business",
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

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">How It Fits</h2>
          <p className="body-foundry text-slate-800">
            Ops Reporting &amp; Intelligence works on its own to give you visibility across your business. It also connects directly to{" "}
            <Link href="/business-tools/lead-to-cash" className="text-forge-700 underline hover:text-forge-900">Lead-to-Cash</Link> for financial visibility,{" "}
            <Link href="/business-tools/support-triage" className="text-forge-700 underline hover:text-forge-900">Support Triage</Link> for support volume trends, and{" "}
            <Link href="/business-tools/voice-concierge" className="text-forge-700 underline hover:text-forge-900">Voice Concierge</Link> for call volume and conversion data.
          </p>
          <p className="body-foundry text-slate-800">
            Each connection adds depth to your briefings — no extra integration work required.
          </p>
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
              Ops Reporting &amp; Intelligence works on its own — but becomes even more powerful when connected to Lead-to-Cash, Support Triage, Voice Concierge, and more. Same architecture. No re-integration work.
            </p>
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Explore the full system →
            </Link>
          </div>
        </div>
      </section>

      <section id="ops-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">See what matters. Ignore what doesn&apos;t.</h2>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What You&apos;re Missing
          </Button>
          <p className="body-foundry text-slate-700">
            <Link href="/contact" className="text-forge-700 underline hover:text-forge-900">
              Or talk to us directly
            </Link>
          </p>
          <p className="text-sm text-slate-600">Operational control system — accountable and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
