import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
  let cookie = request.cookies.get('userId')
  console.log(cookie)
}
 
export const config = {
  matcher: '/about/:path*',
}