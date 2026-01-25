import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Support Triage Desk | Dominus Foundry",
  description:
    "Intake, classify, route, and resolve support requests — without chaos.",
};

export default function SupportTriageDeskPage() {
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
          <h1 className="heading-forge-xl text-white">Support Triage Desk</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Intake, classify, route, and resolve support requests — without chaos.
          </p>
          <Button href="#support-cta" className="justify-center">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Support breaks when everything feels urgent.
          </p>
          <p className="body-foundry text-slate-800">
            Requests arrive through multiple channels. Priorities are unclear. Urgent issues compete with routine noise.
          </p>
          <p className="body-foundry text-slate-800">
            Support Triage Desk introduces structure at the front door — before tickets pile up.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Captures requests across email, chat, and voice",
              "Classifies by type, urgency, and impact",
              "Routes based on defined rules",
              "Tracks status and resolution",
              "Escalates critical issues automatically",
              "Maintains support audit trail",
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
            Support Triage Desk is built as a deterministic intake and routing system — not just a ticket inbox.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Intake sources feed structured request data",
              "Classification rules applied consistently",
              "Routing assigns ownership immediately",
              "Escalation paths activate without manual intervention",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Orchestration via n8n — adaptable to different support models without rebuilding core logic.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Faster response times",
              "Clear prioritization",
              "Fewer missed or forgotten tickets",
              "Reduced team burnout",
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
              "SaaS and managed service providers",
              "Internal IT or operations teams",
              "Organizations with multi-channel support intake",
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
              "Email systems",
              "Chat platforms",
              "Voice intake",
              "Task and ticketing systems",
              "Internal notification channels",
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
              Support Triage Desk is designed with Mentis — the same architecture that powers all our systems. Use it standalone, or connect it with Client Onboarding, Ops Reporting, and more. When you&apos;re ready to run your entire operation on one unified platform, everything clicks.
            </p>
            <Link href="/mentis" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Learn about Mentis →
            </Link>
          </div>
        </div>
      </section>

      <section id="support-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Bring order to support.</h2>
          <Button href="/contact?interest=Support%20Triage%20Desk#contact" className="justify-center">
            Talk to Us About Support Triage Desk
          </Button>
          <p className="text-sm text-slate-600">Designed with Mentis. Governed, auditable, and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
