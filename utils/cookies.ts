import { cookies } from "next/headers";


export function setAuthCookie(response: Response) {
  const cookie = response.headers.get('Set-Cookie');
  const decodeCookie = decodeURIComponent(cookie ?? '');
  const token = decodeCookie?.split('=').at(1)?.split(';').at(0);
  cookies().set('Authentication', encodeURIComponent(`${token}`), {
    httpOnly: true, 
    secure: true,
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