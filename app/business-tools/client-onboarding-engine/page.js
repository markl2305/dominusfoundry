import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Client Onboarding Engine | Dominus Foundry",
  description:
    "Move from signed deal to operational client — without chaos, missed steps, or eroded trust.",
};

export default function ClientOnboardingEnginePage() {
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
          <h1 className="heading-forge-xl text-white">Client Onboarding Engine</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Move from signed deal to operational client — without chaos or missed steps.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See what chaotic onboarding costs
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Winning the deal is only half the battle.
          </p>
          <p className="body-foundry text-slate-800">
            Chaotic onboarding erodes trust and delays revenue. Every missed step, forgotten document, or unclear handoff is a client who doubts whether they made the right choice.
          </p>
          <p className="body-foundry text-slate-800">
            Client Onboarding Engine replaces ad-hoc handoffs with a structured, repeatable system that starts working the moment the deal closes.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Triggers onboarding workflows after deal close",
              "Collects required documents and information",
              "Coordinates scheduling and kickoff",
              "Creates internal tasks and assignments",
              "Tracks progress and completion",
              "Maintains audit trail",
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
            Every client follows the same disciplined process.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Intake requirements enforced automatically",
              "Tasks generated and assigned",
              "Exceptions flagged early",
              "Every action logged for accountability",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Adaptable to different services without rebuilding.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Faster time-to-value for clients",
              "Fewer onboarding errors",
              "Clear ownership and accountability",
              "Reduced internal friction between teams",
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
              "Onboarding starts the day the deal closes — not when someone creates a checklist",
              "Every client gets the same experience regardless of who manages them",
              "Documents collected before the kickoff meeting — not during it",
              "Nothing falls through the cracks because the system enforces every step",
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
          <h2 className="heading-forge-lg">How It Fits</h2>
          <p className="body-foundry text-slate-800">
            Client Onboarding Engine runs as a standalone system from day one. When you&apos;re ready, it connects directly to Lead-to-Cash for invoicing after onboarding, Support Triage Desk when onboarding transitions to ongoing service, and Document Compliance for regulated onboarding requirements.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Who It&apos;s For</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Service providers",
              "Project-based businesses",
              "Professional firms",
              "Teams scaling beyond founder-led onboarding",
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
              "CRM systems",
              "Document storage and e-signature tools",
              "Calendars",
              "Internal task and project systems",
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
              Client Onboarding Engine works on its own — but when you&apos;re ready, it connects naturally with Lead-to-Cash, Support Triage Desk, Document Compliance, and more. Same architecture. No re-integration work.
            </p>
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              See all business tools →
            </Link>
          </div>
        </div>
      </section>

      <section id="onboarding-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Onboard once. Deliver consistently.</h2>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Chaotic Onboarding Costs
          </Button>
          <p className="text-sm text-slate-600">
            <Link href="/contact?interest=Client%20Onboarding%20Engine#contact" className="text-forge-700 underline hover:text-forge-900">
              Or talk to us directly
            </Link>
          </p>
          <p className="text-sm text-slate-600">Operational control system — accountable and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
