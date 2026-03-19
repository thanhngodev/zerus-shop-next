"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  description: string;
}

const DescriptionWithModal = ({ description }: Props) => {
  const [isLongText, setIsLongText] = React.useState(false);

  // Check if description is longer than 2 lines (approximately 100 characters)
  React.useEffect(() => {
    setIsLongText(description.length > 300);
  }, [description]);

  const truncatedText = description.substring(0, 300) + "...";

  return (
    <div className="space-y-1">
      {isLongText ? (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 tracking-wide leading-relaxed">
            {truncatedText}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-shop_light_green/10 hover:bg-shop_light_green/20 text-shop_light_green hover:text-green-700 text-sm font-medium rounded-lg transition-all duration-200 border border-shop_light_green/20 hover:border-shop_light_green/40">
                <span>Chi tiết sản phẩm</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-gray-900">
                  Chi tiết sản phẩm
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {description}
                  </p>
                </div>
                <div className="flex justify-end pt-4 border-t">
                  <button
                    className="px-6 py-2 bg-shop_light_green text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                    onClick={() => {
                      const dialog = document.querySelector('[data-slot="dialog-close"]') as HTMLButtonElement;
                      dialog?.click();
                    }}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <p className="text-sm text-gray-600 tracking-wide leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default DescriptionWithModal;
