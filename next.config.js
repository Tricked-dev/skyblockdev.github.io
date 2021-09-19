module.exports = {
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
};
