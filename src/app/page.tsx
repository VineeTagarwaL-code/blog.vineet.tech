import { Blogs } from "@/components/blogs";
import { Introduction } from "@/components/introduction";
import { Navbar } from "@/components/navbar";
import { ScrollTop } from "@/components/scroll-top";
import { WidthWrapper } from "@/components/width-wrapper";
export const revalidate = 10;
export default function Home() {
  return (
    <WidthWrapper className="select-none">
      <Navbar />
      <Introduction
        welcomeText="Hi, there 👋"
        name="👨‍🎓 I’m Vineet Agarwal , a 19 year-old college student."
        profession="👨‍💻 I work at concertpal as software engineer."
        works="⚒️ I mainly work with typescript and nextjs."
        residence="🏡  I live in Durgapur, west bengal"
        additional="This blog will serve as a home for all my thoughts, notes and experiences, ranging from programming to math, machine learning, web development and more. Scroll down and check ‘em out!"
      />
      <Blogs />
    </WidthWrapper>
  );
}
