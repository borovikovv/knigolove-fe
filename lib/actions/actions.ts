'use server'
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  let ok = false;
  try {
    const response = await fetch(`${process.env.BE_HOST}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ password, email }),
    });
    const data = await response.json();
    cookies().set('Authentication', encodeURIComponent(`${data.token}`), {
      httpOnly: true, 
      secure: false,
      sameSite: 'lax',
      path: '/',
    });
    ok = response.ok;
    return data;
  } catch(err) {
    return {
      message: 'Can\'t login, provide, carrect data!' 
    }
  } finally {
    if(ok) {
      redirect('/');
    }
  }
}

export async function signupAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  let ok = false;
  try {
    const response = await fetch(`${process.env.BE_HOST}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ password, email }),
    });
    const data = await response.json();
    const result = await response.json();
    ok = response.ok;
    return result;
  } catch(err) {
    return {
      message: 'Can\'t login, provide, carrect data!' 
    }
  } finally {
    if(ok) {
      redirect('/');
    }
  }
}