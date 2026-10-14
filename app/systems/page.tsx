import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Button from "../../components/Button";
import { PageHero, Section } from "@/components/site/primitives";
import "@/components/site/pages/systems.css";

export const metadata: Metadata = {
  title: "Systems | Dominus Foundry™",
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
    <div className="pg-systems">
      <PageHero
        crest
        eyebrow="What We Build"
        title={<>
          Three engines.
          <br />
          Every operational problem
          <br />
          maps to one of them.
        </>}
        lead={<p className="lead">
          We don&apos;t sell software features. We build systems that solve real
          operational problems — governed on Forge, built to hold their
          shape, designed to work together from day one.
        </p>}
      />

      {/* Systems */}
      <Section>
        <div className="stack-lg">
          {systems.map((system, i) => (
            <div key={system.slug} className="card reveal engine" style={{ '--i': i } as CSSProperties}>
              {/* Left */}
              <div>
                <p className="tile-k">
                  Engine {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="h2">{system.name}</h2>
                <p className="tagline">
                  {system.tagline}
                </p>
                <p className="desc">
                  {system.description}
                </p>
                <div className="actions">
                  <Button href={`/systems/${system.slug}`}>
                    {system.cta}
                  </Button>
                </div>
              </div>

              {/* Right — problem list */}
              <div>
                <p className="tile-k">
                  Signs you need this
                </p>
                <ul className="ring-list">
                  {system.problems.map((problem) => (
                    <li key={problem}>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Platform connector. Named the internal system until 2026-09-16; that
          name is prohibited on public Dominus marketing (plan §17) and the
          governance layer these engines actually run on is Forge, the operating
          spine (plan §2). ⛔ Do not reintroduce the old name here. */}
      <Section
        className="on-dark"
        eyebrow="The foundation"
        title="All three engines run on Forge."
        lead={<p className="lead">
          Forge is the governed platform underneath everything we build — the
          operating spine Sabina runs on. Human authority preserved. Every
          action logged. No drift. Start with one engine — they&apos;re designed
          to connect.
        </p>}
      >
        <div className="actions reveal">
          <Button href="/governance" variant="forgeSecondary">
            How the governance works
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section
        className="band"
        title="Not sure which engine fits first?"
        lead={<p className="lead">
          Tell us what&apos;s breaking. We&apos;ll tell you which engine fixes it — and
          what the path looks like from there.
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
