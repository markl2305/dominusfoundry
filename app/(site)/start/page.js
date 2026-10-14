import IntakeForm from "../../../components/IntakeForm";
import ContactCTA from "../../../components/ContactCTA";
import Button from "../../../components/Button";
import { PageHero, Section } from "@/components/site/primitives";
import "@/components/site/pages/core.css";

// RETOOL 2026-10-07 (HANDOFF §5.7): the retired seven-day system-design
// promise, the coming-soon video placeholder and the bespoke-automation example
// offer are removed. The IntakeForm (fields, /api/lead destination, consent and
// sourceSystem "Intake Form") is unchanged; only its visible wording moved.
// Turn 3: one hero link to the assessment, by seat-granted format exception
// (HANDOFF §5.7 makes the assessment the primary action); existing Button.
// 2026-10-14: restyled in the site-wide redesign (components/site). Copy and
// the form are unchanged; the form card carries no `reveal`, so it is never
// faded out while a visitor (or the consent matrix) fills it in.
export const metadata = {
  title: "Start with Sabina — Dominus Foundry",
  description:
    "Tell us where calls, follow-up, or recurring work are getting stuck. We'll use that context to discuss where Sabina, your company's own AI, could begin.",
};

const stuckPoints = [
  "Calls that go unanswered",
  "Follow-ups that get buried",
  "Questions your team keeps answering twice",
  "Work that keeps returning to the owner",
];

export default function StartPage() {
  return (
    <div className="pg-start">
      <PageHero
        center
        eyebrow="Get Started"
        title="Start with the work your team needs help carrying."
        lead={
          <p className="lead">
            Tell us where calls, follow-up, or recurring work are getting stuck. We&apos;ll use that context to discuss where Sabina could begin in your company.
          </p>
        }
        actions={<Button href="https://hiresabina.ai/evaluate">See Sabina work</Button>}
      />

      <Section className="band">
        <div className="two-col">
          <div className="stack reveal">
            <h2 className="h3">Where teams tell us work gets stuck:</h2>
            <ul className="pg-marks">
              {stuckPoints.map((outcome) => (
                <li key={outcome}>
                  <span className="mk">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="stack" style={{ gap: 12, marginBottom: 24 }}>
              <p className="eyebrow">Tell us where work is stuck</p>
              <h2 className="h3">We&apos;ll discuss where Sabina could begin</h2>
            </div>
            <IntakeForm />
          </div>
        </div>
      </Section>

      <Section
        center
        title="Prefer to talk first?"
        lead={
          <p className="lead">
            Call or email us directly. We respond within one business day.
          </p>
        }
      >
        <div className="center-block">
          <ContactCTA />
        </div>
      </Section>
    </div>
  );
}
