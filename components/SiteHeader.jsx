// components/SiteHeader.jsx
// One-row header with large left logo that overhangs the header

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'

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
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-6" aria-label="Global">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md">
            <Image
              src="/logo-full.svg"
              alt="Dominus Foundry - Fide et Familia"
              width={520}
              height={140}
              className="h-16 w-auto md:h-20"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-white transition-colors hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800 rounded-md px-1.5 py-0.5"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button href="/qb-migration" className="shadow-md" variant="secondary">
            QuickBooks Desktop Migration
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto border-l border-bronze-300 bg-white px-4 py-4 shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logo-full.svg"
                  alt="Dominus Foundry - Fide et Familia"
                  width={240}
                  height={80}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-navy-800 hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-bronze-300/60">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold text-navy-800 hover:bg-tan-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    href="/qb-migration"
                    className="w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    QuickBooks Desktop Migration
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
