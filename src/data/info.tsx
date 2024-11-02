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
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  githubUsername: "vineetagarwal-code",
  about:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
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
