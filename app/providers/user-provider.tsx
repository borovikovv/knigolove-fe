"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "../types";

type ContextType = {
  user: User | null;
}

const UserContext = createContext({} as ContextType);

export function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useUserProvider();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

const useUserProvider = () => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    void (async () => {
      try {
        const res = await(
          await fetch(`${process.env.NEXT_PUBLIC_BE_HOST}/user/me`, {
            credentials: 'include',
          })
        ).json(); 
        
        setUser(res);
      } catch (error) {
        console.error(error);
      }
    })()
  }, []);

  return {
    user,
  }
}

export function useUser() {
  return useContext(UserContext);
}
