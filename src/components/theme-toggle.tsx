"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="toggle"
      size="icon"
      onClick={toggleTheme}
      className="border-l-[1px] border-solid border-gray-500 rounded-none pl-2"
    >
      <Sun className=" rotate-0  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
