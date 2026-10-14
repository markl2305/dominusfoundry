import ApplicationForm from "../../../components/ApplicationForm";
import ContactCTA from "../../../components/ContactCTA";
import { PageHero, Section } from "@/components/site/primitives";
import { CloseBand } from "@/components/site/qp/parts";
import "@/components/site/pages/core.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/careers.css";

export const metadata = {
  title: "Careers — Founding Sales Rep | Dominus Foundry™",
  description:
    "Join the sales team at Dominus Foundry™, a Managed AI company. We build and operate Sabina, your company's own AI, and Forge™, the operating platform and tools beneath and alongside her. 19 provisional patent applications plus a non-provisional filing — patent pending. Earn the full first month's subscription on collection, plus a 15% residual forever. Ground floor opportunity.",
};

const platformFeatures = [
  "Design & Proposals — product library, system design canvas, BOM generation, e-signature proposals, rack elevations, wire schedules",
  "Project Management — portfolio dashboard, task engine, Gantt, dispatch & scheduling, change orders, job costing",
  "Mobile Field App — offline capability, photo gates, compliance checklists, inventory, sub-contractor management",
  "AI Intelligence — AI-powered reports, design generation, natural language queries, automation engine",
  "50-State Regulatory Compliance — licensing, bonding, insurance, lien law, prevailing wage, credential alerts",
  "Hyperion™ Spatial Intelligence (Patent-Pending) — LiDAR scanning, AI design from scan, automated measurement, 3D modeling, instant proposals from a building scan",
];

const commissionTable = [
  {
    type: "SaaS — First Month",
    rate: "Full first month",
    terms:
      "Full first month\u2019s subscription paid on collection. The deal is custom quoted.",
  },
  {
    type: "SaaS — Ongoing Residual",
    rate: "15% of MRR \u2014 FOREVER",
    terms:
      "Monthly, on collection, for as long as the customer pays and you remain active. No decay. No step-down. No production minimum.",
  },
  {
    type: "Installation Projects",
    rate: "18% of Gross Profit",
    terms:
      "Paid on collection. GP = contract value minus equipment and sub labor.",
  },
  {
    type: "Monitoring / Service Agreements",
    rate: "10% of Year 1 RMR",
    terms:
      "One-time bonus on recurring monitoring or service contracts from an installation.",
  },
];

const qualifications = [
  "Documented commission earnings of $100K+ in a year \u2014 multiple years preferred",
  "You generate your own pipeline: cold calls, email, LinkedIn, referrals, events",
  "B2B SaaS, technology services, or trades/construction/field service sales experience",
  "You think in conversion rates and revenue, not activity metrics",
  "You take direct feedback and apply it the same day",
  "You will log every call, note, and disposition in the CRM \u2014 non-negotiable",
];

const disqualifiers = [
  "You need a base salary to cover rent while you ramp",
  "You\u2019ve never built your own pipeline from scratch",
  "You need someone to teach you discovery calls or objection handling",
  "\u201CCRM discipline\u201D sounds like micromanagement to you",
  "You\u2019re looking for a job instead of an opportunity",
];

const repGets = [
  "A product that exists and works \u2014 not a prototype or a roadmap",
  "19 provisional patent applications plus two non-provisional filings — patent pending",
  "A quoting process, competitive comparison docs, and demo environments",
  "Power dialer, CRM, and AI-assisted sales tools built in-house",
  "Direct founder access for deal strategy and closing support",
  "Objection tracking and conversion analytics",
];

