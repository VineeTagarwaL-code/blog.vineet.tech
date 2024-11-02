"use client";

import { VariantProps, cva } from "class-variance-authority";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { dataProps } from "@/data/info";
import Link from "next/link";
const dockVariants = cva(
  "mx-auto w-max h-full p-2 flex items-end rounded-full border"
);

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  navbar: dataProps;
}
const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, navbar }) => {
    const [isBlurred, setIsBlurred] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const iconWidth = 40;
    const totalIcons = navbar.navbar.socials.length * iconWidth + 35;
    const handleMouseEnter = () => {
      setIsBlurred(true);
      setIsHovered(true);
      setTimeout(() => {
        setIsBlurred(false);
      }, 300);
    };
    const handleMouseLeave = () => {
      setIsBlurred(true);
      setIsHovered(false);
      setTimeout(() => {
        setIsBlurred(false);
      }, 100);
    };
    return (
      <AnimatePresence>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ width: `${totalIcons}px` }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 10,
          }}
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
          animate={{ scale: 1.1 }}
          className={cn(
            "mx-auto hidden md:flex gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 ",
            className,
            isBlurred && "blur-sm"
          )}
        >
          <span className={cn(!isHovered ? "visible" : "hidden")}>🎒</span>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 10,
                delay: 0.2,
              }}
              className="flex gap-5 justify-center items-center"
            >
              {navbar.navbar.socials.map((social, idx) => (
                <DockIcon key={idx} {...social} />
              ))}
            </motion.div>
          )}
        </motion.div>
        ;
      </AnimatePresence>
    );
  }
);

type DockIconProps = {
  name: string;
  link: string;
  icon: React.ReactNode;
};
const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  ({ link, icon }) => {
    return (
      <div>
        <Link href={link}>{icon}</Link>
      </div>
    );
  }
);

DockIcon.displayName = "DockIcon";
Dock.displayName = "Dock";

export { Dock };
