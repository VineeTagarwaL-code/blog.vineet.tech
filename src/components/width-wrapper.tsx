import { cn } from "@/utils/utils";
type WidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
export const WidthWrapper = ({ children, className }: WidthWrapperProps) => {
  return (
    <section
      className={cn(
        "max-w-full md:max-w-[1100px] mx-auto px-2 md:px-4 ",
        className
      )}
    >
      {children}
    </section>
  );
};
