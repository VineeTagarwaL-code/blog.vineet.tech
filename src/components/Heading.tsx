/**
 * Compoenent to generate cool looking headings
 */

import { cn } from "@/utils/utils";

export const Heading = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <h1
      className={cn(
        "font-bold  w-full flex justify-center items-center  bg-gradient-to-t from-neutral-800 to-neutral-300 bg-clip-text text-transparent",
        classname
      )}
    >
      {children}
    </h1>
  );
};
