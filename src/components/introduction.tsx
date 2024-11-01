import { GithubGraph } from "./ui/github";
import React from "react";
import Image from "next/image";
import { About } from "./About";

type IntroductionProps = {
  name: string;
  desc: string;
  about: React.ReactNode;
  githubUsername: string;
};
export const Introduction = ({
  name,
  desc,
  about,
  githubUsername,
}: IntroductionProps) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-3xl  md:text-7xl">
            Hi, I&apos;m {name}👋
          </p>
          <span className="text-xl md:text-xl font-semibold text-gray-200">
            {desc}
          </span>
        </div>
        <Image
          src={"/user_image.webp"}
          alt=""
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <About className="mb-8">{about}</About>
      <GithubGraph
        username={githubUsername}
        colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
      />
    </div>
  );
};
