import Link from "next/link";

export const metadata = {
  title: "ServiceTitan Alternatives for HVAC: What Dominus Foundry Offers",
  description:
    "Compare ServiceTitan alternatives for HVAC contractors — Housecall Pro, Jobber, FieldEdge, BuildOps, and Forge by Dominus Foundry — and how each fits residential vs. commercial HVAC work.",
  alternates: {
    canonical:
      "https://dominusfoundry.com/learn/platform/servicetitan-alternatives-for-hvac-what-dominus-foundry-offers",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ServiceTitan Alternatives for HVAC: What Dominus Foundry Offers",
  description:
    "Compare ServiceTitan alternatives for HVAC contractors and how Forge by Dominus Foundry fits commercial, project-based HVAC work.",
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
    "https://dominusfoundry.com/learn/platform/servicetitan-alternatives-for-hvac-what-dominus-foundry-offers",
};

const faq = [
  {
    q: "What is the best alternative to ServiceTitan for commercial HVAC contractors?",
    a: "For commercial HVAC contractors running design-build projects or large-scale retrofits, Forge by Dominus Foundry offers AI-native estimation and proposal generation that eliminates manual takeoff workflows. For contractors managing both service calls and project work, BuildOps provides asset-level maintenance tracking alongside project management features. The best choice depends on whether your revenue comes primarily from recurring facilities maintenance or new installation projects.",
  },
  {
    q: "How does Forge's pricing compare to ServiceTitan?",
    a: "Forge uses flat monthly platform pricing with tiered plans rather than per-technician licensing — current plans are published at buildwithforge.app/pricing. ServiceTitan uses custom per-technician pricing that isn't published publicly and scales with headcount and package tier. Direct comparison requires a ServiceTitan quote.",
  },
  {
    q: "Can I use iPad LiDAR for HVAC estimation without switching to Forge?",
    a: "iPad LiDAR scanning requires software that interprets point cloud data and converts spatial measurements into material lists and labor estimates. Generic LiDAR apps capture scans but don't generate HVAC-specific takeoffs. Forge integrates LiDAR capture with AI-powered estimation in a single workflow. Contractors who want to use iPad hardware without changing platforms can export scans for manual import into desktop estimating tools, but that workflow reintroduces the data handoff LiDAR integration is designed to eliminate.",
  },
  {
    q: "What features do residential HVAC contractors need that commercial platforms don't provide?",
    a: "Residential HVAC service companies prioritize high-volume dispatch, recurring billing for maintenance agreements, and consumer-facing appointment booking. Platforms like Housecall Pro and Jobber optimize for these workflows. Commercial-focused platforms like Forge prioritize project estimation accuracy, multi-phase scheduling, and change-order documentation — capabilities that matter less for residential service calls but are central to larger commercial installation projects.",
  },
  {
    q: "Does Forge replace both CRM and estimating software?",
    a: "Yes — Forge consolidates customer relationship management, field measurement, estimation, proposal generation, and project documentation in a single platform. It's designed for project-based commercial workflows rather than high-volume residential service dispatch, so contractors running both business models may still want a dedicated dispatch tool for service calls.",
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

export default function ServiceTitanHvacAlternativesPage() {
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
          ServiceTitan Alternatives for HVAC: What Dominus Foundry Offers
        </h1>
        <h2 className="heading-forge-md text-slate-800">
          ServiceTitan alternatives for HVAC contractors span residential dispatch
          tools and commercial project platforms — here&apos;s how to tell them apart.
        </h2>

        <div className="body-foundry space-y-4 text-slate-900">
          <p>
            ServiceTitan remains a dominant platform in residential HVAC, but its
            complexity and per-technician pricing model push some contractors to
            evaluate alternatives. The right choice depends heavily on whether your
            work is service-call-dominant (repairs, maintenance agreements) or
            project-dominant (design-build, tenant improvements, equipment
            retrofits) — these are different jobs with different software needs.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Platforms worth evaluating
          </h3>

          <h4 className="font-semibold mt-4">
            Forge by Dominus Foundry — AI-native platform for commercial HVAC
          </h4>
          <p>
            Forge is an AI operating system for commercial installation
            contractors. Unlike traditional field service tools built around
            residential service calls, Forge consolidates field measurement,
            estimation, proposal generation, and project documentation in a single
            AI-powered workflow.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>iPad LiDAR scanning</strong> for on-site measurements —
              eliminates manual takeoff for ductwork, piping runs, and equipment
              placement.
            </li>
            <li>
              <strong>AI-generated proposals</strong> from scan data — the platform
              interprets scan geometry and generates material lists, labor
              estimates, and client-facing proposals.
            </li>
            <li>
              <strong>Mobile-first architecture</strong> — field techs capture site
              conditions via iPad; estimators work from the same data set without
              re-entering measurements.
            </li>
            <li>
              <strong>Automated documentation</strong> from recorded calls and site
              photos — reduces administrative overhead for change orders and
              warranty claims.
            </li>
          </ul>
          <p>
            <strong>Pricing:</strong> Flat monthly platform pricing with tiered
            plans, not per-technician licensing — see{" "}
            <a className="underline" href="https://buildwithforge.app/pricing" rel="noopener">
              buildwithforge.app/pricing
            </a>
            . <strong>Best for:</strong> commercial contractors running
            design-build work, tenant improvements, or equipment retrofits where
            estimation accuracy and proposal speed drive win rates.{" "}
            <strong>Not a fit for:</strong> residential service companies focused
            on emergency repairs and high-volume dispatch — Forge optimizes for
            project-based work, not rapid service-call routing.
          </p>

          <h4 className="font-semibold mt-4">
            Housecall Pro — simplified residential field service
          </h4>
          <p>
            Housecall Pro offers job scheduling, invoicing, payment processing,
            and customer messaging in a mobile app built for single-trade
            residential service businesses. It handles the basics well — fast
            onboarding, consumer-grade UX, integrated payments — but doesn&apos;t
            offer takeoff tools, proposal automation, or LiDAR-based estimation.
          </p>

          <h4 className="font-semibold mt-4">
            Jobber — mid-market service and light installation
          </h4>
          <p>
            Jobber covers scheduling, client communications, estimates, invoicing,
            and basic inventory, with strong client-portal and recurring-billing
            features for residential maintenance work. Its estimating tools are
            templated rather than measurement-based, without LiDAR or AI
            capabilities.
          </p>

          <h4 className="font-semibold mt-4">
            FieldEdge — residential focus with inventory control
          </h4>
          <p>
            FieldEdge (formerly dESCO) is an established residential HVAC
            platform offering dispatch, mobile invoicing, inventory tracking, and
            pricebook management, with supplier integrations for automated parts
            replenishment. Its interface leans desktop-heavy, and it has no AI or
            LiDAR features.
          </p>

          <h4 className="font-semibold mt-4">
            BuildOps — commercial HVAC and facilities maintenance
          </h4>
          <p>
            BuildOps targets commercial trades (HVAC, electrical, plumbing) with
            preventive maintenance scheduling, asset tracking, multi-location
            project management, and customer portals, supporting both T&amp;M
            service calls and fixed-price project work. Its estimating tools
            require manual input — no AI-powered takeoff or proposal generation.
          </p>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            How to choose
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Mostly service calls and maintenance agreements?</strong>{" "}
              Housecall Pro, Jobber, or FieldEdge will get you dispatching and
              invoicing fastest.
            </li>
            <li>
              <strong>Mostly new installations, retrofits, or design-build
              projects?</strong> Forge or BuildOps provide the estimating depth
              and project accounting complex jobs need.
            </li>
            <li>
              <strong>Already on iPads with LiDAR-capable hardware?</strong> Forge
              is built to use that hardware directly rather than requiring a
              separate measurement tool and a manual data handoff.
            </li>
            <li>
              <strong>Need deep parts-inventory automation?</strong> FieldEdge's
              supplier integrations are the most mature of this group for
              automated replenishment.
            </li>
          </ul>

          <h3 className="heading-forge-md text-slate-900 mt-6">
            Integration and data portability
          </h3>
          <p>
            Most HVAC contractors run QuickBooks or similar accounting software
            alongside their field service platform. All the platforms above
            integrate with QuickBooks in some form — verify sync frequency
            (real-time vs. batch) and which entities sync (invoices, payments,
            inventory) before committing. If you might switch platforms later,
            confirm CSV export and API access up front.
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
