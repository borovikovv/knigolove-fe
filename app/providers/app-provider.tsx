"use client"
import { UserProvider } from './user-provider';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}