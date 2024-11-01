import { WidthWrapper } from "@/components/width-wrapper";
import {
  fetchViewCount,
  incrementViewCount,
} from "@/app/actions/viewcount.actions";
import { Eye } from "lucide-react";
import getFormattedDate from "@/utils/formatdate";
import Link from "next/link";
import Image from "next/image";
import { getBlogByName } from "@/app/actions/blog.action";
import ShareOnTwitter from "@/components/Share-twitter";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  return {
    title: `${params.name}`,
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  const post = await getBlogByName(`${params.name}.mdx`);
  if (!post)
    return (
      <WidthWrapper className=" max-w-full md:max-w-[900px] mt-14">
        <div>
          <p className="text-lg text-muted-foreground">
            <Link href="/">Home</Link> » <Link href="/blogs">Blogs</Link>
          </p>
          <p className="mt-16 text-3xl">Post not found!</p>
        </div>
      </WidthWrapper>
    );

  await incrementViewCount(params.name);

  const viewCount = await fetchViewCount(params.name);

  return (
    <WidthWrapper className=" max-w-full md:max-w-[900px] mt-14">
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
            <p className="text-muted-foreground text-base flex justify-center items-center rounded-xl px-3 py-2  gap-3">
              <Eye /> {viewCount} {/* Display view count */}
            </p>
          </div>
          <p className="text-muted-foreground mt-3 mb-12 ">
            {getFormattedDate(post.additional.blogPost.meta.date)} · Vineet
            Agarwal
          </p>
          <article className="prose-base md:prose-lg prose-li:list-disc  mb-8  prose-pre:bg-gray-400 dark:prose-pre:bg-gray-800 prose-pre:px-3 prose-pre:text-gray-900 dark:prose-pre:text-white dark:prose-p:text-gray-400  prose-h1:decoratin-slate-600 ">
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
        <ShareOnTwitter twitter_username="vineetwts" />
      </div>
    </WidthWrapper>
  );
}
