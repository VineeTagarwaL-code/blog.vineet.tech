import { BlurDiv } from "./ui/Blur";
import { DELAY } from "@/lib/constants";
import Markdown from "react-markdown";
import { DATA } from "@/data/info";
import { GithubGraph } from "./ui/github";
export const About = ({ about }: { about: string }) => {
  return (
    <section id="about" className="my-8">
      <BlurDiv delay={DELAY * 1.45}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurDiv>
      <BlurDiv delay={DELAY * 1.55}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {about}
        </Markdown>
      </BlurDiv>
      <BlurDiv delay={DELAY * 1.77}>
        <GithubGraph
          username={DATA.githubUsername}
          colorPallete={["#0D0D0D", "#1A1A1A", "#262626", "#454545", "#5C5C5C"]}
        />
      </BlurDiv>
    </section>
  );
};
