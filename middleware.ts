import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  if (host === "hotvet.omradelab.com" && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/p/betonmast/buskerud-vestfold/prosjekt/hotvet";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
