'use client'

import { usePathname } from 'next/navigation'
import SiteShell from './site/SiteShell'

// 2026-10-14: every route renders inside one shell (components/site/SiteShell), the approved /pitch
// redesign carried site-wide. /pitch brings its own nav (chapter button, progress line) and the shared
// footer, so it is rendered bare, as before.
//
// The per-route chrome decisions are the ones this file already made:
// - FOUNDRY_ROUTES had FoundryShell's chrome: no press ribbon, no closing CTA band, FoundryShell's footer copy.
// - Every other route had PressRibbon + SiteHeader + FooterCTA + SiteFooter: it keeps the ribbon, the closing
//   band and SiteFooter's footer copy, now in the new language.
// - /huali-order-info and /voice-concierge/campaign hid the header and the closing band: they get the bare
//   nav (brand and theme only, no site links) and no band.
// - /start and /get-started hid the closing band.
const FOUNDRY_ROUTES = new Set(['/', '/sabina', '/governance', '/technology', '/company', '/press', '/blog', '/pricing'])

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/pitch') return <>{children}</>
  if (pathname && FOUNDRY_ROUTES.has(pathname)) {
    return <SiteShell variant="foundry">{children}</SiteShell>
  }
  const isHualiOrderInfo = pathname?.startsWith('/huali-order-info')
  const hideHeader = pathname?.startsWith('/voice-concierge/campaign') || isHualiOrderInfo
  const hideFooterCTA = pathname === '/start' || pathname === '/get-started' || isHualiOrderInfo || pathname?.startsWith('/voice-concierge/campaign')

  return (
    <SiteShell variant={hideHeader ? 'bare' : 'legacy'} ribbon={!hideHeader} closingCta={!hideFooterCTA}>
      {children}
    </SiteShell>
  )
}
