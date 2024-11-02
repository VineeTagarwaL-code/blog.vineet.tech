"use client";
import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShareOnTwitter({
  twitter_username,
}: {
  twitter_username: string;
}) {
  const shareOnTwitter = (twitter_username: string) => {
    const twitterUrl = `https://x.com/intent/follow?screen_name=${twitter_username}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="border-t-2 border-solid border-gray-400 text-white min-h-[300px] flex flex-col items-center justify-center px-4 py-16 text-center  ">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Liked the blog?
      </h2>
      <p className="max-w-2xl  text-lg mb-8 text-foreground">
        If you enjoyed reading this post, why not share it with your friends on
        Twitter?
      </p>
      <Button
        onClick={() => shareOnTwitter(twitter_username)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
      >
        <Twitter className="mr-2 h-5 w-5" />
        Follow on Twitter
      </Button>
    </div>
  );
}
