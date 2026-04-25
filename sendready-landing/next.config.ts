import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "production" ? ".next-production" : ".next-dev-localhost",
};

export default nextConfig;
