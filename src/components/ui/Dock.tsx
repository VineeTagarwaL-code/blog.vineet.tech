"use client";

import { VariantProps, cva } from "class-variance-authority";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
const dockVariants = cva(
  "mx-auto w-max h-full p-2 flex items-end rounded-full border"
);

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
}
const Dock = React.forwardRef<HTMLDivElement, DockProps>(({ className }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const handleMouseEnter = () => {
    setIsBlurred(true);
    setTimeout(() => {
      setIsBlurred(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ width: "500px" }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 10,
          duration: 0.3,
        }}
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseEnter}
        animate={{ scale: 1.1 }}
        className={cn(className, isBlurred && "blur-sm")}
      >
        🎒
      </motion.div>
      ;
    </AnimatePresence>
  );
});

const DockIcon = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className }) => {
    return <div></div>;
  }
);
export { Dock };
