/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.themealdb.com", "mandarin.api.weniv.co.kr"],
  },
};

module.exports = nextConfig;
