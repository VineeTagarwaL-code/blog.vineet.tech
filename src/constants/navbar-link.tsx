import { Github } from "lucide-react";

export const NavbarLinks: {
  name: string;
  url: string;
  icon?: JSX.Element;
}[] = [
  {
    name: "Blogs",
    url: "/blog",
  },
  {
    name: "Tags",
    url: "/tags",
  },
  {
    name: "Github",
    icon: <Github />,
    url: "https://github.com/VineeTagarwaL-code/blogs.vineet.tech",
  },
];
