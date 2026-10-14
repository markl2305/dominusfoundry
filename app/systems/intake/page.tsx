import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Button from "../../../components/Button";
import { PageHero, Section } from "@/components/site/primitives";
import "@/components/site/pages/systems.css";

export const metadata: Metadata = {
  title: "Intake Engine | Dominus Foundry™",
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
    <div className="pg-systems">
      <PageHero
        eyebrow="Engine 01"
        title="Intake Engine"
        lead={<>
          <p className="hero-tag">
            Every lead. Every channel. One engine.
          </p>
          <p className="lead">
            Phone rings, form submits, chat opens, email arrives — it doesn&apos;t
            matter where they come from. Intake Engine captures, qualifies,
            routes, and books before leads go cold. There is no separate voice
            product. No separate chat product. It&apos;s all intake.
          </p>
        </>}
        actions={<>
          <Button href="/start">
            Fix your front door
          </Button>
          <Button href="/systems" variant="forgeSecondary">
            See all systems
          </Button>
        </>}
      />

      {/* The problem */}
      <Section
        className="band"
        eyebrow="Where businesses bleed"
        title="Most operations leak at the front door."
      >
        <div className="grid g2">
          {[
            "Leads come in and nobody responds fast enough",
            "Phone calls interrupt staff who are doing real work",
            "Chat goes unanswered after hours",
            "Email inquiries sit in a shared inbox for days",
            "Appointments don't get booked because qualification is unclear",
            "No record of what was said or what was promised",
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

      {/* Channels */}
      <Section
        eyebrow="Every channel handled"
        title={<>It doesn&apos;t matter where they find you.</>}
      >
        <div className="rows reveal">
          {channels.map((channel) => (
            <div key={channel.label}>
              <span>
                {channel.label}
              </span>
              <p>
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section
        className="band"
        eyebrow="How it works"
        title="The solutions inside Intake Engine."
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
        title="Human authority, preserved at every step."
        lead={<p className="lead">
          Forge governs every decision Intake Engine makes. Escalation
          paths are explicit — not improvised. Every interaction is logged.
          Every booking is traceable. You stay in control of what happens when
          the system can&apos;t make the call.
        </p>}
      >
        <div className="actions reveal">
          <Button href="/governance" variant="forgeSecondary">
            How the governance works
          </Button>
        </div>
      </Section>

      {/* What connects forward */}
      <Section
        eyebrow="What comes next"
        title="Intake Engine feeds Revenue Engine."
        lead={<p className="lead">
          Once a lead becomes a client, Revenue Engine takes over — onboarding
          them, invoicing them, and collecting without you chasing. The two
          engines share the same data and the same governance layer. No
          handoff chaos.
        </p>}
      >
        <div className="reveal">
          <Link href="/systems/revenue" className="link">
            See Revenue Engine &rarr;
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section
        className="band"
        title="Tell us where your leads are dying."
        lead={<p className="lead">
          We&apos;ll show you exactly how Intake Engine fixes it — and what a
          quality appointment looks like on the other side.
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
