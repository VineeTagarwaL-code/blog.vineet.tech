"use client";
import { WidthWrapper } from "./width-wrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";
import { LinkBlogs } from "./Link-blogs";
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
