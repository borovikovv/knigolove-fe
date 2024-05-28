'use server';
import { cookies } from 'next/headers';
import { RequestOptions } from './types';

export async function api(url: string, options?: RequestOptions) {
  const apiBase = process.env.NEXT_PUBLIC_BE_HOST;
  const absoluteApiBase = (apiBase?.startsWith('http://') || apiBase?.startsWith('https://')) ? apiBase : `https://${apiBase}`;
  const { headers: defaultHeaders, ...restDefaultOptions } = options ?? {};
  const opt = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cookie': cookies().toString(),
      ...defaultHeaders,
    },
    ...restDefaultOptions,
  } as RequestOptions;

  return fetch(`${absoluteApiBase}${url}`, opt);
}