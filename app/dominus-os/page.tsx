import Link from "next/link";

export const metadata = {
  title: "DominusOS | AI Employees Under Human Authority | Dominus Foundry",
  description:
    "A governed workforce layer for organizations that require accountability at the speed of execution. AI employees that operate under bounded, auditable, human authority.",
};

const layers = [
  {
    number: "01 · Workforce",
    title: "AI employees that carry real load",
    body: "Virtual employees trained by natural language — email, chat, standing instructions — the same way you'd onboard a human. CRM, email triage, document processing, compliance enforcement, scheduling, outreach. They don't assist. They execute. Assign a role, define boundaries, and they run.",
  },
  {
    number: "02 · Governance",
    title: "Structural authority, not policy theater",
    body: 'Every action passes through a mandatory syscall gate. Authority is granted, scoped, time-limited, and revocable. Immutable audit trail. Tested kill switch. Capability-based security means no process inherits ambient authority from its environment. When procurement asks "can we control this?" — the answer is architectural, not aspirational.',
  },
  {
    number: "03 · Intelligence",
    title: "Cross-domain learning that compounds",
    body: "Every action, outcome, and decision feeds a unified knowledge layer that learns across departments. Sales patterns inform operations. Cost anomalies reshape trust. Confidence decays so stale knowledge never poisons decisions. The system doesn't just execute — it gets measurably smarter every week, under human authority.",
  },
];

const stats = [
  { stat: "150+", desc: "Governed API endpoints live" },
  { stat: "43", desc: "Orchestrated tool syscalls" },
  { stat: "6", desc: "Structural guarantees enforced by architecture" },
  { stat: "0", desc: "Unrecorded actions in production history" },
];

const criteria = [
  {
    label: "Operational complexity",
    desc: "— multiple domains, compliance requirements, or cross-functional workflows that exceed what automation platforms can govern",
  },
  {
    label: "Accountability requirements",
    desc: "— regulatory, fiduciary, or executive mandates that demand audit-grade provenance on AI actions",
  },
  {
    label: "Scale of AI ambition",
    desc: "— organizations ready to deploy AI as workforce, not as tooling",
  },
  {
    label: "Commitment to governance",
    desc: "— leadership that understands authority must be structural, not aspirational",
  },
];

