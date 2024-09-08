import { ModeToggle } from "./theme-toggle";
import { NavbarLinks } from "@/constants/navbar-link";
import { Input } from "./ui/input";
export const Navbar = () => {
  return (
    <nav className="px-1 py-2 md:px-4 md:py-4 flex justify-start items-start gap-4 flex-col md:flex-row  md:justify-between">
      <div className="flex justify-start items-center gap-4">
        <p className="font-semibold text-2xl">vineet.tech</p>
        <ModeToggle />
      </div>
      <div className="flex justify-start items-center gap-8">
        <div>
          <Input
            type="search"
            placeholder="Search"
            className="rounded-3xl outline-none border-black/20  dark:border-stone-500/20 dark:focus-visible:border-white/20 dark:hover:border-white/20 transition-all duration-200 ease-in-out"
          />
        </div>
        {NavbarLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="text-white/70 transition-all  dark:hover:text-white  text-lg font-[300]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
