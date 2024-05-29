import { cookies } from "next/headers";


export function getAuthCookie() {
  return cookies().get('Authentication')?.value ?? '';
}

export function setAuthCookie(token: string, refreshToken: string) {
  cookies().set('Authentication', encodeURIComponent(token), {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  cookies().set('Refresh', encodeURIComponent(refreshToken), {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
}

export function clearAuthCookie() {
  const oneDay = 24 * 60 * 60 * 1000

  cookies().set('Authentication', '', {
    httpOnly: true, 
    secure: true,
    sameSite: 'lax',
    expires: Date.now() - oneDay,
  });
}