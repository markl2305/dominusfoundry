import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Client Onboarding Engine | Dominus Foundry",
  description:
    "Move from signed deal to operational client — without chaos or missed steps.",
};

export default function ClientOnboardingEnginePage() {
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
          <h1 className="heading-forge-xl text-white">Client Onboarding Engine</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Move from signed deal to operational client — without chaos or missed steps.
          </p>
          <Button href="#onboarding-cta" className="justify-center">
            See the Onboarding Flow
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Winning a deal is only half the battle.
          </p>
          <p className="body-foundry text-slate-800">
            Poor onboarding introduces confusion, delays delivery, and erodes trust before value is ever delivered.
          </p>
          <p className="body-foundry text-slate-800">
            Client Onboarding Engine replaces ad-hoc handoffs with a structured, repeatable system.
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
            Every client follows the same disciplined process unless explicitly routed otherwise.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Intake requirements enforced automatically",
              "Tasks and milestones generated programmatically",
              "Exceptions flagged early",
              "All actions logged for accountability",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Orchestration via n8n — adaptable to different services without rebuilding.
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
              Client Onboarding Engine is designed with Mentis — the same architecture that powers all our systems. Use it standalone, or connect it with Lead-to-Cash, Support Triage, and more. When you&apos;re ready to run your entire operation on one unified platform, everything clicks.
            </p>
            <Link href="/mentis" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Learn about Mentis →
            </Link>
          </div>
        </div>
      </section>

      <section id="onboarding-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Onboard once. Deliver consistently.</h2>
          <Button href="/contact?interest=Client%20Onboarding%20Engine#contact" className="justify-center">
            Talk to Us About Client Onboarding
          </Button>
          <p className="text-sm text-slate-600">Designed with Mentis. Governed, auditable, and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
