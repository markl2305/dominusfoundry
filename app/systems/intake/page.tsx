import type { Metadata } from "next";
import EnginePage from "@/components/site/qp/EnginePage";
import "@/components/site/pages/systems.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/systems-engine.css";

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
  /* Quality pass D2 (2026-10-14): copy verbatim, laid out by the shared
     engine template (components/site/qp/EnginePage.tsx). */
  return (
    <EnginePage c={{
      className: "qp-intake",
      eyebrow: "Engine 01",
      name: "Intake Engine",
      tagline: "Every lead. Every channel. One engine.",
      intro: <>
        Phone rings, form submits, chat opens, email arrives — it doesn&apos;t
        matter where they come from. Intake Engine captures, qualifies,
        routes, and books before leads go cold. There is no separate voice
        product. No separate chat product. It&apos;s all intake.
      </>,
      primary: { href: "/start", label: "Fix your front door" },
      secondary: { href: "/systems", label: "See all systems" },
      problem: {
        eyebrow: "Where businesses bleed",
        title: "Most operations leak at the front door.",
        items: [
          "Leads come in and nobody responds fast enough",
          "Phone calls interrupt staff who are doing real work",
          "Chat goes unanswered after hours",
          "Email inquiries sit in a shared inbox for days",
          "Appointments don't get booked because qualification is unclear",
          "No record of what was said or what was promised",
        ],
      },
      channels: {
        eyebrow: "Every channel handled",
        title: <>It doesn&apos;t matter where they find you.</>,
        items: channels,
      },
      solutions: {
        eyebrow: "How it works",
        title: "The solutions inside Intake Engine.",
        items: solutions,
      },
      governance: {
        eyebrow: "Powered by Forge",
        title: "Human authority, preserved at every step.",
        body: <>
          Forge governs every decision Intake Engine makes. Escalation
          paths are explicit — not improvised. Every interaction is logged.
          Every booking is traceable. You stay in control of what happens when
          the system can&apos;t make the call.
        </>,
        action: { href: "/governance", label: "How the governance works" },
      },
      next: {
        eyebrow: "What comes next",
        title: "Intake Engine feeds Revenue Engine.",
        body: <>
          <p>
            Once a lead becomes a client, Revenue Engine takes over — onboarding
            them, invoicing them, and collecting without you chasing. The two
            engines share the same data and the same governance layer. No
            handoff chaos.
          </p>
          <a href="/systems/revenue" className="go">
            See Revenue Engine &rarr;
          </a>
        </>,
      },
      close: {
        title: "Tell us where your leads are dying.",
        lead: <>
          We&apos;ll show you exactly how Intake Engine fixes it — and what a
          quality appointment looks like on the other side.
        </>,
        action: { href: "/start", label: <>Talk with Mark &amp; Bri</> },
      },
    }} />
  );
}
