import Shop from "@/components/common/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";

const ShopPage = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();
  
  return (
    <div className="min-h-screen bg-linear-to-b from-shop_light_green/10 via-white to-white">
      <Shop categories={categories} brands={brands} />
    </div>
  );
};

export default ShopPage;
