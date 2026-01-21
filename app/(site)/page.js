import { Suspense } from "react";
import Button from "../../components/Button";
import FoundryLeadForm from "../../components/FoundryLeadForm";
import ContactCTA from "../../components/ContactCTA";

export const metadata = {
  title: "Dominus Foundry | Custom AI systems that plug into how your business runs",
  description:
    "Operator-grade AI infrastructure for businesses that are done with tools that don't actually work. Voice agents, booking systems, and workflows designed around your operations.",
};

const outcomes = [
  {
    title: "Calls handled without dropped bookings",
  },
  {
    title: "Cash collection without daily chasing",
  },
  {
    title: "Onboarding that stays clean from signed to live",
  },
  {
    title: "Operator reporting that flags exceptions fast",
  },
  {
    title: "Support triage that protects focus and SLAs",
  },
];

const toolFamilyPreview = [
  {
    title: "Voice Concierge",
    body: "Answer, qualify, book, and route calls with governed scripts and audit-ready transcripts.",
  },
  {
    title: "Lead Intake to Booking",
    body: "Capture and book inbound demand before it cools off, with escalation rules that keep owners in control.",
  },
  {
    title: "Lead-to-Cash (Invoicing + AR)",
    body: "Keep invoicing, reminders, and payments flowing with fewer manual touches and cleaner handoffs.",
  },
  {
    title: "Client Onboarding Engine",
    body: "Move from signed to launched without chaos, with clear ownership, tasks, and timelines.",
  },
  {
    title: "Ops Reporting & Intelligence",
    body: "Unified scoreboards and weekly operator briefings that surface the signals you need.",
  },
];

const principles = [
  {
    title: "System-first, not feature-first",
    body: "Every build starts from your real workflows and constraints, then we choose tools and integrations to match.",
  },
  {
    title: "Operator-speed",
    body: "You shouldn't need a full-time admin to keep a system alive. Our builds are designed to run light and stay understandable.",
  },
  {
    title: "Done-with-you, then done-for-you",
    body: "We design with you, launch with you, and keep systems tuned as your business evolves.",
  },
];

const steps = [
  {
    title: "Assess",
    body: "We map your current reality - numbers, calls, tools, and bottlenecks.",
  },
  {
    title: "Architect",
    body: "We design a simple, durable system that fits your team and tech stack.",
  },
  {
    title: "Build & Launch",
    body: "We implement, migrate, and test until it's safe to hand off.",
  },
  {
    title: "Support & Iterate",
    body: "We stay available for tuning, adjustments, and future builds.",
  },
];

