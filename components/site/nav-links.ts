/* The site's main navigation — one source for the desktop links and the menu
   on every route, /pitch included. Moved verbatim out of FoundryShell.tsx
   (2026-10-14); no link was added, removed or reordered. MENU_EXTRA is the two
   links FoundryShell's mobile menu carried after the main five. */
export const NAV_LINKS = [
  { id: 'company', label: 'Company', href: '/company' },
  { id: 'sabina', label: 'Sabina', href: '/sabina' },
  { id: 'technology', label: 'Technology', href: '/technology' },
  { id: 'governance', label: 'Governance', href: '/governance' },
  { id: 'blog', label: 'Insights', href: '/blog' },
] as const

export const MENU_EXTRA = [
  { id: 'pitch', label: 'Investors', href: '/pitch' },
] as const

export const CONTACT = { label: 'Contact the team', href: '/company#contact' } as const

/* pathname → the nav item it belongs to */
export function activeFor(pathname: string | null): string | null {
  if (!pathname) return null
  const first = '/' + (pathname.split('/')[1] || '')
  const hit = [...NAV_LINKS, ...MENU_EXTRA].find((l) => l.href === first)
  return hit ? hit.id : null
}

/* Mark's public sites, listed in the header's Sites menu and in the site menu (Mark, 2026-11-16). Forge is
   sign-in only and is not listed. No prices here. */
export const FAMILY_SITES = [
  { id: 'foundry', label: 'Dominus Foundry', host: 'dominusfoundry.com', href: 'https://dominusfoundry.com', current: true },
  { id: 'sabina', label: 'Sabina', host: 'withsabina.ai', href: 'https://withsabina.ai' },
  { id: 'mpai', label: 'Managed Private AI', host: 'managedprivateai.com', href: 'https://managedprivateai.com' },
  { id: 'dominusos', label: 'DominusOS', host: 'dominusos.ai', href: 'https://dominusos.ai' },
  { id: 'crucible', label: 'Decision Crucible', host: 'decisioncrucible.com', href: 'https://decisioncrucible.com' },
  { id: 'mark', label: 'Mark Lord', host: 'markflord.com', href: 'https://markflord.com' },
] as const
