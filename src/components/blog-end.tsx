"use client";
import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogEnd() {
  const shareOnTwitter = () => {
    const tweetText = encodeURIComponent(
      "I just read an amazing blog post! Check it out:"
    );
    const tweetUrl = encodeURIComponent(window.location.href);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="pt-6 border-t-2 border-solid border-gray-200 dark:border-gray-800 my-8">
      <div className="flex  md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold">Vineet Agarwal</h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <p className="text-lg hidden md:block">Liked the blog?</p>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={shareOnTwitter}
          >
            Share on <Twitter size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
