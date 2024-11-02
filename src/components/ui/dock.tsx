"use client";

import { VariantProps, cva } from "class-variance-authority";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { dataProps } from "@/data/info";
import Link from "next/link";

export interface DockProps {
  mobileClassName?: string;
  DesktopClassName?: string;
  navbar: dataProps;
}

const Dock: React.FC<DockProps> = ({
  DesktopClassName,
  navbar,
  mobileClassName,
}) => {
  return (
    <>
      <DockMobile navbar={navbar} mobileClassName={mobileClassName} />
      <DockDesktop navbar={navbar} DesktopClassName={DesktopClassName} />
    </>
  );
};

const DockMobile = React.forwardRef<HTMLDivElement, DockProps>(
  ({ mobileClassName, navbar }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex md:hidden pointer-events-none fixed  bottom-3 right-5 z-30 mx-auto  origin-bottom h-full max-h-14">
        <AnimatePresence>
          {open && (
            <motion.div className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2 items-center">
              {navbar.navbar.socials.map((social, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: idx * 0.06 },
                  }}
                  transition={{
                    delay: (navbar.navbar.socials.length - 1 - idx) * 0.05,
                  }}
                >
                  <DockIcon
                    key={idx}
                    {...social}
                    className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          onClick={() => setOpen(!open)}
          className={cn(
            "flex gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4",
            mobileClassName
          )}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={open ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            🎒
          </motion.span>
        </div>
      </div>
    );
  }
);

const DockDesktop = React.forwardRef<HTMLDivElement, DockProps>(
  ({ DesktopClassName, navbar }) => {
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
      <div className="pointer-events-auto` fixed inset-x-0 top-5 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
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
              "flex gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4",
              isBlurred && "blur-sm",
              DesktopClassName
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
        </AnimatePresence>
      </div>
    );
  }
);

type DockIconProps = {
  name: string;
  link: string;
  icon: React.ReactNode;
  className?: string;
};
const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  ({ link, icon, className }) => {
    return (
      <div className={cn(className)}>
        <Link href={link}>{icon}</Link>
      </div>
    );
  }
);

DockIcon.displayName = "DockIcon";
Dock.displayName = "Dock";

export { Dock };