// 2026-10-14: restyled in the site-wide redesign (components/site). Copy unchanged.
// ⛔ The responsive gate (scripts/public-responsive-gate.cjs) measures #apply, its
// columns as `#apply > div > div > div` and the file-picker filename; nothing in
// #apply carries `reveal`, because the gate reads opacity 0 as hidden content.
// Quality pass D2 (2026-10-14): copy and figures verbatim. Hero with one action
// to #apply; the opening as a statement beside its text; the product as tiles;
// the commission plan as rows with "Do the math" as its callout; who should /
// should not apply as two cards; what you get as tiles; the page's own
// "Questions before applying?" in the forge close band. #apply is unchanged.
const featureTitle = (f: string) => f.split(" \u2014 ")[0];
const featureBody = (f: string) => f.slice(featureTitle(f).length + 3);
export default function CareersPage() {
  return (
    <div className="pg-careers qp qp-careers">
      {/* Hero */}
      <PageHero
        center
        eyebrow={<>Now Hiring &mdash; 2-3 Positions</>}
        title="Founding Sales Rep"
        lead={
          <p className="lead">
            Ground floor of a patent-pending Managed AI company with a product in production at its first customers. The addressable market is wide open.
          </p>
        }
        actions={<a className="btn btn-solid" href="#apply">Apply Now</a>}
      >
        <div className="chips">
          <span className="chip">
            Remote
          </span>
          <span className="chip">
            Commission Only
          </span>
          <span className="chip">
            19 Provisional Patents · Patent Pending
          </span>
        </div>
      </PageHero>

      {/* What This Is */}
      <section className="section" id="opportunity" data-name="The Opportunity" aria-labelledby="h-opportunity">
        <div className="wrap two-col">
        <div className="sec-head reveal">
          <p className="eyebrow">The Opportunity</p>
          <h2 className="statement" id="h-opportunity">This is not a sales job. This is the founding revenue team of a Managed AI company.</h2>
        </div>
        <div className="prose reveal">
            <p>
              Dominus Foundry™ builds and operates <strong>Sabina</strong>, your company&apos;s own AI, shaped around its systems, knowledge, people, and authority. <strong>Forge™</strong> supplies the operating records and specialist tools beneath and alongside her, in production today with AV and security and with commercial roofing. It consolidates work a contractor is currently spreading across several disconnected tools into one governed record, from first call to invoice.
            </p>
            <p>
              <strong>Hyperion™</strong>, a standalone trades product hosted under Forge, is a patent-pending spatial intelligence engine. A technician scans a building with their iPhone and the system generates a complete design, bill of materials, and proposal automatically — one integrated record from scan to invoice.
            </p>
            <p>
              {/* RETOOL 2026-10-07 (HANDOFF §5.8): "SaaS company" → Managed AI, and the
                  "no sales team" / "zero sales team" framing removed because
                  current staffing contradicts it. Compensation, qualifications,
                  application and legal terms are untouched.
                  ⛔ kimi #2, round 3: this read "a fully built product, paying
                  customers" — plural, unqualified, one click from the global
                  footer, on the same domain whose investor pitch says "one paid
                  Forge account" and "revenue excluded from every claim on this
                  page". A diligence reader who finds the careful version on
                  /pitch and the loose version here trusts the careful one LESS.
                  Recruiting copy can be hungry without being rounder than the
                  investor page. ⛔ Keep this aligned to app/pitch/claims.ts; if
                  the ledger changes, this changes with it. */}
              <strong>We have 19 provisional patent applications plus two non-provisional filings and a product running in production.</strong> That production footprint is two deployments today — one independent customer and one founder-affiliated company whose revenue we exclude from every claim we make — plus Sabina&apos;s first customer contracted, with onboarding ahead of us. The reps who establish themselves in the next 6 months will own customer relationships and territory that compound as this company scales. There are roughly 900,000 trade businesses in the US. We need to be in thousands of them.
            </p>
        </div>
        </div>
      </section>

      {/* What You'd Be Selling */}
      <Section
        id="product"
        className="band"
        eyebrow="The Product"
        title={<>What you&apos;d be selling</>}
        lead={
          <p className="lead">
            A platform that service businesses actually need &mdash; not a nice-to-have. These companies are running on spreadsheets, disconnected apps, and paper. Reps sell <strong>Sabina</strong>, hired onto a founding seat (<a className="link" href="https://hiresabina.ai/hire#founding">See current founding availability</a>), with Forge Core included and never a separate line. Her price is custom to each company and never published. <strong>The tools</strong> are likewise a custom quote based on the company&apos;s needs.
          </p>
        }
      >
        <ul className="grid g3 tiles">
          {platformFeatures.map((feature, i) => (
            <li key={feature} className="card reveal" style={{ '--i': i } as React.CSSProperties}>
              <span className="mk" aria-hidden="true">&bull;</span>
              <p className="tile-t">{featureTitle(feature)}<span className="sr-only"> &mdash; </span></p>
              <p className="tile-p">{featureBody(feature)}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Commission Structure */}
      <Section
        id="compensation"
        eyebrow="Compensation"
        title="Read this carefully"
        lead={
          <p className="lead">
            This is not a standard commission plan. This is a wealth-building structure designed for the founding team.
          </p>
        }
      >
        <div className="rows reveal commission">
          {commissionTable.map((row) => (
            <div key={row.type}>
              <div className="rate-head">
                <h3 className="row-t">
                  {row.type}
                </h3>
                <span className="rate">
                  {row.rate}
                </span>
              </div>
              <p>{row.terms}</p>
            </div>
          ))}
        </div>

        <div className="callout reveal">
          <h3 className="h3">
            Do the math
          </h3>
            {/* COPY REVIEW — approved by Mark 2026-08-25 with the assumption made explicit,
                and RE-STRUCK 2026-08-29 by his founding-ten ruling: "first 10 is 20k and then we
                jump to 3500 per person". The first ten hires book $2,000 each, so a bare
                "10 x $3,500 = $35,000" was the standing rate applied to seats that cannot be
                sold at it yet. Both endpoints and the seat count that separates them are now
                named inline.
                No total on this page may rest on a mix the reader cannot see: the count and the
                per-account price are stated as separate, named inputs, and the paragraph that
                follows names what a different mix does to the result. Do not compress this back
                into "10 Forge accounts a month at $3,500/mo" — that is the hidden-assumption
                form this rewrite exists to remove.
                SUPERSEDED 2026-09-04 — Mark ruled every Sabina price off every public surface
                (strip both site and table). The worked dollar totals above could not be stated
                without her founding/standing rate, so this paragraph was rewritten to carry the
                same meaning on percentages alone: what a rep earns per seat, and that it doesn't
                decay or step down. The per-account dollar figure is unaffected — it still isn't
                published — reps see it on their onboarding call. Do not restore a dollar total
                here; that is exactly what this rewrite removes. */}
            <p>
              <strong>Every Sabina hire pays the rep the same way</strong>: her full first month&apos;s subscription paid on collection, plus a <strong>15% residual on top of that for as long as the account stays active</strong> &mdash; no decay, no step-down, no production minimum to keep it. Accounts differ in size, but the percentage is identical on all of them, so a book of accounts compounds the same way whichever rate closed each account &mdash; the number to remember is 15%, forever, not a dollar total that depends on the mix. Your rate card for a given deal is confirmed before you quote it.
            </p>
            <p>
              That structure is for <em>Sabina</em> hires specifically, not for accounts of any kind. Every tools deal is custom quoted, so commission follows the agreed amount for that account. The commission percentages are identical either way; only the per-account figure moves. Run your own mix.
            </p>
            <p>
              <strong>Separation tail: 6 months</strong> (industry standard is 90 days). This is not a commission plan. This is an equity-equivalent income stream without dilution.
            </p>
        </div>
      </Section>

      {/* Who Should / Shouldn't Apply */}
      <section className="section band" id="fit" data-name="Who should apply">
        <div className="wrap">
          <div className="grid g2">
            <div className="card stack reveal">
              <div className="sec-head">
                <p className="eyebrow">Requirements</p>
                <h2 className="h3">Who should apply</h2>
              </div>
              <ul className="pg-marks">
                {qualifications.map((q) => (
                  <li key={q}>
                    <span className="mk">&#10003;</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card stack reveal" style={{ '--i': 1 } as React.CSSProperties}>
              <div className="sec-head">
                <p className="eyebrow">Honest Filter</p>
                <h2 className="h3">Who should not apply</h2>
              </div>
              <ul className="pg-marks">
                {disqualifiers.map((d) => (
                  <li key={d}>
                    <span className="mk no">&times;</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <Section id="provide" eyebrow="What We Provide" title="What you get from us">
        <ul className="grid g3 tiles gets">
          {repGets.map((item, i) => (
            <li key={item} className="card reveal" style={{ '--i': i } as React.CSSProperties}>
              <span className="mk">&#10003;</span>
              <p className="tile-p">{item}</p>
            </li>
          ))}
        </ul>
        <div className="callout reveal">
          <p>
          <strong>The bottom line:</strong> The people who build the revenue engine of this company will have options &mdash; career, financial, and otherwise &mdash; that don&apos;t exist at companies that already have a sales team. We&apos;re not making promises. We&apos;re pointing at the math and asking if you can do addition.
          </p>
        </div>
      </Section>

      {/* Application Form */}
      <section className="section band" id="apply" aria-labelledby="h-apply">
        <div className="wrap">
          <div className="apply-grid">
            <div className="stack">
              <p className="eyebrow">Apply Now</p>
              <h2 className="h2" id="h-apply">Show us the numbers</h2>
              <p className="lead">
                No cover letters. No &ldquo;I&apos;m a self-starter&rdquo; paragraphs. Results speak.
              </p>
              <div className="req">
                <p>Requirements</p>
                <p>3+ years B2B sales</p>
                <p>Documented commission earnings</p>
                <p>Remote &bull; 1099 Independent Contractor</p>
              </div>
            </div>
            <div className="card">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <CloseBand
        name="Questions"
        title="Questions before applying?"
        lead={
          <p className="lead">
            Reach out directly. If you&apos;re the right fit, we want to talk.
          </p>
        }
      >
        <div className="center-block close-contact">
          <ContactCTA />
        </div>
      </CloseBand>
    </div>
  );
}
