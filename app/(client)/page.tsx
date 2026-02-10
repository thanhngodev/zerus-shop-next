import HomeBanner from "@/components/common/HomeBanner";
import ProductGrid from "@/components/common/ProductGrid";
import Container from "@/components/layouts/Container";

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      <ProductGrid />
    </Container>
  );
};

export default Home;
