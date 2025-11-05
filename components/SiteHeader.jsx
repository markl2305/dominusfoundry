// components/SiteHeader.jsx
// Full navigation header with properly-sized logo

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
      {/* Centered logo section */}
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-4 lg:px-8 lg:pt-8 lg:pb-5">
        <Link href="/" className="flex justify-center group">
          <Image 
            src="/logo-full.svg" 
            alt="Dominus Foundry - Fide et Familia" 
            width={600}
            height={200}
            className="h-32 w-auto transition-opacity group-hover:opacity-80 lg:h-40"
            priority
          />
        </Link>
      </div>

      {/* Navigation bar */}
      <nav className="mx-auto max-w-7xl border-t border-bronze-300/20" aria-label="Global">
        <div className="flex items-center justify-between px-4 py-3 lg:px-8">
          
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

          {/* Desktop navigation - centered */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
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

          {/* Desktop CTA */}
          <div className="flex lg:justify-end">
            <Link
              href="/qb-migration"
              className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy-500 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-bronze-300">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image 
                  src="/logo-full.svg" 
                  alt="Dominus Foundry - Fide et Familia" 
                  width={240}
                  height={86}
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
