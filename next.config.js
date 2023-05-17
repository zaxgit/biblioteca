/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['books.google.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
