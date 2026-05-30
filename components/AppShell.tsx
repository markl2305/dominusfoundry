'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import FooterCTA from './FooterCTA'
import PressRibbon from './PressRibbon'
import { DemoWidgetLoader } from './voice-concierge/CampaignInteractions'

// The heraldic Dominus Foundry pages bring their own nav/footer/embers chrome,
// so AppShell renders them bare (no PressRibbon / SiteHeader / FooterCTA / SiteFooter).
const FOUNDRY_ROUTES = new Set(['/', '/ventures', '/technology', '/company', '/press', '/blog'])

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname && FOUNDRY_ROUTES.has(pathname)) {
    return <>{children}</>
  }
  const isHualiOrderInfo = pathname?.startsWith('/huali-order-info')
  const hideHeader = pathname?.startsWith('/voice-concierge/campaign') || isHualiOrderInfo
  const hideWidget = isHualiOrderInfo
  // Hide footer CTA on the /start page itself (avoid redundancy)
  const hideFooterCTA = pathname === '/start' || pathname === '/get-started' || isHualiOrderInfo || pathname?.startsWith('/voice-concierge/campaign')

  return (
    <div className="min-h-screen">
      {!hideHeader && <PressRibbon />}
      {!hideHeader && <SiteHeader />}
      <main>{children}</main>
      {!hideFooterCTA && <FooterCTA />}
      <SiteFooter />
      {!hideWidget && <DemoWidgetLoader />}
    </div>
  )
}
