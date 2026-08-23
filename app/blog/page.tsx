import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Blog</h1>
      <p className="mt-3 text-zinc-400">
        Notes, guides, and things I&apos;m building.
      </p>

      <ul className="mt-12 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-zinc-900 bg-surface p-6 transition-colors hover:border-cyan-400"
            >
              <time dateTime={post.date} className="text-sm text-zinc-400">
                {post.date}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-2 text-zinc-400">{post.excerpt}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
