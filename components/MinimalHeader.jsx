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
            href="tel:+15055551234"  {/* REPLACE WITH YOUR GOOGLE VOICE NUMBER */}
            className="text-sm font-semibold text-white hover:text-bronze-400 transition-colors"
          >
            (505) XXX-XXXX  {/* REPLACE WITH YOUR GOOGLE VOICE NUMBER */}
          </a>
        </div>
      </div>
    </header>
  )
}

/* 
USAGE NOTES:
1. Replace phone number in TWO places: href and display text
2. Format: href="tel:+1XXXXXXXXXX" (include +1, no spaces/dashes)
3. Display: Use any format you prefer: (505) 555-1234
4. This header is intentionally minimal - no nav menu to reduce exit points
5. Logo links home but doesn't draw attention (conversion best practice)
*/
