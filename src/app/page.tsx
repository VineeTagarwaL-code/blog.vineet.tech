import { Blogs } from "@/components/blogs";
import { Introduction } from "@/components/introduction";
import { getBlogs } from "./actions/blog.action";

export const revalidate = 10;
export default async function Home() {
  let blogsMeta: Meta[] | undefined;
  try {
    const response = await getBlogs();
    blogsMeta = response.additional.meta;
  } catch (err) {
    console.log("Error fetching blogs", err);
  }
  return (
    <>
      <Introduction
        welcomeText="Hi, there guys 👋"
        name="👨‍🎓 I’m Vineet Agarwal , a 20 year-old college student."
        profession="👨‍💻 I work at concertpal as a software engineer."
        works="⚒️ I mainly work with TS, React, Node, and Go."
        residence="🏡  I live in Durgapur, west bengal"
        additional="I love to learn & explore a lot, this place will be my dumping ground for all the random thoughts, things, projects that i learn or work on."
      />
      <Blogs blogsMeta={blogsMeta} />
    </>
  );
}
