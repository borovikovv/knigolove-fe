import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('Authentication');
  
  const response = NextResponse.next()
  response.cookies.set('Authentication', `${authCookie?.value ?? ""}`);
  response.headers.set('Cookie', `Authentication=${authCookie?.value ?? ""}`);
 
  return response
}