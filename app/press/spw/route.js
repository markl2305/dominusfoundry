import { NextResponse } from 'next/server'

/**
 * /press/spw — tracked redirect to the Solar Power World feature.
 *
 * Every hit to this route is visible in Vercel's request logs
 * (filter: path = /press/spw) and in Google Analytics as a pageview.
 * The structured log line below gives us referrer + UA for each click.
 */

const SPW_ARTICLE_URL =
  'https://www.solarpowerworldonline.com/2026/04/forge-software-platform-uses-ipad-lidar-scanning-for-quick-solar-design-proposals/'

export const runtime = 'edge'

export function GET(request) {
  const url = new URL(request.url)
  const source = url.searchParams.get('src') ?? 'site'

  console.log(
    JSON.stringify({
      tag: '[press_click]',
      outlet: 'solar_power_world',
      src: source,
      referer: request.headers.get('referer') ?? null,
      ua: request.headers.get('user-agent') ?? null,
      ip: request.headers.get('x-forwarded-for') ?? null,
      ts: new Date().toISOString(),
    })
  )

  const target = new URL(SPW_ARTICLE_URL)
  target.searchParams.set('utm_source', 'dominusfoundry')
  target.searchParams.set('utm_medium', 'press')
  target.searchParams.set('utm_campaign', 'spw_forge_launch_2026_04')
  target.searchParams.set('utm_content', source)

  return NextResponse.redirect(target.toString(), 302)
}
