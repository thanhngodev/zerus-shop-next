import Link from "next/link";
import { Title } from "../ui/text";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="px-4">
      <div className="max-w-(--breakpoint-xl) mx-auto py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
        <div >
          <Title>
            Grab Upto 50% Off on <br />
            Selected headphone
          </Title>
          <Link
            className="bg-shop_btn_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_btn_dark_green hoverEffect"
            href="/shop"
          >
            Buy Now
          </Link>
        </div>

        <div>
          <Image
            src={banner_1}
            alt="banner_1"
            className="hidden md:inline-flex w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
