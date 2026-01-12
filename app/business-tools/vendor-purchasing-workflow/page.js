import Button from "../../../components/Button";

export const metadata = {
  title: "Vendor & Purchasing Workflow | Dominus Foundry",
  description:
    "Vendor & Purchasing Workflow controls purchasing from request to reconciliation without bottlenecks, overspend, or surprises.",
};

export default function VendorPurchasingWorkflowPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Vendor &amp; Purchasing Workflow</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Control purchasing from request to reconciliation — without bottlenecks, overspend, or surprises.
          </p>
          <Button href="#vendor-purchasing-how" className="justify-center">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Purchasing Fails in the Gaps</h2>
          <p className="body-foundry text-slate-800">
            Without structure, purchasing becomes reactive. Requests arrive inconsistently, approvals get bypassed, vendors drift out of sync, and costs creep without visibility.
          </p>
          <p className="body-foundry text-slate-800">
            Vendor &amp; Purchasing Workflow restores discipline by treating purchasing as an operational system — not an email thread.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Captures purchase requests in a structured format",
              "Routes requests through defined approval paths",
              "Generates purchase orders when approved",
              "Tracks vendor fulfillment and delivery status",
              "Reconciles purchases against invoices",
              "Maintains a complete purchasing audit trail",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="vendor-purchasing-how" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Designed as a Controlled Flow</h2>
          <p className="body-foundry text-slate-800">
            Vendor &amp; Purchasing Workflow is built as a governed lifecycle — from request to reconciliation.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Requests are validated at intake",
              "Approval logic enforces spending authority",
              "Purchase orders are generated programmatically",
              "Status updates are tracked explicitly",
              "Exceptions are surfaced early instead of buried",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Workflow orchestration is handled via n8n, allowing purchasing logic to remain explicit, auditable, and adaptable.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Reduced unauthorized spending",
              "Faster, clearer approvals",
              "Better vendor accountability",
              "Predictable purchasing operations",
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
              "Operations teams",
              "Finance-led organizations",
              "Businesses managing multiple vendors",
              "Teams that need cost discipline without friction",
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
          <h2 className="heading-forge-lg">Disciplined Purchasing — Optional Intelligence</h2>
          <p className="body-foundry text-slate-800">
            Vendor &amp; Purchasing Workflow can operate as a standalone purchasing automation system.
          </p>
          <p className="body-foundry text-slate-800">
            When governed by Mentis, it gains:
          </p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Cross-vendor spending context",
              "Policy enforcement across purchasing categories",
              "Pattern detection on costs and suppliers",
              "Long-term optimization of purchasing behavior",
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
              "Vendor databases",
              "Email and notification tools",
              "Internal approval systems",
              "Document storage",
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
          <h2 className="heading-forge-lg">Bring Discipline to Spending</h2>
          <Button href="/contact?interest=Vendor%20%26%20Purchasing%20Workflow#contact" className="justify-center">
            Talk to Us About Vendor &amp; Purchasing Workflow
          </Button>
        </div>
      </section>
    </>
  );
}
