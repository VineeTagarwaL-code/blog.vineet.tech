import { Navbar } from "@/components/navbar";
import { ScrollTop } from "@/components/scroll-top";
import { WidthWrapper } from "@/components/width-wrapper";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <WidthWrapper className="max-w-[1100px]">
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          <ScrollTop />
        </main>
      </WidthWrapper>
    </div>
  );
}
