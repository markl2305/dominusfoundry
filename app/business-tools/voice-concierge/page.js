import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Voice Concierge | Dominus Foundry",
  description:
    "A governed voice system that answers, qualifies, books, and routes calls — exactly the way your business operates.",
};

export default function VoiceConciergeToolPage() {
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
          <h1 className="heading-forge-xl text-white">Voice Concierge</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            A governed voice system that answers, qualifies, books, and routes calls — exactly the way your business operates.
          </p>
          <Button href="#voice-concierge-demo" className="justify-center">
            Request a Demo
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Most businesses don&apos;t lose leads because of demand. They lose them because of friction.
          </p>
          <p className="body-foundry text-slate-800">
            Slow responses. Inconsistent qualification. Manual scheduling that delays while prospects cool.
          </p>
          <p className="body-foundry text-slate-800">
            Voice Concierge removes that friction — acting like a trained front-desk operator, not a script-reading bot.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Answers calls and qualifies against your rules",
              "Books appointments directly into calendars",
              "Captures structured lead data",
              "Routes to humans when required",
              "Logs transcripts and outcomes",
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
            Voice Concierge is orchestrated as a deterministic workflow — not a chatbot.
          </p>
          <p className="body-foundry text-slate-800">
            Every call follows defined rules, escalation paths, and data-capture standards.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Workflow orchestration via n8n",
              "Voice, SMS, and scheduling as modular components",
              "Outcomes logged for traceability",
              "Exceptions trigger escalation, not silent failure",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            No hallucinations. No guesswork. Disciplined execution.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Faster response times",
              "Fewer dropped leads",
              "No dependence on manual follow-up",
              "Clean handoffs between marketing and operations",
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
              "Service businesses with inbound call volume",
              "Professional firms requiring accurate intake",
              "Operators who can't afford missed opportunities",
              "Teams needing coverage without headcount",
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

      <section className="bg-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 space-y-4">
            <h3 className="heading-forge-md text-slate-900">Part of something larger</h3>
            <p className="body-foundry text-slate-700">
              Voice Concierge is designed with Mentis — the same architecture that powers all our systems. Use it standalone, or connect it with Lead Intake, Client Onboarding, and more. When you&apos;re ready to run your entire operation on one unified platform, everything clicks.
            </p>
            <Link href="/mentis" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Learn about Mentis →
            </Link>
          </div>
        </div>
      </section>

      <section id="voice-concierge-demo" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Never miss another call.</h2>
          <Button href="/contact?interest=Voice%20Concierge#contact" className="justify-center">
            Talk to Us About Voice Concierge
          </Button>
          <p className="text-sm text-slate-600">Designed with Mentis. Governed, auditable, and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
