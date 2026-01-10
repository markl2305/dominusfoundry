'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const mainNav = Object.freeze([
  { label: 'Business Tools', href: '/business-tools' },
  { label: 'Voice Concierge', href: '/voice-concierge' },
  { label: 'Mentis', href: '/mentis' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
])

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobile = () => setIsMobileOpen((prev) => !prev)
  const closeMobile = () => setIsMobileOpen(false)

  return (
    <header className="relative z-50 border-b border-bronze-400 bg-navy-800/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 lg:px-6">
        <Link
          href="/"
          className="flex-shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Dominus Foundry home"
        >
          <Image
            src="/logo-full.svg"
            alt="Dominus Foundry - Fide et Familia"
            width={520}
            height={140}
            className="h-16 w-auto sm:h-18 md:h-20 lg:h-20 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-1.5 py-0.5 text-sm font-semibold text-white transition-colors hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-white transition-colors hover:bg-navy-700 hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          onClick={toggleMobile}
        >
          {isMobileOpen ? <XMarkIcon className="h-7 w-7" aria-hidden="true" /> : <Bars3Icon className="h-7 w-7" aria-hidden="true" />}
        </button>
      </div>

      {isMobileOpen && (
        <nav className="border-t border-white/10 bg-navy-900 lg:hidden" aria-label="Mobile">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-1">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-tan-100 transition-colors hover:bg-forge-800"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
