"use client";
import getFormattedDate from "@/utils/formatdate";
import { TitleHover } from "../title-hover";
import Link from "next/link";
import { cn } from "@/utils/utils";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Blog = (post: Meta) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="hover:scale-[1.04] transition-all rounded-xl cursor-pointer bg-white/40 dark:bg-stone-900/20 border-muted border-[1px] border-solid px-6 py-7 mb-6 relative z-40">
        <h2 className="font-semibold text-2xl md:text-3xl relative group">
          <TitleHover
            imageLink={post.image}
            width={200}
            height={200}
            url={`/blog/${post.id}`}
          >
            {post.title}
          </TitleHover>
        </h2>
        <p className="text-lg md:text-xl mt-3 text-muted-foreground">
          {post.description}
        </p>
        <p className="text-muted-foreground mt-4">
          {getFormattedDate(post.date)} · Vineet Agarwal
        </p>
        <div>
          {post.tags.map((tag: any) => (
            <span
              className="text-sm bg-gray-100 dark:bg-black border-solid border-[1px] border-muted dark:text-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mt-2 inline-block"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

/**
 * Skeleton for a blog card
 */
export const BlogSkeleton: React.FC<{ count: number; className?: string }> = ({
  count,
  className,
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index} // Make sure to include the `key` prop for each skeleton
          className="rounded-2xl bg-white/5 p-4 h-32 flex flex-col gap-3 overflow-hidden relative"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/10 to-transparent animate-[shimmer_4s_infinite] -translate-x-full" />

          {/* Skeleton content */}
          <div className="space-y-3">
            <div className="h-6 w-3/5 rounded-lg bg-gray-200/20" />
            <div className="flex flex-col justify-evenly gap-1">
              <div className="h-3 w-3/5 rounded-lg bg-gray-100/10 mt-1"></div>
              <div className="h-3 w-4/5 rounded-lg bg-gray-100/20 mt-2"></div>
              <div className="h-3 w-2/5 rounded-lg bg-gray-100/20 mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Card for no blog
 */

export const NoPost = () => {
  return (
    <Card className="w-full bg-stone-900/40 mx-auto border-dotted border-2 border-gray-700">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <FileText className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold text-center mb-2">
          No Blog Posts Yet
        </h2>
        <p className="text-muted-foreground text-center">
          It looks like there aren&apos;t any blog posts available at the
          moment.
        </p>
      </CardContent>
    </Card>
  );
};
