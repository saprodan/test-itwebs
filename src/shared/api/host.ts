import axios, { AxiosResponse } from "axios";

export const $host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FAKE_API_URL,
});

$host.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);
