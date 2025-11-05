// components/MinimalHeader.jsx
// Minimal header for conversion-optimized landing pages (e.g., /qb-migration)
// Navy header with prominent logo + phone, no navigation distractions

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
              src="/logo-crest.svg" 
              alt="Dominus Foundry" 
              width={60} 
              height={60}
              className="h-14 w-auto transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Phone Number - Click-to-call on mobile */}
          <a 
            href="tel:+15052261457"
            className="text-base font-semibold text-white hover:text-bronze-300 transition-colors"
          >
            (505) 226-1457
          </a>
        </div>
      </div>
    </header>
  )
}
