import Button from "../../../components/Button";

export const metadata = {
  title: "Ops Reporting & Intelligence | Dominus Foundry",
  description:
    "Ops Reporting & Intelligence turns operational data into timely signals without dashboards you never open.",
};

export default function OpsReportingIntelligencePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Ops Reporting &amp; Intelligence</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            See what matters, when it matters — without dashboards you never open.
          </p>
          <Button href="#ops-reporting-how" className="justify-center">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Data Exists. Insight Doesn’t.</h2>
          <p className="body-foundry text-slate-800">
            Most organizations are drowning in data but starving for clarity. Metrics live across tools, reports lag reality, and leadership finds out too late when something breaks.
          </p>
          <p className="body-foundry text-slate-800">
            Ops Reporting &amp; Intelligence turns operational data into timely signals you can actually act on.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Aggregates operational data across systems",
              "Produces clear, role-appropriate summaries",
              "Surfaces anomalies and exceptions automatically",
              "Generates recurring operational briefings",
              "Tracks trends over time",
              "Maintains an auditable record of reported insights",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="ops-reporting-how" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Built for Signal, Not Noise</h2>
          <p className="body-foundry text-slate-800">
            Ops Reporting &amp; Intelligence is designed to reduce cognitive load, not increase it.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Data is pulled from defined systems of record",
              "Metrics are normalized and contextualized",
              "Rules determine what rises to attention",
              "Reports and alerts are delivered on cadence or exception",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Workflow orchestration is handled via n8n, ensuring reporting logic is explicit, repeatable, and adaptable.
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
          <h2 className="heading-forge-lg">Who It’s For</h2>
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
          <h2 className="heading-forge-lg">Reporting Alone — Intelligence with Mentis</h2>
          <p className="body-foundry text-slate-800">
            Ops Reporting &amp; Intelligence can operate as a standalone reporting and alerting system.
          </p>
          <p className="body-foundry text-slate-800">
            When governed by Mentis, it gains:
          </p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Cross-domain context",
              "Pattern recognition over time",
              "Policy-aware alerting",
              "Continuous improvement of signal quality",
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

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Know What’s Happening — Before It Hurts</h2>
          <Button href="/contact?interest=Ops%20Reporting%20%26%20Intelligence#contact" className="justify-center">
            Talk to Us About Ops Reporting &amp; Intelligence
          </Button>
        </div>
      </section>
    </>
  );
}
