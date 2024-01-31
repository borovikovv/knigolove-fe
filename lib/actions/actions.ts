'use server'
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const response = await fetch(`${process.env.BE_HOST}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    });
    const result = await response.json();
    if(result) {
      return result;
    }
    redirect('/');
  } catch(err) {
    return {
      message: 'Can\'t login, provide, carrect data!' 
    }
  }
}