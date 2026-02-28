import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    domains: ['images.ctfassets.net'],
    unoptimized: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

