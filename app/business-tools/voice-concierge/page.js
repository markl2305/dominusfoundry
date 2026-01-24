import Button from "../../../components/Button";

export const metadata = {
  title: "Voice Concierge | Dominus Foundry",
  description:
    "Voice Concierge is a governed AI voice system that answers, qualifies, books, routes, and escalates calls exactly the way your business operates.",
};

export default function VoiceConciergeToolPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Voice Concierge</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            A governed AI voice system that answers, qualifies, books, routes, and escalates calls — exactly the way your business operates.
          </p>
          <Button href="#voice-concierge-demo" className="justify-center">
            Request a Demo
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Missed Calls Cost Real Money</h2>
          <p className="body-foundry text-slate-800">
            Every missed call is a lost opportunity. Every rushed call introduces risk. Traditional phone systems don’t scale with your business, and most “AI voice bots” create more frustration than value.
          </p>
          <p className="body-foundry text-slate-800">
            Voice Concierge exists to solve that gap — by acting like a trained front-desk operator, not a script-reading robot.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What Voice Concierge Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Answers inbound calls 24/7",
              "Qualifies callers based on your rules",
              "Captures structured lead and request data",
              "Books appointments directly into live calendars",
              "Routes calls when human intervention is required",
              "Logs transcripts and outcomes automatically",
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
          <h2 className="heading-forge-lg">Designed as an Operational System — Not a Bot</h2>
          <p className="body-foundry text-slate-800">
            Voice Concierge is orchestrated using deterministic workflows and governed decision logic. Every call follows defined rules, escalation paths, and data-capture standards.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Workflow orchestration is handled via n8n",
              "Voice, SMS, and scheduling tools are integrated as modular components",
              "Call outcomes are logged for traceability and review",
              "Exceptions trigger human escalation, not silent failure",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            No hallucinations. No guesswork. Just disciplined execution.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Who It’s For</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Service businesses with inbound call volume",
              "Professional firms that require accurate intake",
              "Operators who can’t afford missed opportunities",
              "Teams that need coverage without headcount bloat",
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
          <h2 className="heading-forge-lg">Mentis</h2>
          <p className="body-foundry text-slate-800">Mentis.</p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Key Integrations</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Calendars (Google, Microsoft)",
              "Voice & SMS platforms",
              "CRM and intake systems",
              "Internal escalation channels",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="voice-concierge-demo" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Never Miss Another Call</h2>
          <Button href="/contact?interest=Voice%20Concierge#contact" className="justify-center">
            Talk to Us About Voice Concierge
          </Button>
          <p className="text-xs text-slate-700">Built to Dominus Foundry architectural standards.</p>
        </div>
      </section>
    </>
  );
}
