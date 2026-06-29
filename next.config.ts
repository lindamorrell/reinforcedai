import type { NextConfig } from "next";

// Static export so the entire site builds to plain HTML/CSS/JS in `out/`,
// which GitHub Pages serves directly. No Node server required.
//
// IMPORTANT: only set basePath/assetPrefix if GH Pages is served from a sub-
// path (e.g. /reinforcedai/). For user/org pages served from /, leave at "".
const REPO_NAME = "reinforcedai";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // When the site is served from https://<user>.github.io/<repo>/ uncomment:
  basePath: process.env.GH_PAGES_BASE_PATH ?? "",
  assetPrefix: process.env.GH_PAGES_BASE_PATH ?? "",
};

export default nextConfig;
