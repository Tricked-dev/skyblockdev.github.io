import { VitePWA } from "vite-plugin-pwa";
import { minifyHtml } from "vite-plugin-html";

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
    plugins: [VitePWA(), minifyHtml()],
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
