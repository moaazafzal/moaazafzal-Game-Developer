import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo>, and it has no image optimiser,
// so the export build carries a basePath and ships images as they are. The
// dev build keeps the optimiser and a bare path.
const isExport = process.env.STATIC_EXPORT === "1";
const BASE_PATH = "/moaazafzal-Game-Developer";

const nextConfig: NextConfig = isExport
  ? {
      output: "export",
      basePath: BASE_PATH,
      env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {
      env: { NEXT_PUBLIC_BASE_PATH: "" },
    };

export default nextConfig;
