/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/VineeTagarwaL-code/remote-blogpost/main/images/**",
      },
    ],
  },
};

export default nextConfig;
