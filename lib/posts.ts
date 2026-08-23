import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export type Post = PostMeta & { content: string };

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    content,
  };
}
