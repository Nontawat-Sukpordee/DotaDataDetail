import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol : "https",
        hostname : "fastly.picsum.photos",
        pathname : "/**"
      },
            {
        protocol: 'https',
        hostname: 'api.opendota.com',
        pathname: '/**', // ให้โหลดได้ทุก path
      },
    ]
  }
};


export default nextConfig;
