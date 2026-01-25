import Button from "../../../components/Button";

export const metadata = {
  title: "Lead-to-Cash | Dominus Foundry",
  description:
    "Automate the path from closed deal to collected revenue.",
};

export default function LeadToCashPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Lead-to-Cash</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Automate the path from closed deal to collected revenue.
          </p>
          <Button href="#lead-to-cash-cta" className="justify-center">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Revenue breaks down after the sale.
          </p>
          <p className="body-foundry text-slate-800">
            Quotes stall. Invoices go out late. Follow-ups are inconsistent. Accounts receivable becomes a guessing game.
          </p>
          <p className="body-foundry text-slate-800">
            Lead-to-Cash restores structure from agreement to payment.
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
            Lead-to-Cash works with your accounting system — not around it.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Workflow logic orchestrates quote-to-invoice transitions",
              "Payment states monitored continuously",
              "Reminder cadence follows defined rules",
              "Exceptions trigger alerts instead of silent delays",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Orchestration via n8n — financial processes stay consistent without manual intervention.
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

      <section id="lead-to-cash-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Close the loop on revenue.</h2>
          <Button href="/contact?interest=Lead-to-Cash#contact" className="justify-center">
            Talk to Us About Lead-to-Cash
          </Button>
          <p className="text-xs text-slate-700">Built to Dominus Foundry architectural standards.</p>
        </div>
      </section>
    </>
  );
}
