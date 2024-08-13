"use server";
import { cookies } from "next/headers";
import { logoutMutation } from "../graphql/mutation/logout";
import { fetcher } from "./fetcher";
import { logoutResponseType } from "./types";

export const logout = async () => {
  try {
    const res = await fetcher<logoutResponseType>({
      query: logoutMutation,
    });
    const cookieStore = cookies();
    cookieStore.delete("vendure-auth-token");
    return res.body;
  } catch (error) {
    console.error("Logout request failed:", error);
    throw error;
  }
};
