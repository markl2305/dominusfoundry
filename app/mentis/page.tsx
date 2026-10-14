import Link from "next/link";
import type { CSSProperties } from "react";
import Button from "../../components/Button";
import { PageHero, Section, Arr } from "@/components/site/primitives";
import { CloseBand } from "@/components/site/qp/parts";
import "@/components/site/pages/systems.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/mentis.css";

export const metadata = {
  title: "Mentis™ | The Human-Governed Operating System | Dominus Foundry™",
  description:
    "Mentis™ is where everything connects. A complete operational intelligence layer that coordinates decisions, maintains authority, and ensures nothing drifts.",
};

const capabilities = [
  {
    title: "Human Authority, Always",
    body: "AI assists. Humans decide. Every escalation path is explicit. Every override is logged. You stay in control because the system was designed that way.",
  },
  {
    title: "Complete Audit Trail",
    body: "Every decision traceable. Every action logged. Every outcome documented. When questions arise — from clients, regulators, or your own team — answers exist.",
  },
  {
    title: "No Drift",
    body: "Systems designed to hold their shape over time. Governance isn't bolted on after the fact — it's the foundation everything else is built upon.",
  },
  {
    title: "Unified Intelligence",
    body: "One operational brain across voice, invoicing, onboarding, support, and reporting. Information flows. Handoffs disappear. Your operation feels like one thing.",
  },
];

const systemsOnMentis = [
  {
    title: "Intake Engine",
    what: "Every lead captured, qualified, and booked — across every channel.",
    href: "/systems/intake",
  },
  {
    title: "Revenue Engine",
    what: "Onboarding, invoicing, and collections — without chasing.",
    href: "/systems/revenue",
  },
  {
    title: "Ops Engine",
    what: "Support, reporting, compliance, hiring, and vendors — governed.",
    href: "/systems/ops",
  },
];

const journeySteps = [
  {
    stage: "Start anywhere",
    description: "Pick the engine that solves your most pressing problem. Intake Engine for leads. Revenue Engine for invoicing. Each one works beautifully on its own.",
  },
  {
    stage: "Add when ready",
    description: "When another pain point emerges, add another system. They integrate naturally because they share the same architecture.",
  },
  {
    stage: "Watch it connect",
    description: "The call that booked the appointment that triggered the invoice that sent the reminder. One operation. Zero handoffs.",
  },
  {
    stage: "Unlock Mentis™",
    description: "When your operation runs on multiple systems, Mentis™ becomes the intelligence layer that coordinates everything. The full experience.",
  },
];

