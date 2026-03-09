import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Lead Intake → Booking | Dominus Foundry",
  description:
    "Every hour a lead waits, your close rate drops. This system responds, qualifies, and books — automatically.",
};

export default function LeadIntakeBookingPage() {
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
          <h1 className="heading-forge-xl text-white">Lead Intake → Booking</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Every hour a lead waits, your close rate drops. This system captures inbound interest, qualifies it, and books the conversation — before your competitor picks up the phone.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Slow Response Costs You
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Leads that wait become leads that leave.
          </p>
          <p className="body-foundry text-slate-800">
            Research shows that responding within five minutes makes you 21 times more likely to qualify a lead. After thirty minutes, the odds collapse. Most businesses don&apos;t lose deals because of pricing or product — they lose them because nobody responded fast enough.
          </p>
          <p className="body-foundry text-slate-800">
            Lead Intake → Booking eliminates the delay. Every inbound lead gets a consistent, immediate path from first contact to scheduled conversation — no matter when they reach out or who&apos;s available.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Captures leads from forms, email, chat, or voice",
              "Applies qualification rules automatically",
              "Routes based on intent, urgency, or fit",
              "Books directly into live calendars",
              "Sends confirmations and reminders",
              "Logs every interaction",
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
            This system runs on rules, not guesswork.
          </p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Every lead follows a defined path from first touch to booked meeting",
              "Qualification rules are enforced consistently — regardless of volume or time of day",
              "Routing and booking happen automatically based on your criteria",
              "Exceptions are flagged, not ignored — nothing falls through the cracks",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Adaptable to different industries without starting from scratch. Your rules, your routing, your calendar — handled reliably every time.
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
              "Clean handoffs from marketing to operations",
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
              "Leads responded to in minutes instead of hours",
              "Qualification applied consistently — not based on who answers",
              "Booking happens automatically — no back-and-forth emails",
              "Every lead tracked from first touch to scheduled conversation",
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
              "Sales-driven organizations",
              "Teams with inbound lead volume",
              "Operators who care about conversion discipline",
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
              "Web forms",
              "Email",
              "Calendars",
              "CRM systems",
              "Messaging platforms",
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
            Lead Intake → Booking works as a standalone system — but it also connects directly to other parts of your operation. If leads come in by phone, it pairs with Voice Concierge. When a deal closes, it hands off to Client Onboarding. For invoicing and payment tracking, it feeds into Lead-to-Cash. Same architecture, no re-integration required.
          </p>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 space-y-4">
            <h3 className="heading-forge-md text-slate-900">Part of something larger</h3>
            <p className="body-foundry text-slate-700">
              Lead Intake → Booking works on its own — but connects naturally with Voice Concierge, Client Onboarding, and Lead-to-Cash when you&apos;re ready. Same architecture. No re-integration work.
            </p>
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              See all business tools →
            </Link>
          </div>
        </div>
      </section>

      <section id="lead-intake-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Stop losing ready buyers.</h2>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            See What Slow Response Costs You
          </Button>
          <p className="body-foundry text-slate-700">
            <Link href="/contact?interest=Lead%20Intake%20%E2%86%92%20Booking#contact" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Or talk to us directly
            </Link>
          </p>
          <p className="text-sm text-slate-600">Operational control system — accountable and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
