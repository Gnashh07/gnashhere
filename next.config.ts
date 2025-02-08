import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // ✅ Enables static export for GitHub Pages
  basePath: isProd ? "/gnashhere" : "", // ✅ Change "gnashhere" to your repo name
  images: {
    unoptimized: true, // ✅ Fixes image optimization issues on GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint warnings on build
  },
};

export default nextConfig;
