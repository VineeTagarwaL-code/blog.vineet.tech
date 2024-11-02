import Link from "next/link";
import { Heading } from "./Heading";
export const Footer = () => {
  return (
    <div className=" text-white min-h-[300px] flex flex-col items-center justify-center px-4  text-center">
      <Link
        href="mailto:your-email@example.com"
        className="inline-block bg-gray-300 dark:bg-gray-700 text-foreground px-3 py-1 rounded-full text-sm font-medium mb-6 cursor-pointer"
      >
        <span className="text-foreground ">Contact</span>
      </Link>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Get in Touch
      </h2>
      <p className="max-w-2xl text-gray-400 text-lg">
        Want to chat? Just shoot me a dm{" "}
        <Link
          href="https://twitter.com"
          className="text-blue-500 hover:text-blue-400"
        >
          on twitter
        </Link>{" "}
      </p>
      <Heading classname=" my-8">VINEET.TECH</Heading>
    </div>
  );
};
