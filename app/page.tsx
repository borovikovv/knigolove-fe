import Image from "next/image";
import Link from 'next/link';
import { cookies } from "next/headers";
import { getUserData } from "@/lib/actions";
import { Button } from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Dashboard</h1>
      <Button>Hi</Button>
    </main>
  );
}
