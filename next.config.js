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
    webpack(config, { dev }) {
      if (dev) {
        config.devtool = "cheap-module-source-map";
      }
      return config;
    },

    reactStrictMode: true,
    compress: false,
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      loader: "imgix",
      path: "",
    },
    target: "serverless",
  })
);
