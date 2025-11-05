// components/SiteHeader.jsx
// One-row header with large left logo that overhangs the header

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'QB Migration', href: '/qb-migration' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
]

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    // overflow-visible is the key that allows the logo to extend past the header
    <header className="relative overflow-visible bg-navy-500 border-b border-bronze-300">
      <nav className="mx-auto max-w-7xl px-4 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between gap-4 py-3 lg:py-4">

          {/* Left: big logo that overhangs the bottom edge */}
          <div className="relative flex items-center flex-shrink-0">
            <Link href="/" className="block group">
              <Image
                src="/logo-full.svg"
                alt="Dominus Foundry - Fide et Familia"
                width={960}
                height={300}
                /* Readable on 13” screens; overhang with translate-y */
                className="
                  w-auto
                  h-16 sm:h-20 md:h-28 lg:h-36 xl:h-40
                  translate-y-1 md:translate-y-2
                  transition-opacity group-hover:opacity-85
                "
                priority
                sizes="(min-width: 1280px) 640px, (min-width: 1024px) 560px, (min-width: 768px) 480px, 60vw"
              />
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-bronze-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop: centered nav */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-bronze-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop: CTA on right */}
          <div className="hidden lg:flex lg:flex-none lg:justify-end">
            <Link
              href="/qb-migration"
              className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy-500 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-bronze-300">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/logo-full.svg"
                  alt="Dominus Foundry - Fide et Familia"
                  width={320}
                  height={110}
                  className="h-16 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white hover:text-bronze-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-bronze-300/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-navy-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/qb-migration"
                    className="block rounded-md bg-orange-600 px-4 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-orange-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
