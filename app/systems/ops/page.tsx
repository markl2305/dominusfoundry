import Link from "next/link";
import type { Metadata } from "next";
import Button from "../../../components/Button";

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
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 relative">
          <p className="label-foundry text-forge-300 mb-4">Engine 03</p>
          <h1 className="heading-forge-xl text-white">Ops Engine</h1>
          <p className="mt-4 text-xl font-medium text-forge-300">
            Your operation — visible, governed, not dependent on you.
          </p>
          <p className="mt-6 max-w-2xl body-foundry text-white/80 md:text-lg">
            Everything that keeps your business running after the money comes
            in. Support gets resolved. Reporting surfaces what matters.
            Paperwork doesn&apos;t pile up. People get hired. Vendors get managed.
            Without you being the person who holds it all together.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/start" className="justify-center">
              Govern your operations
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
          <p className="label-foundry text-forge-700 mb-6">What breaks without this</p>
          <h2 className="heading-forge-lg mb-6">
            The operation runs on whoever&apos;s paying attention.
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
          <h2 className="heading-forge-lg mb-4">
            The solutions inside Ops Engine.
          </h2>
          <p className="mb-10 body-foundry text-slate-700">
            Ops Engine isn&apos;t one product — it&apos;s a collection of operational
            solutions that deploy together or separately, depending on where
            your operation is breaking.
          </p>
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
            An operation that doesn&apos;t drift.
          </h2>
          <p className="mb-6 max-w-2xl body-foundry text-white/80">
            DominusOS means the system holds its shape over time. Processes
            don&apos;t erode when staff turns over. Decisions stay traceable. Humans
            stay in authority over the things that require human judgment.
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
            <Link
              href="/systems/revenue"
              className="border-2 border-bronze-300 px-4 py-2 text-slate-800 font-medium transition-colors hover:border-forge-600 hover:text-forge-700 rounded-lg"
            >
              Revenue Engine
            </Link>
            <span className="text-forge-600">&rarr;</span>
            <span className="border-2 border-forge-600 bg-forge-700 px-4 py-2 text-white font-medium rounded-lg">
              Ops Engine
            </span>
          </div>
          <p className="mt-6 max-w-xl body-foundry text-slate-700">
            Ops Engine is where stable operations live. It receives clients who
            have been onboarded and paid through Revenue Engine. Together, all
            three engines cover the full arc of your business — from first
            contact to long-term operation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <h2 className="heading-forge-lg mb-4">
            Tell us what&apos;s breaking in your operation.
          </h2>
          <p className="mb-8 body-foundry text-slate-700">
            We&apos;ll identify which part of Ops Engine addresses it first — and
            map out what governance looks like for your specific business.
          </p>
          <Button href="/start" className="justify-center">
            Talk with Mark &amp; Bri
          </Button>
        </div>
      </section>
    </>
  );
}
