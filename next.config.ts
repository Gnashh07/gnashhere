import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/gnashhere" : "", // ✅ Fixes routing for GitHub Pages
  assetPrefix: isProd ? "/gnashhere/" : "", // ✅ Ensures assets load correctly
  images: {
    unoptimized: true, // ✅ Fixes images not loading
  },
};

export default nextConfig;
