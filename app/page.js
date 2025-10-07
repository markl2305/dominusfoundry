export const metadata = {
  title: "Dominus Foundry — Systems & QuickBooks Migration",
  description:
    "We design reliable business systems and deliver zero-drama, audit-ready QuickBooks migrations."
};

export default function Home() {
  return (
    <main className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <header className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Dominus Foundry</div>
          <nav>
            <a
              href="/qb-migration"
              className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-neutral-50"
            >
              QB Migration
            </a>
          </nav>
        </header>

        <section className="mt-16">
          <h1 className="text-5xl font-extrabold leading-tight">
            Build calm operations. <span className="text-indigo-600">Move QuickBooks the right way.</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-700 max-w-3xl">
            We help teams modernize their finance stack and migrate to QuickBooks with clean data,
            reconciliation, and training—so the numbers match and the business keeps moving.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/qb-migration"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow"
            >
              Get a migration quote
            </a>
            <a
              href="/qb-migration"
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold underline"
            >
              Learn more
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
