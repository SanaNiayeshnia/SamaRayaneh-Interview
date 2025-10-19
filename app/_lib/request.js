"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const { default: axios } = require("axios");

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

request.interceptors.request.use(
  async (config) => {
    // Get token from cookies (or localStorage if not HttpOnly)
    const token = (await cookies()).get("accessToken")?.value;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized! Redirecting to login...");
      (await cookies()).delete("accessToken");
      redirect("/");
    }
    return Promise.reject(error);
  }
);
