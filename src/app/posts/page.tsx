import { WidthWrapper } from "@/components/width-wrapper";
import { getPostMeta } from "@/lib/posts";
import { LinkBlogs } from "@/components/blogs";
import { Input } from "@/components/ui/input";
export default async function Page() {
  const posts = await getPostMeta();

  if (!posts) return null;
  return (
    <WidthWrapper className=" max-w-full md:max-w-[900px] mt-14">
      <div>
        <Input
          type="search"
          placeholder="Search posts"
          className="w-full mb-10 px-3 py-2 rounded-2xl border hover:border-gray-400 transition-all"
        />
      </div>
      {posts.map((post) => (
        <LinkBlogs {...post} key={post.id} />
      ))}
    </WidthWrapper>
  );
}
