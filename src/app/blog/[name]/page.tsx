// import {
//   fetchViewCount,
//   incrementViewCount,
// } from "@/app/actions/viewcount.actions";
// import { Eye } from "lucide-react";
import getFormattedDate from "@/lib/formatdate";
import Link from "next/link";
import Image from "next/image";
import { getBlogByName } from "@/app/actions/blog.action";
import BlogFooter from "@/components/Blog-footer";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const post = await getBlogByName(`${params.name}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: post.additional.blogPost.meta.title,
    description: post.additional.blogPost.meta.description,
    openGraph: {
      title: post.additional.blogPost.meta.title,
      description: post.additional.blogPost.meta.description,
      url: `https://blog.vineet.tech/blog/${params.name}`,
      images: [
        {
          url: post.additional.blogPost.meta.image,
          width: 1200,
          height: 630,
          alt: post.additional.blogPost.meta.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  const post = await getBlogByName(`${params.name}.mdx`);
  if (!post)
    return (
      <div>
        <p className="text-lg text-muted-foreground">
          <Link href="/">Home</Link> » <Link href="/blogs">Blogs</Link>
        </p>
        <p className="mt-16 text-3xl">Post not found!</p>
      </div>
    );

  // await incrementViewCount(params.name);

  // const viewCount = await fetchViewCount(params.name);

  return (
    <div>
      <p className="text-lg text-muted-foreground">
        <Link
          href="/"
          className="hover:text-white font-semibold transition-all scale-[1.03]"
        >
          Home
        </Link>{" "}
        »{" "}
        <Link
          href="/blog"
          className="hover:text-white font-semibold transition-all scale-[1.03]"
        >
          Blogs
        </Link>
      </p>
      <div className="mt-3 ">
        <div className="text-4xl text-foreground font-semibold w-full flex justify-between items-center">
          <p>{post.additional.blogPost.meta.title} </p>
        </div>
        <p className="text-muted-foreground mt-3 mb-12 ">
          {getFormattedDate(post.additional.blogPost.meta.date)} · Vineet
          Agarwal
        </p>
        <article className="prose-base md:prose-lg prose-li:list-disc  mb-8  prose-pre:bg-gray-400 dark:prose-pre:bg-gray-800 prose-pre:px-3 prose-pre:text-gray-900 dark:prose-pre:text-white dark:prose-p:text-white  prose-h1:decoratin-slate-600 ">
          <Image
            src={post.additional.blogPost.meta.image}
            alt={post.additional.blogPost.meta.title}
            width={800}
            height={400}
            objectFit="contain"
            className="rounded-xl w-full"
          />
          {post.additional.blogPost.content}
        </article>
      </div>
      <BlogFooter />
    </div>
  );
}
