// components/SiteHeader.jsx
// Full navigation header for main site pages (home, about, services)
// Navy header with logo, company name, and navigation

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
    <header className="border-b border-bronze-300 bg-navy-500">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo + Company Name */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center space-x-3 -m-1.5 p-1.5">
            <Image 
              src="/apple-touch-icon.png" 
              alt="Dominus Foundry" 
              width={80} 
              height={80}
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold text-white">
              Dominus Foundry
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-bronze-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-bronze-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/qb-migration"
            className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors"
          >
            Get Started →
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy-500 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-bronze-300">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 -m-1.5 p-1.5">
                <Image 
                  src="/logo-crest.svg" 
                  alt="Dominus Foundry" 
                  width={40} 
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-lg font-bold text-white">
                  Dominus Foundry
                </span>
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

/*
USAGE NOTES:
1. This header is for main site pages (not landing pages)
2. Adjust navigation items in the `navigation` array as needed
3. CTA button links to QB Migration - adjust if you add other services
4. Mobile menu slides in from right on smaller screens
5. All hover states use bronze accent color for brand consistency
*/
