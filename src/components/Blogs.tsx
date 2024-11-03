"use client";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { getBlogs } from "@/app/actions/blog.action";
import { useQuery } from "@tanstack/react-query";
import { BlogSkeleton } from "./cards/Blog-card";
import { NoPost } from "./cards/Blog-card";
import { Input } from "./ui/Input";
import { BlurDiv } from "./ui/Blur";
import { DELAY } from "@/lib/constants";
import { Button } from "./ui/button";

const Blog = lazy(() => import("./cards/Blog-card"));
type blogProps = {
  showMore?: boolean;
};
export function Blogs({ showMore }: blogProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debuncedSearchQuery, setDebouncedSearchQuery] = useState<string>("");
  const [slicedLimit, setSlicedLimit] = useState<number>(2);
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getBlogs(),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const filteredBlogs = useMemo(() => {
    if (!blogs) return [];
    return blogs.additional.meta.filter((blog) =>
      blog.title.toLowerCase().includes(debuncedSearchQuery.toLowerCase())
    );
  }, [blogs, debuncedSearchQuery]);

  if (isLoading)
    return (
      <BlurDiv delay={DELAY * 1.99}>
        <div className="mt-6">
          <BlogSkeleton count={2} className="mt-3" />
        </div>
      </BlurDiv>
    );
  if (error) return <p>Error: {error.message}</p>;

  const handleShowMore = () => {
    const lengthOfblogs = filteredBlogs.length;
    if (slicedLimit === lengthOfblogs) return;
    setSlicedLimit((prev) => prev + 2);
  };
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
        <Suspense fallback={<BlogSkeleton count={2} className="mt-3" />}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs
              .slice(0, showMore ? slicedLimit : filteredBlogs.length)
              .map((blog) => <Blog key={blog.id} {...blog} />)
          ) : (
            <NoPost />
          )}
        </Suspense>
        <div className="flex justify-end mt-4">
          {filteredBlogs.length > 2 && showMore && (
            <Button
              className="hover:scale-105 transition-all dark:hover:bg-white "
              onClick={() => {
                handleShowMore();
              }}
            >
              Show more
            </Button>
          )}
        </div>
      </section>
    </BlurDiv>
  );
}
