'use server'
import { setAuthCookie } from "@/src/utils/cookies";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  let ok = false;
  try {
    const response = await fetch(`${process.env.BE_HOST}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ password, email }),
    });
    const data = await response.json();
    console.log(data, "data");
    setAuthCookie(response);
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
    setAuthCookie(response);
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