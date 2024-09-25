"use client";
import Link from "next/link";
import getFormattedDate from "@/utils/formatdate";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export const LinkBlogs = (post: Meta) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: any) => {
    // Get window dimensions to keep the image inside the viewport
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // Calculate the hover position, adjusting so the image stays in view
    const imageOffsetX = 200; // 200px for the image width + some buffer
    const imageOffsetY = 200; // 200px for the image height + some buffer
    let posX = e.clientX;
    let posY = e.clientY;

    // Ensure the image stays within the right side of the screen
    if (posX + imageOffsetX > windowWidth) {
      posX = windowWidth - imageOffsetX;
    }
    // Ensure the image stays within the bottom side of the screen
    if (posY + imageOffsetY > windowHeight) {
      posY = windowHeight - imageOffsetY;
    }

    setHoverPosition({
      x: posX,
      y: posY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link href={`/blog/${post.id}`}>
      <div className="hover:scale-[1.04] transition-all rounded-xl bg-white/40 dark:bg-stone-900/60 px-6 py-7 mb-6 relative">
        <h2
          className="font-semibold text-2xl md:text-3xl relative group"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovering && (
            <motion.div
              className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                top: 50,
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
                className="rounded-2xl "
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
