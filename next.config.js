/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: true,
  images: {
    domains: ['www.qzzhai.top']
  }
};

module.exports = nextConfig;
