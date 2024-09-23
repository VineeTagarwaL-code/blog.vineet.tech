import { WidthWrapper } from "./width-wrapper";
import { LinkBlogs } from "./Link-blogs";
import { NoPost } from "./no-post";
export const Blogs = ({ blogsMeta }: { blogsMeta: Meta[] | undefined }) => {
  if (!blogsMeta || blogsMeta.length === 0)
    return (
      <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
        <NoPost />
      </WidthWrapper>
    );
  return (
    <>
      <WidthWrapper className="max-w-full md:max-w-[900px] mt-14">
        <ul>
          {blogsMeta.map((post: Meta) => (
            <LinkBlogs {...post} key={post.id} />
          ))}
        </ul>
      </WidthWrapper>
    </>
  );
};
