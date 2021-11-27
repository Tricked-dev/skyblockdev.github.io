import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkHtml from "remark-html";
import autolinkHeadings from "rehype-autolink-headings";
import abbr from "remark-abbr";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";

export async function getAllDocs() {
  return [...(await getAll("_diplo")), ...(await getAll("_diplo", false))];
}
export async function getDocBySlug(slug: any) {
  return getSlug("_diplo", slug.replace(".md", ""));
}
export async function getAllPosts() {
  return await getAll("_posts");
}
export async function getAllProjects() {
  return await getAll("_projects");
}
export async function getProjectBySlug(slug: any) {
  return await getSlug("_projects", slug);
}

export async function getPostBySlug(slug: any) {
  return await getSlug("_posts", slug);
}

export async function getAll(dir: string, removeExt: boolean = true) {
  const context = readdirRecursive(path.join(process.cwd(), dir));
  const data = [];
  for (const key of context) {
    const meta = matter(fs.readFileSync(key));
    data.push({
      ...meta.data,
      slug: key
        .split(`${dir}/`)
        .slice(1)
        .join("/")
        .replace(removeExt ? ".md" : "", ""),
      title: meta.data.title || key.split(dir).slice(1).join("/"),
    });
  }
  return data;
}

export async function getSlug(dir: string, slug: any, ext: boolean = true) {
  const fileContent = await fs.readFileSync(`${process.cwd()}/${dir}/${slug}${ext ? ".md" : ""}`, { encoding: "ascii" });
  const meta = matter(fileContent);
  const mdxSource = await serialize(meta.content, {
    mdxOptions: {
      remarkPlugins: [
        remarkParse,
        remarkGfm,
        //@ts-ignore - stop bitching
        abbr,
      ],
      rehypePlugins: [
        //@ts-ignore - stop bitching
        rehypeStringify,
        rehypeSlug,

        //@ts-ignore - stop bitching
        [
          autolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
        remarkHtml,
      ],
    },
  });
  return {
    ...meta.data,
    content: mdxSource,
  };
}

function readdirRecursive(directory: string) {
  const result = [];

  (function read(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filepath = path.join(dir, file);

      if (fs.statSync(filepath).isDirectory()) {
        read(filepath);
      } else if (filepath.endsWith(".md")) {
        result.push(filepath);
      }
    }
  })(directory);

  return result;
}
