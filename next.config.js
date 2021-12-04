/* eslint-disable react-hooks/rules-of-hooks */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withPWA = require("next-pwa");
const withOffline = require("next-offline");
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
  productionBrowserSourceMaps: true,
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ["en", "nl"],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: "en",
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/matrix",
  //       destination: "https://matrix.to/#/#tricked-hangout:matrix.org",
  //       permanent: true,
  //     },
  //     {
  //       source: "/discord",
  //       destination: "https://discord.gg/mY8zTARu4g",
  //       permanent: true,
  //     },
  //     {
  //       source: "/github",
  //       destination: "https://github.com/Tricked-dev/Tricked-dev.github.io",
  //       permanent: true,
  //     },
  //     {
  //       source: "/aethor/invite",
  //       destination: "https://discord.com/oauth2/authorize?client_id=870383692403593226&permissions=117824&scope=bot%20applications.commands",
  //       permanent: true,
  //     },
  //     {
  //       source: "/aethor/support",
  //       destination: "https://discord.gg/zwUQGAG4cP",
  //       permanent: true,
  //     },
  //     {
  //       source: "/service-worker.js",
  //       destination: "/_next/static/service-worker.js",
  //       permanent: true,
  //     },
  //   ];
  // },
};
module.exports = plugins(
  [
    [withPWA],
    [
      withOffline,
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT ? "service-worker.js" : "static/service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
      },
    ],
    [withMDX],
  ],
  config
);
