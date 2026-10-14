/* The site footer's link columns, shared by FoundryShell and the /pitch page
   (2026-10-14) so the two footers cannot drift. Moved verbatim out of
   FoundryShell.tsx; no link was added, removed or reordered. */
export const FOOTER_COLS: { h: string; links: { t: string; href: string; ext?: boolean }[] }[] = [
  {
    h: 'Explore',
    links: [
      { t: 'Forge ↗', href: 'https://buildwithforge.app', ext: true },
      { t: 'Sabina', href: '/sabina' },
      { t: 'Technology', href: '/technology' },
      { t: 'Governance', href: '/governance' },
    ],
  },
  {
    h: 'Company',
    links: [
      { t: 'About', href: '/company' },
      { t: 'Leadership', href: '/company#leadership' },
      { t: 'Press', href: '/press' },
      { t: 'Foundry Notes', href: '/blog' },
      { t: 'Investors', href: '/pitch' },
      { t: 'Careers & collaboration', href: '/company#contact' },
      // Persistent route to the privacy notice and its analytics choice/withdraw control (consent v2 sync review
      // F1): the consent bar disappears after a choice, so the footer carries the way back.
      { t: 'Privacy & analytics choice', href: '/privacy' },
    ],
  },
  {
    h: 'Contact',
    links: [
      { t: 'foundry@dominusfoundry.com', href: 'mailto:foundry@dominusfoundry.com' },
      { t: '(505) 520-1433', href: 'tel:+15055201433' },
      { t: 'Albuquerque, New Mexico', href: '/company' },
    ],
  },
]
