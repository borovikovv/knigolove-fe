'use client';

import Image from "next/image";
import Link from 'next/link';
import { cookies } from "next/headers";

export default function Home() {
  let result = {};

  const getUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/auth/who`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
    } catch(err) {
      console.error(err);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Dashboard</h1>
      <button onClick={getUserData}>Get data</button>
    </main>
  );
}
