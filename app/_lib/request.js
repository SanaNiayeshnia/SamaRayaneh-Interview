const { default: axios } = require("axios");

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
