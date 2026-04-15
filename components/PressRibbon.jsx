import Link from 'next/link'

/**
 * Sitewide press ribbon highlighting latest coverage.
 * Link routes through /press/spw so outbound clicks are logged
 * on our side (Vercel route-handler hit + structured log line per click).
 */
export default function PressRibbon() {
  return (
    <div className="w-full bg-gradient-to-r from-forge-700 via-forge-800 to-forge-700 border-b border-forge-300/30">
      <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="inline-flex items-center rounded-full bg-forge-300/25 border border-forge-300/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-forge-100">
          Featured
        </span>
        <p className="text-sm text-white">
          <span className="font-semibold">Solar Power World</span>
          <span className="text-white/60"> &middot; </span>
          <span className="text-white/90">
            &ldquo;Forge software platform uses iPad LiDAR scanning for quick solar design proposals&rdquo;
          </span>
        </p>
        <Link
          href="/press/spw"
          className="inline-flex items-center gap-1 text-sm font-semibold text-forge-200 hover:text-white underline decoration-forge-300/50 hover:decoration-white underline-offset-4 transition"
        >
          Read the article
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
}
