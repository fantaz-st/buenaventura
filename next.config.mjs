/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // catch every file (and query) under /_vercel/insights
        source: "/_vercel/insights/(.*)",
        headers: [
          {
            key: "Cache-Control",
            // one year, public, immutable
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
