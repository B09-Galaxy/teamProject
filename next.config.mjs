/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yaimg.yanolja.com'
      }
    ]
  }
};

export default nextConfig;
