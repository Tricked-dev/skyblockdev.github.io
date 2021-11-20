import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkHtml from "remark-html";
import remark from "remark";
import html from "remark-html";

export async function markdownToHtml(markdown: string) {
  const mdxSource = await serialize(markdown, {
    mdxOptions: {
      //@ts-ignore -
      remarkPlugins: [remarkHtml],
    },
  });
  return mdxSource;
}

// import remarkprism from "remark-prism";
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
export async function getAllDocs() {
  const context = readdirRecursive(path.join(process.cwd(), "_diplo"));
  const docs = [];
  for (const key of context) {
    if (!key.endsWith("md") && !key.endsWith("mdx")) continue;
    const meta = matter(fs.readFileSync(key));
    docs.push({
      ...meta.data,
      slug: key.split("_diplo/").slice(1).join("/").replace(".md", ""),
      title: meta.data.title || key.split("_diplo").slice(1).join("/"),
    });
    docs.push({
      ...meta.data,
      slug: key.split("_diplo/").slice(1).join("/"),
      title: meta.data.title || key.split("_diplo").slice(1).join("/"),
    });
  }
  return docs;
}

export async function getDocBySlug(slug: any) {
  let fileContent: string;
  try {
    try {
      fileContent = fs.readFileSync(`${process.cwd()}/_diplo/${slug}.md`, { encoding: "ascii" });
    } catch (e) {}
    //@ts-ignore -
    if (!fileContent) fileContent = fs.readFileSync(`${process.cwd()}/_diplo/${slug}`, { encoding: "ascii" });
  } catch (e) {}

  const meta = matter(fileContent!);
  const mdxSource = await serialize(meta.content, {
    mdxOptions: {
      //@ts-ignore -
      remarkPlugins: [remarkHtml],
    },
  });
  return {
    ...meta.data,
    title: meta.data.title,
    content: mdxSource,
  };
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
export async function getAllProjects() {
  const context = readdirRecursive(path.join(process.cwd(), "_projects"));
  const posts = [];
  for (const key of context) {
    const meta = matter(fs.readFileSync(key));
    posts.push({
      ...meta.data,
      slug: key.split("_projects/").slice(1).join("/").replace(".md", ""),
      title: meta.data.title || key.split("_posts").slice(1).join("/"),
    });
  }
  return posts;
}
export async function getProjectBySlug(slug: any) {
  const fileContent = await fs.readFileSync(`${process.cwd()}/_projects/${slug}.md`, { encoding: "ascii" });
  const meta = matter(fileContent);
  const mdxSource = await serialize(meta.content, {
    mdxOptions: {
      //@ts-ignore -
      remarkPlugins: [remarkHtml],
    },
  });
  return {
    ...meta.data,
    title: meta.data.title,
    content: mdxSource,
  };
}

export async function getPostBySlug(slug: any) {
  const fileContent = await fs.readFileSync(`${process.cwd()}/_posts/${slug}.md`, { encoding: "ascii" });
  const meta = matter(fileContent);
  const mdxSource = await serialize(meta.content, {
    mdxOptions: {
      //@ts-ignore -
      remarkPlugins: [remarkHtml],
    },
  });
  return {
    ...meta.data,
    title: meta.data.title,
    content: mdxSource,
  };
}
