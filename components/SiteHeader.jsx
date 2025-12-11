'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const PRODUCTS = Object.freeze([
  { name: 'Foundry Voice Concierge – Automated Phone Concierge', href: '/voice-concierge' },
  { name: 'InvoiceFlow – Automated Invoicing Around QuickBooks', href: '/invoiceflow' },
  { name: 'Orderline – Voice Ordering Capture', href: '/orderline' },
  { name: 'QuickBooks Migration & Cleanup', href: '/qb-migration' },
])

const NAV_ITEMS = Object.freeze([
  { name: 'Home', href: '/' },
  { name: 'Mentis', href: '/mentis' },
  { name: 'Products', children: PRODUCTS },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#talk' },
])

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const navItems = NAV_ITEMS.length ? NAV_ITEMS : []

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (!isMounted) return
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, isMounted])

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
            className="h-16 w-auto sm:h-18 md:h-20 lg:h-20 object-contain"
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <span className="cursor-pointer rounded-md px-1.5 py-0.5 text-sm font-semibold text-white transition-colors hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800">
                  {item.name}
                </span>
                <div className="absolute left-0 mt-2 hidden w-72 rounded-lg border border-white/10 bg-navy-800/95 p-2 shadow-xl backdrop-blur group-hover:block">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700 hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-1.5 py-0.5 text-sm font-semibold text-white transition-colors hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMounted &&
        mobileMenuOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <div className="fixed inset-0 z-50 bg-navy-900 px-6 py-6 lg:hidden sm:ring-1 sm:ring-white/10 overflow-y-auto">
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

              <nav className="flow-root">
                <div className="space-y-1">
                  {navItems.map((item) =>
                    item.children ? (
                      <Fragment key={item.name}>
                        <p className="px-4 py-3 text-sm font-semibold text-tan-200 uppercase tracking-wide">{item.name}</p>
                        <div className="space-y-1 pl-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block rounded-lg px-4 py-3 text-base font-semibold text-tan-100 transition-colors hover:bg-forge-800"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </Fragment>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-base font-semibold text-tan-100 transition-colors hover:bg-forge-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ),
                  )}
                </div>
              </nav>
            </div>
          </>,
          document.body,
        )}
    </header>
  )
}
