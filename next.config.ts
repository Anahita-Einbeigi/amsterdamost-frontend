// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["images.ctfassets.net"],
//   },output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true, 
//   }
// };

// export default nextConfig;

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

