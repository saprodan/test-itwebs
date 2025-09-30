import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // для публичных переменных (доступны на клиенте)
  publicRuntimeConfig: {
    FAKE_API_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};

export default nextConfig;
