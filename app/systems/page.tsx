import Link from "next/link";
import type { Metadata } from "next";
import Button from "../../components/Button";

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
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 relative">
          <p className="label-foundry text-forge-300 mb-4">What We Build</p>
          <h1 className="heading-forge-xl text-white leading-tight">
            Three engines.
            <br />
            Every operational problem
            <br />
            maps to one of them.
          </h1>
          <p className="mt-6 body-foundry text-white/80 max-w-2xl md:text-lg">
            We don&apos;t sell software features. We deploy systems that solve real
            operational problems — governed by DominusOS, built to hold their
            shape, designed to work together from day one.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-0 divide-y divide-bronze-300">
          {systems.map((system, i) => (
            <div key={system.slug} className="py-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {/* Left */}
                <div>
                  <p className="label-foundry text-forge-700 mb-3">
                    Engine {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="heading-forge-lg mb-3">{system.name}</h2>
                  <p className="mb-6 body-foundry text-slate-700 font-medium">
                    {system.tagline}
                  </p>
                  <p className="mb-8 body-foundry text-slate-800">
                    {system.description}
                  </p>
                  <Button href={`/systems/${system.slug}`} className="justify-center">
                    {system.cta}
                  </Button>
                </div>

                {/* Right — problem list */}
                <div className="lg:pl-10">
                  <p className="label-foundry text-forge-700 mb-4">
                    Signs you need this
                  </p>
                  <ul className="space-y-3">
                    {system.problems.map((problem) => (
                      <li
                        key={problem}
                        className="flex items-start gap-3 body-foundry text-slate-800"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forge-600" />
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
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-300 mb-4">The foundation</p>
          <h2 className="heading-forge-lg text-white mb-4">
            All three engines run on DominusOS.
          </h2>
          <p className="mb-8 max-w-2xl body-foundry text-white/80">
            DominusOS is the governance layer underneath everything we build.
            Human authority preserved. Every action logged. No drift. Start with
            one engine — they&apos;re designed to connect.
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

      {/* CTA */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <h2 className="heading-forge-lg mb-4">
            Not sure which engine fits first?
          </h2>
          <p className="mb-8 body-foundry text-slate-700">
            Tell us what&apos;s breaking. We&apos;ll tell you which engine fixes it — and
            what the path looks like from there.
          </p>
          <Button href="/start" className="justify-center">
            Talk with Mark &amp; Bri
          </Button>
        </div>
      </section>
    </>
  );
}
