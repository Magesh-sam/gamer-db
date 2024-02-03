/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.rawg.io',
            port: '',
            pathname: '*/**',
          },
        ],
      },
};

export default nextConfig;
