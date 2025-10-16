import { request } from "./request";

export async function getPatients() {
  try {
    const res = await request.get("/Interview/patient");
    if (res?.status === 200) return res?.data;
    else console.log("Failed to fetch the patients");
  } catch (error) {
    console.log(error.message);
  }
}
