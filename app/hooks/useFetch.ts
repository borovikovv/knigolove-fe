"use client";

import { useCallback, useMemo } from "react";
import { useUser } from "../providers/user-provider";
import { setAuthCookie } from "@/src/utils";

const getUrl = (url: string) => {
  const apiBase = process.env.NEXT_PUBLIC_BE_HOST;
  const absoluteApiBase =
  apiBase?.startsWith("http://") || apiBase?.startsWith("https://")
    ? apiBase
    : `https://${apiBase}`;

  return `${absoluteApiBase}${url}`;
}

export function useFetch() {
  const { setUser } = useUser();
  let config = useMemo(() => {}, []);

  let originalRequest = useCallback(async (url: string, options?:  Partial<Response>) => {
    const requestUrl = getUrl(url);
    let response = await fetch(requestUrl, {
      credentials: 'include',
      ...options,
    });
    
    return { response };
  }, []);

  let refreshToken = useCallback(async () => {
    const refreshUrl = getUrl('/auth/refresh');
    const response = await fetch(refreshUrl, {
      method: "GET",
      credentials: "include",
    });

    return response;
  }, []);

  const api = useCallback(async (url: string) => {
    try {
      let { response } = await originalRequest(url);
      if(!response.ok) {
        const data = await response.json();
        if(data.statusCode === 401) {
          const result = await refreshToken();
          if(result.ok) {
            const refreshData = await result.json();
            const headers = new Headers();
            headers.append("Set-Cookie", `Authorization=${refreshData.token}`);
            headers.append("Set-Cookie", `Refresh=${refreshData.refreshToken}`);
            await originalRequest(url, {
              headers,
            });
          }
        }
      }
      const data = response.json();

      return { 
        response,
        data,
      };
    } catch (error) {
      console.error(error);
    }
  }, [originalRequest, refreshToken]);

  return {
    api,
  };
}
