import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}
const PriceView = ({ price, discount, className }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-2">
        <PriceFormatter
          amount={price}
          className={cn("text-shop_dark_green", className)}
        />
        {price && discount ? (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className={twMerge(
              "line-through text-xs font-normal text-zinc-500",
              className,
            )}
          />
        ) : (
          <PriceFormatter
            amount={0}
            className={twMerge(
              "line-through text-xs font-normal text-zinc-500 opacity-0",
              className,
            )}
          />
        )}
      </div>
    </div>
  );
};

export default PriceView;
