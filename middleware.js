import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const url = request.nextUrl;
  const isOnLoginPage = url.pathname === "/";

  if (!accessToken && !isOnLoginPage) {
    // Redirect unauthenticated users to login page
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && isOnLoginPage) {
    // Redirect authenticated users who try to access the login page back to the dashboard page
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Otherwise, continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
