import type { CSSProperties } from "react";
import Link from "next/link";
import { PageHero } from "@/components/site/primitives";
import "@/components/site/pages/learn.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/learn-index.css";

export const metadata = {
  title: "Learn — Dominus Foundry",
  description:
    "Reference guides on AI software for construction and trades from Dominus Foundry, the company behind Forge.",
  alternates: { canonical: "https://dominusfoundry.com/learn" },
};

const articles = [
  {
    href: "/learn/platform/ai-software-company-for-construction-and-trades",
    title:
      "AI Software Company for Construction and Trades — Forge by Dominus Foundry",
    blurb:
      "What Dominus Foundry builds, what Forge actually does, and why AI-native architecture matters for installers.",
  },
  {
    href: "/learn/platform/ai-software-for-construction-and-trades",
    title:
      "AI Software for Construction and Trades: Forge vs Procore vs Buildertrend",
    blurb:
      "An honest comparison of the major platforms — who each one is really for, and where each one wins.",
  },
  {
    href: "/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples",
    title: "AI Vertical SaaS for the Trades: What It Is and Real Examples",
    blurb:
      "What distinguishes true vertical SaaS from horizontal CRMs, which platforms serve which trades, and how to evaluate one before committing.",
  },
  {
    href: "/learn/platform/forge-the-ai-operating-system-for-commercial-contractors",
    title: "Forge: The AI Operating System for Commercial Contractors",
    blurb:
      "How Forge unifies estimating, takeoff, project management, and field operations into one platform for the installation trades.",
  },
  {
    href: "/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry",
    title: "Vertical AI Platform for Traditional Industries",
    blurb:
      "Dominus Foundry builds Forge — an AI operating system for commercial contractors. How vertical AI platforms replace fragmented tool stacks with unified, purpose-built automation.",
  },
];

export default function LearnIndexPage() {
  /* Quality pass D2 (2026-10-14): copy verbatim. The guides as a grid of
     article cards; each card is one target (the title link is stretched over
     it, so the accessible name stays the title alone). */
  return (
    <div className="qp qp-learn">
      <PageHero
        eyebrow="Learn"
        title={<>
          Guides on AI software for construction and trades
        </>}
      />
      <section className="section pg-learn" id="guides" data-name="Guides">
        <div className="wrap">
          <ul className="guide-grid">
            {articles.map(({ href, title, blurb }, i) => (
              <li key={href} className="card reveal guide-card" style={{ "--i": i } as CSSProperties}>
                <h2 className="tile-t">
                  <Link href={href}>
                    {title}
                  </Link>
                </h2>
                <p className="tile-p">{blurb}</p>
                <span className="g-read" aria-hidden="true">&rarr;</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
