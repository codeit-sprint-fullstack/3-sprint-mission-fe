/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3bte49znzcuux.cloudfront.net',
        port: '',
        pathname: '/uploads/**',
      },
      // 임시적으로 모든 이미지 출처 허용
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
