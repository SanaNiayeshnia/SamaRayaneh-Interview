"use server";

import { cookies } from "next/headers";
import { request } from "./request";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

export async function createPatientAction(data) {
  try {
    const res = await request.post("/Interview/patient", data);
    if (res.status === 200) {
      revalidatePath("dashboard/patient-management");
      return res.data;
    } else if (res.status === 400) {
      console.log("ّFailed to create the patient: Invalid model!");
    } else console.log("ّFailed to create the patient");
  } catch (error) {
    console.log(error.message);
    return { isSuccessed: false };
  }
}

export async function updatePatientAction(data, patientId) {
  console.log("update", data);
  try {
    const res = await request.put(`/Interview/patient/${patientId}`, data);
    if (res?.status === 200) {
      revalidatePath("dashboard/patient-management");
      return res?.data;
    } else if (res.status === 400) {
      console.log("ّFailed to update the patient: Invalid model!");
    } else console.log("ّFailed to update the patient");
  } catch (error) {
    console.error(error.message);
    return { isSuccessed: false };
  }
}

export async function togglePatientActiveStatus(patientId) {
  try {
    const res = await request.patch(`/Interview/patient/${patientId}/toggle`, {
      isActive: true,
    });
    if (res?.status === 200) {
      revalidatePath("dashboard/patient-management");
      return res?.data;
    } else if (res.status === 400) {
      console.log("ّFailed to update the patient: Invalid model!");
    } else console.log("ّFailed to update the patient");
  } catch (error) {
    console.error(error.message);
    return { isSuccessed: false };
  }
}