const useCases = [
  {
    title: "Service founder with messy finances",
    body: "Needs clean books and reconciled history without downtime.",
  },
  {
    title: "Ops lead at a membership club",
    body: "Missing calls during peak hours and losing bookings.",
  },
  {
    title: "GM juggling invoicing and AR",
    body: "Wants invoices, reminders, and payments to run without chasing.",
  },
  {
    title: "Lean team living in spreadsheets",
    body: "Ready to replace ad hoc workflows with durable tools.",
  },
  {
    title: "Owner tired of interruptions",
    body: "Needs calls handled and questions answered without pulling staff.",
  },
  {
    title: "Operator planning the next change",
    body: "Wants a partner who can build, run, and adjust as the operation shifts.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="label-foundry text-orange-200">The Foundry</p>
              <h1 className="heading-forge-xl text-white leading-tight">
                Custom AI systems that plug into how your business actually runs
              </h1>
              <div className="divider-forged" />
              <p className="body-foundry text-white md:text-lg foundry-hero-lead">
                Operator-grade AI infrastructure for businesses that are done with tools that don&apos;t actually work.
              </p>
              <p className="body-foundry font-semibold md:text-xl text-white">
                Voice agents that connect to Square. Booking systems that notify the right person. Workflows that run without babysitting.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/start" className="justify-center">
                  Tell us what&apos;s broken
                </Button>
                <Button
                  href="#social-club"
                  variant="forgeSecondary"
                  className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
                >
                  See what we built
                </Button>
              </div>
            </div>

            <div className="card-forged-premium rounded-2xl p-6 shadow-xl bg-gradient-to-br from-forge-50/70 to-white text-slate-900 space-y-4">
              <h2 className="heading-forge-md">Custom systems, forged on demand.</h2>
              <p className="text-sm text-slate-900">
                These are examples of systems we&apos;ve built. Yours will be designed around how your business actually operates — your POS, calendar, and workflows.
              </p>
              <ul className="space-y-2 text-sm text-slate-900">
                {outcomes.map((outcome) => (
                  <li key={outcome.title} className="flex gap-2">
                    <span className="text-forge-700 font-bold">•</span>
                    <span>{outcome.title}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-900">
                Voice Concierge is our flagship example system. Every build is custom to your operation.
              </p>
              <Button href="/business-tools" className="w-full justify-center">
                See example systems
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Example systems we&apos;ve built</h2>
            <p className="body-foundry text-slate-900 max-w-3xl mx-auto">
              These are examples of systems we&apos;ve built. Yours will be designed around how your business actually operates — your POS, calendar, and workflows.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {toolFamilyPreview.map((tool, idx) => (
              <div key={tool.title} className="group">
                <div className="card-forged-premium rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors cursor-pointer group-hover:bg-white/70 group-hover:border-forge-200">
                  <div className="flex items-center justify-between">
                    <p className="label-foundry">Example {idx + 1}</p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forge-700 text-white font-semibold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="heading-forge-md text-slate-900">{tool.title}</h3>
                    <p className="mt-2 body-foundry text-slate-900">{tool.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center space-y-4">
            <p className="body-foundry text-slate-900">
              Voice Concierge is our flagship example system. Every build is custom to your operation.
            </p>
            <Button href="/business-tools" className="justify-center">
              See more examples
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-club" className="bg-gradient-to-b from-tan-100 to-tan-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <p className="label-foundry text-forge-700">Example build</p>
            <h2 className="heading-forge-lg text-slate-900">Social club + Square</h2>
          </div>
          <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl max-w-4xl mx-auto">
            <p className="body-foundry text-slate-900 text-lg leading-relaxed">
              We built a system for a private social club that takes beer orders by voice and sends them straight into Square — and books private parties with automatic owner notification. No app to check. No dashboard to babysit. It just works.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">✓</span>
                <span className="body-foundry text-slate-800">Voice beer orders → Square</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">✓</span>
                <span className="body-foundry text-slate-800">Private party bookings → owner notified automatically</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">✓</span>
                <span className="body-foundry text-slate-800">No dashboard babysitting</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/start" className="justify-center">
                Tell us what&apos;s broken
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentis Section */}
      <section className="bg-gradient-to-b from-tan-200 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="heading-forge-lg text-slate-900">Mentis — governance under the hood when systems interlock</h2>
            <p className="body-foundry text-slate-900 max-w-4xl mx-auto">
              Mentis is the Human-Governed Intelligence layer we use when multiple systems must coordinate. Permissions, audit trails, and clear ownership — so delegation stays accountable.
            </p>
            <p className="text-sm text-slate-800 max-w-3xl mx-auto">
              You won&apos;t see Mentis as a dashboard you log into. You&apos;ll feel it when your systems behave like one governed operation instead of isolated automations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Why a foundry?</h2>
            <p className="body-foundry max-w-3xl mx-auto">
              We don't ship random tools. We forge operator-grade systems with clear inputs, clear outputs, and clear ownership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="card-forged rounded-2xl p-6 shadow-sm">
                <h3 className="heading-forge-md text-slate-900">{principle.title}</h3>
                <p className="mt-2 body-foundry">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">How we work across any build.</h2>
            <p className="body-foundry text-slate-800">Same operator-grade approach for every tool family.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="label-foundry">Step {index + 1}</p>
                  <span className="text-sm font-semibold text-forge-700">Operator path</span>
                </div>
                <h3 className="mt-3 heading-forge-md text-slate-900">{step.title}</h3>
                <p className="mt-2 body-foundry">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="md:col-span-1 space-y-3">
              <h2 className="heading-forge-lg">Operators behind the systems.</h2>
              <p className="body-foundry">
                Built and run by Mark &amp; Bri Lord - operators who balance code, finance, and day-to-day operations.
              </p>
              <p className="text-sm text-slate-700">
                Client stories are being gathered now. In the meantime, here are the outcomes teams ask us to replicate.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4">
              <div className="card-forged-premium rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-slate-800 leading-relaxed">
                  “The Foundry team stabilized our books before automating a thing. Invoices go out, reminders happen, and cash shows up without a chase.”
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">Owner, regional service business</p>
              </div>
              <div className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-800 leading-relaxed">
                  “Calls are answered, bookings are logged, and we see exactly what was said without adding headcount. The guardrails keep us comfortable.”
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">General manager, membership club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Who we serve.</h2>
            <p className="body-foundry max-w-3xl mx-auto">If you're an owner or operator carrying the weight of systems, we're built for you.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="heading-forge-md text-slate-900">{useCase.title}</h3>
                <p className="mt-2 body-foundry">{useCase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talk" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6">
          <span id="contact" className="block h-0 w-0" aria-hidden />
          <div className="space-y-3 text-center">
            <h2 className="heading-forge-lg">Tell us where your systems are breaking.</h2>
            <p className="body-foundry max-w-3xl mx-auto">
              Share a bit about your operation and where things feel heavy. We'll point you to the right tool family or a Mentis-led build.
            </p>
          </div>
          <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl">
            <Suspense fallback={null}>
              <FoundryLeadForm />
            </Suspense>
          </div>
          <p className="text-sm text-slate-700 text-center">
            Prefer a direct call? <a className="underline font-semibold" href="tel:+18667103313">(866) 710-3313</a>. We respond within one business day.
          </p>
          <div className="flex justify-center">
            <ContactCTA />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-forge-900 to-steel-700 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-18 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">Your business deserves systems that hold up under pressure.</h2>
          <p className="body-foundry text-forge-50/90">
            If calls, cash flow, or onboarding are costing you time and sleep, it&apos;s time to forge something better.
          </p>
          <Button href="/start" className="justify-center">
            Tell us what&apos;s broken
          </Button>
        </div>
      </section>
    </>
  );
}
