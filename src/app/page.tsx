"use client";
import { Introduction } from "@/components/introduction";
import { WidthWrapper } from "@/components/width-wrapper";
import { ABOUT } from "@/constants/misc";
import { Heading } from "@/components/Heading";
import { AnimatePresence, motion } from "framer-motion";
import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          filter: "blur(5px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <WidthWrapper className=" max-w-full md:max-w-[810px] mt-14 px-2">
          <Introduction
            name="Vineet"
            desc="I love decoding 0's & 1's"
            about={ABOUT}
            githubUsername="vineetagarwal-code"
          />
          <Heading classname="text-7xl mt-12">
            <span>BLOGS</span>
          </Heading>
          <Blogs />
          <Footer />
        </WidthWrapper>
      </motion.div>
    </AnimatePresence>
  );
}
