"use client";
import { useState } from "react";
import { getBlogs } from "@/app/actions/blog.action";
import { useQuery } from "@tanstack/react-query";
import { Blog, BlogSkeleton } from "./cards/Blog-card";
import { NoPost } from "./cards/Blog-card";
import { Input } from "./ui/Input";
import { BlurDiv } from "./ui/Blur";
import { DELAY } from "@/constants/misc";

type blogProps = {
  showMore?: boolean;
};
export function Blogs({ showMore }: blogProps) {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getBlogs(),
  });

  const filteredBlogs = blogs
    ? blogs.additional.meta.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (isLoading)
    return (
      <BlurDiv delay={DELAY * 1.99}>
        <div className="mt-6">
          <BlogSkeleton count={2} className="mt-3" />
        </div>
      </BlurDiv>
    );
  if (error) return <p>Error: {error.message}</p>;
  return (
    <BlurDiv delay={DELAY * 1.99}>
      <section>
        <Input
          type="search"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e.target.value)}
          className="py-3 px-3 border rounded-2xl mb-8 w-full bg-gray-500/20"
        />

        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <Blog key={blog.id} {...blog} />)
        ) : (
          <NoPost />
        )}
        {showMore && <div>&qout;</div>}
      </section>
    </BlurDiv>
  );
}