export default function DominusOSPage() {
  return (
    <>
      {/*
        Page-level dark override.
        This page is intentionally dark to set it apart from every other Foundry page.
        The tan header above and this near-black canvas below creates a deliberate contrast —
        like stepping from the showroom into the forge itself.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .dominus-os-dark {
              --dos-bg: #0a0a0b;
              --dos-bg-elevated: #111113;
              --dos-bg-surface: #18181b;
              --dos-text: #e8e6e1;
              --dos-text-secondary: #8a8880;
              --dos-text-muted: #5a5850;
              --dos-accent: #c4956a;
              --dos-accent-dim: #8a6a4a;
              --dos-border: #222220;
              --dos-border-light: #2a2a28;
              background: var(--dos-bg);
              color: var(--dos-text);
            }
            .dominus-os-dark .dos-noise {
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
            }
            @keyframes dos-pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
            .dos-status-dot {
              animation: dos-pulse 2s infinite;
            }
            .dos-divider {
              background: var(--dos-border);
            }
            .dos-divider::after {
              content: '';
              display: block;
              width: 60px;
              height: 1px;
              background: var(--dos-accent-dim);
            }
            .dos-cta-button {
              color: var(--dos-text);
              background: transparent;
              border: 1px solid var(--dos-accent-dim);
              transition: all 0.4s ease;
            }
            .dos-cta-button:hover {
              background: var(--dos-accent-dim);
              color: var(--dos-bg);
              border-color: var(--dos-accent);
            }
          `,
        }}
      />

      <div className="dominus-os-dark">
        {/* Grain overlay */}
        <div
          className="dos-noise pointer-events-none fixed inset-0 z-[60]"
          aria-hidden="true"
        />

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative flex min-h-[100vh] flex-col justify-center pt-24 pb-32">
          {/* Vertical accent line */}
          <div
            className="absolute bottom-0 left-1/2 h-[120px] w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--dos-accent-dim), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-[860px] px-8">
            <p
              className="mb-10 text-[0.7rem] font-normal uppercase tracking-[0.25em]"
              style={{ color: "var(--dos-accent)" }}
            >
              DominusOS
            </p>
            <h1
              className="font-crimson text-[clamp(2.8rem,6vw,4.5rem)] font-light leading-[1.15]"
              style={{
                color: "var(--dos-text)",
                letterSpacing: "-0.02em",
              }}
            >
              AI employees that operate under&nbsp;human&nbsp;authority.
            </h1>
            <p
              className="mt-8 max-w-[540px] text-[1.05rem] font-light leading-[1.8]"
              style={{ color: "var(--dos-text-secondary)" }}
            >
              A governed workforce layer for organizations that require
              accountability at the speed of execution. Not a copilot. Not a
              chatbot. A workforce — bounded, auditable, and compounding
              in&nbsp;intelligence.
            </p>
            <div className="mt-14 flex items-center gap-3">
              <div
                className="dos-status-dot h-1.5 w-1.5 rounded-full"
                style={{
                  background: "#4a9",
                  boxShadow: "0 0 8px rgba(68, 170, 136, 0.5)",
                }}
              />
              <span
                className="font-mono text-[0.7rem] uppercase tracking-[0.1em]"
                style={{ color: "var(--dos-text-muted)" }}
              >
                System live · Production since 2025
              </span>
            </div>
          </div>
        </section>

        {/* ─── PREMISE ──────────────────────────────────────────── */}
        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-[860px] px-8">
            <div className="dos-divider h-px w-full" />
            <div className="pt-16">
              <p
                className="font-crimson text-[clamp(1.4rem,3vw,1.8rem)] font-normal leading-[1.7]"
                style={{ color: "var(--dos-text-secondary)" }}
              >
                The AI industry is scaling capability faster than it is scaling
                control. Every new agent framework, every new integration, every
                new autonomous process{" "}
                <em
                  className="not-italic"
                  style={{ color: "var(--dos-text)" }}
                >
                  widens the gap between what AI can do and what organizations
                  can govern.
                </em>
              </p>
              <p
                className="mt-8 font-crimson text-[clamp(1.4rem,3vw,1.8rem)] font-normal leading-[1.7]"
                style={{ color: "var(--dos-text-secondary)" }}
              >
                DominusOS closes that gap — not with policy, but with
                architecture. A mandatory control layer beneath every AI action.{" "}
                <em
                  className="not-italic"
                  style={{ color: "var(--dos-text)" }}
                >
                  Nothing executes without bounded, revocable, human-granted
                  authority.
                </em>
              </p>
            </div>
          </div>
        </section>

        {/* ─── THREE LAYERS ─────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[860px] px-8">
            <p
              className="mb-16 text-[0.7rem] uppercase tracking-[0.25em]"
              style={{ color: "var(--dos-accent)" }}
            >
              The Stack
            </p>

            {layers.map((layer, i) => (
              <div
                key={layer.number}
                className="grid gap-8 py-12 md:grid-cols-[140px_1fr]"
                style={{
                  borderTop: "1px solid var(--dos-border)",
                  ...(i === layers.length - 1
                    ? { borderBottom: "1px solid var(--dos-border)" }
                    : {}),
                }}
              >
                <div
                  className="pt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em]"
                  style={{ color: "var(--dos-text-muted)" }}
                >
                  {layer.number}
                </div>
                <div>
                  <h3
                    className="mb-4 font-crimson text-2xl font-normal"
                    style={{
                      color: "var(--dos-text)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {layer.title}
                  </h3>
                  <p
                    className="max-w-[520px] text-[0.92rem] leading-[1.8]"
                    style={{ color: "var(--dos-text-secondary)" }}
                  >
                    {layer.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PRODUCTION EVIDENCE ──────────────────────────────── */}
        <section
          className="py-20"
          style={{
            background: "var(--dos-bg-elevated)",
            borderTop: "1px solid var(--dos-border)",
            borderBottom: "1px solid var(--dos-border)",
          }}
        >
          <div className="mx-auto max-w-[860px] px-8">
            <p
              className="mb-12 text-[0.7rem] uppercase tracking-[0.25em]"
              style={{ color: "var(--dos-accent)" }}
            >
              Production Evidence
            </p>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.stat} className="py-6">
                  <div
                    className="mb-2 font-crimson text-[2.2rem] font-light"
                    style={{ color: "var(--dos-text)" }}
                  >
                    {item.stat}
                  </div>
                  <div
                    className="text-[0.78rem] leading-relaxed"
                    style={{
                      color: "var(--dos-text-muted)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THESIS QUOTE ─────────────────────────────────────── */}
        <section className="py-28 md:py-36 text-center">
          <div className="mx-auto max-w-[860px] px-8">
            <blockquote
              className="mx-auto max-w-[640px] font-crimson text-[clamp(1.5rem,3.5vw,2rem)] font-light italic leading-relaxed"
              style={{ color: "var(--dos-text)" }}
            >
              &ldquo;Monitoring records what happened.
              <br />A hypervisor determines what is
              <br />
              permitted to happen.&rdquo;
            </blockquote>
            <cite
              className="mt-8 block font-mono text-[0.65rem] not-italic uppercase tracking-[0.2em]"
              style={{ color: "var(--dos-text-muted)" }}
            >
              DominusOS White Paper, §2
            </cite>
          </div>
        </section>

        {/* ─── ACCESS ───────────────────────────────────────────── */}
        <section
          className="py-28 md:py-32"
          style={{ borderTop: "1px solid var(--dos-border)" }}
        >
          <div className="mx-auto max-w-[860px] px-8">
            <p
              className="mb-10 text-[0.7rem] uppercase tracking-[0.25em]"
              style={{ color: "var(--dos-accent)" }}
            >
              Access
            </p>
            <h2
              className="mb-8 max-w-[580px] font-crimson text-[clamp(1.8rem,4vw,2.5rem)] font-light leading-[1.3]"
              style={{ color: "var(--dos-text)" }}
            >
              DominusOS is not available for general&nbsp;purchase.
            </h2>
            <p
              className="mb-6 max-w-[520px] text-[0.95rem] leading-[1.8]"
              style={{ color: "var(--dos-text-secondary)" }}
            >
              We work with a limited number of organizations per year. Each
              deployment is architected to the operational domain, governance
              requirements, and authority structure of the organization it
              serves.
            </p>
            <p
              className="mb-6 max-w-[520px] text-[0.95rem] leading-[1.8]"
              style={{ color: "var(--dos-text-secondary)" }}
            >
              This is not a product you install. It is a governed operating
              layer we deploy on your behalf — with virtual employees configured
              to your operations, authority boundaries drawn to your
              specifications, and a learning engine calibrated to your domain.
            </p>

            <div
              className="mt-12 p-10"
              style={{
                background: "var(--dos-bg-surface)",
                border: "1px solid var(--dos-border-light)",
                borderLeft: "2px solid var(--dos-accent-dim)",
              }}
            >
              <h4
                className="mb-6 font-mono text-[0.65rem] uppercase tracking-[0.2em]"
                style={{ color: "var(--dos-text-muted)" }}
              >
                We evaluate fit on
              </h4>
              {criteria.map((item, i) => (
                <div
                  key={item.label}
                  className="py-2.5 text-[0.88rem] leading-[1.7]"
                  style={{
                    color: "var(--dos-text-secondary)",
                    borderBottom:
                      i < criteria.length - 1
                        ? "1px solid var(--dos-border)"
                        : "none",
                  }}
                >
                  <span style={{ color: "var(--dos-text)", fontWeight: 400 }}>
                    {item.label}
                  </span>{" "}
                  {item.desc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────── */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-[860px] px-8">
            <a
              href="mailto:mark@dominusfoundry.com?subject=Dominus%20OS%20Inquiry"
              className="dos-cta-button inline-block px-10 py-4 font-mono text-[0.7rem] uppercase tracking-[0.2em]"
            >
              Request a Conversation
            </a>
            <p
              className="mt-6 text-xs italic"
              style={{ color: "var(--dos-text-muted)" }}
            >
              We respond to qualified inquiries within 48 hours.
            </p>
          </div>
        </section>

        {/* ─── DEEP LINKS ───────────────────────────────────────── */}
        <section
          className="py-12"
          style={{ borderTop: "1px solid var(--dos-border)" }}
        >
          <div className="mx-auto max-w-[860px] px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="font-crimson text-sm"
              style={{ color: "var(--dos-text-muted)" }}
            >
              Dominus Foundry
            </div>
            <div
              className="flex flex-wrap items-center gap-4 font-mono text-[0.65rem] tracking-[0.1em]"
              style={{ color: "var(--dos-text-muted)" }}
            >
              <a
                href="https://dominusos.ai/whitepaper"
                className="transition-colors duration-300"
                style={{ color: "var(--dos-text-secondary)" }}
              >
                White Paper
              </a>
              <span>·</span>
              <a
                href="https://dominusos.ai"
                className="transition-colors duration-300"
                style={{ color: "var(--dos-text-secondary)" }}
              >
                dominusos.ai
              </a>
              <span>·</span>
              <a
                href="https://github.com/markl2305/dominus-os"
                className="transition-colors duration-300"
                style={{ color: "var(--dos-text-secondary)" }}
              >
                Specification Repository
              </a>
              <span>·</span>
              <Link
                href="/systems"
                className="transition-colors duration-300"
                style={{ color: "var(--dos-text-secondary)" }}
              >
                Systems We Build
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
