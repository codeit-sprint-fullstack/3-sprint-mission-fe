/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "image.hanatour.com",
      "example.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 모든 호스트네임 허용
      },
    ],
  },
};

export default nextConfig;
