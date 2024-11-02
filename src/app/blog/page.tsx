import { Blogs } from "@/components/Blogs";
import { Heading } from "@/components/Heading";
import { BlurDiv } from "@/components/ui/Blur";
import { DELAY } from "@/constants/misc";

const BlogPage = () => {
  return (
    <>
      <BlurDiv delay={DELAY * 1.88}>
        <Heading classname="text-7xl my-8">BLOGS</Heading>
      </BlurDiv>
      <Blogs showMore={false} />
    </>
  );
};

export default BlogPage;
