import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Title } from "../ui/text";

const priceArray = [
  { title: "Under $100", value: "0-100" },
  { title: "$100 - $200", value: "100-200" },
  { title: "$200 - $300", value: "200-300" },
  { title: "$300 - $500", value: "300-500" },
  { title: "Over $500", value: "500-10000" },
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}
const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full border-t border-black/5 p-4">
      <div className="flex items-center justify-between">
        <Title className="text-sm font-black tracking-wide">Price</Title>
        {selectedPrice && (
          <button
            onClick={() => setSelectedPrice(null)}
            className="text-xs font-semibold text-shop_dark_green hover:text-darkRed hoverEffect"
          >
            Reset
          </button>
        )}
      </div>

      <RadioGroup value={selectedPrice || ""}>
        {priceArray?.map((price, index) => {
          const isSelected = selectedPrice === price?.value;

          return (
            <div
              key={index}
              onClick={() => setSelectedPrice(price?.value)}
              className={`group flex items-center gap-3 rounded-xl border px-3 py-2 hover:cursor-pointer hover:shadow-sm hoverEffect ${
                isSelected
                  ? "border-shop_light_green/30 bg-linear-to-r from-shop_light_green/15 to-white"
                  : "border-black/5 bg-white/60 hover:bg-white/80"
              }`}
            >
              <RadioGroupItem
                value={price?.value}
                id={price?.value}
                className="rounded-sm"
              />
              <Label
                htmlFor={price.value}
                className={`text-sm ${
                  isSelected
                    ? "font-semibold text-shop_dark_green"
                    : "font-medium text-gray-700 group-hover:text-gray-900"
                }`}
              >
                {price?.title}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default PriceList;
