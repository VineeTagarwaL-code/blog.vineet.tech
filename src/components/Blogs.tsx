"use client";
import { useState } from "react";
import { getBlogs } from "@/app/actions/blog.action";
import { useQuery } from "@tanstack/react-query";
import { Blog, BlogSkeleton } from "./cards/Blog-card";
import { NoPost } from "./cards/Blog-card";
export function Blogs() {
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
      <div className="mt-6">
        <BlogSkeleton count={2} className="mt-3" />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-16 min-h-[50vh]">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded-2xl mb-8 w-full bg-gray-500/20"
      />

      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => <Blog key={blog.id} {...blog} />)
      ) : (
        <NoPost />
      )}
    </div>
  );
}
