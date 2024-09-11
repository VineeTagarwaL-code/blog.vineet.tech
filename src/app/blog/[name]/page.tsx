import { WidthWrapper } from "@/components/width-wrapper";
import getFormattedDate from "@/lib/formatdate";
import { getPostByName } from "@/lib/posts";
import Link from "next/link";
import { fetchViewCount, incrementViewCount } from "@/lib/viewcount";
import { Eye } from "lucide-react";
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
  const post = await getPostByName(`${params.name}.mdx`);

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

  // Increment the view count when the page is visited
  await incrementViewCount(params.name);

  // Fetch the current view count
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
            href="/blogs"
            className="hover:text-white font-semibold transition-all scale-[1.03]"
          >
            Blogs
          </Link>
        </p>
        <div className="mt-3">
          <div className="text-4xl text-foreground font-semibold w-full flex justify-between items-center">
            <p>{post.meta.title} </p>
            <p className="text-muted-foreground text-base flex justify-center items-center rounded-xl px-3 py-2  gap-3">
              <Eye /> {viewCount} {/* Display view count */}
            </p>
          </div>
          <p className="text-muted-foreground mt-3 mb-12 ">
            {getFormattedDate(post.meta.date)} · Vineet Agarwal
          </p>
          <article className="prose-lg prose-li:list-disc prose-pre:px-0 mb-8">
            {post.content}
          </article>
        </div>
      </div>
    </WidthWrapper>
  );
}
