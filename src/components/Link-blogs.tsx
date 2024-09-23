import Link from "next/link";
import getFormattedDate from "@/utils/formatdate";
export const LinkBlogs = (post: Meta) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="hover:scale-[1.04] transition-all rounded-xl bg-white/40 dark:bg-stone-900/60 px-6 py-7 mb-6">
        <h2 className="font-semibold text-3xl">{post.title}</h2>
        <p className="text-xl mt-3 text-muted-foreground">{post.description}</p>
        <p className="text-muted-foreground mt-4">
          {getFormattedDate(post.date)} · Vineet Agarwal
        </p>
        <div>
          {post.tags.map((tag) => (
            <span
              className="text-sm bg-gray-100 dark:bg-gray-800/80 dark:text-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mt-2 inline-block"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
