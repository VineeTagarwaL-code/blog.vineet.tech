"use client";
import { WidthWrapper } from "./width-wrapper";
import Link from "next/link";
import getFormattedDate from "@/lib/formatdate";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";
export const Blogs = () => {
  const [posts, setPosts] = useState<Meta[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/blogs");
        setPosts(response.data.blogs);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  if (loading)
    return (
      <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
        <Skeleton className="w-full block mb-4  bg-white/40 transition-all  dark:bg-stone-900/60 animate-pulse h-[150px] rounded-xl" />
        <Skeleton className="w-full block  bg-white/40 dark:bg-stone-900/60 animate-pulse h-[150px] rounded-xl" />
      </WidthWrapper>
    );
  if (!posts)
    return (
      <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
        <div className="flex justify-center items-center text-white">
          No post...
        </div>
      </WidthWrapper>
    );

  return (
    <>
      <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
        <ul>
          {posts.map((post: Meta) => (
            <LinkBlogs {...post} key={post.id} />
          ))}
        </ul>
      </WidthWrapper>
    </>
  );
};

export const LinkBlogs = (post: Meta) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="hover:scale-[1.04] transition-all rounded-xl bg-white/40 dark:bg-stone-900/60 px-6 py-7 mb-6">
        <h2 className="font-semibold text-3xl">{post.title}</h2>
        <p className="text-xl mt-3 text-muted-foreground">{post.description}</p>
        <p className="text-muted-foreground mt-4">
          {getFormattedDate(post.date)} · Vineet Agarwal
        </p>
        <div>
          {post.tags.map((tag) => (
            <span
              className="text-sm bg-gray-100 dark:bg-gray-800/80  dark:text-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mt-2 inline-block"
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
