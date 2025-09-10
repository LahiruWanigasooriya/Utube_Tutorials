/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DATABASE_URL: process.env.DATABASE_URL,
  },
}

module.exports = nextConfig