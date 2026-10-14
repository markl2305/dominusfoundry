import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Button from "../../../components/Button";
import { PageHero, Section } from "@/components/site/primitives";
import "@/components/site/pages/systems.css";

export const metadata: Metadata = {
  title: "Revenue Engine | Dominus Foundry™",
  description:
    "From signed deal to collected cash — without chasing. Onboarding, invoicing, and collections running without you in the loop.",
};

const solutions = [
  {
    title: "Client Onboarding",
    description:
      "The moment a client signs, a disciplined sequence begins. Documents collected. Kickoff scheduled. Tasks assigned. Every client follows the same path — unless you explicitly route them otherwise.",
  },
  {
    title: "Invoicing Cadence",
    description:
      "Invoices go out on time, every time. Tied to milestones, schedules, or project completion — whatever your billing model requires. No manual triggers. No forgotten invoices.",
  },
  {
    title: "Collections & Follow-Up",
    description:
      "Reminders follow a cadence you define. Escalation paths are explicit. Outstanding balances surface before they become problems — not after they become write-offs.",
  },
  {
    title: "Payment Tracking",
    description:
      "Every payment logged. Every outstanding balance visible. No spreadsheet. No hunting through email threads for confirmation.",
  },
  {
    title: "Exception Surfacing",
    description:
      "When something breaks from the expected path — a late payment, a missing document, a missed kickoff — it surfaces to the right person with full context.",
  },
];

export default function RevenueEnginePage() {
  return (
    <div className="pg-systems">
      <PageHero
        eyebrow="Engine 02"
        title="Revenue Engine"
        lead={<>
          <p className="hero-tag">
            From signed deal to collected cash — without chasing.
          </p>
          <p className="lead">
            The client said yes. Now everything has to work: onboarding,
            kickoffs, invoices, reminders, collections. Revenue Engine runs the
            full motion from signature to payment so you&apos;re not manually holding
            it together.
          </p>
        </>}
        actions={<>
          <Button href="/start">
            Stop the revenue leaks
          </Button>
          <Button href="/systems" variant="forgeSecondary">
            See all systems
          </Button>
        </>}
      />

      {/* The problem */}
      <Section
        className="band"
        eyebrow="Where revenue leaks"
        title="Winning the deal is only half the job."
      >
        <div className="grid g2">
          {[
            "New clients go quiet after signing — nobody knows what's next",
            "Onboarding is manual, chaotic, and different every time",
            "Invoices go out late because someone has to remember to send them",
            "Outstanding balances pile up because chasing feels awkward",
            "Cash flow surprises the owner — month after month",
            "The founder is the glue holding every handoff together",
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
        title="The solutions inside Revenue Engine."
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

      {/* In practice */}
      <Section className="band" eyebrow="In practice">
        <div className="card reveal quote">
          <blockquote>
            &ldquo;The Foundry team stabilized our books before automating a thing.
            Invoices go out, reminders happen, and cash shows up without a
            chase.&rdquo;
          </blockquote>
          <p className="fine">Owner, regional service business</p>
        </div>
      </Section>

      {/* Platform band. Named the internal system until 2026-09-16; prohibited
          on public Dominus marketing (plan §17). The governance layer is Forge,
          the operating spine. ⛔ Do not reintroduce the old name here. */}
      <Section
        className="on-dark"
        eyebrow="Powered by Forge"
        title="Every revenue action, logged and governed."
        lead={<p className="lead">
          Running on Forge means every invoice sent, every reminder triggered, every
          exception escalated is traceable. You know who did what, when, and
          why — without building a reporting system yourself.
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
          <span className="step cur">
            Revenue Engine
          </span>{" "}
          <span className="sep">&rarr;</span>{" "}
          <Link href="/systems/ops" className="step">
            Ops Engine
          </Link>
        </div>
        <p className="chain-p reveal">
          Revenue Engine sits between intake and operations. It receives
          qualified leads from Intake Engine and hands stable, paying clients
          to Ops Engine. Each engine is complete on its own — together, they
          run the full operation.
        </p>
      </Section>

      {/* CTA */}
      <Section
        className="band"
        title="Tell us where your revenue is leaking."
        lead={<p className="lead">
          We&apos;ll show you exactly which part of Revenue Engine seals it — and
          how long it takes to see the difference.
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
