/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/apis",
        destination: process.env.HOST, // Proxy to Backend External
      },
    ];
  },
};

export default nextConfig;
