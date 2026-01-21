'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import FooterCTA from './FooterCTA'
import { DemoWidgetLoader } from './voice-concierge/CampaignInteractions'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHualiOrderInfo = pathname?.startsWith('/huali-order-info')
  const hideHeader = pathname?.startsWith('/voice-concierge/campaign') || isHualiOrderInfo
  const hideWidget = isHualiOrderInfo
  // Hide footer CTA on the /start page itself (avoid redundancy)
  const hideFooterCTA = pathname === '/start' || pathname === '/get-started' || isHualiOrderInfo || pathname?.startsWith('/voice-concierge/campaign')

  return (
    <div className="min-h-screen">
      {!hideHeader && <SiteHeader />}
      <main>{children}</main>
      {!hideFooterCTA && <FooterCTA />}
      <SiteFooter />
      {!hideWidget && <DemoWidgetLoader />}
    </div>
  )
}
