# Foundry positioning implementation — 2026-10-02

Status: LOCAL BUILT AND REVIEWABLE; no commit, push, deployment, alias change or default-branch integration performed by this lane.
Base: `7ce3c18bacf1f6b15f53098e170489a2fd35cd3c`
Branch: `positioning/company-ai-20261002`
Release owner: positioning lead. Canonical message/claim matrix belongs to the lead in the HireSabina repository at `docs/SABINA-POSITIONING-AND-CLAIMS-2026-10-02.md`.

## Coverage

Homepage and Sabina introduction lead with the responsibility between promised and done. Current category updated across both footer shells, company/about/careers, press media kit, investor pitch, current company learn reference, SEO/OpenGraph/Twitter descriptions, organization schema and llms text. Teaching and explicit authority follow the first responsibility. Dated historical articles and human employment metaphors remain intact.

The homepage now distinguishes Forge paid customer production from the signed Sabina customer engagement whose onboarding has not begun in the existing published proof record. Company-specific insight and external context are framed as roadmap/direction, and network intelligence remains explicitly not operating. Record ownership/delivery depends on the agreement; shared infrastructure, third-party processing and export limits point to current trust disclosures. Unsupported competitor-exclusive and unportable-memory prose removed. Pricing, contract terms, filing numbers, claims.ts status/financial constants, endpoints, styles, footages and examples preserved. Only descriptive role wording changed on the pricing page.

## Downloads and routes

`/Dominus_Pre_Discovery_Questionnaire.pdf` returns 307 to `https://hiresabina.ai/evaluate` in the local built server. Exact original PDF bytes are preserved in unserved `docs/archive/`; generator is unchanged and must not be used to republish retired terms. Original/preserved SHA-256: `419a75cf20e53df544a02c31c966fd08e859f63e534fba553e0971875a700144`.

Existing legacy redirects, the qb host rewrite, current contracts/privacy pages and unrelated Huali content are unchanged. Public source inventory identified no other document download. `/Dominus_OS_White_Paper_v1.pdf` already redirects to governance, preserved.

## Verification

- Required `npm run build`: PASS, including TypeScript, source gate and postbuild rendered gate (39 page routes, 7,617 blocks). Full log: task inventory `foundry-positioning-build.log`. Existing baseline/browser metadata/deprecated middleware warnings remain. Initial symlink cache and restricted font fetch attempts failed; final build used isolated lockfile dependencies and existing public fonts with network access. No source or lockfile dependency changes.
- Read-only local HTTP checks: PASS for 11 affected/routes, current category, home/Sabina headline, authority wording, demo link, home readiness/roadmap, parseable JSON-LD, PDF redirect and preserved archive hash. Receipt: `foundry-positioning-routes.json`.
- Changed home and Sabina hero/document width: PASS at 320, 390, 768 and 1440 pixels (8 checks). Screenshots and receipt in task inventory.
- Existing `test:responsive-gate`: FAIL on exactly 10 cases, all the image-only LocateFaith footer link on /careers. Gate marks any anchor without textContent as hidden, even when its image has a visible rectangle. This exact badge markup is unchanged from HEAD. Independent changed-hero browser checks found no clipping, and no zero-sized footer links. Gate itself is unchanged; release owner should retain the explicit limitation rather than report a blanket pass.
- `git diff --check`: PASS. Build-generated next-env change restored.

## Preserved assets and remaining external coverage

Introduction MP4 and VTT are unchanged. VTT already says company AI. Final frame inspected: Sabina / Hired AI. Surrounding film caption now identifies payment/pattern discovery as illustrative and asks visitors to confirm supported workflows. A film/transcript is not runtime evidence; independent claims owner should evaluate literal payment and pattern-discovery examples if a replacement film is desired. OG image inspected and preserved: Forge operating-platform graphic, without AI employee category.

External references inventoried from source: LinkedIn `https://www.linkedin.com/company/dominus-foundry`, YouTube `https://www.youtube.com/@Forge-DF`, LocateFaith `https://locatefaith.com/business/sabina-by-dominus-foundry`, dated SolarPowerWorld coverage via `/press/spw`. This lane made no external account edits or public posts. These require the lead's external profile/collateral inventory and account access.

Current status/tenancy/processing/learning claim reconciliation belongs to the independent claims lead; this copy lane uses current safe qualifications and preserves factual blockers. No readiness upgrade or architecture change.

## Changed tracked source files

- `app/(site)/about/page.js`
- `app/(site)/careers/page.tsx`
- `app/(site)/page.tsx`
- `app/layout.tsx`
- `app/learn/platform/ai-software-company-for-construction-and-trades/page.tsx`
- `app/pitch/PitchContent.tsx`
- `app/press/page.tsx`
- `app/sabina/page.tsx`
- `components/SiteFooter.jsx`
- `components/foundry/CompanyContent.tsx`
- `components/foundry/FoundryShell.tsx`
- `components/foundry/HomeContent.tsx`
- `components/foundry/PressContent.tsx`
- `components/foundry/PricingContent.tsx`
- `components/foundry/SabinaContent.tsx`
- `next.config.js`
- `public/Dominus_Pre_Discovery_Questionnaire.pdf`
- `public/llms.txt`

Added: `docs/archive/README.md`, preserved questionnaire PDF and this implementation receipt.
