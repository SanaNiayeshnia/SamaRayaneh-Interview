import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

const { default: axios } = require("axios");

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    // Get token from cookies (or localStorage if not HttpOnly)
    const token = cookies().get("accessToken")?.value;
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
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized! Redirecting to login...");
      redirect("/");
    }
    return Promise.reject(error);
  }
);
