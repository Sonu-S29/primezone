
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60, // Cache for 60 seconds
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',

      },
      {
        protocol: 'https',
        hostname: 'ggayane.github.io',
        port: '',
        pathname: '/**',

      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }

    ],
  },
  experimental: {
  },
  allowedDevOrigins: [
      "https://*.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev",
  ],
};

export default nextConfig;
