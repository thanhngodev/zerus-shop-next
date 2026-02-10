import HomeBanner from "@/components/common/HomeBanner";
import HomeCategories from "@/components/common/HomeCategories";
import LatestBlog from "@/components/common/LatestBlog";
import ProductGrid from "@/components/common/ProductGrid";
import ShopByBrands from "@/components/common/ShopByBrands";
import Container from "@/components/layouts/Container";
import { getCategories } from "@/sanity/queries";

const Home = async () => {
  const categories = await getCategories(6);

  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </Container>
  );
};

export default Home;
