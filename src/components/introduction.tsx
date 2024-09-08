import { Socials } from "./socials";
import { WidthWrapper } from "./width-wrapper";

type IntroductionProps = {
  welcomeText: string;
  name: string;
  profession: string;
  works: string;
  residence: string;
  additional: string;
};
export const Introduction = ({
  welcomeText,
  name,
  profession,
  works,
  residence,
  additional,
}: IntroductionProps) => {
  return (
    <WidthWrapper className=" max-w-full md:max-w-[900px] mt-14">
      <section className="flex flex-col gap-4 text-muted-foreground">
        <p className="text-6xl font-semibold text-foreground">{welcomeText}</p>
        <p className="text-lg">{name}</p>
        <p className="text-lg ">{profession}</p>
        <p className="text-lg">{works}</p>
        <p className="text-lg">{residence}</p>
        <p className="text-lg mt-8">{additional}</p>
        <Socials />
      </section>
    </WidthWrapper>
  );
};
