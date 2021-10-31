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
    // images: {
    //   loader: "imgix",
    //   path: "public/",
    // },
    // target: "serverless",
  })
);
