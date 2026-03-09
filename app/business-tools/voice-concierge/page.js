import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Voice Concierge | Dominus Foundry",
  description:
    "A voice system that answers, qualifies, books, and routes calls — built with rules you define and outcomes you can verify.",
};

export default function VoiceConciergeToolPage() {
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
          <h1 className="heading-forge-xl text-white">Voice Concierge</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Every missed call is missed revenue. Voice Concierge answers, qualifies, and routes calls — on your terms, on your schedule, with nothing falling through the cracks.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See what missed calls cost you
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Most businesses don&apos;t lose leads because of demand. They lose them because nobody picked up the phone.
          </p>
          <p className="body-foundry text-slate-800">
            After hours, weekends, lunch breaks, high-volume days — calls go to voicemail and prospects move on. The ones who do get through wait on hold or talk to someone who can&apos;t answer their questions.
          </p>
          <p className="body-foundry text-slate-800">
            Voice Concierge eliminates that gap. Every call gets answered. Every caller gets qualified. No leads sit waiting for a callback that comes too late.
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
            Voice Concierge is a rules-based system — not a chatbot hoping for the best.
          </p>
          <p className="body-foundry text-slate-800">
            Every call follows defined rules. Escalation paths are explicit. Nothing is left to chance.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Every step is repeatable and accountable",
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
          <h2 className="heading-forge-lg">What Changes When This Runs</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Calls answered in seconds instead of going to voicemail",
              "Every caller qualified before a human picks up",
              "Zero leads lost after hours or on weekends",
              "Complete record of every conversation — who called, what was said, what happened next",
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
            Voice Concierge runs as a standalone system from day one. When you&apos;re ready, it connects directly to Lead Intake, Client Onboarding, and Lead-to-Cash — no re-engineering, no migration work.
          </p>
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
              Voice Concierge works on its own — but when you&apos;re ready, it connects naturally with Lead Intake, Client Onboarding, Lead-to-Cash, and more. Same architecture. No re-integration work.
            </p>
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              See all business tools →
            </Link>
          </div>
        </div>
      </section>

      <section id="voice-concierge-demo" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Never miss another call.</h2>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Missed Calls Cost You
          </Button>
          <p className="text-sm text-slate-600">
            <Link href="/contact?interest=Voice%20Concierge#contact" className="text-forge-700 underline hover:text-forge-900">
              Or talk to us directly
            </Link>
          </p>
          <p className="text-sm text-slate-600">Operational control system — accountable and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
