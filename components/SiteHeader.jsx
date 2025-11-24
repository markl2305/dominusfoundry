'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'QuickBooks Migration', href: '/qb-migration' },
  { name: 'InvoiceFlow', href: '/invoiceflow' },
  { name: 'Voice Concierge', href: '/voice-concierge' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#talk' },
]

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative border-b border-bronze-400 bg-navy-800/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 lg:px-6"
        aria-label="Global"
      >
        {/* Logo - Responsive sizing */}
        <Link
          href="/"
          className="flex-shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <Image
            src="/logo-full.svg"
            alt="Dominus Foundry - Fide et Familia"
            width={520}
            height={140}
            className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-white transition-colors hover:bg-navy-700 hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open main menu"
        >
          <Bars3Icon className="h-7 w-7" aria-hidden="true" />
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-1.5 py-0.5 text-sm font-semibold text-white transition-colors hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-navy-900 px-6 py-6 lg:hidden sm:ring-1 sm:ring-white/10">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logo-full.svg"
                  alt="Dominus Foundry - Fide et Familia"
                  width={240}
                  height={80}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-tan-200 transition-colors hover:bg-navy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flow-root">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-tan-100 transition-colors hover:bg-forge-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
