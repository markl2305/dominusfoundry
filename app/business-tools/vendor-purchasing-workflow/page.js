import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Vendor & Purchasing Workflow | Dominus Foundry",
  description:
    "Enforce the path from purchase request to reconciliation — no rogue spending, no forgotten orders, no untracked dollars.",
};

export default function VendorPurchasingWorkflowPage() {
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
          <h1 className="heading-forge-xl text-white">Vendor &amp; Purchasing Workflow</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Request → Approve → Order → Reconcile → Restock — with structured purchasing.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Uncontrolled Purchasing Costs
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Purchasing without structure leaks money and time.
          </p>
          <p className="body-foundry text-slate-800">
            Requests scattered across channels. Approvals inconsistent. Orders duplicated or forgotten. Reconciliation manual.
          </p>
          <p className="body-foundry text-slate-800">
            Vendor &amp; Purchasing Workflow enforces discipline across the procurement cycle.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Captures purchase requests from any channel",
              "Routes for approval based on rules",
              "Submits orders to vendors",
              "Tracks delivery and receipt",
              "Reconciles against invoices",
              "Triggers restocking based on thresholds",
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
            Every purchase follows defined approval and tracking rules.
          </p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Request intake feeds structured data",
              "Approval routing enforced programmatically",
              "Vendor orders submitted automatically",
              "Receipt and reconciliation tracked",
              "Restock triggers based on inventory thresholds",
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
          <h2 className="heading-forge-lg">What Changes When This Runs</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Purchase requests go through proper approval — no more rogue spending",
              "Orders tracked from request to delivery to reconciliation",
              "Restocking triggered automatically — no more emergency orders",
              "Complete purchasing trail for every dollar spent",
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

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">How It Fits</h2>
          <p className="body-foundry text-slate-800">
            Vendor &amp; Purchasing Workflow works standalone for procurement control. It also connects directly to Lead-to-Cash to reconcile purchasing against revenue, to Ops Reporting for full spending visibility, and to Document Compliance for purchase orders and contracts. Same architecture across every system — no re-integration work required.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
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

      <section className="bg-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 space-y-4">
            <h3 className="heading-forge-md text-slate-900">Part of something larger</h3>
            <p className="body-foundry text-slate-700">
              Vendor &amp; Purchasing Workflow works on its own — but connects naturally with Lead-to-Cash, Ops Reporting, and Document Compliance when you&apos;re ready. Same architecture. No re-integration work.
            </p>
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Explore all systems →
            </Link>
          </div>
        </div>
      </section>

      <section id="purchasing-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Purchasing under control.</h2>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Uncontrolled Purchasing Costs
          </Button>
          <p className="body-foundry text-slate-700">
            <Link href="/contact?interest=Vendor%20%26%20Purchasing%20Workflow#contact" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Or talk to us directly
            </Link>
          </p>
          <p className="text-sm text-slate-600">Operational control system — accountable and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
