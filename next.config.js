/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  transpilePackages: ['next-mdx-remote'],
};

module.exports = nextConfig;
