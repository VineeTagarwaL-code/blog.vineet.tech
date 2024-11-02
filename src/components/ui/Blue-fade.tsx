"use client";
import { useInView, motion } from "framer-motion";
import { MutableRefObject, useRef } from "react";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

type BlurProps = {
  children: React.ReactNode;
  className?: string;
  inMargin?: MarginType;
  isView?: boolean;
  delay?: number;
  duration?: number;
  offsetY?: number;
  blur?: string;
};
const BlurDiv = ({
  children,
  delay = 0,
  className,
  inMargin = "-50px",
  isView = false,
  duration = 0.4,
  offsetY = 6,
  blur = "6px",
}: BlurProps) => {
  const ref: MutableRefObject<null> = useRef(null);
  const isInViewNow: boolean = useInView(ref, {
    once: true,
    margin: inMargin ?? "-50px",
  });
  const isInView: boolean = isInViewNow || !isView;
  const defaultVariants = {
    hidden: {
      y: offsetY,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={defaultVariants}
      animate={isInView ? "visible" : "hidden"}
      transition={{
        delay: 0.5 + delay,
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export { BlurDiv };
