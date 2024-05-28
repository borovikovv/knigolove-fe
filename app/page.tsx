'use client';

import UserDataFetch from "./components/user/user-data-fetch";
import { getUserData } from "@/lib/user";
import { useUser } from "./providers/user-provider";
import { useFormState } from "react-dom";

export default function Home() {
  const { user } = useUser();
  const [state, userAction] = useFormState(getUserData, null);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>{JSON.stringify(user)}</h1>
    </main>
  );
}
