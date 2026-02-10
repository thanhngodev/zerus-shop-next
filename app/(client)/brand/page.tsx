import Container from "@/components/layouts/Container";
import { Brand } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";

const BrandPage = async () => {
  const brands = await getAllBrands();

  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Brands
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of high-quality brands that bring you
            the best products
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {brands?.map((brand: Brand) => (
            <Link
              key={brand._id}
              href={`/brand/${brand.slug?.current}`}
              className="group relative flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-32 mb-4">
                {brand.image && (
                  <Image
                    src={urlFor(brand.image).url()}
                    alt={brand.title || "Brand logo"}
                    fill
                    className="object-contain object-center transition-opacity group-hover:opacity-90"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                )}
              </div>
              <h3 className="text-center text-lg font-bold text-gray-400 group-hover:text-shop_light_green transition-colors">
                {brand.title}
              </h3>
              {brand.description && (
                <p className="mt-1 text-sm text-gray-500 text-center line-clamp-4">
                  {brand.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BrandPage;
