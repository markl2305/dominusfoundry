import IntakeForm from "../../../components/IntakeForm";
import ContactCTA from "../../../components/ContactCTA";
import Button from "../../../components/Button";
import { PageHero } from "@/components/site/primitives";
import { Sec } from "@/components/foundry/qp-parts";
import "@/components/site/pages/core.css";
import "@/app/styles/pages/qp-hero.css";
import "@/app/styles/pages/start.css";

// RETOOL 2026-10-07 (HANDOFF §5.7): the retired seven-day system-design
// promise, the coming-soon video placeholder and the bespoke-automation example
// offer are removed. The IntakeForm (fields, /api/lead destination, consent and
// sourceSystem "Intake Form") is unchanged; only its visible wording moved.
// Turn 3: one hero link to the assessment, by seat-granted format exception
// (HANDOFF §5.7 makes the assessment the primary action); existing Button.
// 2026-10-14: restyled in the site-wide redesign (components/site). Copy and
// the form are unchanged; the form card carries no `reveal`, so it is never
// faded out while a visitor (or the consent matrix) fills it in.
// 2026-10-14, quality pass (D-page-briefs): the stuck points as tiles, the form
// in one feature card, "Prefer to talk first?" as the contact card. The form,
// its fields, destination and consent wording are untouched (IntakeForm is
// rendered exactly as before); copy unchanged.
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
    <div className="pg-start qp pg-start-qp">
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

      <section className="section" id="stuck" data-name="Where work gets stuck" aria-labelledby="h-stuck">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="h2" id="h-stuck">Where teams tell us work gets stuck:</h2>
          </div>
          <div className="sec-body">
            <ul className="grid g4 stuck">
              {stuckPoints.map((outcome, i) => (
                <li className="card reveal" key={outcome} style={{ "--i": i }}>
                  <span className="mk">✓</span>
                  <span className="stuck-t">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section band" id="tell-us" data-name="Tell us where work is stuck" aria-labelledby="h-tell-us">
        <div className="wrap">
          <div className="card intake-card">
            <div className="intake-head">
              <p className="eyebrow">Tell us where work is stuck</p>
              <h2 className="h2" id="h-tell-us">We&apos;ll discuss where Sabina could begin</h2>
            </div>
            <IntakeForm />
          </div>
        </div>
      </section>

      <Sec
        center
        id="talk"
        name="Prefer to talk first?"
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
      </Sec>
    </div>
  );
}
