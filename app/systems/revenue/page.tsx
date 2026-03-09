import Link from "next/link";
import type { Metadata } from "next";
import Button from "../../../components/Button";

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
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 relative">
          <p className="label-foundry text-forge-300 mb-4">Engine 02</p>
          <h1 className="heading-forge-xl text-white">Revenue Engine</h1>
          <p className="mt-4 text-xl font-medium text-forge-300">
            From signed deal to collected cash — without chasing.
          </p>
          <p className="mt-6 max-w-2xl body-foundry text-white/80 md:text-lg">
            The client said yes. Now everything has to work: onboarding,
            kickoffs, invoices, reminders, collections. Revenue Engine runs the
            full motion from signature to payment so you&apos;re not manually holding
            it together.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/start" className="justify-center">
              Stop the revenue leaks
            </Button>
            <Button
              href="/systems"
              variant="forgeSecondary"
              className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
            >
              See all systems
            </Button>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">Where revenue leaks</p>
          <h2 className="heading-forge-lg mb-6">
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
                className="flex items-start gap-3 card-forged rounded-xl p-4"
              >
                <span className="mt-1 text-forge-600 font-bold">&times;</span>
                <span className="body-foundry text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">How it works</p>
          <h2 className="heading-forge-lg mb-10">
            The solutions inside Revenue Engine.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="card-forged rounded-2xl p-6"
              >
                <h3 className="heading-forge-md text-slate-900 text-lg mb-2">
                  {solution.title}
                </h3>
                <p className="body-foundry text-slate-800">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In practice */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-4">In practice</p>
          <div className="card-forged-premium rounded-2xl p-8">
            <blockquote className="body-foundry text-slate-800 text-lg font-medium leading-relaxed">
              &ldquo;The Foundry team stabilized our books before automating a thing.
              Invoices go out, reminders happen, and cash shows up without a
              chase.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-slate-700">Owner, regional service business</p>
          </div>
        </div>
      </section>

      {/* DominusOS */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-300 mb-4">Powered by DominusOS</p>
          <h2 className="heading-forge-lg text-white mb-4">
            Every revenue action, logged and governed.
          </h2>
          <p className="mb-6 max-w-2xl body-foundry text-white/80">
            DominusOS means every invoice sent, every reminder triggered, every
            exception escalated is traceable. You know who did what, when, and
            why — without building a reporting system yourself.
          </p>
          <Button
            href="/dominus-os"
            variant="forgeSecondary"
            className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
          >
            Learn about DominusOS
          </Button>
        </div>
      </section>

      {/* Chain */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">The full chain</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="/systems/intake"
              className="border-2 border-bronze-300 px-4 py-2 text-slate-800 font-medium transition-colors hover:border-forge-600 hover:text-forge-700 rounded-lg"
            >
              Intake Engine
            </Link>
            <span className="text-forge-600">&rarr;</span>
            <span className="border-2 border-forge-600 bg-forge-700 px-4 py-2 text-white font-medium rounded-lg">
              Revenue Engine
            </span>
            <span className="text-forge-600">&rarr;</span>
            <Link
              href="/systems/ops"
              className="border-2 border-bronze-300 px-4 py-2 text-slate-800 font-medium transition-colors hover:border-forge-600 hover:text-forge-700 rounded-lg"
            >
              Ops Engine
            </Link>
          </div>
          <p className="mt-6 max-w-xl body-foundry text-slate-700">
            Revenue Engine sits between intake and operations. It receives
            qualified leads from Intake Engine and hands stable, paying clients
            to Ops Engine. Each engine is complete on its own — together, they
            run the full operation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <h2 className="heading-forge-lg mb-4">
            Tell us where your revenue is leaking.
          </h2>
          <p className="mb-8 body-foundry text-slate-700">
            We&apos;ll show you exactly which part of Revenue Engine seals it — and
            how long it takes to see the difference.
          </p>
          <Button href="/start" className="justify-center">
            Talk with Mark &amp; Bri
          </Button>
        </div>
      </section>
    </>
  );
}
