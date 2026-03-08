import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems | Dominus Foundry",
  description:
    "Three engines. Every operational problem your business faces maps to one of them.",
};

const systems = [
  {
    slug: "intake",
    name: "Intake Engine",
    tagline: "Every lead. Every channel. One engine.",
    description:
      "Phone rings, form submits, chat opens, email arrives — it doesn't matter. Intake Engine captures, qualifies, routes, and books before leads go cold. Voice, web, chat, email, social: all intake.",
    problems: [
      "Leads falling through the cracks",
      "Staff pulled off real work to answer phones",
      "Appointments not getting booked",
      "No record of what was said or promised",
    ],
    cta: "Fix your front door",
  },
  {
    slug: "revenue",
    name: "Revenue Engine",
    tagline: "From signed deal to collected cash — without chasing.",
    description:
      "The client said yes. Now everything has to work: onboarding, kickoffs, invoices, reminders, collections. Revenue Engine runs the full motion from signature to payment so you're not the one holding it together.",
    problems: [
      "New clients going dark after signing",
      "Invoices going out late or not at all",
      "Outstanding balances nobody is chasing",
      "Founder manually managing every handoff",
    ],
    cta: "Stop the revenue leaks",
  },
  {
    slug: "ops",
    name: "Ops Engine",
    tagline: "Your operation — visible, governed, not dependent on you.",
    description:
      "Support gets resolved. Reporting surfaces what matters. Paperwork doesn't pile up. People get hired. Vendors get managed. Everything that keeps your business running after the money comes in.",
    problems: [
      "Support requests falling into chaos",
      "No clear picture of what's happening week to week",
      "Compliance and document work eating staff time",
      "Hiring and procurement creating founder bottlenecks",
    ],
    cta: "Govern your operations",
  },
];

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-stone-200 px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            What We Build
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Three engines.
            <br />
            Every operational problem
            <br />
            maps to one of them.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-stone-500">
            We don't sell software features. We deploy systems that solve real
            operational problems — governed by DominusOS, built to hold their
            shape, designed to work together from day one.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-5xl space-y-0 divide-y divide-stone-200">
          {systems.map((system, i) => (
            <div key={system.slug} className="group py-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {/* Left */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-400">
                    Engine {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-3 text-3xl font-semibold tracking-tight text-stone-900">
                    {system.name}
                  </h2>
                  <p className="mb-6 text-base font-medium text-stone-500">
                    {system.tagline}
                  </p>
                  <p className="mb-8 text-base leading-relaxed text-stone-600">
                    {system.description}
                  </p>
                  <Link
                    href={`/systems/${system.slug}`}
                    className="inline-flex items-center gap-2 border border-stone-900 px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
                  >
                    {system.cta}
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                {/* Right — problem list */}
                <div className="lg:pl-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400">
                    Signs you need this
                  </p>
                  <ul className="space-y-3">
                    {system.problems.map((problem) => (
                      <li
                        key={problem}
                        className="flex items-start gap-3 text-sm text-stone-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-400" />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DominusOS connector */}
      <section className="border-t border-stone-200 bg-stone-950 px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            The foundation
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">
            All three engines run on DominusOS.
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-stone-400">
            DominusOS is the governance layer underneath everything we build.
            Human authority preserved. Every action logged. No drift. Start with
            one engine — they're designed to connect.
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

      {/* CTA */}
      <section className="border-t border-stone-200 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
            Not sure which engine fits first?
          </h2>
          <p className="mb-8 text-base text-stone-500">
            Tell us what's breaking. We'll tell you which engine fixes it — and
            what the path looks like from there.
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
