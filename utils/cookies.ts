import { cookies } from "next/headers";


export default function setAuthCookie(response: Response) {
  const cookie = response.headers.get('Set-Cookie');
  const decodeCookie = decodeURIComponent(cookie ?? '');
  const token = decodeCookie?.split('=').at(2)?.split(';').at(0) ?? '';
  cookies().set('Authentication', encodeURIComponent(`${token}`));
}