import { PropsWithClassName } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface RatingScaleProps extends PropsWithClassName {
  rating: number;
  n: number;
}

export const RatingScale: React.FC<RatingScaleProps> = ({ rating, className, n }) => {
  return (
    <ul className={cn(className, "flex w-full justify-between gap-1")}>
      {[...Array(n)].map((_, i) => {
        return <li key={i} className={` w-full h-2 rounded-sm ${i < rating ? "bg-gray-900" : "bg-gray-200"} `}></li>;
      })}
    </ul>
  );
};
