"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { WidthWrapper } from "@/components/width-wrapper";
import { LinkBlogs } from "@/components/Link-blogs";
import { Skeleton } from "@/components/skeleton";

interface Tag {
  tag: string;
  count: number;
}

const Page: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [blogs, setBlogs] = useState<Meta[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  // Fetch tags from the API
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get("/api/tags");
        setTags(res.data.tags);
        const res1 = await axios.get(`/api/blogs`);
        setBlogs(res1.data.blogs);
        setLoadingBlogs(false);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  // Handle clicking on a tag to fetch blogs with that tag
  const handleTagClick = async (tag: string) => {
    setLoadingBlogs(true);
    try {
      const res = await axios.get(`/api/blogs/${tag}`);
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error(`Error fetching blogs with tag ${tag}:`, error);
    } finally {
      setLoadingBlogs(false);
    }
  };

  return (
    <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
      <h1 className="text-2xl font-bold mb-4">Tags</h1>
      {tags.length === 0 ? (
        <div className="flex justify-start items-center gap-5">
          <Skeleton className=" block mb-4 bg-white/40 transition-all dark:bg-stone-900/60 animate-pulse h-[50px] w-[140px] rounded-xl" />
          <Skeleton className=" block mb-4 bg-white/40 transition-all dark:bg-stone-900/60 animate-pulse h-[50px] w-[140px] rounded-xl" />
          <Skeleton className=" block mb-4 bg-white/40 transition-all dark:bg-stone-900/60 animate-pulse h-[50px] w-[140px] rounded-xl" />
        </div>
      ) : (
        <ul className="flex justify-start gap-2 md:gap-8 items-center flex-wrap">
          {tags.map((tag) => (
            <li
              key={tag.tag}
              className="cursor-pointer bg-white dark:bg-stone-800/90 w-fit px-3 py-2 rounded-xl text-xl hover:scale-105 transition-transform"
              onClick={() => handleTagClick(tag.tag)}
            >
              {tag.tag} ({tag.count})
            </li>
          ))}
        </ul>
      )}

      {loadingBlogs ? (
        <Skeleton className="w-full block mb-4 mt-8 bg-white/40 transition-all dark:bg-stone-900/60 animate-pulse h-[150px] rounded-xl" />
      ) : (
        blogs.length > 0 && (
          <div className="mt-8">
            <ul className="space-y-4">
              {blogs.map((blog) => (
                <LinkBlogs {...blog} key={blog.id} />
              ))}
            </ul>
          </div>
        )
      )}

      {!loadingBlogs && blogs.length === 0 && (
        <p className="mt-8">No blogs found for the selected tag.</p>
      )}
    </WidthWrapper>
  );
};

export default Page;