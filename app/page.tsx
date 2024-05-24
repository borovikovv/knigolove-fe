'use client';

import Image from "next/image";
import Link from 'next/link';
import { cookies } from "next/headers";
import { Button } from "./components/button";
import UserDataFetch from "./components/user/user-data-fetch";
import { getUserData } from "@/lib/user";
import { useFormState } from "react-dom";

export default function Home() {
  const [state, userAction] = useFormState(getUserData, null);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form action={userAction}>
        <UserDataFetch />
      </form>
      <h1>{JSON.stringify(state)}</h1>
    </main>
  );
}
