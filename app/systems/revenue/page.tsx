import type { Metadata } from "next";
import EnginePage from "@/components/site/qp/EnginePage";
import "@/components/site/pages/systems.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/systems-engine.css";

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
  /* Quality pass D2 (2026-10-14): copy verbatim, laid out by the shared
     engine template (components/site/qp/EnginePage.tsx). */
  return (
    <EnginePage c={{
      className: "qp-revenue",
      eyebrow: "Engine 02",
      name: "Revenue Engine",
      tagline: "From signed deal to collected cash — without chasing.",
      intro: <>
        The client said yes. Now everything has to work: onboarding,
        kickoffs, invoices, reminders, collections. Revenue Engine runs the
        full motion from signature to payment so you&apos;re not manually holding
        it together.
      </>,
      primary: { href: "/start", label: "Stop the revenue leaks" },
      secondary: { href: "/systems", label: "See all systems" },
      problem: {
        eyebrow: "Where revenue leaks",
        title: "Winning the deal is only half the job.",
        items: [
          "New clients go quiet after signing — nobody knows what's next",
          "Onboarding is manual, chaotic, and different every time",
          "Invoices go out late because someone has to remember to send them",
          "Outstanding balances pile up because chasing feels awkward",
          "Cash flow surprises the owner — month after month",
          "The founder is the glue holding every handoff together",
        ],
      },
      solutions: {
        eyebrow: "How it works",
        title: "The solutions inside Revenue Engine.",
        items: solutions,
      },
      quote: {
        eyebrow: "In practice",
        text: <>
          &ldquo;The Foundry team stabilized our books before automating a thing.
          Invoices go out, reminders happen, and cash shows up without a
          chase.&rdquo;
        </>,
        by: "Owner, regional service business",
      },
      governance: {
        eyebrow: "Powered by Forge",
        title: "Every revenue action, logged and governed.",
        body: <>
          Running on Forge means every invoice sent, every reminder triggered, every
          exception escalated is traceable. You know who did what, when, and
          why — without building a reporting system yourself.
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
              <span className="step cur">
                Revenue Engine
              </span>{" "}
              <span className="sep">&rarr;</span>{" "}
              <a href="/systems/ops" className="step">
                Ops Engine
              </a>{" "}
            </div>
        ),
        body: <p>
          Revenue Engine sits between intake and operations. It receives
          qualified leads from Intake Engine and hands stable, paying clients
          to Ops Engine. Each engine is complete on its own — together, they
          run the full operation.
        </p>,
      },
      close: {
        title: "Tell us where your revenue is leaking.",
        lead: <>
          We&apos;ll show you exactly which part of Revenue Engine seals it — and
          how long it takes to see the difference.
        </>,
        action: { href: "/start", label: <>Talk with Mark &amp; Bri</> },
      },
    }} />
  );
}
