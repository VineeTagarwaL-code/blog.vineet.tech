"use client";
import { WidthWrapper } from "@/components/width-wrapper";
import { useEffect, useState, useCallback } from "react";
import { Skeleton } from "@/components/skeleton";
import { Input } from "@/components/ui/input";
import debounce from "lodash/debounce";
import { LinkBlogs } from "@/components/Link-blogs";
import { getBlogs } from "../actions/blog.action";
import { NoPost } from "@/components/no-post";
export default function Page() {
  const [posts, setPosts] = useState<Meta[] | undefined>(undefined);
  const [allPosts, setAllPosts] = useState<Meta[] | undefined>(undefined);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getBlogs();
        setPosts(response.additional.meta);
        setAllPosts(response.additional.meta);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm === "") {
        setPosts(allPosts);
      } else {
        setPosts(
          allPosts?.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, 300),
    [allPosts]
  );

  useEffect(() => {
    debouncedSearch(search);
    return () => {
      debouncedSearch.cancel();
    };
  }, [search, debouncedSearch]);

  if (loading)
    return (
      <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
        <Skeleton className="w-full block mb-4 bg-white/40 transition-all dark:bg-stone-900/60 animate-pulse h-[150px] rounded-xl" />
        <Skeleton className="w-full block bg-white/40 dark:bg-stone-900/60 animate-pulse h-[150px] rounded-xl" />
      </WidthWrapper>
    );

  return (
    <>
      <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
        <Input
          type="text"
          placeholder="Search blogs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white dark:bg-stone-900/60 px-4 py-6 mb-16 w-full rounded-2xl"
        />
        <ul>
          {posts && !(posts.length == 0) ? (
            posts.map((post: Meta) => <LinkBlogs {...post} key={post.id} />)
          ) : (
            <NoPost />
          )}
        </ul>
      </WidthWrapper>
    </>
  );
}
