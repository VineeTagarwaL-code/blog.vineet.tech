"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type TitleHoverProps = {
  children: React.ReactNode;
  width: number;
  height: number;
  imageLink: string;
  url: string;
};

export const TitleHover = ({
  children,
  imageLink,
  width,
  height,
  url,
}: TitleHoverProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    console.log(imageLink);
    setMounted(true);
  }, []);

  const sprinConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, sprinConfig);

  let mouseMoveHandler = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };
  return (
    <>
      {/* {isMounted ? (
        <Image
          src={image}
          alt="hidden image"
          width={width}
          height={height}
          layout="responsive"
          priority={true}
        />
      ) : null} */}

      <HoverCard.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCard.Trigger onMouseMove={mouseMoveHandler} href={url}>
          {children}
        </HoverCard.Trigger>
        <HoverCard.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <Image
                  src={imageLink}
                  width={width}
                  height={height}
                  priority={true}
                  className="rounded-lg"
                  alt="preview image"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCard.Content>
      </HoverCard.Root>
    </>
  );
};
