import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ops Engine | Dominus Foundry",
  description:
    "Your operation — visible, governed, and not dependent on you. Support, reporting, compliance, hiring, and vendor management without the chaos.",
};

const solutions = [
  {
    title: "Support Triage",
    description:
      "Support requests are captured, classified, and routed the moment they come in. The right person gets the right ticket with full context — no lost issues, no duplicated effort, no chaos.",
  },
  {
    title: "Ops Reporting",
    description:
      "See what matters across sales, delivery, and finance without building a dashboard. Key numbers surface on a cadence. Exceptions get flagged before they become crises.",
  },
  {
    title: "Document & Compliance",
    description:
      "Contracts, compliance docs, and operational paperwork are collected, routed, and stored without piling up on someone's desk. Deadlines don't get missed because a human forgot.",
  },
  {
    title: "Recruiting & Hiring",
    description:
      "Good people get hired without the founder becoming the bottleneck. Job postings, applicant intake, screening, and scheduling — all governed and auditable.",
  },
  {
    title: "Vendor & Purchasing",
    description:
      "Procurement doesn't create chaos or cost overruns. Purchase requests, approvals, and vendor communications follow a defined process — not whoever had time to deal with it.",
  },
];

export default function OpsEnginePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-stone-200 px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            Engine 03
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Ops Engine
          </h1>
          <p className="mb-4 text-xl font-medium text-stone-500">
            Your operation — visible, governed, not dependent on you.
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-stone-600">
            Everything that keeps your business running after the money comes
            in. Support gets resolved. Reporting surfaces what matters.
            Paperwork doesn't pile up. People get hired. Vendors get managed.
            Without you being the person who holds it all together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
            >
              Govern your operations
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
            What breaks without this
          </p>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-stone-900">
            The operation runs on whoever's paying attention.
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Support tickets get lost or ignored until they become complaints",
              "Nobody knows what's actually happening across the business week to week",
              "Compliance documents pile up until a deadline forces a scramble",
              "Hiring takes months because the founder is the only decision point",
              "Vendor disputes happen because purchasing has no process",
              "Staff make it up as they go because there's no governing system",
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
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
            The solutions inside Ops Engine.
          </h2>
          <p className="mb-10 text-base text-stone-500">
            Ops Engine isn't one product — it's a collection of operational
            solutions that deploy together or separately, depending on where
            your operation is breaking.
          </p>
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
            An operation that doesn't drift.
          </h2>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-stone-400">
            DominusOS means the system holds its shape over time. Processes
            don't erode when staff turns over. Decisions stay traceable. Humans
            stay in authority over the things that require human judgment.
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
            <Link
              href="/systems/revenue"
              className="border border-stone-200 px-4 py-2 text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              Revenue Engine
            </Link>
            <span className="text-stone-300">→</span>
            <span className="border border-stone-900 bg-stone-900 px-4 py-2 text-white">
              Ops Engine
            </span>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-500">
            Ops Engine is where stable operations live. It receives clients who
            have been onboarded and paid through Revenue Engine. Together, all
            three engines cover the full arc of your business — from first
            contact to long-term operation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
            Tell us what's breaking in your operation.
          </h2>
          <p className="mb-8 text-base text-stone-500">
            We'll identify which part of Ops Engine addresses it first — and
            map out what governance looks like for your specific business.
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
