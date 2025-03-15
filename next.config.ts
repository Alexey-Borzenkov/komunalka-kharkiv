import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/komunalka-kharkiv' : '',
  trailingSlash: true,
};

export default nextConfig;
