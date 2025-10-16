import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value;

  if (!accessToken) {
    //Redirect to the login page when the user is not authenticated
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  //Otherwise, continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
