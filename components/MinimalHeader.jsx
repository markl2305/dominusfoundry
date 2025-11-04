// components/MinimalHeader.jsx
// Minimal header for conversion-optimized landing pages (e.g., /qb-migration)
// Navy header with logo + phone, no navigation distractions

import Image from 'next/image'
import Link from 'next/link'

export default function MinimalHeader() {
  return (
    <header className="border-b border-bronze-300 bg-navy-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Links to home but subtly */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-crest.svg" 
              alt="Dominus Foundry" 
              width={40} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Phone Number - Click-to-call on mobile */}
          <a 
            href="tel:+15052261457"
            className="text-sm font-semibold text-white hover:text-bronze-400 transition-colors"
          >
            (505) 226-1457
          </a>
        </div>
      </div>
    </header>
  )
}
