import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Static export for Hostinger Web Hosting
  output: process.env.CUSTOM_EXPORT ? undefined : 'export',
  trailingSlash: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // next/image optimisation requires a Node.js runtime; disable for static hosting.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['motion'],
};

export default nextConfig;
