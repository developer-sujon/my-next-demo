import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  console.log("ehllo");

  let session: any = null;
  if (req.nextUrl.pathname.startsWith("/auth")) {
    // This logic is only applied to /about
    if (session.data.session?.user) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/checkout")) {
    // This logic is only applied to /about
    if (!session.data.session?.user) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return res;
}

/*export const config = {
  matcher:['/auth/login','/auth/signup'],
}*/
