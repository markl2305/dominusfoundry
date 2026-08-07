import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host") || "";
  if (host.startsWith("qb.")) {
    const url = req.nextUrl;
    url.pathname = "/qb-migration";
    url.searchParams.set("ppc", "1"); // serve slim, noindex variant
    return NextResponse.rewrite(url);
  }

  // /mentis is NOT redirected. A 301 → /dominus-os lived here from 1bee50e (2026-02-15,
  // "Rename Mentis to Dominus OS across site"), but f462e8e (2026-07-13) — five months
  // later — ruled the opposite: "Mentis stays live and public per Mark (distinct from
  // internal Metis)", and deliberately kept /mentis in the sitemap. The stale redirect
  // meant the sitemap advertised a URL that permanently redirected away, which is exactly
  // the "page with redirect" defect Search Console flags. Later ruling wins; redirect removed.

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
