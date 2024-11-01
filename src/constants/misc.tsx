import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconSearch,
  IconWorld,
} from "@tabler/icons-react";
const USER_IMAGE =
  "https://www.vineet.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.a96af8f3.jpg&w=640&q=75";
const links: any = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "website",
    icon: (
      <IconWorld className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.vineet.tech",
  },

  {
    title: "Search",
    icon: (
      <IconSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://twitter.com/vineetwts",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/vineetagarwal-code",
  },
];
const ABOUT =
  "I like to break down things and put them back together after i have understood everything that made that thing exist, I'm a person who loves to engineer stuff and solve problems that others fear to solve. I also happen to write cool blogs check them out below ! ";
export { USER_IMAGE, ABOUT, links };
