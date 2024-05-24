import { cookies } from "next/headers";


export function getAuthCookie() {
  return cookies().get('Authentication')?.value ?? '';
}

export function setAuthCookie(data: {token: string}) {
  const expires = 1 * 60 * 60;
  cookies().set('Authentication', encodeURIComponent(`${data.token}`), {
    httpOnly: true, 
    secure: false,
    sameSite: 'lax',
    path: '/',
    expires,
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