import type { Metadata } from "next";
import EnginePage from "@/components/site/qp/EnginePage";
import "@/components/site/pages/systems.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/systems-engine.css";

export const metadata: Metadata = {
  title: "Ops Engine | Dominus Foundry™",
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
  /* Quality pass D2 (2026-10-14): copy verbatim, laid out by the shared
     engine template (components/site/qp/EnginePage.tsx). */
  return (
    <EnginePage c={{
      className: "qp-ops",
      eyebrow: "Engine 03",
      name: "Ops Engine",
      tagline: "Your operation — visible, governed, not dependent on you.",
      intro: <>
        Everything that keeps your business running after the money comes
        in. Support gets resolved. Reporting surfaces what matters.
        Paperwork doesn&apos;t pile up. People get hired. Vendors get managed.
        Without you being the person who holds it all together.
      </>,
      primary: { href: "/start", label: "Govern your operations" },
      secondary: { href: "/systems", label: "See all systems" },
      problem: {
        eyebrow: "What breaks without this",
        title: <>The operation runs on whoever&apos;s paying attention.</>,
        items: [
          "Support tickets get lost or ignored until they become complaints",
          "Nobody knows what's actually happening across the business week to week",
          "Compliance documents pile up until a deadline forces a scramble",
          "Hiring takes months because the founder is the only decision point",
          "Vendor disputes happen because purchasing has no process",
          "Staff make it up as they go because there's no governing system",
        ],
      },
      solutions: {
        eyebrow: "How it works",
        title: "The solutions inside Ops Engine.",
        lead: <>
          Ops Engine isn&apos;t one product — it&apos;s a collection of operational
          solutions that deploy together or separately, depending on where
          your operation is breaking.
        </>,
        items: solutions,
      },
      governance: {
        eyebrow: "Powered by Forge",
        title: <>An operation that doesn&apos;t drift.</>,
        body: <>
          Running on Forge means the system holds its shape over time. Processes
          don&apos;t erode when staff turns over. Decisions stay traceable. Humans
          stay in authority over the things that require human judgment.
        </>,
        action: { href: "/governance", label: "How the governance works" },
      },
      next: {
        eyebrow: "The full chain",
        extra: (
            <div className="chain">
              <a href="/systems/intake" className="step">
                Intake Engine
              </a>{" "}
              <span className="sep">&rarr;</span>{" "}
              <a href="/systems/revenue" className="step">
                Revenue Engine
              </a>{" "}
              <span className="sep">&rarr;</span>{" "}
              <span className="step cur">
                Ops Engine
              </span>{" "}
            </div>
        ),
        body: <p>
          Ops Engine is where stable operations live. It receives clients who
          have been onboarded and paid through Revenue Engine. Together, all
          three engines cover the full arc of your business — from first
          contact to long-term operation.
        </p>,
      },
      close: {
        title: <>Tell us what&apos;s breaking in your operation.</>,
        lead: <>
          We&apos;ll identify which part of Ops Engine addresses it first — and
          map out what governance looks like for your specific business.
        </>,
        action: { href: "/start", label: <>Talk with Mark &amp; Bri</> },
      },
    }} />
  );
}
