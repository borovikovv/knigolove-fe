'use client';
import { createContext, useContext, useState } from "react";
import { User } from "../fetchTypes";

type ProvideAuthProps = {
  children: React.ReactNode;
}

type AuthContextProps = {
  user: User | null;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const ProvideAuth = ({children}: ProvideAuthProps) => {
  const value = useProvideAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);
  return {
    user,
    setUser,
  }
}

export function useAuth() {
  return useContext(AuthContext);
}