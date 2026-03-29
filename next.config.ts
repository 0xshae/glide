import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // Prevent Turbopack from climbing up to the parent lockfile
      root: "./",
    },
  },
};

export default nextConfig;
