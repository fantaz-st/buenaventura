// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Only match the Insights script
  if (request.nextUrl.pathname === "/_vercel/insights/script.js") {
    const res = NextResponse.next();
    // Set all three cache headers so Vercel’s Edge honors them
    res.headers.set("Vercel-CDN-Cache-Control", "public, max-age=31536000, immutable");
    res.headers.set("CDN-Cache-Control", "public, max-age=31536000, immutable");
    res.headers.set("Cache-Control", "public, max-age=31536000, immutable");
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/_vercel/insights/script.js",
};
