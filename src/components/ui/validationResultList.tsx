import { PropsWithClassName } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { IValidationRule } from "password-strength-analyzer";

export interface ValidationResultListProps extends PropsWithClassName {
  result: IValidationRule[];
}

export const ValidationResultList: React.FC<ValidationResultListProps> = ({ result, className }) => {
  return (
    <ul className={cn("flex flex-col gap-2", className)}>
      {result.map((item) => (
        <li key={item.message} className="flex gap-1">
          {item.passed ? <CheckIcon opacity={0.5} /> : <Cross2Icon />}
          <span className={cn("text-xs", item.passed && "opacity-50")}>{item.message}</span>
        </li>
      ))}
    </ul>
  );
};
