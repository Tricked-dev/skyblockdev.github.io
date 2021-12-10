import { VitePWA } from "vite-plugin-pwa";

// import remarkHtml from "remark-html";
// import autolinkHeadings from "rehype-autolink-headings";
// import abbr from "remark-abbr";
// import remarkParse from "remark-parse";
// import remarkGfm from "remark-gfm";
// import rehypeStringify from "rehype-stringify";
// import rehypeSlug from "rehype-slug";
// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  buildOptions: {
    site: "http://tricked.pro/", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  renderers: ["@astrojs/renderer-react", "@astrojs/renderer-svelte"],
  vite: {
    plugins: [VitePWA()],
  },
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        remarkPlugins: [
          // [import("remark-autolink-headings"), { behavior: "prepend" }],
          // remarkParse,
          // remarkGfm,
          //@ts-ignore - stop bitching
          // abbr,
        ],
        rehypePlugins: [
          // rehypeStringify,
          // rehypeSlug,
          // [
          //   autolinkHeadings,
          //   {
          //     behavior: "wrap",
          //   },
          // ],
          // remarkHtml,
        ],
      },
    ],
  },
});
