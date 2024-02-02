import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const cookie = req.cookies.get(
    'next-auth.session-token' || '__Secure-next-auth.session-token'
  )

  const { pathname } = req.nextUrl

  // Example of redirecting to / if the cookie is not set
  if (!cookie && pathname !== '/') {
    req.nextUrl.pathname = '/'
    return NextResponse.redirect(req.nextUrl)
  }

  return NextResponse.next()
}
export const config = {
  matcher: ['/dashboard/:path*'],
}
