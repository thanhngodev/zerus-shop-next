import React from "react";
import { Title } from "../ui/text";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Brand } from "@/sanity.types";

interface Props {
  brands: Brand[];
  selectedBrand?: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  return (
    <div className="w-full border-t border-black/5 p-4">
      <div className="flex items-center justify-between">
        <Title className="text-sm font-black tracking-wide">Brands</Title>
        {selectedBrand && (
          <button
            onClick={() => setSelectedBrand(null)}
            className="text-xs font-semibold text-shop_dark_green hover:text-darkRed hoverEffect"
          >
            Reset
          </button>
        )}
      </div>

      <RadioGroup value={selectedBrand || ""}>
        {brands?.map((brand) => {
          const value = brand?.slug?.current as string;
          const isSelected = selectedBrand === value;

          return (
            <div
              key={brand?._id}
              onClick={() => setSelectedBrand(value)}
              className={`group flex items-center gap-3 rounded-xl border px-3 py-2 hover:cursor-pointer hover:shadow-sm hoverEffect ${
                isSelected
                  ? "border-shop_light_green/30 bg-linear-to-r from-shop_light_green/15 to-white"
                  : "border-black/5 bg-white/60 hover:bg-white/80"
              }`}
            >
              <RadioGroupItem value={value} id={value} className="rounded-sm" />
              <Label
                htmlFor={value}
                className={`line-clamp-1 text-sm ${
                  isSelected
                    ? "font-semibold text-shop_dark_green"
                    : "font-medium text-gray-700 group-hover:text-gray-900"
                }`}
              >
                {brand?.title}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default BrandList;
