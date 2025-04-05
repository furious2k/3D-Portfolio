/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable experimental app directory if not used:
  experimental: {
    appDir: false,
  }
};

module.exports = nextConfig;
