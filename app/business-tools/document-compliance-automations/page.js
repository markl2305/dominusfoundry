import Button from "../../../components/Button";

export const metadata = {
  title: "Document & Compliance Automations | Dominus Foundry",
  description:
    "Document & Compliance Automations generate, route, approve, and retain critical documents with discipline, traceability, and control.",
};

export default function DocumentComplianceAutomationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Document &amp; Compliance Automations</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Generate, route, approve, and retain critical documents — with discipline, traceability, and control.
          </p>
          <Button href="#document-compliance-how" className="justify-center">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Documents Become Liabilities Without Structure</h2>
          <p className="body-foundry text-slate-800">
            Manual document handling introduces risk. Versions drift, approvals stall, signatures get missed, and compliance becomes an afterthought rather than a system.
          </p>
          <p className="body-foundry text-slate-800">
            Document &amp; Compliance Automations replaces ad-hoc document handling with governed workflows that stand up to scrutiny.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Generates documents from structured templates",
              "Routes documents for review and approval",
              "Enforces version control",
              "Tracks signatures and completion",
              "Stores documents with clear retention rules",
              "Maintains a complete compliance audit trail",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="document-compliance-how" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Built for Repeatability and Accountability</h2>
          <p className="body-foundry text-slate-800">
            This system is designed as a controlled document lifecycle — from creation to archive.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Inputs populate governed document templates",
              "Approval paths are enforced automatically",
              "State changes are tracked explicitly",
              "Exceptions are flagged immediately",
              "All actions are logged for compliance and review",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Workflow orchestration is handled via n8n, allowing document flows to remain explicit, inspectable, and adaptable.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Reduced compliance risk",
              "Fewer document errors",
              "Clear ownership and accountability",
              "Faster approvals without shortcuts",
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
              "Regulated industries",
              "Professional services firms",
              "Operations and finance teams",
              "Organizations managing high-value or sensitive documents",
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
          <h2 className="heading-forge-lg">Structured Alone — Governed with Mentis</h2>
          <p className="body-foundry text-slate-800">
            Document &amp; Compliance Automations can operate as a standalone system with its own document workflows.
          </p>
          <p className="body-foundry text-slate-800">
            When governed by Mentis, it gains:
          </p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Policy enforcement across document types",
              "Historical compliance context",
              "Cross-system awareness",
              "Long-term optimization of document processes",
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
              "Document storage platforms",
              "E-signature tools",
              "Email and notification systems",
              "Internal approval systems",
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
          <h2 className="heading-forge-lg">Bring Order to Documents</h2>
          <Button href="/contact?interest=Document%20%26%20Compliance%20Automations#contact" className="justify-center">
            Talk to Us About Document &amp; Compliance Automations
          </Button>
        </div>
      </section>
    </>
  );
}
