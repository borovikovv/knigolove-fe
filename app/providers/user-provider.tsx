"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "../types";
import { useFetch } from "../hooks";

type ContextType = {
  user: User | null;
  setUser: (user: User) => void;
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
  const { api } = useFetch();

  useEffect(() => {
    void (async () => {
      try {
        const response = await api(`/user/me`);
        
        // if(response?.ok) {
        //   const data = await response.json(); 
        //   setUser(data);
        // }
      } catch (error) {
        console.error(error);
      }
    })()
  }, [setUser, api]);

  return {
    user,
    setUser,
  }
}

export function useUser() {
  return useContext(UserContext);
}
