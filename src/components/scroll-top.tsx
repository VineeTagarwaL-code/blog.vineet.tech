"use client";
import { useState, useEffect } from "react";
import { Icons } from "./icons";
export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={scrollToTop}
    >
      <Icons.arrowUp className="w-6 h-6" />
    </div>
  );
};
