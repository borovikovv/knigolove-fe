'use server';
import { cookies } from "next/headers";

export async function getUserData() {
  try {
   const res = await (await fetch(`${process.env.NEXT_PUBLIC_BE_HOST}/user/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookies().toString(),
      },
    })).json();

    return res;

  } catch(err) {
    return {
      message: "Can't receive user data"
    }
  }
}