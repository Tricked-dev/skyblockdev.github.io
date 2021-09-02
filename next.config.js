//@ts-ignore -
module.exports = {
  reactStrictMode: true,
  compress: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: "imgix",
    path: "",
  },
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    // config.node = {
    //   fs: "empty", // This is required
    // };
    return config;
  },
};