import { Category } from "@/sanity.types";
import { Title } from "../ui/text";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  categories: Category[];
  selectedCategory?: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between">
        <Title className="text-sm font-black tracking-wide">Categories</Title>
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-xs font-semibold text-shop_dark_green hover:text-darkRed hoverEffect"
          >
            Reset
          </button>
        )}
      </div>

      <RadioGroup value={selectedCategory || ""}>
        {categories?.map((category) => {
          const value = category?.slug?.current as string;
          const isSelected = selectedCategory === value;

          return (
            <div
              key={category?._id}
              onClick={() => setSelectedCategory(value)}
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
                {category?.title}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default CategoryList;
