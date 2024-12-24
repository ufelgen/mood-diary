/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["source.unsplash.com", "unsplash.com", "images.unsplash.com"],
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com'
      // },
      { protocol: "https", hostname: "unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
