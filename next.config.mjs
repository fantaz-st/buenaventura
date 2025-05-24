/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // match all Vercel Insights assets
        source: "/_vercel/insights/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
