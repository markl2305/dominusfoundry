import Link from "next/link";
import Button from "../../../components/Button";
import ContactCTA from "../../../components/ContactCTA";
import { PageHero, Section } from "@/components/site/primitives";
import "@/components/site/pages/core.css";

export const metadata = {
  title: 'About — Dominus Foundry',
  description: 'Operator-grade AI infrastructure built by the Lord family. Based in Albuquerque, building for the long haul.'
};

// 2026-10-14: restyled in the site-wide redesign (components/site). Copy unchanged.
export default function About() {
  return (
    <div className="pg-about">
      {/* Hero */}
      <PageHero
        crest
        title="We Build Bridges Through Technological Change"
        lead={
          <p className="lead">
            Most operators didn&apos;t sign up for constant tech disruption. They signed up to run their operation.
            We help them cross the changes they didn&apos;t ask for—with custom AI systems that preserve human sovereignty and operational clarity.
            Sabina is ours: your company&apos;s own AI, shaped around your business, its knowledge, its work, and the authority you give her.
          </p>
        }
      />

      {/* Why We Exist */}
      <Section title="Why We Started Dominus Foundry">
        <div className="prose reveal">
          <p>
            Technology changes faster than most teams can adapt. AI, cloud platforms, new integrations—it&apos;s relentless.
            And the people selling these shifts rarely understand what it takes to run a real operation under pressure.
          </p>
          <p>
            We kept seeing the same pattern: tools that don&apos;t talk to each other, &quot;AI&quot; features bolted on without governance,
            and operators stuck babysitting dashboards instead of running their business.
          </p>
          <p>
            Dominus Foundry builds operator-grade AI infrastructure—custom systems that plug into how your business actually runs.
            Your POS, your calendar, your workflows. Governed, auditable, and built to last. Sabina, your company&apos;s own AI, is that system as a hire: dedicated to one
            company, answerable to its owner. Forge, our contractor vertical, is the first proof point—not the edge of what we build.
          </p>
          <p>
            There will be more shifts ahead. We&apos;re here to help teams navigate them without losing their clarity or their control.
          </p>
        </div>
      </Section>

      {/* Who We Are */}
      <Section title="Who We Are" className="band">
        <div className="two-col">
          <div className="prose reveal">
            <p>
              Dominus Foundry is Mark and Bri Lord—a family business based in Albuquerque.
              We&apos;re building this for the long haul, eventually bringing in our daughter Belle as she
              builds her own ventures.
            </p>
            <p>
              We&apos;re operators, not a startup selling dashboards. Mark has built and run businesses.
              Bri keeps operations grounded. Together we understand what it&apos;s like
              when technology forces change on you—and what it takes to build systems that actually help.
            </p>
            <p>
              When you work with us, you&apos;re working directly with us—not offshore staff, not junior consultants.
              We handle every project personally because building custom infrastructure for your business requires trust.
            </p>
          </div>

          <div className="card reveal" style={{ '--i': 1 }}>
            <p className="tile-t" style={{ marginTop: 0 }}>Founder panel</p>
            <p className="tile-p">Portrait coming soon.</p>
            <p className="tile-p">
              Based in Albuquerque, building for teams nationwide
            </p>
            <p className="tile-p">
              We work with operators who need governed systems that can stand up to real usage and real accountability.
            </p>
          </div>
        </div>
      </Section>

      {/* Mentis — Our Architecture */}
      <Section title="Mentis — The Architecture Behind Everything" className="on-dark">
        <div className="prose reveal">
          <p>
            Every system we build follows the same architectural discipline. We call it Mentis.
          </p>
          <p>
            Mentis isn&apos;t a product you buy separately — it&apos;s the design philosophy that makes every tool work the way it does. Human authority preserved. Complete audit trails. No drift over time. Unified intelligence when systems connect.
          </p>
          <p>
            Start with one tool and it works beautifully on its own. Add another and they integrate naturally. Eventually, you realize your entire operation runs on one coherent platform — that&apos;s when everything clicks.
          </p>
        </div>
        <div className="reveal">
          <Link href="/mentis" className="link">
            Learn more about Mentis →
          </Link>
        </div>
      </Section>

      {/* How We Build */}
      <Section
        title="How We Build"
        lead={
          <p className="lead">
            Every system we ship follows the same architectural discipline — regardless of scope.
          </p>
        }
      >
        <div className="grid g2">
          <div className="card reveal" style={{ '--i': 0 }}>
            <h3 className="h3">Workflow orchestration</h3>
            <p className="tile-p">
              Explicit, inspectable, and adaptable. No black boxes.
            </p>
          </div>

          <div className="card reveal" style={{ '--i': 1 }}>
            <h3 className="h3">Governed AI</h3>
            <p className="tile-p">
              LLM calls are constrained, logged, and recoverable.
            </p>
          </div>

          <div className="card reveal" style={{ '--i': 2 }}>
            <h3 className="h3">Integration-first</h3>
            <p className="tile-p">
              We connect to Square, Google, QuickBooks, calendars, and internal tools — not replace them.
            </p>
          </div>

          <div className="card reveal" style={{ '--i': 3 }}>
            <h3 className="h3">Audit-ready</h3>
            <p className="tile-p">
              Every action logged. Every decision traceable.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Principles */}
      <Section title="How We Work" className="band">
        <div className="grid g3">
          <div className="card reveal" style={{ '--i': 0 }}>
            <h3 className="h3">We have patience for people who don't love change</h3>
            <p className="tile-p">
              You didn't ask for your core tools to be retired. You didn't ask for AI to disrupt your workflows.
              We understand that frustration. We take the time to explain what's happening, why it matters, and
              what your options are—without talking down to you.
            </p>
          </div>

          <div className="card reveal" style={{ '--i': 1 }}>
            <h3 className="h3">We partner with you, not at you</h3>
            <p className="tile-p">
              Most tech vendors are impersonal and rushed. We're not. You get direct access to us throughout
              the project. We answer questions, walk you through decisions, and make sure you understand what's
              happening to your business-critical systems.
            </p>
          </div>

          <div className="card reveal" style={{ '--i': 2 }}>
            <h3 className="h3">We don't rush the work</h3>
            <p className="tile-p">
              Quality over speed. We reconcile everything, document our work, and hand off systems that the
              next person can understand. Your CPA shouldn't have to decode mysteries when they open your books.
            </p>
          </div>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section
        title="Who We Work With"
        className="on-dark"
        lead={
          <p className="lead">
            We work with owner-operators and ops leads who&apos;ve built something lasting. You&apos;re profitable,
            you run real teams, and you&apos;re tired of tools that create chaos instead of clarity.
          </p>
        }
      >
        <div className="stack reveal">
          <p className="h4">You're a good fit if:</p>
          <ul className="pg-marks">
            <li>
              <span className="mk">✓</span>
              <span>You want governed tools, not hype or experiments</span>
            </li>
            <li>
              <span className="mk">✓</span>
              <span>You value audit trails, clear ownership, and reliable handoffs</span>
            </li>
            <li>
              <span className="mk">✓</span>
              <span>You value quality work and long-term stewardship</span>
            </li>
            <li>
              <span className="mk">✓</span>
              <span>You&apos;ve built something you&apos;re proud of and want to protect it</span>
            </li>
          </ul>
        </div>
        <p className="note reveal">
          If you&apos;re extremely price-sensitive or want to outsource responsibility entirely, we&apos;re probably not the right fit.
          But if you want a partner who understands operational reality and will forge tools with governance, let&apos;s talk.
        </p>
      </Section>

      {/* The Name */}
      <Section title="About the Name">
        <div className="prose reveal">
          <p>
            "Dominus" is Latin for "Lord"—our family name. A foundry is where raw materials are forged into
            durable, functional tools that last for generations.
          </p>
          <p>
            We chose the name because we're building this for legacy. The Foundry is where the Lord family's
            ideas take form and come to life. Bootstrapped to date. We are raising to increase onboarding capacity
            and accelerate distribution, without changing the core pricing discipline — and we are building
            businesses that will serve people for decades, potentially with our daughter Belle joining as she
            builds her own ventures.
          </p>
          <p className="strong-line">
            Technology changes rapidly, but good businesses are built to last. That's what we're forging here.
          </p>
        </div>
      </Section>

      {/* Our Services Path */}
      <Section title="Our Service Philosophy" className="band">
        <div className="prose reveal">
          <p>
            We forge one tool at a time, focused on the bottleneck that matters most right now.
          </p>
          <p className="strong-line">
            Each build is durable, documented, and built to last.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        center
        title={"Let's work together"}
        lead={
          <p className="lead">
            Have questions about your systems? Ready to talk about what needs to work better? We&apos;re here to help.
          </p>
        }
      >
        <div className="contact-stack">
          <div className="actions center reveal">
            <Button href="/start">
              Tell us what&apos;s broken
            </Button>
          </div>
          <ContactCTA />
          <p className="fine">We respond within one business day.</p>
          <div className="fine">
            Based in Albuquerque, New Mexico
          </div>
        </div>
      </Section>
    </div>
  );
}
