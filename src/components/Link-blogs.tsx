"use client";
import getFormattedDate from "@/utils/formatdate";
import { useState } from "react";
import { TitleHover } from "./title-hover";
export const LinkBlogs = (post: Meta) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="hover:scale-[1.04] transition-all rounded-xl bg-white/40 dark:bg-stone-900/60 px-6 py-7 mb-6 relative z-40">
      <h2
        className="font-semibold text-2xl md:text-3xl relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
            className="text-sm bg-gray-100 dark:bg-gray-800/80 dark:text-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mt-2 inline-block"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
