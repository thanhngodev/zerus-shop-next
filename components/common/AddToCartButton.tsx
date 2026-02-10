"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  return (
    <div className="w-full h-12 flex items-center">
      {/* {itemCount ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-darkColor/80">Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : ( */}
        <Button
          //   onClick={handleAddToCart}
          //   disabled={isOutOfStock}
          className={cn(
            "w-full bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
            className,
          )}
        >
          <ShoppingBag /> Add to Cart
          {/* {isOutOfStock ? "Out of Stock" : "Add to Cart"} */}
        </Button>
      {/* )} */}
    </div>
  );
};

export default AddToCartButton;
