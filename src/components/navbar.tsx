"use client";
import { useState, useCallback } from "react";
import { ModeToggle } from "./theme-toggle";
import { NavbarLinks } from "@/constants/navbar-link";
import { Input } from "./ui/input";
import Link from "next/link";
import debounce from "lodash.debounce";

export const Navbar = ({
  disableSearch,
  onSearch,
}: {
  disableSearch?: boolean;
  onSearch?: (searchValue: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");

  // Debounced search function to limit API calls while typing
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      if (onSearch) {
        onSearch(value);
      }
    }, 500),
    [] // debounce delay: 500ms
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value); // Call debounced search function
  };

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
            className="text-muted-foreground transition-all hover:text-black  dark:hover:text-white  text-lg font-[300]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
