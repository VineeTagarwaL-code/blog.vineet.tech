import React from "react";
import { BlurDiv } from "./ui/Blue-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { DATA } from "@/data/info";
import { DELAY } from "@/constants/misc";
type IntroductionProps = {
  name: string;
  desc: string;
};
export const Introduction = ({ name, desc }: IntroductionProps) => {
  return (
    <section>
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex flex-col flex-1 space-y-1.8">
            <BlurDiv delay={DELAY} isView>
              <p className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m {name}👋
              </p>
            </BlurDiv>
            <BlurDiv delay={DELAY * 1.2} isView>
              <span className=" md:text-xl font-semibold dark:text-gray-200">
                {desc}
              </span>
            </BlurDiv>
          </div>
          <BlurDiv delay={0.2} isView>
            <Avatar className="size-28 border">
              <AvatarImage src={DATA.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </BlurDiv>
        </div>
      </div>
    </section>
  );
};
