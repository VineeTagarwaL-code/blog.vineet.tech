import { Twitter, Github } from "lucide-react";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="w-full max-w-[1100px] overflow-hidden justify-center items-center my-8 border-t-[1px] border-solid border-gray-500 pt-4">
      <div className="  px-4 py-3 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} vineet.tech
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="https://twitter.com/vineet_tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://github.com/vineet-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
