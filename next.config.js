/* eslint-disable react-hooks/rules-of-hooks */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withPWA = require("next-pwa");
const withOffline = require("next-offline");

const config = {
  dest: "public",
  webpack5: true,
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  compress: false,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  typescript: {
    ignoreBuildErrors: true,
  },
  transformManifest: (manifest) => ["/"].concat(manifest),
  generateInDevMode: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/matrix",
        destination: "https://matrix.to/#/#tricked-hangout:matrix.org",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/mY8zTARu4g",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/Tricked-dev/Tricked-dev.github.io",
        permanent: true,
      },
      {
        source: "/aethor/invite",
        destination: "https://discord.com/oauth2/authorize?client_id=870383692403593226&permissions=117824&scope=bot%20applications.commands",
        permanent: true,
      },
      {
        source: "/aethor/support",
        destination: "https://discord.gg/zwUQGAG4cP",
        permanent: true,
      },
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js",
        permanent: true,
      },
    ];
  },
};
module.exports = withPWA(withMDX(config));
