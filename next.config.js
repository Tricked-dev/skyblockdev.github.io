/* eslint-disable react-hooks/rules-of-hooks */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withPWA = require("next-pwa");

module.exports = withPWA(
  withMDX({
    dest: "public",
    webpack5: true,
    pwa: {
      dest: "public",
    },
    // webpack(config, { dev }) {
    //   if (dev) {
    //     config.devtool = "cheap-module-source-map";
    //   }

    //   const externals = {
    //     ...config.externals,
    //     bcrypt: "bcrypt",
    //     jimp: "jimp",
    //     "probe-image-size": "probe-image-size",
    //   };
    //   return {
    //     ...config,
    //     module: {
    //       ...config.module,
    //       rules: [...config.module.rules],
    //     },
    //     externals,
    //   };
    // },
    // webpack(config, options) {
    //   const externals = {
    //     ...config.externals,
    //     bcrypt: "bcrypt",
    //     jimp: "jimp",
    //     "probe-image-size": "probe-image-size",
    //   };
    //   return {
    //     ...config,
    //     module: {
    //       ...config.module,
    //       rules: [...config.module.rules],
    //     },
    //     externals,
    //   };
    // },
    reactStrictMode: true,
    compress: false,
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    typescript: {
      ignoreBuildErrors: true,
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
      ];
    },
    // images: {
    //   loader: "imgix",
    //   path: "public/",
    // },
    // target: "serverless",
  })
);
