import Link from "next/link";
import { PageHero, More } from "@/components/site/primitives";
import ArticleIndex from "@/components/site/qp/ArticleIndex";
import "@/components/site/pages/learn.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/articles.css";

export const metadata = {
  title: "AI Software Company for Construction and Trades — Forge by Dominus Foundry",
  description:
    "Dominus Foundry builds Forge — AI-native software for commercial installation contractors: LiDAR scan-to-proposal, CRM, dialer, projects, and invoicing in one platform.",
  alternates: {
    canonical:
      "https://dominusfoundry.com/learn/platform/ai-software-company-for-construction-and-trades",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Software Company for Construction and Trades — Forge by Dominus Foundry",
  description:
    "Dominus Foundry builds Forge — AI-native software for commercial installation contractors: LiDAR scan-to-proposal, CRM, dialer, projects, and invoicing in one platform.",
  author: { "@type": "Organization", name: "Dominus Foundry" },
  publisher: {
    "@type": "Organization",
    name: "Dominus Foundry™ LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://dominusfoundry.com/logo-full.svg",
    },
  },
  mainEntityOfPage:
    "https://dominusfoundry.com/learn/platform/ai-software-company-for-construction-and-trades",
};

const faq = [
  {
    q: "What makes Forge different from traditional construction software?",
    a: "Forge is built from the ground up as an AI-native platform rather than legacy software with AI features bolted on. Field capture, estimating, proposals, and project workflow share one data model, so the AI works on structured data end to end — from LiDAR scan to client-ready proposal.",
  },
  {
    q: "Which trade verticals does Forge serve?",
    a: "Forge serves commercial security and AV integrators — its most mature vertical — and roofing contractors, with additional installation trades onboarding.",
  },
  {
    q: "Does Forge replace existing tools or integrate with them?",
    a: "Forge is designed to consolidate point solutions for estimating, proposals, field documentation, CRM, and project management into one platform. It syncs invoicing with QuickBooks and supports guided one-time data migration from tools like D-Tools.",
  },
  {
    q: "Is Forge suitable for small contracting businesses?",
    a: "Yes. Forge products are custom quoted for each company. Scope and terms are agreed before you commit. See buildwithforge.app/pricing.",
  },
  {
    q: "How does Forge handle data security?",
    a: "Each company's records, operating instructions, and permissions remain specific to that company, and access follows the sources and authority it approves. Record delivery and data terms are set in the company's agreement.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function AiSoftwareCompanyPage() {
  return (
    <div className="qp qp-guide">
      <PageHero
        eyebrow="Learn — Platform"
        title={<>
          AI Software Company for Construction and Trades — Forge by Dominus Foundry
        </>}
        lead={<h2 className="lead">
          Yes — Dominus Foundry builds AI software for construction and trades. Here is
          exactly what it does.
        </h2>}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="section pg-learn">
        <div className="wrap">
        <div className="qp-read has-index">
        <div className="qp-read-col">
        <div className="article">
          <h3>What Forge is</h3>
          <p>
            Forge by Dominus Foundry is an AI-native operating platform for commercial
            installation contractors. It consolidates field measurement, estimating,
            proposals, CRM, and project management into a single platform built
            specifically for AV, security, low-voltage, and roofing contractors.
          </p>
          <p>
            Unlike traditional construction software that adds AI features as
            afterthoughts, Forge was architected with AI in its core workflow: a field
            tech scans a site with an iPhone or iPad Pro, and the platform turns that
            capture into measurements, a bill of materials, and a client-ready proposal.
          </p>

          <h3>
            What the platform actually does
          </h3>
          <ul>
            <li>
              <strong>LiDAR scan-to-proposal.</strong> On-site capture on Apple hardware
              becomes accurate measurements, an equipment BOM, and a proposal — no
              Windows desktop required.
            </li>
            <li>
              <strong>CRM and dialer with AI call summaries.</strong> Reps work leads,
              call from the platform, and get AI-generated notes and summaries from
              recorded calls.
            </li>
            <li>
              <strong>Projects and field workflow.</strong> Project management that stays
              connected to the estimate and the site data instead of living in a separate
              tool.
            </li>
            <li>
              <strong>Invoicing and e-signatures.</strong> Proposals move to signed
              agreements and invoices, with QuickBooks sync for accounting.
            </li>
          </ul>

          <h3>Who builds Forge</h3>
          <p>
            Forge is built by Dominus Foundry, a founder-led technology company that builds
            Sabina, your company&apos;s own AI. Forge
            is the company&apos;s contractor vertical and first proof point, not the limit of what it
            builds. The team combines
            hands-on trade-industry operating experience with software engineering — the
            platform reflects actual field operations, not a generic SaaS template applied
            to construction. Dominus Foundry holds multiple provisional patent filings
            related to the Forge platform and its capture technology.
          </p>

          <h3>
            Why AI-native architecture matters
          </h3>
          <p>
            Legacy construction software started as manual workflows digitized into
            software, with AI added later at arm&apos;s length from the underlying data.
            Forge&apos;s AI operates on data structures designed for it from the start —
            the scan, the takeoff, the catalog, and the proposal share one model, which
            makes the outputs accurate enough to hand to a client.
          </p>
          <p>
            For a contractor evaluating platforms, the question isn&apos;t whether the
            software advertises AI features — nearly every platform does now. The question
            is whether the AI is genuinely integrated or bolted on.
          </p>

          <h3>
            Trade verticals supported
          </h3>
          <ul>
            <li>
              <strong>Security and AV integrators.</strong> The primary vertical and most
              mature implementation — scanning, design, BOM, and proposal workflows built
              for integrators.
            </li>
            <li>
              <strong>Roofing contractors.</strong> A dedicated vertical with
              roofing-specific measurement, material catalogs, and estimation logic, in
              production with real contractors today.
            </li>
            <li>
              <strong>Additional installation trades</strong> are onboarding on the same
              platform with vertical-specific configuration.
            </li>
          </ul>

          <h3>
            How Forge compares to traditional construction software
          </h3>
          <p>
            Traditional options fall into three categories: enterprise ERPs built for
            large organizations, point solutions that solve one problem well, and
            horizontal platforms that try to cover everything. Enterprise ERPs carry
            overhead small contractors don&apos;t need; point solutions require stitching
            together multiple vendors; horizontal platforms lack the vertical specificity
            that makes a tool useful on a jobsite.
          </p>
          <p>
            Forge targets the gap: a vertically-specific platform with the breadth of an
            ERP and the usability of a point solution. See the full{" "}
            <Link
             
              href="/learn/platform/ai-software-for-construction-and-trades"
            >
              comparison against Procore, Buildertrend, and D-Tools
            </Link>
            .
          </p>

          <h3>Getting started</h3>
          <p>
            The fastest way to evaluate Forge is a live demo — scan a room and watch it
            become a proposal in real time. Visit{" "}
            <a href="https://buildwithforge.app" rel="noopener">
              buildwithforge.app
            </a>{" "}
            to explore the platform. For a Forge quote, {" "}
            <a href="mailto:mark@dominusfoundry.com?subject=Ask%20about%20Forge%20tools">
              ask about Forge tools
            </a>
            .
          </p>

          <h3>Common questions</h3>
          <div className="learn-faq">
            {faq.map(({ q, a }) => (
              <More key={q} summary={<h4>{q}</h4>}>
                <p>{a}</p>
              </More>
            ))}
          </div>

          <p>
            <Link href="/learn">
              ← All Learn articles
            </Link>
          </p>
        </div>
        </div>
        <ArticleIndex />
        </div>
        </div>
      </section>
    </div>
  );
}
