import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-cyan-400 transition-colors hover:text-cyan-300"
      >
        &larr; Back to Blog
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100">
        {post.title}
      </h1>
      <time dateTime={post.date} className="mt-2 block text-sm text-zinc-400">
        {post.date}
      </time>
      <article className="prose prose-invert mt-10 max-w-none prose-zinc">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
