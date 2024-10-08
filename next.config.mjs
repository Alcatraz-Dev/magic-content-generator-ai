/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'img.clerk.com', 'images.clerk.com', 'www.gravatar.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
