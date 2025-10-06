'use client';

import { useSearchParams } from 'next/navigation';
import LeadForm from '@/components/LeadForm';

export default function QB() {
  const searchParams = useSearchParams();
  const ppc = searchParams.get('ppc') === '1';

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
          {ppc && (
            <p className="mt-3 text-xs text-neutral-500">
              PPC variant (served on qb.dominusfoundry.com)
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold">Get a migration quote</h2>
          <p className="mt-2 text-neutral-700">
            Tell us your setup and timeline. We’ll reply with scope & next steps.
          </p>
          <div className="mt-4">
            <LeadForm ppc={ppc} />
          </div>
        </div>
      </div>
    </section>
  );
}
