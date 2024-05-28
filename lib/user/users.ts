'use server';
import { api } from "../api";

export async function getUserData() {
  try {
   const res = await(
     await api(`${process.env.NEXT_PUBLIC_BE_HOST}/user/me`)
   ).json();

    return res;

  } catch(err) {
    return {
      message: "Can't receive user data"
    }
  }
}