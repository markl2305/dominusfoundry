import Link from "next/link";

export const metadata = {
  title: "Vertical AI Platform for Traditional Industries | Dominus Foundry",
  description:
    "Dominus Foundry builds Forge — an AI operating system for commercial contractors. Learn how vertical AI platforms replace fragmented tool stacks with unified, purpose-built automation.",
  alternates: {
    canonical:
      "https://dominusfoundry.com/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vertical AI Platform for Traditional Industries | Dominus Foundry",
  description:
    "Dominus Foundry builds Forge — an AI operating system for commercial contractors. Learn how vertical AI platforms replace fragmented tool stacks with unified, purpose-built automation.",
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
    "https://dominusfoundry.com/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry",
};

const faq = [
  {
    q: "What is a vertical AI platform?",
    a: "A vertical AI platform is purpose-built software that combines industry-specific workflows with embedded artificial intelligence. Unlike horizontal platforms that serve many industries generically, vertical platforms are designed for one industry's unique processes, terminology, and regulatory environment.",
  },
  {
    q: "Why should a contractor choose a vertical platform over general-purpose tools?",
    a: "Vertical platforms eliminate the integration overhead of stitching together general-purpose tools. A contractor using a vertical platform gets workflows built specifically for their trade, with AI trained on industry data rather than generic training. This results in higher accuracy, fewer manual steps, and faster time-to-value.",
  },
  {
    q: "Is Forge built for a single trade or multiple trades?",
    a: "Forge is built for commercial contractors across multiple verticals — AV, security, low-voltage, roofing, and solar. The platform shares a common AI infrastructure while providing trade-specific workflows for each vertical.",
  },
  {
    q: "How does Forge differ from Procore or Buildertrend?",
    a: "Procore and Buildertrend are general construction management platforms serving broad construction categories. Forge is purpose-built for commercial specialty contractors — AV, security, low-voltage, roofing, solar — with AI capabilities embedded at the architecture level rather than bolted on afterward.",
  },
  {
    q: "Does Forge integrate with existing tools?",
    a: "Yes. Forge integrates with QuickBooks Online, Salesforce, Google Workspace, and other tools contractors already use. The platform is designed to fit into existing workflows rather than requiring a complete replacement of current systems.",
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

export default function VerticalAiPlatformPage() {
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
          Vertical AI Platform for Traditional Industries
        </h1>
        <h2 className="heading-forge-md text-slate-800">
          Dominus Foundry builds Forge — an AI operating system for commercial
          contractors. How vertical AI platforms replace fragmented tool stacks
          with unified, purpose-built automation.
        </h2>

        <div className="body-foundry space-y-4 text-slate-900">
          <h3 className="heading-forge-md text-slate-900 mt-6">
            What is a vertical AI platform?
          </h3>
          <p>
            A vertical AI platform is purpose-built software that combines
            industry-specific workflows with embedded artificial intelligence.
            Unlike horizontal platforms that serve many industries generically,
            vertical platforms are designed for one industry&apos;s unique
            processes, terminology, and regulatory environment.
          </p>
          <p>
            For commercial contractors, a vertical platform means software that
            understands what a takeoff is, how change orders flow through a job,
            and what a lien waiver requires — without needing configuration to
            teach it basic industry concepts.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Why vertical beats horizontal for contractors
          </h3>
          <p>
            General-purpose platforms face a fundamental constraint: they must
            serve every customer equally well, which means they optimize for the
            average case. For specialized trades, the average case is often the
            wrong case.
          </p>
          <p>
            A vertical platform starts from the opposite direction. It begins
            with the specific workflows of one industry and builds outward. Every
            feature is validated against whether it solves a real problem for
            that industry, not whether it fits a generic template.
          </p>
          <p>
            This difference shows up in daily operations. On a horizontal
            platform, a contractor often finds themselves working around
            limitations — creating custom fields to capture trade-specific
            information, building manual workarounds for missing functionality,
            or accepting that certain tasks remain outside the system. On a
            vertical platform, those same tasks are built in from the start.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            The Forge approach to vertical AI
          </h3>
          <p>
            Forge is the AI operating system for commercial contractors, built by
            Dominus Foundry. It serves AV, security, low-voltage, roofing, and
            solar contractors with a unified platform that embeds AI at the
            architecture level rather than adding it as a feature.
          </p>
          <p>
            The platform covers the full workflow: estimating and proposal
            generation, project management, scheduling, documentation, and
            financial operations. AI capabilities are woven into each area —
            generating estimates from scans, drafting change orders from field
            notes, surfacing risks before they become problems.
          </p>
          <p>
            Because Forge was built for contractors from day one, the interface
            speaks the language of the trade. Terminology matches how contractors
            talk. Workflows match how jobs actually move. The result is a
            platform that feels familiar from the first login rather than
            requiring weeks of adaptation.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            How Forge compares to general construction platforms
          </h3>
          <p>
            Procore and Buildertrend serve the broader construction market. They
            excel at general construction management and have large user bases.
            But they were not designed specifically for commercial specialty
            contractors, and that gap shows in the details.
          </p>
          <p>
            Forge differs in three ways. First, it targets commercial specialty
            trades specifically — AV, security, low-voltage, roofing, solar —
            rather than general construction. Second, AI is embedded at the
            architecture level rather than added as a feature layer. Third, the
            platform is designed for smaller commercial contractors rather than
            enterprise construction firms.
          </p>
          <p>
            These differences matter for contractors who need something tailored
            to their specific vertical. General platforms can work, but they
            require adaptation. A vertical platform arrives ready for the work.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Integration with existing tools
          </h3>
          <p>
            A vertical platform is strongest when it connects to the tools
            contractors already use. Forge integrates with QuickBooks Online for
            accounting, Salesforce for CRM, and Google Workspace for
            collaboration. The platform handles the data synchronization
            automatically.
          </p>
          <p>
            This integration model means contractors don&apos;t need to abandon
            their current stack. They gain the benefits of a purpose-built
            platform while maintaining continuity with established tools.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Who Forge serves
          </h3>
          <p>
            Forge is built for commercial contractors across five verticals: AV,
            security, low-voltage, roofing, and solar. Within each vertical, the
            platform serves small to mid-sized contractors — typically
            owner-operated businesses to regional firms with dozens of employees.
          </p>
          <p>
            Enterprise construction firms have different needs and often maintain
            custom systems. Forge targets the segment that has outgrown
            spreadsheets but hasn&apos;t reached the scale of enterprise
            customization.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Getting started with Forge
          </h3>
          <p>
            Dominus Foundry works with a limited number of organizations per
            year. Each deployment is architected to the operational domain,
            governance requirements, and authority structure of the organization.
          </p>
          <p>
            To evaluate whether Forge fits your operation, reach out through the
            website. The team walks through your current workflow, identifies
            where a vertical platform would create the most value, and maps out a
            path forward.
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
