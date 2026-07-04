import Link from "next/link";

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
];

export default function LearnIndexPage() {
  return (
    <section className="bg-[var(--foundry-bg)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 space-y-6">
        <p className="label-foundry text-forge-700">Learn</p>
        <h1 className="heading-forge-lg text-slate-900">
          Guides on AI software for construction and trades
        </h1>
        <div className="body-foundry space-y-8 text-slate-900 mt-6">
          {articles.map(({ href, title, blurb }) => (
            <div key={href}>
              <h2 className="heading-forge-md text-slate-900">
                <Link className="hover:underline" href={href}>
                  {title}
                </Link>
              </h2>
              <p className="mt-2">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
