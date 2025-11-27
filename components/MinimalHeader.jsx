// components/MinimalHeader.jsx
// Minimal header for conversion-optimized landing pages (e.g., /qb-migration)
// Navy header with prominent logo + phone + email, no navigation distractions

import Image from 'next/image'
import Link from 'next/link'

export default function MinimalHeader() {
  return (
    <header className="border-b border-bronze-300 bg-navy-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Prominent display */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo-full.svg" 
              alt="Dominus Foundry" 
              width={1000} 
              height={80}
              className="h-14 w-auto transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Contact Info - Phone & Email */}
          <div className="flex flex-col items-end gap-1">
            <a 
              href="tel:+18667103313"
              className="text-base font-semibold text-white hover:text-bronze-300 transition-colors"
            >
              (866) 710-3313
            </a>
            <a 
              href="mailto:foundry@dominusfoundry.com"
              className="text-sm text-bronze-300 hover:text-white transition-colors"
            >
              foundry@dominusfoundry.com
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
