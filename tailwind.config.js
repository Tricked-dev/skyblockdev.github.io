const fs = require("fs");
fs.writeFileSync("./test.txt", "ssaaaa");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: true, // or 'media' or 'class'
  options: {
    safelist: [/data-theme$/],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: true,
    themes: [
      {
        darkforest: {
          primary: "#1eb854",
          "primary-focus": "#188c40",
          "primary-content": "#ffffff",
          secondary: "#20d55f",
          "secondary-focus": "#18aa4b",
          "secondary-content": "#ffffff",
          accent: "#d99330",
          "accent-focus": "#b57721",
          "accent-content": "#ffffff",
          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#3d4451",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ffffff",
          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",
        },
      },
    ],
  },
};