export default function MentisPage() {
  /* Quality pass D2 (2026-10-14): copy verbatim. Hero carries the name, the
     line and one action (the page's own "Talk to us about Mentis™"); the
     four capabilities as tiles; the three engines as linked cards; the
     journey as a sequence; the page's closing lines in the forge close band. */
  return (
    <div className="pg-systems pg-mentis qpb qp-mentis">
      <PageHero
        title="Mentis™"
        lead={<>
          <p className="hero-tag">
            The Human-Governed Operating System.
          </p>
          <p className="lead">
            Where every system connects. Where every decision is traceable. Where humans stay in control and nothing drifts.
          </p>
        </>}
      >
        <p className="hero-note">
          Mentis™ is the complete operational intelligence layer — the full realization of everything Dominus Foundry™ builds toward. Some organizations start here. Most discover it after experiencing what our individual systems can do.
        </p>
      </PageHero>

      {/* The Philosophy */}
      <section className="section" id="different" data-name="Different" aria-labelledby="h-different">
        <div className="wrap">
          <div className="two-col">
            <div className="sec-head reveal">
              <h2 className="h2" id="h-different">What makes Mentis™ different</h2>
            </div>
            <div className="prose reveal">
              <p>
                Most business software starts strong and slowly falls apart. Workflows break. Exceptions get ignored. The humans who should be in control end up chasing the system instead of running it.
              </p>
              <p>
                Mentis™ was designed to prevent that — not through features, but through architecture. Every capability exists because it serves human authority and operational clarity.
              </p>
            </div>
          </div>
          <div className="grid g4 caps">
            {capabilities.map((cap, i) => (
              <div key={cap.title} className="card reveal" style={{ '--i': i } as CSSProperties}>
                <h3 className="tile-t">{cap.title}</h3>
                <p className="tile-p">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Running on Mentis™ */}
      <Section
        id="ecosystem"
        className="on-dark"
        eyebrow="The ecosystem"
        title="Systems designed with Mentis™"
        lead={<p className="lead">
          Each system is complete on its own — a star in its own right. But they all share the same DNA. The same governance. The same commitment to human authority. When you run multiple systems, they work together without friction because they were designed that way from day one.
        </p>}
      >
        <div className="grid g3">
          {systemsOnMentis.map((system, i) => (
            <Link
              key={system.title}
              href={system.href}
              className="card reveal feature"
              style={{ '--i': i } as CSSProperties}
            >
              <h3 className="h3">
                {system.title}
              </h3>
              <p className="tile-p">{system.what}</p>
              <span className="go push"><Arr /></span>
            </Link>
          ))}
        </div>

        <div className="reveal">
          <Link href="/systems" className="go">
            See all systems →
          </Link>
        </div>
      </Section>

      {/* The Journey */}
      <Section
        id="journey"
        title="How organizations arrive at Mentis™"
        lead={<p className="lead">
          Nobody starts by buying an operating system. They start by solving a problem. Then another. Then they realize everything connects.
        </p>}
      >
        <ol className="sequence reveal journey">
          {journeySteps.map((step, index) => (
            <li key={step.stage}>
              <span className="s-n">
                {index + 1}
              </span>
              <h3 className="s-t">{step.stage}</h3>
              <p className="s-p">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* What Full Mentis™ Looks Like */}
      <Section id="connected" className="band" title="When everything runs on Mentis™">
        <div className="callout reveal">
          <p>
            A call comes in. Intake Engine answers, qualifies the caller, and books an appointment. The booking triggers onboarding in Revenue Engine. Documents are collected automatically. Invoicing starts on schedule. Reminders go out. Payment is tracked. Ops Engine surfaces the trend.
          </p>
          <p>
            No manual handoffs. No dashboard babysitting. No wondering what happened to that lead from last Tuesday. One operation, fully connected, completely governed.
          </p>
          <p className="strong statement">
            That&apos;s Mentis™.
          </p>
        </div>
      </Section>

      {/* For Organizations Ready */}
      <Section
        id="ready"
        title="For organizations ready for the full experience"
        lead={<p className="lead">
          Mentis™ as a complete deployment is for organizations that want unified operational intelligence from day one. It&apos;s founder-intensive, deeply customized, and built for operators who understand the value of systems that don&apos;t drift.
        </p>}
      >
        <div className="grid g2">
          <div className="card reveal feature" style={{ '--i': 0 } as CSSProperties}>
            <h3 className="h3">Start with individual systems</h3>
            <p className="tile-p">
              Most organizations begin here. Pick the system that solves your most urgent problem. Experience the quality. Add more when you&apos;re ready. Mentis™ emerges naturally as your systems grow.
            </p>
            <div className="actions push">
              <Button href="/systems" variant="forgeSecondary">
                Explore systems
              </Button>
            </div>
          </div>

          <div className="card reveal feature" style={{ '--i': 1 } as CSSProperties}>
            <h3 className="h3">Deploy Mentis™ directly</h3>
            <p className="tile-p">
              For organizations ready for unified operational intelligence from the start. A complete deployment with all systems integrated from day one.
            </p>
            <div className="actions push">
              <Button href="/start">
                Talk to us about Mentis™
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <CloseBand
        name="Close"
        title={<>Systems that don&apos;t drift.</>}
        lead={<>
          <p className="lead">
            Start with one. Add more. Watch everything connect.
          </p>
          <p className="lead">
            That&apos;s the Mentis™ experience.
          </p>
        </>}
      />
    </div>
  );
}
