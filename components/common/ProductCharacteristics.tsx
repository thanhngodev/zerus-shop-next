import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/sanity.types";
import { getBrand } from "@/sanity/queries";

const ProductCharacteristics = async ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  const brand = await getBrand(product?.slug?.current as string);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <Accordion type="single" collapsible className="border-none">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200 text-left font-semibold text-gray-900 hover:no-underline">
            Product Details
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Brand</span>
                <span className="font-semibold text-gray-900">
                  {brand && brand[0]?.brandName ? brand[0].brandName : "N/A"}
                </span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Collection</span>
                <span className="font-semibold text-gray-900">2025</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Type</span>
                <span className="font-semibold text-gray-900">
                  {product?.variant || "Standard"}
                </span>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-600 font-medium">Availability</span>
                <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
                  (product?.stock as number) > 0 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {(product?.stock as number) > 0 ? "✓ Available" : "✗ Out of Stock"}
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductCharacteristics;
