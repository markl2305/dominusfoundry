import Link from "next/link";
import type { Metadata } from "next";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Intake Engine | Dominus Foundry",
  description:
    "Every lead. Every channel. One engine. Capture, qualify, route, and book before leads go cold.",
};

const channels = [
  {
    label: "Phone",
    description:
      "Voice agent answers, qualifies the caller, and books the appointment — or escalates to a human when it matters.",
  },
  {
    label: "Web Form",
    description:
      "Form submission triggers immediate qualification, routing, and booking confirmation. No lead sits in a queue.",
  },
  {
    label: "Live Chat",
    description:
      "Chat on your site is handled by an intake agent that knows your business, your availability, and your qualification criteria.",
  },
  {
    label: "Email",
    description:
      "Inbound emails are triaged, categorized, and responded to — with qualified leads routed to booking automatically.",
  },
  {
    label: "Social & DMs",
    description:
      "Inquiries from Instagram, Facebook, or other channels feed into the same intake pipeline. No lead source left unworked.",
  },
];

const solutions = [
  {
    title: "Intake Agent",
    description:
      "An AI-powered agent that handles first contact across every channel. Asks the right questions. Captures the right information. Moves the lead forward.",
  },
  {
    title: "Qualification Layer",
    description:
      "Every lead is scored against your criteria before it reaches your calendar. You define what a quality appointment looks like. We enforce it.",
  },
  {
    title: "Booking & Routing",
    description:
      "Qualified leads go straight to a booked appointment. Leads that need a human get routed with full context attached.",
  },
  {
    title: "Human Escalation",
    description:
      "When a situation requires human judgment, the right person gets notified — with a complete record of everything that happened before.",
  },
  {
    title: "Full Audit Trail",
    description:
      "Every interaction logged. Every decision traceable. You know exactly what was said, what was promised, and what happened next.",
  },
];

export default function IntakeEnginePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 relative">
          <p className="label-foundry text-forge-300 mb-4">Engine 01</p>
          <h1 className="heading-forge-xl text-white">Intake Engine</h1>
          <p className="mt-4 text-xl font-medium text-forge-300">
            Every lead. Every channel. One engine.
          </p>
          <p className="mt-6 max-w-2xl body-foundry text-white/80 md:text-lg">
            Phone rings, form submits, chat opens, email arrives — it doesn&apos;t
            matter where they come from. Intake Engine captures, qualifies,
            routes, and books before leads go cold. There is no separate voice
            product. No separate chat product. It&apos;s all intake.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/start" className="justify-center">
              Fix your front door
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
          <p className="label-foundry text-forge-700 mb-6">Where businesses bleed</p>
          <h2 className="heading-forge-lg mb-6">
            Most operations leak at the front door.
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Leads come in and nobody responds fast enough",
              "Phone calls interrupt staff who are doing real work",
              "Chat goes unanswered after hours",
              "Email inquiries sit in a shared inbox for days",
              "Appointments don't get booked because qualification is unclear",
              "No record of what was said or what was promised",
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

      {/* Channels */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">Every channel handled</p>
          <h2 className="heading-forge-lg mb-10">
            It doesn&apos;t matter where they find you.
          </h2>
          <div className="space-y-0 divide-y divide-bronze-300">
            {channels.map((channel) => (
              <div key={channel.label} className="flex gap-8 py-6">
                <div className="w-20 flex-shrink-0">
                  <span className="text-sm font-semibold text-slate-900">
                    {channel.label}
                  </span>
                </div>
                <p className="body-foundry text-slate-800">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-6">How it works</p>
          <h2 className="heading-forge-lg mb-10">
            The solutions inside Intake Engine.
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

      {/* DominusOS */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-300 mb-4">Powered by DominusOS</p>
          <h2 className="heading-forge-lg text-white mb-4">
            Human authority, preserved at every step.
          </h2>
          <p className="mb-6 max-w-2xl body-foundry text-white/80">
            DominusOS governs every decision Intake Engine makes. Escalation
            paths are explicit — not improvised. Every interaction is logged.
            Every booking is traceable. You stay in control of what happens when
            the system can&apos;t make the call.
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

      {/* What connects forward */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="label-foundry text-forge-700 mb-4">What comes next</p>
          <h2 className="heading-forge-lg mb-4">
            Intake Engine feeds Revenue Engine.
          </h2>
          <p className="mb-8 max-w-2xl body-foundry text-slate-800">
            Once a lead becomes a client, Revenue Engine takes over — onboarding
            them, invoicing them, and collecting without you chasing. The two
            engines share the same data and the same governance layer. No
            handoff chaos.
          </p>
          <Link
            href="/systems/revenue"
            className="text-forge-700 font-semibold underline hover:text-forge-900"
          >
            See Revenue Engine &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <h2 className="heading-forge-lg mb-4">
            Tell us where your leads are dying.
          </h2>
          <p className="mb-8 body-foundry text-slate-700">
            We&apos;ll show you exactly how Intake Engine fixes it — and what a
            quality appointment looks like on the other side.
          </p>
          <Button href="/start" className="justify-center">
            Talk with Mark &amp; Bri
          </Button>
        </div>
      </section>
    </>
  );
}
