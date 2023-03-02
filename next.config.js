/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/src',
  images: {
    unoptimized: true
  }
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  defaultShowCopyCode: true
});

module.exports = withNextra({ nextConfig });
