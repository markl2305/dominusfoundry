import { NextResponse } from "next/server";
import { consentRegion, isDocumentRequest, regionCookieValue, REGION_COOKIE, REGION_COOKIE_OPTIONS } from "./consent-region.mjs";

// Global Privacy Control, header form (compliance P1-1c, Mark 2026-10-12). A browser that sends `Sec-GPC: 1`
// gets a short-lived `consent_gpc=1` cookie that public/consent/consent.js reads as a reject, so no analytics
// tag is ever created and no consent bar is shown. When the header stops arriving the cookie is cleared.
// (hiresabina.ai does this in proxy.js; this repo already has middleware.js, and Next allows only one.)
//
// Consent region (Mark 2026-10-14/15, shared memory 77550c45; hiresabina f8ee005 proxy.js mirrored): every document
// response also carries the host-only `__Host-consent_region=<ask|default>.<epoch seconds>`, decided from Vercel's
// `x-vercel-ip-country` by consent-region.mjs (copied byte-for-byte). EU/EEA, UK, Swiss and unknown-country visitors
// are `ask` (the ask-first bar); everyone else is `default` (analytics on unless GPC or a stored "No"). consent.js
// honours `default` only while the value is fresh, so a document that skipped this refresh asks first.
// "Every document" is decided by what the browser is fetching (Sec-Fetch-Dest, else Accept: text/html), not by the
// path's shape: any path can render the root layout's 404 document with the gate (/review.missing, /_next/images,
// /_next/image.review). So the matcher exempts only the /_next/static/ subtree, and the code below exempts only the
// exact /_next/image optimizer and /favicon.ico (an exact match cannot be written reliably as a matcher lookahead).
// Images, scripts, fonts, API calls and other subresources get no cookie.
function withGpc(req, res) {
  if (!isDocumentRequest(req.headers)) return res;
  if (req.headers.get("sec-gpc") === "1") {
    res.cookies.set("consent_gpc", "1", { path: "/", maxAge: 60 * 60 * 24, sameSite: "lax" });
  } else if (req.cookies.has("consent_gpc")) {
    res.cookies.set("consent_gpc", "", { path: "/", maxAge: 0 });
  }
  res.cookies.set(REGION_COOKIE, regionCookieValue(consentRegion(req.headers.get("x-vercel-ip-country"))), REGION_COOKIE_OPTIONS);
  return res;
}

export function middleware(req) {
  const { pathname } = req.nextUrl;
  // Exactly the paths the old matcher left out besides /_next/static/: never a document, never rewritten.
  if (pathname === "/_next/image" || pathname === "/favicon.ico") return NextResponse.next();

  const host = req.headers.get("host") || "";
  if (host.startsWith("qb.")) {
    const url = req.nextUrl;
    url.pathname = "/qb-migration";
    url.searchParams.set("ppc", "1"); // serve slim, noindex variant
    return withGpc(req, NextResponse.rewrite(url));
  }

  // /mentis is NOT redirected. A 301 → /dominus-os lived here from 1bee50e (2026-02-15,
  // "Rename Mentis to Dominus OS across site"), but f462e8e (2026-07-13) — five months
  // later — ruled the opposite: "Mentis stays live and public per Mark (distinct from
  // internal Metis)", and deliberately kept /mentis in the sitemap. The stale redirect
  // meant the sitemap advertised a URL that permanently redirected away, which is exactly
  // the "page with redirect" defect Search Console flags. Later ruling wins; redirect removed.

  return withGpc(req, NextResponse.next());
}

export const config = {
  matcher: ["/((?!_next/static/).*)"]
};
