import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Replace 'your-repo-name' with your actual GitHub repo name
  assetPrefix: "/personal-website/",
  // If your site is not at the root, set basePath as well:
  // basePath: "/personal-website",
};

export default nextConfig;
