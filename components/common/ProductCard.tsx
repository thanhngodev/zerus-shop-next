import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import PriceView from "./PriceView";
import ProductSideMenu from "./ProductSideMenu";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {product?.images && (
          <Link
            href={`/product/${product?.slug?.current}`}
            className="block h-full w-full"
          >
            <Image
              src={urlFor(product.images[0]).url()}
              alt={product.name || "Product image"}
              width={500}
              height={500}
              className={`h-full w-full object-cover transition-transform duration-500 ${
                product?.stock !== 0 ? "group-hover:scale-105" : "opacity-60"
              }`}
            />
            {product?.stock === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-600 backdrop-blur-sm">
                  Out of Stock
                </span>
              </div>
            )}
          </Link>
        )}

        {/* Sale/Hot Badge */}
        {product?.status === "sale" ? (
          <div className="absolute left-2 top-2 z-10">
            <span className="inline-flex items-center rounded-full bg-linear-to-r from-red-500 to-orange-500 px-2.5 py-1 text-xs font-semibold text-white shadow-md">
              Sale
            </span>
          </div>
        ) : (
          product?.status === "hot" && (
            <Link
              href="/deal"
              className="absolute left-2 top-2 z-10 rounded-full bg-white/90 p-1.5 shadow-sm backdrop-blur-sm transition-all hover:scale-110"
            >
              <Flame size={16} className="text-orange-500" fill="#fb6c08" />
            </Link>
          )
        )}

        {/* Favorite Button */}
        <ProductSideMenu product={product} className="right-2 top-2" />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {product?.categories && product?.categories?.length > 0 && (
          <p className="mb-1 truncate text-xs font-medium uppercase tracking-wider text-gray-500">
            {product.categories.map((cat) => cat).join(", ")}
          </p>
        )}

        <Link
          href={`/product/${product?.slug?.current}`}
          className="mb-2 block"
        >
          <h3 className="font-medium text-gray-900 line-clamp-2 hover:text-shop_dark_green transition-colors">
            {product?.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
          <PriceView
            price={product?.price}
            discount={product?.discount}
            className="text-base font-semibold"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4">
          <AddToCartButton
            product={product}
            className="w-full rounded-lg border border-shop_dark_green/20 bg-shop_dark_green/90 py-2 text-sm font-medium text-white transition-colors hover:bg-shop_dark_green"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
