/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Brand, Category, Product } from "@/sanity.types";
import Container from "../layouts/Container";
import { Title } from "../ui/text";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryList from "../shop/CategoryList";
import BrandList from "../shop/BrandList";
import PriceList from "../shop/PriceList";
import ProductCard from "./ProductCard";
import NoProductAvailable from "./NoProductAvailable";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";

interface Props {
  categories: Category[];
  brands: Brand[];
}

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null,
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null,
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = `
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } },
      );
      setProducts(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, selectedPrice]);

  return (
    <div className="border-t border-black/5">
      <Container className="py-6">
        <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/50 shadow-sm">
            <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Title className="text-base md:text-lg uppercase tracking-wide">
                  Get the products as your needs
                </Title>
                <p className="mt-1 text-sm text-gray-600">
                  Filter by category, brand, and price.
                </p>
              </div>

              {(selectedCategory !== null ||
                selectedBrand !== null ||
                selectedPrice !== null) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedBrand(null);
                    setSelectedPrice(null);
                  }}
                  className="inline-flex items-center justify-center rounded-xl border border-shop_light_green/20 bg-linear-to-r from-shop_light_green/15 to-white px-4 py-2 text-sm font-semibold text-shop_dark_green hover:from-shop_light_green/25 hover:to-white hoverEffect"
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
          <aside className="md:sticky md:top-24 md:self-start">
            <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/50 shadow-sm md:max-h-[calc(100vh-140px)] md:overflow-y-auto md:pr-1 scrollbar-hide">
              <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <BrandList
                brands={brands}
                setSelectedBrand={setSelectedBrand}
                selectedBrand={selectedBrand}
              />
              <PriceList
                setSelectedPrice={setSelectedPrice}
                selectedPrice={selectedPrice}
              />
            </div>
          </aside>

          <main className="min-w-0 md:max-h-[calc(100vh-140px)] md:overflow-y-auto md:pr-1 scrollbar-hide">
            {loading ? (
              <div className="rounded-2xl border border-white/60 bg-white/70 p-16 text-center shadow-sm">
                <div className="flex flex-col items-center justify-center gap-3">
                  <Loader2 className="h-10 w-10 animate-spin text-shop_dark_green" />
                  <p className="font-semibold tracking-wide text-base">
                    Product is loading . . .
                  </p>
                </div>
              </div>
            ) : products?.length > 0 ? (
              <>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">
                    Showing{" "}
                    <span className="font-semibold">{products.length}</span>{" "}
                    products
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {products?.map((product) => (
                    <ProductCard key={product?._id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <NoProductAvailable className="bg-white/70 mt-0 rounded-2xl border border-white/60 shadow-sm" />
            )}
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
