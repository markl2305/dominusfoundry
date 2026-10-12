import { NextResponse } from "next/server";

// Global Privacy Control, header form (compliance P1-1c, Mark 2026-10-12). A browser that sends `Sec-GPC: 1`
// gets a short-lived `consent_gpc=1` cookie that public/consent/consent.js reads as a reject, so no analytics
// tag is ever created and no consent bar is shown. When the header stops arriving the cookie is cleared.
// (hiresabina.ai does this in proxy.js; this repo already has middleware.js, and Next allows only one.)
function withGpc(req, res) {
  if (req.headers.get("sec-gpc") === "1") {
    res.cookies.set("consent_gpc", "1", { path: "/", maxAge: 60 * 60 * 24, sameSite: "lax" });
  } else if (req.cookies.has("consent_gpc")) {
    res.cookies.set("consent_gpc", "", { path: "/", maxAge: 0 });
  }
  return res;
}

export function middleware(req) {
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
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
