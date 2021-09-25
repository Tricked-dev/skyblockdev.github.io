import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkHtml from "remark-html";
import remarkprism from "remark-prism";
function readdirRecursive(directory: string) {
  const result = [];

  (function read(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filepath = path.join(dir, file);

      if (fs.statSync(filepath).isDirectory()) {
        read(filepath);
      } else {
        result.push(filepath);
      }
    }
  })(directory);

  return result;
}
export async function getAllPosts() {
  const context = readdirRecursive(path.join(process.cwd(), "_posts"));
  const posts = [];
  for (const key of context) {
    const meta = matter(fs.readFileSync(key));
    posts.push({
      ...meta.data,
      slug: key.split("_posts/").slice(1).join("/").replace(".md", ""),
      title: meta.data.title || key.split("_posts").slice(1).join("/"),
    });
  }
  return posts;
}

export async function getPostBySlug(slug: any) {
  const fileContent = await fs.readFileSync(`${process.cwd()}/_posts/${slug}.md`, { encoding: "ascii" });
  const meta = matter(fileContent);
  const mdxSource = await serialize(meta.content, {
    mdxOptions: {
      remarkPlugins: [remarkprism, remarkHtml],
    },
  });
  return {
    ...meta.data,
    title: meta.data.title,
    content: mdxSource,
  };
}
