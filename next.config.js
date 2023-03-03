const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  defaultShowCopyCode: true
});

module.exports = {
  ...withNextra(),
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}
