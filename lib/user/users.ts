'use server';

import { getAuthCookie } from "@/src/utils";
import { cookies } from "next/headers";

export async function getUserData() {
  try {
   const res =  await (await fetch(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/get`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();

    console.log(res, "res");

  } catch(err) {
    console.error(err);
  }
}