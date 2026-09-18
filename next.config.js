/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The retired product name. This 301 is the ONLY handler now: a
      // redundant app/iris/page.tsx calling permanentRedirect was deleted
      // 2026-09-16 — redirects() runs ahead of routing so that route file was
      // already dead code, and its directory name kept the retired name in the
      // tree. ⛔ Do not re-add a route for it; keep the redirect forever.
      { source: "/iris", destination: "/sabina", permanent: true },

      // ⛔⛔ CANDIDATE, NOT SHIPPED — proposal only, awaiting Mark's word on the
      // hierarchy sentence in ESTATE-ALIGN-CANDIDATE-2026-09-18.md. Do not
      // deploy this file until that proposal is accepted.
      //
      // SUPERSEDES the "BANNED PUBLIC NAMES — plan §17, 2026-09-16" block that
      // stood here (kept below, dated, per this repo's own vestige/record
      // practice — it was correct when written and is not deleted).
      // RULED BY MARK 2026-09-18: "dominusos.ai stays - fix the estate to
      // match it" — DominusOS is no longer a banned internal system name here;
      // dominusos.ai is a live, Mark-approved site (rewritten to verified
      // claims only, per DOMINUSOS-REWRITE-DIFF.md, confirmed live 2026-09-18)
      // and the estate names it. See ESTATE-ALIGN-CANDIDATE-2026-09-18.md for
      // the full reasoning chain and the open HOLD this candidate carries:
      // Phase 19's D-1 ruling (19-RULINGS.md, also 2026-09-17) separately
      // banned DominusOS from this domain FOR A DIFFERENT REASON — §22.6,
      // never claim stronger governance than verified mechanics — and has not
      // itself been superseded in that ledger. This file's proposal complies
      // with §22.6 by reusing only the same verified-claims language already
      // vetted for dominusos.ai; it does not resolve the ledger collision.
      //
      // The /dominus-os and whitepaper-PDF pages themselves are NOT restored
      // — dominusos.ai is now the canonical home for that content and this
      // candidate does not duplicate it. Both routes keep a permanent redirect
      // (they were fully built, indexed pages; a 404 would be worse than a
      // redirect) but now point at the canonical site instead of the generic
      // /governance page.
      // ⚠️ BOTH point at the dominusos.ai HOMEPAGE ONLY, never /whitepaper or
      // either DominusOS_White_Paper_v*.pdf. A same-day read-only audit
      // (DOMINUSOS-GOVERNANCE-COMPARISON-2026-09-18.md, 13:45) found the
      // homepage "largely honest" (9/15 governance claims supported) but
      // found /whitepaper and both PDFs UNREWRITTEN, still asserting things
      // the homepage itself now denies ("tested regularly... instantly...
      // across every kernel instance" vs. the homepage's own "not yet true").
      // Its own verdict: "the gate does not open for dominusos.ai AS A WHOLE
      // ... until [the whitepaper] is unpublished, re-framed or rewritten."
      // Do not retarget either redirect at /whitepaper until that is closed.
      { source: "/dominus-os", destination: "https://dominusos.ai", permanent: true },
      { source: "/Dominus_OS_White_Paper_v1.pdf", destination: "https://dominusos.ai", permanent: true },
      //
      // ⭐ SUPERSEDED TEXT, kept verbatim and dated for the record (correct
      // 2026-09-16 through 2026-09-18, DEAD as of this candidate):
      // "BANNED PUBLIC NAMES — plan §17, 2026-09-16. Both routes were fully
      // built pages that are now DELETED, not hidden, and both are already
      // indexed, so each keeps a permanent redirect rather than becoming a 404.
      //
      // /dominus-os was a standalone product page for the internal system name
      // (44 literal occurrences, its own title/meta, its own mailto CTA). Its
      // subject — governed authority, attributable action, human oversight — is
      // what /governance now carries on this site, so that is where it lands."
      // { source: "/dominus-os", destination: "/governance", permanent: true },
      //
      // "FOUND 2026-09-16 (round 4, tree verification): a second public vestige
      // of the same banned name — an 8-page PDF whitepaper titled "Dominus OS /
      // The Human-Governed AI Hypervisor", unreferenced anywhere in source (no
      // link, no code pointer) but LIVE at this path because Next.js serves
      // everything under public/ statically regardless of whether anything
      // links to it. Deleted from public/; same destination and same
      // reasoning as /dominus-os above, because it is the same subject."
      // { source: "/Dominus_OS_White_Paper_v1.pdf", destination: "/governance", permanent: true },
      //
      // The HVAC comparison article was positioning as a ServiceTitan
      // alternative in its URL, title, meta, headline and FAQ (plan §6.6/§7.5:
      // Dominus Foundry is not positioned as a ServiceTitan replacement). The
      // framing IS the page, so the page goes and the reference index catches
      // the inbound links.
      {
        source: "/learn/platform/servicetitan-alternatives-for-hvac-what-dominus-foundry-offers",
        destination: "/learn",
        permanent: true,
      },
      // Old index → new systems index
      { source: "/business-tools", destination: "/systems", permanent: true },

      // Front door products → Intake Engine
      { source: "/business-tools/voice-concierge", destination: "/systems/intake", permanent: true },
      { source: "/business-tools/lead-intake-booking", destination: "/systems/intake", permanent: true },

      // Revenue products → Revenue Engine
      { source: "/business-tools/client-onboarding-engine", destination: "/systems/revenue", permanent: true },
      { source: "/business-tools/lead-to-cash", destination: "/systems/revenue", permanent: true },

      // Ops products → Ops Engine
      { source: "/business-tools/support-triage-desk", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/ops-reporting-intelligence", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/document-compliance-automations", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/recruiting-hiring-pipeline", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/vendor-purchasing-workflow", destination: "/systems/ops", permanent: true },

      // Legacy footer shortcut
      { source: "/voice-concierge", destination: "/systems/intake", permanent: true },

      // Retired: Foundry Capital / ventures arm (removed 2026-08-07)
      { source: "/ventures", destination: "/", permanent: true },

      // NOTE: /pricing is NOT retired. It briefly was (the legacy build-fee/per-Engine
      // services sheet), but Mark superseded that on 2026-08-07 — "fix the dominus foundry
      // pricing to discuss forge and be a range (but an accurate one) - its job is not to
      // sell" — and 8cdf937 rewrote it as a canon-sourced Forge reference table. Do not add
      // a /pricing redirect back; it would kill a live, correct page.

      // Retired pre-Forge product pages. Route files DELETED 2026-08-07 (RULED by Mark:
      // "get rid of them - they are nothing more than artifacts and i dont want them
      // fucking with seo"). These 301s must stay even though the pages are gone — they
      // catch already-indexed URLs so search engines see a permanent move instead of a
      // 404, which is what actually protects the SEO. Mirrors f462e8e (2026-07-13).
      // Mentis intentionally NOT redirected — it remains a current public brand.
      { source: "/voice-concierge/campaign", destination: "/systems/intake", permanent: true },
      { source: "/invoiceflow", destination: "/systems/revenue", permanent: true },
      { source: "/orderline", destination: "/systems/ops", permanent: true },
      { source: "/voice-ordering", destination: "/systems/ops", permanent: true },
    ]
  },
}

module.exports = nextConfig
