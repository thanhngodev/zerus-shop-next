"use client";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  isStock?: number | undefined;
}

const ImageView = ({ images = [], isStock }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="space-y-4">
      {/* Main Image Gallery */}
      <div className="relative group">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Thumbs, Autoplay]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1000}
          className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        >
          {images?.map((image) => (
            <SwiperSlide key={image?._key}>
              <div className="relative aspect-square bg-white">
                <Image
                  src={urlFor(image).url()}
                  alt="productImage"
                  width={700}
                  height={700}
                  priority
                  className={`w-full h-full object-contain transition-transform duration-300 ${
                    isStock === 0 ? "opacity-50" : ""
                  }`}
                />
                {isStock === 0 && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-gray-200">
          <ChevronLeft size={20} />
        </button>
        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-gray-200">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="relative">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={5}
          watchSlidesProgress={true}
          className="px-2"
        >
          {images?.map((image) => (
            <SwiperSlide key={image?._key}>
              <div className="relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-shop_light_green transition-all duration-200 group">
                <Image
                  src={urlFor(image).url()}
                  alt={`Thumbnail ${image._key}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageView;
