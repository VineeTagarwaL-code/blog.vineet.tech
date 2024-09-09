"use client";
import { ModeToggle } from "./theme-toggle";
import { NavbarLinks } from "@/constants/navbar-link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-1 py-2 md:px-4 md:py-4 flex justify-start items-start gap-4 flex-col md:flex-row  md:justify-between">
      <div className="flex justify-start items-center gap-4">
        <p className="font-semibold text-2xl">
          <Link href="/">vineet.tech</Link>
        </p>
        <ModeToggle />
      </div>
      <div className="flex justify-start items-center gap-8">
        {NavbarLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className={cn(
              "text-muted-foreground transition-all hover:text-black  dark:hover:text-white  text-lg font-[300]",
              pathname === link.url
                ? "text-black dark:text-white font-semibold"
                : "text-muted-foreground"
            )}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
