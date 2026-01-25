import Link from "next/link";
import Button from "../../components/Button";

export const metadata = {
  title: "Mentis | The Human-Governed Operating System | Dominus Foundry",
  description:
    "Mentis is where everything connects. A complete operational intelligence layer that coordinates decisions, maintains authority, and ensures nothing drifts.",
};

const capabilities = [
  {
    title: "Human Authority, Always",
    body: "AI assists. Humans decide. Every escalation path is explicit. Every override is logged. You stay in control because the system was designed that way.",
  },
  {
    title: "Complete Audit Trail",
    body: "Every decision traceable. Every action logged. Every outcome documented. When questions arise — from clients, regulators, or your own team — answers exist.",
  },
  {
    title: "No Drift",
    body: "Systems designed to hold their shape over time. Governance isn't bolted on after the fact — it's the foundation everything else is built upon.",
  },
  {
    title: "Unified Intelligence",
    body: "One operational brain across voice, invoicing, onboarding, support, and reporting. Information flows. Handoffs disappear. Your operation feels like one thing.",
  },
];

const systemsOnMentis = [
  {
    title: "Voice Concierge",
    what: "Calls answered, qualified, booked, and routed.",
    href: "/business-tools/voice-concierge",
  },
  {
    title: "Lead-to-Cash",
    what: "Invoices, reminders, and payments — on autopilot.",
    href: "/business-tools/lead-to-cash",
  },
  {
    title: "Client Onboarding Engine",
    what: "Signed to operational without missed steps.",
    href: "/business-tools/client-onboarding-engine",
  },
  {
    title: "Support Triage Desk",
    what: "Requests classified, routed, and resolved.",
    href: "/business-tools/support-triage-desk",
  },
  {
    title: "Ops Reporting & Intelligence",
    what: "Visibility across your entire operation.",
    href: "/business-tools/ops-reporting-intelligence",
  },
  {
    title: "Lead Intake → Booking",
    what: "Capture to calendar without friction.",
    href: "/business-tools/lead-intake-booking",
  },
];

const journeySteps = [
  {
    stage: "Start anywhere",
    description: "Pick the system that solves your most pressing problem. Voice Concierge for calls. Lead-to-Cash for invoicing. Each one works beautifully on its own.",
  },
  {
    stage: "Add when ready",
    description: "When another pain point emerges, add another system. They integrate naturally because they share the same architecture.",
  },
  {
    stage: "Watch it connect",
    description: "The call that booked the appointment that triggered the invoice that sent the reminder. One operation. Zero handoffs.",
  },
  {
    stage: "Unlock Mentis",
    description: "When your operation runs on multiple systems, Mentis becomes the intelligence layer that coordinates everything. The full experience.",
  },
];

