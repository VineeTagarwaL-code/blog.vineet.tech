import { ModeToggle } from "@/components/theme-toggle";
import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import React from "react";

export type dataProps = {
  name: string;
  image: string;
  shortDescription: string;
  githubUsername: string;
  about: string;
  navbar: {
    socials: {
      name: string;
      link: string;
      icon: React.ReactNode;
    }[];
  };
};
export const DATA: dataProps = {
  name: "vineet",
  image:
    "https://www.vineet.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.a96af8f3.jpg&w=640&q=75",
  shortDescription:
    "Student Turned Software Engineer. I have a love for designs and building products. I like to code in 0's & 1's",
  githubUsername: "vineetagarwal-code",
  about:
    "At the end of 2023, I tried to change my life by learning to ACTUALLY code and I have been coding ever since, I have a nick for building cool looking designs and core backend systems. You can find me on twitter [@vineetwts](https://twitter.com/vineetwts) and on github [@vineetagarwal-code](https://github.com/vineetagarwal-code). I also happen to write and share sometimes and below are some of my blogs.",
  navbar: {
    socials: [
      {
        name: "Home",
        link: "https://blog.vineet.tech",
        icon: <IconHome className="text-neutral-500 dark:text-neutral-300" />,
      },
      {
        name: "Twitter",
        link: "https://twitter.com/vineetwts",
        icon: <IconBrandX className="text-neutral-500 dark:text-neutral-300" />,
      },
      {
        name: "GitHub",
        link: "https://github.com/vineetagarwal-code",
        icon: (
          <IconBrandGithub className="text-neutral-500 dark:text-neutral-300" />
        ),
      },
      {
        name: "toggle",
        link: "#",
        icon: <ModeToggle />,
      },
    ],
  },
};
