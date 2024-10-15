import { PropsWithClassNameAndChildren } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Container: React.FC<PropsWithClassNameAndChildren> = ({ children, className }) => {
  return <div className={cn(className, "container  max-w-[384px] ")}>{children}</div>;
};
