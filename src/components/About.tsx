import { cn } from "@/utils/utils";
export const About = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, "mt-10")}>
      <h1 className="font-bold text-lg">About</h1>
      <span className="text-muted-foreground ">{children}</span>
    </div>
  );
};
