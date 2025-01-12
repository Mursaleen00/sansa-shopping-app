import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        // port: '',
        // pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'forkify-api.herokuapp.com',
//         port: '',
//         pathname: '/images/**',
//       },
//     ],
//   },
// };
