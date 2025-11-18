import Image from 'next/image'
import Link from 'next/link'

const links = [
  { name: 'Home', href: '/' },
  { name: 'QuickBooks Desktop Migration', href: '/qb-migration' },
  { name: 'About', href: '/about' },
  { name: 'Privacy', href: '/privacy' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-bronze-300 bg-tan-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo-crest.svg"
                alt="Dominus Foundry - Fide et Familia"
                width={96}
                height={96}
                className="h-16 w-auto"
              />
              <span className="text-xl font-semibold text-navy-900">Dominus Foundry</span>
            </Link>
            <p className="text-sm leading-relaxed text-navy-700">
              We help traditional businesses migrate from QuickBooks Desktop and navigate tech transitions with
              patience, precision, and personal ownership from Mark &amp; Bri Lord.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-[0.08em]">Navigate</h3>
              <ul className="mt-4 space-y-3">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-navy-700 transition-colors hover:text-orange-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-[0.08em]">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-navy-700">
                <li>
                  <a href="mailto:hello@dominusfoundry.com" className="font-medium hover:text-orange-700">
                    hello@dominusfoundry.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15052261457" className="font-medium hover:text-orange-700">
                    (505) 226-1457
                  </a>
                </li>
                <li>Albuquerque, New Mexico</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-bronze-300 pt-6 text-xs text-navy-700 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Dominus Foundry. Built and run by the Lord family.</p>
          <p className="text-navy-600">Fide et Familia.</p>
        </div>
      </div>
    </footer>
  )
}
