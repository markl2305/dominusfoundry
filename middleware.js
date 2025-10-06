import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host") || "";
  if (host.startsWith("qb.")) {
    const url = req.nextUrl;
    url.pathname = "/qb-migration";
    url.searchParams.set("ppc", "1"); // serve slim, noindex variant
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
