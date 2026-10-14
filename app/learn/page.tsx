import type { CSSProperties } from "react";
import Link from "next/link";
import { PageHero } from "@/components/site/primitives";
import "@/components/site/pages/learn.css";

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
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title={<>
          Guides on AI software for construction and trades
        </>}
      />
      <section className="section pg-learn">
        <div className="wrap">
          <ul className="list-rows">
            {articles.map(({ href, title, blurb }, i) => (
              <li key={href}>
                <div className="list-row reveal" style={{ "--i": i } as CSSProperties}>
                  <h2 className="lr-t">
                    <Link href={href}>
                      {title}
                    </Link>
                  </h2>
                  <p className="lr-p">{blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
