"use client";
import Link from "next/link";
import getFormattedDate from "@/utils/formatdate";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export const LinkBlogs = (post: Meta) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link href={`/blog/${post.id}`}>
      <div className="hover:scale-[1.04] transition-all rounded-xl bg-white/40 dark:bg-stone-900/60 px-6 py-7 mb-6 relative z-40">
        <h2
          className="font-semibold text-2xl md:text-3xl relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!isHovering && (
            <motion.div
              className="rounded-2xl overflow-hidden hidden md:block z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                top: 38,
                right: 60,
                pointerEvents: "none",
                zIndex: 50,
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={300}
                objectFit="cover"
                className="rounded-2xl z-50 "
              />
            </motion.div>
          )}
          {post.title}
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
    </Link>
  );
};
