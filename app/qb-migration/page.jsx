import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "QuickBooks Migration — Dominus Foundry",
  description: "Zero-drama, audit-ready QuickBooks migrations with reconciliation and training.",
  alternates: { canonical: "/qb-migration" }
};

export default function QB({ searchParams }) {
  const ppc = searchParams?.ppc === "1";
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            QuickBooks Migration — <span className="text-brand">Zero-Drama</span>, Audit-Ready, Fast.
          </h1>
          <p className="mt-5 text-lg text-neutral-700">
            We audit, clean, migrate, reconcile, and train—so you keep operating while your data lands exactly where it should.
          </p>
          <ul className="mt-4 text-sm text-neutral-600 space-y-1">
            <li>• Historical data preserved</li>
            <li>• Reconciliation & tie-outs included</li>
          </ul>
          {ppc && <p className="mt-3 text-xs text-neutral-500">PPC variant (noindex)</p>}
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold">Get a migration quote</h2>
          <p className="mt-2 text-neutral-700">Tell us your setup and timeline. We’ll reply with scope & next steps.</p>
          <div className="mt-4"><LeadForm ppc={ppc} /></div>
        </div>
      </div>
      {ppc && <meta name="robots" content="noindex,nofollow" />}
    </section>
  );
}
