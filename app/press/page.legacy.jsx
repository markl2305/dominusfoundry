import Link from 'next/link'

export const metadata = {
  title: 'Press & Coverage | Dominus Foundry™',
  description:
    'Media coverage and press mentions of Dominus Foundry™ and Forge™.',
  alternates: {
    canonical: 'https://dominusfoundry.com/press',
  },
  openGraph: {
    title: 'Press & Coverage | Dominus Foundry™',
    description:
      'Media coverage and press mentions of Dominus Foundry™ and Forge™.',
    url: 'https://dominusfoundry.com/press',
  },
}

const pressItems = [
  {
    outlet: 'Solar Power World',
    date: '2026-04-15',
    author: 'Kelly Pickerel',
    headline:
      'Forge software platform uses iPad LiDAR scanning for quick solar design proposals',
    excerpt:
      '“The solar industry has been fighting soft-cost pressure for a decade, and one of the biggest hidden costs is the gap between site visit and signed contract.” — Bri Lord, co-founder.',
    trackedHref: '/press/spw?src=press_page',
  },
]

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PressPage() {
  return (
    <section className="min-h-screen bg-[var(--foundry-bg)] py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 sm:mb-16 text-center space-y-4">
          <p className="label-foundry text-forge-600">Press</p>
          <h1 className="heading-forge-xl text-slate-900">In the news</h1>
          <p className="body-foundry text-slate-700 max-w-2xl mx-auto">
            Coverage of Dominus Foundry™ and our flagship product, Forge™.
          </p>
        </header>

        <ul className="space-y-6">
          {pressItems.map((item) => (
            <li
              key={item.trackedHref}
              className="rounded-xl border-2 border-forge-300/40 bg-white hover:border-forge-500 transition p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-600 mb-3">
                <span className="font-bold text-forge-700">{item.outlet}</span>
                <span aria-hidden>·</span>
                <time dateTime={item.date}>{formatDate(item.date)}</time>
                {item.author ? (
                  <>
                    <span aria-hidden>·</span>
                    <span>by {item.author}</span>
                  </>
                ) : null}
              </div>
              <h2 className="heading-forge-md text-slate-900 mb-3 leading-snug">
                {item.headline}
              </h2>
              <p className="body-foundry text-slate-700 mb-5">
                {item.excerpt}
              </p>
              <Link
                href={item.trackedHref}
                className="inline-flex items-center gap-2 font-semibold text-forge-700 hover:text-forge-800 transition"
              >
                Read the article
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-forge-300/30 pt-10 text-center">
          <p className="text-slate-600 mb-4">Press inquiries</p>
          <a
            href="mailto:press@dominusfoundry.com"
            className="font-semibold text-forge-700 hover:text-forge-800"
          >
            press@dominusfoundry.com
          </a>
        </div>
      </div>
    </section>
  )
}
