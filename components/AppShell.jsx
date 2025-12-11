'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import { DemoWidgetLoader } from './voice-concierge/CampaignInteractions'

export default function AppShell({ children }) {
  const pathname = usePathname()
  const isHualiOrderInfo = pathname?.startsWith('/huali-order-info')
  const hideHeader = pathname?.startsWith('/voice-concierge/campaign') || isHualiOrderInfo
  const hideWidget = isHualiOrderInfo

  return (
    <div className="min-h-screen bg-tan-200 text-navy-800">
      {!hideHeader && <SiteHeader />}
      <main>{children}</main>
      {!hideWidget && <DemoWidgetLoader />}
    </div>
  )
}
