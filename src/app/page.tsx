import { Blogs } from "@/components/blogs";
import { Introduction } from "@/components/introduction";
import { Navbar } from "@/components/navbar";
import { WidthWrapper } from "@/components/width-wrapper";
export const revalidate = 10;
export default function Home() {
  return (
    <WidthWrapper className="select-none">
      <Navbar />
      <Introduction
        welcomeText="Hi, there 👋"
        name="👨‍🎓 I’m Vineet Agarwal , a 20 year-old college student."
        profession="👨‍💻 I work at concertpal as a software engineer."
        works="⚒️ I mainly work with TS, React, Node, and Go."
        residence="🏡  I live in Durgapur, west bengal"
        additional="I love to learn & explore a lot, this place will be my dumping ground for all the random thoughts, things, projects that i learn or work on."
      />
      <Blogs />
    </WidthWrapper>
  );
}
