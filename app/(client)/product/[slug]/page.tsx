import AddToCartButton from "@/components/common/AddToCartButton";
import DescriptionWithModal from "@/components/common/DescriptionWithModal";
import FavoriteButton from "@/components/common/FavoriteButton";
import ImageView from "@/components/common/ImageView";
import PriceView from "@/components/common/PriceView";
import ProductCharacteristics from "@/components/common/ProductCharacteristics";
import Container from "@/components/layouts/Container";
import { getProductBySlug } from "@/sanity/queries";
import { CornerDownLeft, StarIcon, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { RxBorderSplit } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }

  return (
    <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {product?.images && (
            <ImageView images={product?.images} isStock={product?.stock} />
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Product Header */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {product?.name}
              </h1>
              <FavoriteButton showProduct={true} product={product} />
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(120 reviews)</span>
            </div>
          </div>

          {/* Description */}
          {product?.description && (
            <DescriptionWithModal description={product.description} />
          )}

          {/* Price and Stock */}
          <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
            <PriceView
              price={product?.price}
              discount={product?.discount}
              className="text-3xl font-bold text-gray-900"
            />
            
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full ${
                (product?.stock as number) > 0 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}>
                {(product?.stock as number) > 0 ? "✓ In Stock" : "✗ Out of Stock"}
              </span>
              {(product?.stock as number) > 0 && (
                <span className="text-sm text-gray-600">Usually ships within 24 hours</span>
              )}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4">
            <AddToCartButton product={product} />
          </div>

          {/* Product Characteristics */}
          <ProductCharacteristics product={product} />

          {/* Quick Actions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-shop_light_green hover:bg-shop_light_green/5 transition-all duration-200">
              <RxBorderSplit className="text-xl text-gray-700" />
              <span className="text-xs text-gray-700">Compare</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-shop_light_green hover:bg-shop_light_green/5 transition-all duration-200">
              <FaRegQuestionCircle className="text-xl text-gray-700" />
              <span className="text-xs text-gray-700">Question</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-shop_light_green hover:bg-shop_light_green/5 transition-all duration-200">
              <TbTruckDelivery className="text-xl text-gray-700" />
              <span className="text-xs text-gray-700">Delivery</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-shop_light_green hover:bg-shop_light_green/5 transition-all duration-200">
              <FiShare2 className="text-xl text-gray-700" />
              <span className="text-xs text-gray-700">Share</span>
            </button>
          </div>

          {/* Delivery & Returns */}
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <Truck size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Free Delivery</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Enter your postal code for delivery availability
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <CornerDownLeft size={24} className="text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Free Returns</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Free 30 days return policy. <span className="text-blue-600 underline cursor-pointer">View details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
