/* eslint-disable react-hooks/rules-of-hooks */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withPWA = require("next-pwa");
const plugins = require("next-compose-plugins");

const config = {
  dest: "public",
  webpack5: true,
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  compress: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  typescript: {
    ignoreBuildErrors: true,
  },

  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: "/matrix",
        destination: "https://matrix.to/#/#tricked-hangout:matrix.org",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/hkS3YDh",
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
module.exports = process.env.NODE_ENV === "development" ? plugins([[withMDX]], config) : plugins([[withPWA], [withMDX]], config);
