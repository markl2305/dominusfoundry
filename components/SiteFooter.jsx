import Image from 'next/image'
import Link from 'next/link'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Business Tools', href: '/business-tools' },
  { name: 'Voice Concierge', href: '/voice-concierge' },
  { name: 'Mentis', href: '/mentis' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Mentis Login', href: 'https://metis.dominusfoundry.com', external: true },
]

export default function SiteFooter() {
  return (
    <footer className="border-t-4 border-forge-600 bg-tan-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 rounded-md">
              <Image
                src="/logo-crest.svg"
                alt="Dominus Foundry - Fide et Familia"
                width={96}
                height={96}
                className="h-20 w-auto"
              />
              <span className="text-xl font-semibold text-navy-900">Dominus Foundry</span>
            </Link>
            <p className="body-foundry">
              We forge business tools that let teams operate cleanly in the AI era — governed, auditable, and built to last.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="label-foundry text-forge-700">Navigate</h3>
              <ul className="mt-4 space-y-3">
                {links.map((item) => (
                  <li key={item.name}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-navy-700 transition-colors hover:text-forge-700"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-navy-700 transition-colors hover:text-forge-700"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label-foundry text-forge-700">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-navy-700">
                <li>
                  <a href="mailto:foundry@dominusfoundry.com" className="font-medium hover:text-forge-700">
                    foundry@dominusfoundry.com
                  </a>
                </li>
                <li>
                  <a href="tel:+18667103313" className="font-medium hover:text-forge-700">
                    (866) 710-3313
                  </a>
                </li>
                <li>Albuquerque, New Mexico</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-bronze-300 pt-6 text-xs text-navy-700 sm:flex-row sm:items-center sm:justify-between">
          <p className="body-foundry text-sm">&copy; {new Date().getFullYear()} Dominus Foundry. Built and run by the Lord family. We do not sell your personal information. <Link href="/privacy" className="underline font-semibold text-forge-700 hover:text-forge-800">Privacy &amp; Data Use</Link></p>
          <div className="flex items-center gap-2 text-sm text-navy-700">
            <Image src="/logo-crest.svg" alt="Dominus Foundry crest" width={28} height={28} className="h-7 w-7" />
            <span className="label-foundry text-forge-700">Fide et Familia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
