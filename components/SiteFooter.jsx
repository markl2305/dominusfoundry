// components/SiteFooter.jsx
// Footer for all site pages with contact info, links, and family motto

import Image from 'next/image'
import Link from 'next/link'

const navigation = {
  services: [
    { name: 'QuickBooks Migration', href: '/qb-migration' },
    { name: 'AI Automation', href: '/#services' },
    { name: 'Tech Roadmapping', href: '/#services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ],
}

export default function SiteFooter() {
  return (
    <footer className="bg-navy-500 border-t border-bronze-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo-crest.svg" 
                alt="Dominus Foundry" 
                width={40} 
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">
                Dominus Foundry
              </span>
            </div>
            <p className="text-sm text-bronze-400 italic">
              Fide et Familia
            </p>
            <p className="text-sm text-bronze-300 leading-relaxed">
              Helping traditional New Mexico businesses survive technological change with patience and personal care.
            </p>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Services
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-sm text-bronze-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-sm text-bronze-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Contact
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <a 
                    href="tel:+15055551234"  {/* REPLACE WITH YOUR GOOGLE VOICE NUMBER */}
                    className="text-sm text-bronze-300 hover:text-white transition-colors"
                  >
                    (505) XXX-XXXX  {/* REPLACE WITH YOUR GOOGLE VOICE NUMBER */}
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@dominusfoundry.com"  {/* REPLACE WITH YOUR EMAIL */}
                    className="text-sm text-bronze-300 hover:text-white transition-colors"
                  >
                    info@dominusfoundry.com
                  </a>
                </li>
                <li className="text-sm text-bronze-300">
                  Albuquerque, New Mexico
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-bronze-300/30 pt-8">
          <p className="text-xs text-bronze-400 text-center">
            &copy; {new Date().getFullYear()} Dominus Foundry. All rights reserved. 
            A family business serving New Mexico.
          </p>
        </div>
      </div>
    </footer>
  )
}

/*
USAGE NOTES:
1. Replace phone number in TWO places: href and display text
2. Replace email address with your actual business email
3. Navigation links can be adjusted in the `navigation` object
4. "Fide et Familia" motto is displayed prominently
5. Footer uses bronze-300/400 for text to maintain hierarchy
6. All links have hover states for better UX
*/
