


// "use server";

// import { DocumentNode } from "graphql";  
// import { cookies } from "next/headers";

// const { BACKEND_URL } = process.env;
// type ExtractVariables<T> = T extends { variables: object } ? T["variables"] : never;

// export const fetcher = async <T>({
//   cache,
//   headers,
//   query,
//   variables,
//   next,
// }: {
//   query: string | DocumentNode;
//   variables?: ExtractVariables<T>;
//   headers?: HeadersInit;
//   cache?: RequestCache;
//   next?: NextFetchRequestConfig;
// }): Promise<{ status: number; body: T; token: string | null } | never> => {
//   try {
//     const cookieStore = cookies();
//     const token = cookieStore.get("vendure-auth-token")?.value;
//     console.log({ token });

//     const res = await fetch(`${BACKEND_URL}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token ? `Bearer ${token}` : "",
//         ...headers,
//       },
//       body: JSON.stringify({
//         ...(query && { query }),
//         ...(variables && { variables }),
//       }),
//       cache,
//       ...(next && { next: { ...next } }),
//     });

//     const t = res?.headers?.get("vendure-auth-token");
//     if (t) {
//       try {
//         cookieStore.set("vendure-auth-token", t);
//       } catch (e) {
//         console.trace('Failed to set token in cookie store', (e as Error).message);
//       }
//     }

//     const body = await res.json();
//     console.log(JSON.stringify(body));
//     if (!res.ok) {
//       throw new Error(body.message || 'Server responded with an error');
//     }
//     return { status: res.status, body, token: t };
//   } catch (error) {
//     console.error('Fetch error details:', error);
//     throw new Error((error as Error).message || 'Unknown error');
//   }
// };

"use server";

import { DocumentNode } from "graphql";  
import { cookies } from "next/headers";

const { BACKEND_URL } = process.env;
type ExtractVariables<T> = T extends { variables: object } ? T["variables"] : never;

export const fetcher = async <T>({
  cache,
  headers,
  query,
  variables,
  next,
}: {
  query: string | DocumentNode;
  variables?: ExtractVariables<T>;
  headers?: HeadersInit;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}): Promise<{ status: number; body: T; token: string | null } | never> => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("vendure-auth-token")?.value;
    console.log({ token });

    const res = await fetch(`${BACKEND_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(next && { next: { ...next } }),
    });

    const t = res?.headers?.get("vendure-auth-token");
    if (t) {
      try {
        cookieStore.set("vendure-auth-token", t);
      } catch (e) {
        console.trace('Failed to set token in cookie store', (e as Error).message);
      }
    }

    const body = await res.json();
    console.log(JSON.stringify(body));
    if (!res.ok) {
      throw new Error(body.message || 'Server responded with an error');
    }
    return { status: res.status, body, token: t };
  } catch (error) {
    console.error('Fetch error details:', error);
    throw new Error((error as Error).message || 'Unknown error');
  }
};
