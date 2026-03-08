import Link from "next/link";
import type { Metadata } from "next";

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
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-stone-200 px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            Engine 01
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Intake Engine
          </h1>
          <p className="mb-4 text-xl font-medium text-stone-500">
            Every lead. Every channel. One engine.
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-stone-600">
            Phone rings, form submits, chat opens, email arrives — it doesn't
            matter where they come from. Intake Engine captures, qualifies,
            routes, and books before leads go cold. There is no separate voice
            product. No separate chat product. It's all intake.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
            >
              Fix your front door
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
            Where businesses bleed
          </p>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-stone-900">
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
                className="flex items-start gap-3 rounded-sm border border-stone-200 bg-white p-4"
              >
                <span className="mt-1 text-stone-300">✕</span>
                <span className="text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="border-b border-stone-200 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-stone-400">
            Every channel handled
          </p>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-stone-900">
            It doesn't matter where they find you.
          </h2>
          <div className="space-y-0 divide-y divide-stone-200">
            {channels.map((channel) => (
              <div key={channel.label} className="flex gap-8 py-6">
                <div className="w-20 flex-shrink-0">
                  <span className="text-sm font-semibold text-stone-900">
                    {channel.label}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-stone-600">
                  {channel.description}
                </p>
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
            The solutions inside Intake Engine.
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

      {/* DominusOS */}
      <section className="border-b border-stone-200 bg-stone-950 px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            Powered by DominusOS
          </p>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Human authority, preserved at every step.
          </h2>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-stone-400">
            DominusOS governs every decision Intake Engine makes. Escalation
            paths are explicit — not improvised. Every interaction is logged.
            Every booking is traceable. You stay in control of what happens when
            the system can't make the call.
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

      {/* What connects forward */}
      <section className="border-b border-stone-200 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            What comes next
          </p>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
            Intake Engine feeds Revenue Engine.
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-stone-600">
            Once a lead becomes a client, Revenue Engine takes over — onboarding
            them, invoicing them, and collecting without you chasing. The two
            engines share the same data and the same governance layer. No
            handoff chaos.
          </p>
          <Link
            href="/systems/revenue"
            className="inline-flex items-center gap-2 border border-stone-300 px-6 py-3 text-sm font-medium text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
          >
            See Revenue Engine
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
            Tell us where your leads are dying.
          </h2>
          <p className="mb-8 text-base text-stone-500">
            We'll show you exactly how Intake Engine fixes it — and what a
            quality appointment looks like on the other side.
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
