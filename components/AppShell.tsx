'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { DemoWidgetLoader } from './voice-concierge/CampaignInteractions'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHualiOrderInfo = pathname?.startsWith('/huali-order-info')
  const hideHeader = pathname?.startsWith('/voice-concierge/campaign') || isHualiOrderInfo
  const hideWidget = isHualiOrderInfo

  return (
    <div className="min-h-screen bg-tan-200 text-navy-800">
      {!hideHeader && <SiteHeader />}
      <main>{children}</main>
      <SiteFooter />
      {!hideWidget && <DemoWidgetLoader />}
    </div>
  )
}
