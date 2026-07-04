import Link from "next/link";

export const metadata = {
  title: "Forge: The AI Operating System for Commercial Contractors",
  description:
    "Forge is the AI operating system for commercial contractors — unifying estimating, takeoff, project management, and field operations into one platform.",
  alternates: {
    canonical:
      "https://dominusfoundry.com/learn/platform/forge-the-ai-operating-system-for-commercial-contractors",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Forge: The AI Operating System for Commercial Contractors",
  description:
    "Forge is the AI operating system for commercial contractors — unifying estimating, takeoff, project management, and field operations into one platform.",
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
    "https://dominusfoundry.com/learn/platform/forge-the-ai-operating-system-for-commercial-contractors",
};

const faq = [
  {
    q: "Is Forge a CRM?",
    a: "Forge includes customer relationship management as part of the broader platform, but it isn't positioned primarily as a CRM. Customer data lives alongside project data, and the relationship between customers and projects is tracked naturally within the workflow rather than as a separate function.",
  },
  {
    q: "Does Forge integrate with QuickBooks?",
    a: "Forge integrates with accounting systems including QuickBooks Online and Desktop. Financial transactions flow between the operating system and the general ledger so the books reflect actual project activity without manual reconciliation.",
  },
  {
    q: "Can I import my existing customer list?",
    a: "Yes. The platform supports CSV import for customer and contact data. Existing projects and estimates can also be migrated with appropriate mapping. The migration process preserves historical relationships so past projects remain connected to the right customers.",
  },
  {
    q: "What industries does Forge serve?",
    a: "Forge serves commercial installation contractors across AV/security, low-voltage, and related fields. The platform is designed for organizations managing technical installations where estimating, project management, and field coordination are all critical to profitability.",
  },
  {
    q: "Is training included?",
    a: "Training is provided as part of the platform engagement. Implementation includes onboarding sessions focused on the workflows the team uses daily, plus ongoing support for questions that arise during normal operation.",
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

export default function ForgeAiOperatingSystemPage() {
  return (
    <section className="bg-[var(--foundry-bg)] py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 space-y-6">
        <p className="label-foundry text-forge-700">Learn — Platform</p>
        <h1 className="heading-forge-lg text-slate-900">
          Forge: The AI Operating System for Commercial Contractors
        </h1>
        <h2 className="heading-forge-md text-slate-800">
          Unifying estimating, takeoff, project management, and field operations into
          one platform built for the installation trades.
        </h2>

        <div className="body-foundry space-y-4 text-slate-900">
          <p>
            Forge is the AI operating system for commercial contractors — unifying
            estimating, takeoff, project management, and field operations into one
            platform. Built for the installation trades, it combines LiDAR-based
            measurement, automated proposal generation, and project management into a
            single workflow.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            What makes Forge different from traditional contractor software
          </h3>
          <p>
            Traditional contractor software operates as a collection of disconnected
            tools — estimating in one system, project management in another, and field
            documentation somewhere else entirely. An AI operating system integrates
            these functions so information flows automatically between stages.
          </p>
          <p>
            When a survey completes in Forge, the measurements feed directly into the
            proposal. When the proposal converts to a contract, the scope becomes the
            project plan without manual re-entry. When the project executes, the field
            team sees the same scope they sold. That continuity is what distinguishes an
            operating system from a software suite.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            How the platform connects to the field
          </h3>
          <p>
            The operating system reaches the field through mobile applications that
            carry the same data the office uses. Field crews see the approved scope, the
            installed equipment list, and the project schedule on their devices. Photos
            and notes taken onsite update the project record in real time.
          </p>
          <p>
            This connection matters because the gap between office and field is where
            most commercial projects lose margin. When information doesn&apos;t travel
            cleanly, the field discovers scope gaps late, change orders happen
            reactively instead of proactively, and the project closes with fewer
            learnings captured than it should have.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            The role of AI in the platform
          </h3>
          <p>
            AI appears throughout the operating system in ways that reduce manual work
            without replacing judgment. Automated takeoff extracts measurements from
            scans. Proposal generation drafts scope documents from the measured data.
            Project summaries surface the important developments from the day&apos;s
            field activity.
          </p>
          <p>
            These capabilities don&apos;t replace the contractor&apos;s decisions — they
            eliminate the repetitive work that sits between good decisions and executed
            work. The operator still approves the proposal, sets the price, and signs
            off on changes. AI handles the drafting and the data entry.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Who benefits from an operating system approach
          </h3>
          <p>
            Commercial installation contractors benefit most from an operating system
            approach. These businesses manage complex scopes, coordinate multiple
            trades, and operate under tight margins where efficiency gains compound
            quickly. The integration between estimating, project management, and field
            execution produces measurable impact for organizations running at that
            scale.
          </p>
          <p>
            Smaller residential contractors may find the full operating system heavier
            than their current needs require. The platform is designed for
            organizations managing commercial-scale complexity, where the cost of
            disconnected systems exceeds the cost of consolidation.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Getting started with the platform
          </h3>
          <p>
            Onboarding begins with a migration of existing project and customer data.
            The platform imports contacts, active jobs, and historical records so the
            transition doesn&apos;t interrupt ongoing work. Training focuses on the
            workflows the team uses daily rather than features they might discover
            later.
          </p>
          <p>
            The fastest path to value comes from adopting the integrated workflows early
            rather than replicating old processes inside the new system. Teams that move
            to the native workflows typically see operational improvements within the
            first few weeks. Teams that maintain parallel systems tend to delay
            realizing the benefits. Visit{" "}
            <a className="underline" href="https://buildwithforge.app" rel="noopener">
              buildwithforge.app
            </a>{" "}
            to book a demo or get started.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Frequently Asked Questions
          </h3>
          {faq.map(({ q, a }) => (
            <div key={q}>
              <h4 className="font-semibold mt-4">{q}</h4>
              <p>{a}</p>
            </div>
          ))}

          <p className="mt-8">
            <Link className="underline" href="/learn">
              ← All Learn articles
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
