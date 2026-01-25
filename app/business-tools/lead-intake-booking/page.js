import Button from "../../../components/Button";

export const metadata = {
  title: "Lead Intake → Booking | Dominus Foundry",
  description:
    "Turn inbound inquiries into booked conversations — without delays or dropped leads.",
};

export default function LeadIntakeBookingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Lead Intake → Booking</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Turn inbound inquiries into booked conversations — without delays or dropped leads.
          </p>
          <Button href="#lead-intake-cta" className="justify-center">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Speed and consistency close deals.
          </p>
          <p className="body-foundry text-slate-800">
            Most businesses don&apos;t lose leads because of demand. They lose them because of friction — slow responses, inconsistent qualification, manual scheduling.
          </p>
          <p className="body-foundry text-slate-800">
            Lead Intake → Booking removes that friction entirely.
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
            This system is built as an operational pipeline — not a marketing gimmick.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Intake sources feed structured data into workflow logic",
              "Qualification rules enforced consistently",
              "Routing and booking handled automatically",
              "Exceptions flagged, not ignored",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Workflow orchestration via n8n — adaptable to different industries without custom code.
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

      <section className="bg-[var(--foundry-bg-alt)]">
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

      <section id="lead-intake-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Stop losing ready buyers.</h2>
          <Button href="/contact?interest=Lead%20Intake%20%E2%86%92%20Booking#contact" className="justify-center">
            Talk to Us About Lead Intake → Booking
          </Button>
          <p className="text-xs text-slate-700">Built to Dominus Foundry architectural standards.</p>
        </div>
      </section>
    </>
  );
}
