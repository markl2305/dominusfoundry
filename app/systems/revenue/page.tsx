import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Engine | Dominus Foundry",
  description:
    "From signed deal to collected cash — without chasing. Onboarding, invoicing, and collections running without you in the loop.",
};

const solutions = [
  {
    title: "Client Onboarding",
    description:
      "The moment a client signs, a disciplined sequence begins. Documents collected. Kickoff scheduled. Tasks assigned. Every client follows the same path — unless you explicitly route them otherwise.",
  },
  {
    title: "Invoicing Cadence",
    description:
      "Invoices go out on time, every time. Tied to milestones, schedules, or project completion — whatever your billing model requires. No manual triggers. No forgotten invoices.",
  },
  {
    title: "Collections & Follow-Up",
    description:
      "Reminders follow a cadence you define. Escalation paths are explicit. Outstanding balances surface before they become problems — not after they become write-offs.",
  },
  {
    title: "Payment Tracking",
    description:
      "Every payment logged. Every outstanding balance visible. No spreadsheet. No hunting through email threads for confirmation.",
  },
  {
    title: "Exception Surfacing",
    description:
      "When something breaks from the expected path — a late payment, a missing document, a missed kickoff — it surfaces to the right person with full context.",
  },
];

export default function RevenueEnginePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-stone-200 px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            Engine 02
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Revenue Engine
          </h1>
          <p className="mb-4 text-xl font-medium text-stone-500">
            From signed deal to collected cash — without chasing.
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-stone-600">
            The client said yes. Now everything has to work: onboarding,
            kickoffs, invoices, reminders, collections. Revenue Engine runs the
            full motion from signature to payment so you're not manually holding
            it together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
            >
              Stop the revenue leaks
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/systems"
              className="inline-flex items-center gap-2 border border-stone-300 px-8 py-4 text-sm font-medium text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              See all systems
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-stone-200 bg-stone-50 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-stone-400">
            Where revenue leaks
          </p>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-stone-900">
            Winning the deal is only half the job.
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "New clients go quiet after signing — nobody knows what's next",
              "Onboarding is manual, chaotic, and different every time",
              "Invoices go out late because someone has to remember to send them",
              "Outstanding balances pile up because chasing feels awkward",
              "Cash flow surprises the owner — month after month",
              "The founder is the glue holding every handoff together",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-sm border border-stone-200 bg-white p-4"
              >
                <span className="mt-1 text-stone-300">✕</span>
                <span className="text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-b border-stone-200 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-stone-400">
            How it works
          </p>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-stone-900">
            The solutions inside Revenue Engine.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="border border-stone-200 p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-stone-900">
                  {solution.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In practice */}
      <section className="border-b border-stone-200 bg-stone-50 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            In practice
          </p>
          <blockquote className="mb-6 text-lg font-medium leading-relaxed text-stone-700">
            "The Foundry team stabilized our books before automating a thing.
            Invoices go out, reminders happen, and cash shows up without a
            chase."
          </blockquote>
          <p className="text-sm text-stone-500">Owner, regional service business</p>
        </div>
      </section>

      {/* DominusOS */}
      <section className="border-b border-stone-200 bg-stone-950 px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            Powered by DominusOS
          </p>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Every revenue action, logged and governed.
          </h2>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-stone-400">
            DominusOS means every invoice sent, every reminder triggered, every
            exception escalated is traceable. You know who did what, when, and
            why — without building a reporting system yourself.
          </p>
          <Link
            href="/dominus-os"
            className="inline-flex items-center gap-2 border border-stone-600 px-6 py-3 text-sm font-medium text-stone-300 transition-colors hover:border-white hover:text-white"
          >
            Learn about DominusOS
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Chain */}
      <section className="border-b border-stone-200 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-stone-400">
            The full chain
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="/systems/intake"
              className="border border-stone-200 px-4 py-2 text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              Intake Engine
            </Link>
            <span className="text-stone-300">→</span>
            <span className="border border-stone-900 bg-stone-900 px-4 py-2 text-white">
              Revenue Engine
            </span>
            <span className="text-stone-300">→</span>
            <Link
              href="/systems/ops"
              className="border border-stone-200 px-4 py-2 text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              Ops Engine
            </Link>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-500">
            Revenue Engine sits between intake and operations. It receives
            qualified leads from Intake Engine and hands stable, paying clients
            to Ops Engine. Each engine is complete on its own — together, they
            run the full operation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
            Tell us where your revenue is leaking.
          </h2>
          <p className="mb-8 text-base text-stone-500">
            We'll show you exactly which part of Revenue Engine seals it — and
            how long it takes to see the difference.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            Talk with Mark & Bri
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