export default function MentisPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl space-y-6">
            <h1 className="heading-forge-xl text-white leading-tight">
              Mentis
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white/90">
              The Human-Governed Operating System.
            </p>
            <p className="body-foundry text-white/80 md:text-xl">
              Where every system connects. Where every decision is traceable. Where humans stay in control and nothing drifts.
            </p>
            <p className="body-foundry text-white/80 md:text-lg">
              Mentis is the complete operational intelligence layer — the full realization of everything Dominus Foundry builds toward. Some organizations start here. Most discover it after experiencing what our individual systems can do.
            </p>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-forge-lg text-slate-900">What makes Mentis different</h2>
            <p className="body-foundry text-slate-700 md:text-lg">
              Most business software starts strong and slowly falls apart. Workflows break. Exceptions get ignored. The humans who should be in control end up chasing the system instead of running it.
            </p>
            <p className="body-foundry text-slate-700 md:text-lg">
              Mentis was designed to prevent that — not through features, but through architecture. Every capability exists because it serves human authority and operational clarity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card-forged rounded-2xl bg-white p-6 md:p-8 shadow-sm space-y-3">
                <h3 className="heading-forge-md text-slate-900">{cap.title}</h3>
                <p className="body-foundry text-slate-700">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Running on Mentis */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="label-foundry text-forge-300">The ecosystem</p>
            <h2 className="heading-forge-lg text-white">Systems designed with Mentis</h2>
            <p className="body-foundry text-white/80 md:text-lg">
              Each system is complete on its own — a star in its own right. But they all share the same DNA. The same governance. The same commitment to human authority. When you run multiple systems, they work together without friction because they were designed that way from day one.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {systemsOnMentis.map((system) => (
              <Link
                key={system.title}
                href={system.href}
                className="group rounded-xl bg-white/10 p-5 hover:bg-white/20 transition-colors"
              >
                <h3 className="font-semibold text-white group-hover:text-forge-200 transition-colors">
                  {system.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">{system.what}</p>
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <Link href="/business-tools" className="text-forge-300 font-semibold underline hover:text-white">
              See all systems →
            </Link>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-forge-lg text-slate-900">How organizations arrive at Mentis</h2>
            <p className="body-foundry text-slate-700 max-w-2xl mx-auto">
              Nobody starts by buying an operating system. They start by solving a problem. Then another. Then they realize everything connects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <div key={step.stage} className="relative">
                <div className="card-forged rounded-2xl bg-white p-6 shadow-sm h-full space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-forge-100 text-forge-700 font-bold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-slate-900">{step.stage}</h3>
                  </div>
                  <p className="text-sm text-slate-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Full Mentis Looks Like */}
      <section className="bg-tan-100">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="heading-forge-lg text-slate-900">When everything runs on Mentis</h2>
          </div>

          <div className="card-forged-premium rounded-2xl bg-white p-8 md:p-10 shadow-lg space-y-6">
            <p className="body-foundry text-slate-800 text-lg">
              A call comes in. Voice Concierge answers, qualifies the caller, and books an appointment. The booking triggers a task in Client Onboarding. Documents are collected automatically. When the engagement starts, Lead-to-Cash generates the invoice. Reminders go out on schedule. Payment is tracked. Ops Reporting surfaces the trend.
            </p>
            <p className="body-foundry text-slate-800">
              No manual handoffs. No dashboard babysitting. No wondering what happened to that lead from last Tuesday. One operation, fully connected, completely governed.
            </p>
            <p className="body-foundry text-slate-800 font-semibold">
              That&apos;s Mentis.
            </p>
          </div>
        </div>
      </section>

      {/* For Organizations Ready */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="heading-forge-lg text-slate-900">For organizations ready for the full experience</h2>
            <p className="body-foundry text-slate-700 max-w-2xl mx-auto">
              Mentis as a complete deployment is for organizations that want unified operational intelligence from day one. It&apos;s founder-intensive, deeply customized, and built for operators who understand the value of systems that don&apos;t drift.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-forged rounded-2xl bg-white p-6 shadow-sm space-y-3">
              <h3 className="heading-forge-md text-slate-900">Start with individual systems</h3>
              <p className="body-foundry text-slate-700">
                Most organizations begin here. Pick the system that solves your most urgent problem. Experience the quality. Add more when you&apos;re ready. Mentis emerges naturally as your systems grow.
              </p>
              <Button href="/business-tools" variant="forgeSecondary" className="w-full justify-center mt-4">
                Explore systems
              </Button>
            </div>

            <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 shadow-lg space-y-3">
              <h3 className="heading-forge-md text-slate-900">Deploy Mentis directly</h3>
              <p className="body-foundry text-slate-700">
                For organizations ready for unified operational intelligence from the start. A complete deployment with all systems integrated from day one.
              </p>
              <Button href="/start" className="w-full justify-center mt-4">
                Talk to us about Mentis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-forge-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-18 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">Systems that don&apos;t drift.</h2>
          <p className="body-foundry text-forge-100/80">
            Start with one. Add more. Watch everything connect.
          </p>
          <p className="body-foundry text-forge-100/80">
            That&apos;s the Mentis experience.
          </p>
        </div>
      </section>
    </>
  );
}
