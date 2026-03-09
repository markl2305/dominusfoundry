import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Document & Compliance Automations | Dominus Foundry",
  description:
    "Enforce the full document lifecycle — generate, route, sign, archive, and audit — with version control and policy enforcement built in.",
};

export default function DocumentComplianceAutomationsPage() {
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
          <h1 className="heading-forge-xl text-white">Document &amp; Compliance Automations</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Generate, route, sign, archive, and audit documents — with version control and policy enforcement.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Manual Document Handling Costs
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Documents are liabilities when handled manually.
          </p>
          <p className="body-foundry text-slate-800">
            Version confusion. Missing signatures. Inconsistent approval chains. Audit requests that require reconstruction.
          </p>
          <p className="body-foundry text-slate-800">
            Document &amp; Compliance Automations enforces structure across the document lifecycle.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Generates documents from templates and data",
              "Routes for review and approval",
              "Captures signatures electronically",
              "Archives with version history",
              "Enforces retention and compliance rules",
              "Produces audit trails on demand",
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
            Every document follows defined policy from creation to archive.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Template logic generates documents from structured data",
              "Approval workflows enforced programmatically",
              "Signatures captured with legal validity",
              "Archival and retention rules applied automatically",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Compliance built in, not bolted on.
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
          <h2 className="heading-forge-lg">What Changes When This Runs</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Documents generated from templates — no more copy-paste errors",
              "Approval chains enforced automatically — no more chasing signatures",
              "Version history maintained without manual tracking",
              "Audit-ready records available on demand — not after a week of reconstruction",
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

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">How It Fits</h2>
          <p className="body-foundry text-slate-800">
            Document &amp; Compliance Automations works standalone for any team that needs structured document handling. It also connects directly to Client Onboarding for document collection during onboarding, to Recruiting &amp; Hiring for offer letters and hiring documents, and to Vendor &amp; Purchasing for purchase orders and contracts. Same architecture across every system — no re-integration work required.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
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

      <section className="bg-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 space-y-4">
            <h3 className="heading-forge-md text-slate-900">Part of something larger</h3>
            <p className="body-foundry text-slate-700">
              Document &amp; Compliance Automations works on its own — but connects naturally with Client Onboarding, Recruiting &amp; Hiring, and Vendor &amp; Purchasing when you&apos;re ready. Same architecture. No re-integration work.
            </p>
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Explore all systems →
            </Link>
          </div>
        </div>
      </section>

      <section id="doc-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Documents under control.</h2>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Manual Document Handling Costs
          </Button>
          <p className="body-foundry text-slate-700">
            <Link href="/contact?interest=Document%20%26%20Compliance%20Automations#contact" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Or talk to us directly
            </Link>
          </p>
          <p className="text-sm text-slate-600">Operational control system — accountable and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
