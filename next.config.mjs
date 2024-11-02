/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/VineeTagarwaL-code/remote-blogpost/main/images/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/user-attachments/assets/*",
      },
      {
        protocol: "https",
        hostname: "www.vineet.tech",
        port: "",
        pathname: "/_next/static/media/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/_next/static/media/**",
      },
    ],
  },
};

export default nextConfig;
