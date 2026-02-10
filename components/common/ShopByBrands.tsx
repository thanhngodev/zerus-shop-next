import { Brand } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { getAllBrands } from "@/sanity/queries";
import { ArrowRight, GitCompare, Headset, Shield, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Free Delivery",
    description: "Free shipping on orders over $100",
    icon: <Truck className="text-shop_light_green" size={28} />,
  },
  {
    title: "Easy Returns",
    description: "30-day return policy",
    icon: <GitCompare className="text-shop_light_green" size={28} />,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support",
    icon: <Headset className="text-shop_light_green" size={28} />,
  },
  {
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: <Shield className="text-shop_light_green" size={28} />,
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();

  return (
    <section className="py-2 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-shop_light_bg rounded-md">
      {/* Brands Section */}
      <div className="mb-4 text-center">
        <div className="flex flex-col items-center justify-between mb-4 md:flex-row md:mb-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Shop by Brand
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Discover products from our trusted brands
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center mt-4 text-sm font-medium text-shop_light_green hover:text-shop_dark_green transition-colors md:mt-0"
          >
            View all brands
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands?.slice(0, 6).map((brand: Brand) => (
            <Link
              key={brand._id}
              href={{
                pathname: "/shop",
                query: { brand: brand.slug?.current },
              }}
              className="group relative flex h-32 items-center justify-center rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              {brand?.image && (
                <div className="relative h-3/4 w-full">
                  <Image
                    src={urlFor(brand.image).url()}
                    alt={brand.title || "Brand logo"}
                    fill
                    className="object-contain object-center transition-opacity group-hover:opacity-80"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-shop_light_green/10">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrands;
