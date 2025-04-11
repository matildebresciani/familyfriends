/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudfront.net",
        pathname: "/**",
      },
      //   {
      //     protocol: "https",
      //     hostname: "dl5zpyw5k3jeb.cloudfront.net",
      //     pathname: "/**",
      //   },
    ],
  },
};

export default nextConfig;
