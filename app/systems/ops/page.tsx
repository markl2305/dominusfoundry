import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Button from "../../../components/Button";
import { PageHero, Section } from "@/components/site/primitives";
import "@/components/site/pages/systems.css";

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
  return (
    <div className="pg-systems">
      <PageHero
        eyebrow="Engine 03"
        title="Ops Engine"
        lead={<>
          <p className="hero-tag">
            Your operation — visible, governed, not dependent on you.
          </p>
          <p className="lead">
            Everything that keeps your business running after the money comes
            in. Support gets resolved. Reporting surfaces what matters.
            Paperwork doesn&apos;t pile up. People get hired. Vendors get managed.
            Without you being the person who holds it all together.
          </p>
        </>}
        actions={<>
          <Button href="/start">
            Govern your operations
          </Button>
          <Button href="/systems" variant="forgeSecondary">
            See all systems
          </Button>
        </>}
      />

      {/* The problem */}
      <Section
        className="band"
        eyebrow="What breaks without this"
        title={<>The operation runs on whoever&apos;s paying attention.</>}
      >
        <div className="grid g2">
          {[
            "Support tickets get lost or ignored until they become complaints",
            "Nobody knows what's actually happening across the business week to week",
            "Compliance documents pile up until a deadline forces a scramble",
            "Hiring takes months because the founder is the only decision point",
            "Vendor disputes happen because purchasing has no process",
            "Staff make it up as they go because there's no governing system",
          ].map((item, i) => (
            <div
              key={item}
              className="card flat reveal x-item"
              style={{ '--i': i } as CSSProperties}
            >
              <span className="x">&times;</span>{" "}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section
        eyebrow="How it works"
        title="The solutions inside Ops Engine."
        lead={<p className="lead">
          Ops Engine isn&apos;t one product — it&apos;s a collection of operational
          solutions that deploy together or separately, depending on where
          your operation is breaking.
        </p>}
      >
        <div className="grid g2">
          {solutions.map((solution, i) => (
            <div
              key={solution.title}
              className="card reveal"
              style={{ '--i': i } as CSSProperties}
            >
              <h3 className="tile-t">
                {solution.title}
              </h3>
              <p className="tile-p">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Platform band. Named the internal system until 2026-09-16; prohibited
          on public Dominus marketing (plan §17). The governance layer is Forge,
          the operating spine. ⛔ Do not reintroduce the old name here. */}
      <Section
        className="on-dark"
        eyebrow="Powered by Forge"
        title={<>An operation that doesn&apos;t drift.</>}
        lead={<p className="lead">
          Running on Forge means the system holds its shape over time. Processes
          don&apos;t erode when staff turns over. Decisions stay traceable. Humans
          stay in authority over the things that require human judgment.
        </p>}
      >
        <div className="actions reveal">
          <Button href="/governance" variant="forgeSecondary">
            How the governance works
          </Button>
        </div>
      </Section>

      {/* Chain */}
      <Section eyebrow="The full chain">
        <div className="chain reveal">
          <Link href="/systems/intake" className="step">
            Intake Engine
          </Link>{" "}
          <span className="sep">&rarr;</span>{" "}
          <Link href="/systems/revenue" className="step">
            Revenue Engine
          </Link>{" "}
          <span className="sep">&rarr;</span>{" "}
          <span className="step cur">
            Ops Engine
          </span>
        </div>
        <p className="chain-p reveal">
          Ops Engine is where stable operations live. It receives clients who
          have been onboarded and paid through Revenue Engine. Together, all
          three engines cover the full arc of your business — from first
          contact to long-term operation.
        </p>
      </Section>

      {/* CTA */}
      <Section
        className="band"
        title={<>Tell us what&apos;s breaking in your operation.</>}
        lead={<p className="lead">
          We&apos;ll identify which part of Ops Engine addresses it first — and
          map out what governance looks like for your specific business.
        </p>}
      >
        <div className="actions reveal">
          <Button href="/start">
            Talk with Mark &amp; Bri
          </Button>
        </div>
      </Section>
    </div>
  );
}
