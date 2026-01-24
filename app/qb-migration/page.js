export const metadata = {
  title: 'QuickBooks Migration & Cleanup (Retired Offering) | Dominus Foundry',
  description:
    'We currently focus on Voice Concierge and other tool families. If you need QuickBooks migration help as part of a broader build, reach out via Contact.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function QBMigrationRetired() {
  return (
    <section className="bg-[var(--foundry-bg-alt)]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-4">
        <h1 className="heading-forge-xl text-slate-900">QuickBooks Migration &amp; Cleanup (Retired Offering)</h1>
        <p className="body-foundry text-slate-800">
          We currently focus Dominus Foundry on Voice Concierge and the broader tool family catalog. If you need help with
          QuickBooks migrations as part of a broader system build, reach out via the contact page and we&apos;ll point you in the
          right direction.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-forge-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-forge-800 transition-colors"
        >
          Contact the team
        </a>
        <p className="text-xs text-slate-700">Built to Dominus Foundry architectural standards.</p>
      </div>
    </section>
  );
}
