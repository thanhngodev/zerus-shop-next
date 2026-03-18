import ProductCard from "@/components/common/ProductCard";
import Title from "@/components/common/Title";
import { Product } from "@/sanity.types";
import { getDealProducts } from "@/sanity/queries";
import Container from "@/components/layouts/Container";

const DealPage = async () => {
  const products = await getDealProducts();

  return (
    <div className="py-10 bg-deal-bg">
      <Container>
        <Title className="mb-5 underline underline-offset-4 decoration-1 text-base uppercase tracking-wide">
          Hot Deals of the Week
        </Title>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {products?.map((product: Product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DealPage;
