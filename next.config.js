/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'next-ecommerce-anwar.s3.amazonaws.com',
        },
      ],
  },
  swcMinify: true,
  optimizeFonts:true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
