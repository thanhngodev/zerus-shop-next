import CategoryProducts from "@/components/common/CategoryProducts";
import Container from "@/components/layouts/Container";
import { getCategories } from "@/sanity/queries";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;

  return (
    <div className="py-10">
      <Container>
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-darkColor mb-2">
            <span className="relative inline-block">
              <span className="relative z-10">
                {slug &&
                  slug
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
              </span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-shop_light_green/30 -rotate-1 z-0"></span>
            </span>
          </h1>
          <p className="text-lightColor text-sm md:text-base">
            Browse our premium collection of {slug && slug} products
          </p>
        </div>

        <CategoryProducts categories={categories} slug={slug} />
      </Container>
    </div>
  );
};

export default CategoryPage;
