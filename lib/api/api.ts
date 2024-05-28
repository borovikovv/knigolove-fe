import { cookies } from 'next/headers';
import { RequestOptions } from './types';

export function api(url: string, options?: RequestOptions) {
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

  return fetch(url, opt);
}