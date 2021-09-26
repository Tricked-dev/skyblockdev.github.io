/* eslint-disable react-hooks/rules-of-hooks */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withPWA = require("next-pwa");

module.exports = withPWA(
  withMDX({
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
    images: {
      loader: "imgix",
      path: "",
    },
    target: "serverless",
  })
);
