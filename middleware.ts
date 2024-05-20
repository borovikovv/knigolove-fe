import { NextResponse, type NextRequest } from 'next/server'
import { getAuthCookie } from './src/utils';
import { cookies } from 'next/headers';
 
export function middleware(request: NextRequest) {
  // const token = request.cookies.get('Authentication')?.value ?? '';
  // console.log(token, 'token');

  // const response = NextResponse.next();
  // request.cookies.set('Authentication', token);
  // request.headers.set('Authentication', `${token}`);
  // // console.log(request);
  // return response
  
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}