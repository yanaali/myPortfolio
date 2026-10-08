/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  // The original template cached dev chunks for a year. A new URL namespace
  // bypasses those old browser entries; current dev responses revalidate.
  deploymentId: process.env.NODE_ENV === "development" ? "portfolio-dev-v2" : undefined,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // SAMEORIGIN (not DENY) so the resume page can embed its own PDF;
          // still blocks other sites from framing us (clickjacking protection).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          { key: "Cache-Control", value: process.env.NODE_ENV === "production" ? "public, max-age=3600, must-revalidate" : "no-store" },
        ],
      },
    ];
  },
};

export default nextConfig;
