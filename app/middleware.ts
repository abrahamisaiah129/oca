//middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export function middleware(req: NextRequest) {
  const tokenSecret = process.env.NEXTAUTH_SECRET;
  const node_env = process.env.NODE_ENV;
  const token = getToken({
    req,
    secret: tokenSecret,
    cookieName:
      node_env === "production"
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
  });
  // The __Secure- prefix is a browser-level security standard.
  //  It instructs the browser to completely reject the cookie
  //  if an application tries to pass it over an unencrypted (HTTP) connection

  if (!token) {
    // invalid or missing token, redirect to login page
    return NextResponse.redirect(new URL("/login", req.url));
  }
 
  return NextResponse.next();
}
// defined routes to be protected by middleware( this is checked by nextjs )
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};