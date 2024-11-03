"use client";
import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/info";

export default function BlogFooter() {
  return (
    <div className="border-t-2 border-solid border-gray-400 text-white min-h-[300px] flex flex-col items-center justify-center px-4 py-16 text-center  ">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Liked the blog?
      </h2>
      <p className="max-w-2xl  text-lg mb-8 text-foreground">
        If you enjoyed reading this post, why not follow me on Twitter?
      </p>
      <Button
        onClick={() => window.open(DATA.twitterLink, "_blank")}
        className=" text-white  bg-blue-800 font-bold py-2 px-4 rounded-full flex items-center"
      >
        <Twitter className="mr-2 h-5 w-5" />
        Follow on twitter
      </Button>
    </div>
  );
}
