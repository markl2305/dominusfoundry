import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Lead-to-Cash | Dominus Foundry",
  description:
    "Enforce the path from closed deal to collected revenue — no missed invoices, no forgotten follow-ups, no revenue left on the table.",
};

export default function LeadToCashPage() {
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
          <h1 className="heading-forge-xl text-white">Lead-to-Cash</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Enforce the path from closed deal to collected revenue — no missed invoices, no forgotten follow-ups, no revenue left on the table.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What You&apos;re Leaving on the Table
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Revenue doesn&apos;t break at the sale. It breaks after.
          </p>
          <p className="body-foundry text-slate-800">
            Late invoices. Inconsistent follow-up. Accounts receivable that nobody owns. Every gap between &quot;closed-won&quot; and &quot;cash collected&quot; is money you already earned — sitting uncollected.
          </p>
          <p className="body-foundry text-slate-800">
            Lead-to-Cash closes those gaps with structure, not more headcount.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Generates quotes and invoices automatically",
              "Delivers through defined channels",
              "Tracks payment status and aging",
              "Sends structured follow-ups and reminders",
              "Flags exceptions and overdue accounts",
              "Maintains complete financial activity trail",
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
            Lead-to-Cash works with your existing accounting system — not around it.
          </p>
          <p className="body-foundry text-slate-800">
            Payment states are monitored continuously. Reminder cadence follows defined rules. Exceptions trigger alerts instead of silent delays.
          </p>
          <p className="body-foundry text-slate-800">
            Every step from quote to collected payment runs on structured logic — so financial processes stay consistent without manual intervention.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Faster cash collection",
              "Reduced manual invoicing errors",
              "Clear visibility into accounts receivable",
              "Predictable financial operations",
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
              "Invoices go out the day the deal closes — not when someone remembers",
              "Follow-up happens on a cadence — not when someone has time",
              "Overdue accounts surface automatically — no more manual AR reviews",
              "Complete financial trail from quote to collected payment",
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
              "Service businesses",
              "Project-based firms",
              "Operators managing recurring or milestone billing",
              "Teams that need cash discipline without micromanagement",
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
            Lead-to-Cash works standalone for invoicing and accounts receivable. It also connects directly to Client Onboarding to trigger invoicing after onboarding completes, to Lead Intake to generate quotes after qualification, and to Ops Reporting for full financial visibility. Same architecture across every system — no re-integration work required.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Integrations</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Accounting platforms (e.g., QuickBooks)",
              "Payment processors",
              "Email and messaging systems",
              "Internal reporting tools",
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
              Lead-to-Cash works on its own — but connects naturally with Client Onboarding, Lead Intake, and Ops Reporting when you&apos;re ready. Same architecture. No re-integration work.
            </p>
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Explore all systems →
            </Link>
          </div>
        </div>
      </section>

      <section id="lead-to-cash-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Close the loop on revenue.</h2>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What You&apos;re Leaving on the Table
          </Button>
          <p className="body-foundry text-slate-700">
            <Link href="/contact?interest=Lead-to-Cash#contact" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Or talk to us directly
            </Link>
          </p>
          <p className="text-sm text-slate-600">Operational control system — accountable and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
