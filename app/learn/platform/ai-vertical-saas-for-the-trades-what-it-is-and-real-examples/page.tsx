import Link from "next/link";
import { PageHero, More } from "@/components/site/primitives";
import ArticleIndex from "@/components/site/qp/ArticleIndex";
import "@/components/site/pages/learn.css";
import "@/app/styles/pages/qp-b.css";
import "@/app/styles/pages/articles.css";

export const metadata = {
  title: "AI Vertical SaaS for the Trades: What It Is and Real Examples",
  description:
    "A practical guide to AI-powered vertical SaaS platforms serving commercial installation contractors. Learn what distinguishes true vertical SaaS from horizontal CRMs, which platforms serve which trades, and how to evaluate a platform before committing.",
  alternates: {
    canonical:
      "https://dominusfoundry.com/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Vertical SaaS for the Trades: What It Is and Real Examples",
  description:
    "A practical guide to AI-powered vertical SaaS platforms serving commercial installation contractors.",
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
    "https://dominusfoundry.com/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples",
};

const faq = [
  {
    q: "What is vertical SaaS?",
    a: "Vertical SaaS is software purpose-built for a specific industry — it understands that industry's workflows, terminology, and compliance requirements out of the box. Unlike horizontal platforms that require heavy customization, vertical SaaS ships with industry-native features ready to use.",
  },
  {
    q: "Which trades benefit most from vertical SaaS?",
    a: "Commercial installation contractors including AV integrators, security/low-voltage, fire/life-safety, roofing, and solar benefit most. These trades have complex workflows — takeoff, proposals, BOM generation, project management, crew dispatch, commissioning — that general-purpose tools don't understand natively.",
  },
  {
    q: "How is AI vertical SaaS different from regular vertical SaaS?",
    a: "AI vertical SaaS embeds machine learning into core workflows — automatic takeoff from scans, AI-generated proposals, predictive scheduling, automated documentation. Regular vertical SaaS requires manual entry for everything; AI vertical SaaS generates much of the work automatically.",
  },
  {
    q: "Is vertical SaaS worth the premium over horizontal tools?",
    a: "For most commercial installation contractors, yes. The upfront cost is higher, but the reduction in training time, elimination of workarounds, and built-in compliance features deliver faster time-to-value. A team that would need six months to configure a horizontal platform often goes live on vertical SaaS in two weeks.",
  },
  {
    q: "What should I look for when evaluating a vertical SaaS platform?",
    a: "Verify the platform was built for your specific trade, not adapted to it. Check whether key workflows run natively versus requiring workarounds. Confirm the platform supports your mobile devices. Ask about integration with your existing systems. Request a live demo using your actual data.",
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

const horizontalVsVertical = [
  ["Target market", "Any business", "Specific industry"],
  ["Out-of-box fit", "Requires customization", "Ready to use"],
  ["Industry terminology", "Generic", "Native"],
  ["Compliance handling", "Manual", "Built-in"],
  ["Training time", "Weeks to months", "Days to weeks"],
];

const platformLandscape = [
  ["AV integration", "D-Tools, Forge", "D-Tools is the established design and estimating toolset; Forge is the AI-native option"],
  ["Security/Low-voltage", "D-Tools, Forge", "Same as AV — the trades share tooling"],
  ["Roofing", "EagleView, Forge", "EagleView measures; Forge runs the work"],
  ["Solar", "Aurora Solar", "Aurora specializes in solar design; solar is on Forge's roadmap, not a trade Forge serves today"],
  ["Fire/Life Safety", "Specialized verticals", "Few dedicated platforms; many contractors use general PM tools; fire/life safety is on Forge's roadmap, not a trade Forge serves today"],
];

export default function AiVerticalSaasPage() {
  return (
    <div className="qpb qp-guide">
      <PageHero
        eyebrow="Learn — Platform"
        title={<>
          AI Vertical SaaS for the Trades: What It Is and Real Examples
        </>}
        lead={<h2 className="lead">
          Vertical SaaS built for commercial installation contractors — AV, security,
          low-voltage, roofing — with AI layered into the native workflow.
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
          <h3>What is vertical SaaS?</h3>
          <p>
            Vertical SaaS is software purpose-built for a specific industry. Unlike
            horizontal platforms that serve many industries with generic features,
            vertical SaaS ships with industry-native workflows, terminology, and
            compliance baked in.
          </p>
          <p>
            The distinction matters for commercial installation contractors. A horizontal
            CRM treats every customer the same. A vertical platform for AV integrators
            understands the difference between a control system, a display, and an audio
            component. A vertical platform for security contractors understands
            UL-listed equipment and AHJ requirements.
          </p>

          <h3>
            How vertical differs from horizontal
          </h3>
          <div className="table-wrap" tabIndex={0} role="region" aria-label="How vertical differs from horizontal">
            <table>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Horizontal SaaS</th>
                  <th>Vertical SaaS</th>
                </tr>
              </thead>
              <tbody>
                {horizontalVsVertical.map(([dim, h, v]) => (
                  <tr key={dim}>
                    <td>{dim}</td>
                    <td>{h}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>
            Why vertical SaaS for the trades?
          </h3>
          <p>
            Commercial installation work involves complex, multi-step workflows that
            general-purpose tools don&apos;t understand. Takeoff, proposal, BOM, project
            management, crew dispatch, commissioning, closeout — each step has its own
            requirements, documents, and stakeholders.
          </p>
          <p>
            A horizontal platform requires the contractor to build the workflow manually.
            A vertical platform ships with the workflow. The difference shows up in
            adoption: a team that would need six months to configure a horizontal
            platform often goes live on vertical SaaS in two weeks.
          </p>

          <h4>The AI layer</h4>
          <p>
            AI vertical SaaS adds machine learning to those native workflows. Automatic
            takeoff from LiDAR scans. AI-generated proposals from scan data. Automated
            documentation from recorded calls. Predictive scheduling based on historical
            patterns.
          </p>
          <p>
            The AI doesn&apos;t replace judgment — it removes the manual work that sits
            between judgment and execution. An estimator still decides what to specify.
            The AI generates the proposal that communicates the specification to the
            client.
          </p>

          <h3>
            Platform landscape by trade
          </h3>
          <p>Different trades have different dominant platforms:</p>
          <div className="table-wrap" tabIndex={0} role="region" aria-label="Platform landscape by trade">
            <table>
              <thead>
                <tr>
                  <th>Trade</th>
                  <th>Leading platforms</th>
                  <th>Key differentiator</th>
                </tr>
              </thead>
              <tbody>
                {platformLandscape.map(([trade, platforms, diff]) => (
                  <tr key={trade}>
                    <td>{trade}</td>
                    <td>{platforms}</td>
                    <td>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4>AV and low-voltage</h4>
          <p>
            D-Tools remains the category leader for AV system design and estimation. Its
            installed base among AV integrators is large, and its ecosystem of partners
            is mature. For a contractor evaluating platforms, D-Tools represents the
            safe, proven choice.
          </p>
          <p>
            Forge is the emerging AI-native option. It builds on the same foundation —
            unified project data, integrated estimation, mobile access — but adds AI
            automation throughout. Where D-Tools requires manual entry, Forge generates
            content automatically. The trade-off: D-Tools has the track record; Forge has
            the automation.
          </p>

          <h4>Roofing</h4>
          <p>
            EagleView dominates aerial-measurement reports for roofing. Contractors using
            EagleView get detailed roof measurements from satellite imagery, delivered as
            PDF reports. The reports integrate with estimating and proposal tools.
          </p>
          <p>
            Forge approaches roofing differently — it runs the entire work, not just the
            measurement. For a roofing contractor deciding between platforms, the
            question is whether they need a best-in-class measurement tool (EagleView) or
            a complete operating system (Forge).
          </p>

          <h4>Solar</h4>
          <p>
            Aurora Solar is a leading solar-design platform. It produces 3D models,
            shading analysis, and electrical designs specifically for residential and
            small-commercial solar, with extensive integration with permitting
            authorities.
          </p>
          <p>
            Solar is on Forge's roadmap as the next phase; it is not a trade Forge serves
            today. For a solar contractor, Aurora may be the better fit.
          </p>

          <h3>
            Evaluating a vertical SaaS platform
          </h3>
          <p>Before committing to a platform, verify five things.</p>
          <ul>
            <li>
              <strong>Does it ship with your workflow?</strong> Ask for a live
              demonstration using your actual project data. If the platform requires you
              to recreate your workflow during the demo, it&apos;s not a good fit.
            </li>
            <li>
              <strong>Does it support your devices?</strong> Field crews work on
              iPhones, iPads, Android phones, and Windows laptops. Verify the platform
              runs on every device your team actually uses.
            </li>
            <li>
              <strong>Does it integrate with your existing systems?</strong> Most
              contractors have accounting software, CRM, and possibly a legacy PM tool.
              Verify the platform integrates with those systems before committing.
            </li>
            <li>
              <strong>What&apos;s the implementation timeline?</strong> A platform that
              requires six months to implement will face resistance from the team. A
              platform that deploys in two weeks gets adopted quickly.
            </li>
            <li>
              <strong>What&apos;s the total cost of ownership?</strong> Look beyond the
              monthly subscription. Factor in training time, integration costs, and the
              opportunity cost of workarounds — a cheaper platform that leaves the team
              doing hours of manual work every week can cost more than a pricier one that
              eliminates that work.
            </li>
          </ul>

          <h3>
            The decision framework
          </h3>
          <p>When choosing a vertical SaaS platform, ask yourself three questions.</p>
          <ul>
            <li>
              <strong>Does my trade have a dedicated platform?</strong> If yes, start
              there. Specialized platforms generally outperform general-purpose
              alternatives for that trade.
            </li>
            <li>
              <strong>Do I need AI automation?</strong> If your team spends significant
              time on manual documentation, proposals, or scheduling, AI automation will
              deliver measurable ROI.
            </li>
            <li>
              <strong>Am I willing to change my workflow?</strong> Vertical SaaS works
              best when you adopt the platform&apos;s workflow rather than forcing the
              platform to match yours. If you&apos;re unwilling to adapt, a horizontal
              platform might be the better choice.
            </li>
          </ul>

          <h3>
            Frequently Asked Questions
          </h3>
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
