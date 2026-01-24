import Button from "../../../components/Button";

export const metadata = {
  title: "Client Onboarding Engine | Dominus Foundry",
  description:
    "Client Onboarding Engine moves from signed deal to fully operational client without chaos, delays, or missed steps.",
};

export default function ClientOnboardingEnginePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Client Onboarding Engine</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Move from signed deal to fully operational client — without chaos, delays, or missed steps.
          </p>
          <Button href="#onboarding-flow" className="justify-center">
            See the Onboarding Flow
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Closed Deals Still Fail Without Structure</h2>
          <p className="body-foundry text-slate-800">
            Winning a deal is only half the battle. Poor onboarding introduces confusion, delays delivery, and erodes trust before real value is ever delivered.
          </p>
          <p className="body-foundry text-slate-800">
            Client Onboarding Engine replaces ad-hoc handoffs with a structured, repeatable onboarding system.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Triggers onboarding workflows automatically after deal close",
              "Collects required documents and information",
              "Coordinates scheduling and kickoff steps",
              "Creates internal tasks and assignments",
              "Tracks onboarding progress and completion",
              "Maintains a complete onboarding audit trail",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="onboarding-flow" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Designed as an Operational Pipeline</h2>
          <p className="body-foundry text-slate-800">
            Client Onboarding Engine is built as a deterministic workflow — every client follows the same disciplined process unless explicitly routed otherwise.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Intake requirements are enforced automatically",
              "Tasks and milestones are generated programmatically",
              "Exceptions are flagged early instead of discovered late",
              "All actions are logged for visibility and accountability",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Workflow orchestration is handled via n8n, allowing onboarding to adapt to different services and engagement models without rebuilding the system.
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
          <h2 className="heading-forge-lg">Who It’s For</h2>
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

      <section className="bg-[var(--foundry-bg)]">
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

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Onboard Once. Deliver Consistently.</h2>
          <Button href="/contact?interest=Client%20Onboarding%20Engine#contact" className="justify-center">
            Talk to Us About Client Onboarding
          </Button>
          <p className="text-xs text-slate-700">Built to Dominus Foundry architectural standards.</p>
        </div>
      </section>
    </>
  );
}
