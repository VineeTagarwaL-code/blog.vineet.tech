import { Icons } from "./icons";

const socials = [
  {
    icon: <Icons.website />,
    url: "https://vineet.tech",
  },
  {
    icon: <Icons.github />,
    name: "github",
    url: "https://github.com/vineetagarwal-code",
  },
  {
    icon: <Icons.twitter />,
    name: "twitter",
    url: "https://twitter.com/vineetwts",
  },
  {
    icon: <Icons.linkedin />,
    name: "linkedin",
    url: "https://www.linkedin.com/in/vineetagarwal2004/",
  },
];
export const Socials = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          className="text-white/70 transition-all  dark:hover:text-white  text-xl font-[300]"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
