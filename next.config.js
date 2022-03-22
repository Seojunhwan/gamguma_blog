/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  locales: ['ko-KR'],
  defaultLocale: 'ko-KR',
  images: {
    domains: ['gamguma-blog.s3.ap-northeast-2.amazonaws.com'],
  },
});
