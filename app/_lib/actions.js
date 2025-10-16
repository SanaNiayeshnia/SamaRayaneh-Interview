"use server";

import { cookies } from "next/headers";
import { request } from "./request";
import { redirect } from "next/navigation";

export async function loginAction() {
  const res = await request.get("/Interview/Auth");
  if (res?.data?.isSuccessed) {
    await cookies().set("accessToken", res?.data?.result?.credential, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
    });
    return { status: "succeeded" };
  } else
    return {
      status: "rejected",
    };
}

export async function logoutAction() {
  (await cookies())?.delete("accessToken");
  redirect("/");
}
