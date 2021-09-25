const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withPWA = require("next-pwa");
const webpack = require("webpack");
module.exports = withPWA(
  withMDX({
    webpack5: true,
    pwa: {
      dest: "public",
    },
    // webpack: (config) => {
    //   config.plugins = [new webpack.IgnorePlugin(/canvas/, /jsdom$/)];
    //   return config;
    // },
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
