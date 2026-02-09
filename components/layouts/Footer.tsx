import { categoriesData, quickLinksData } from "@/contants/data";
import FooterTop from "../common/FooterTop";
import SocialMedia from "../common/SocialMedia";
import { SubTitle, SubText } from "../ui/text";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FooterTop />

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Zerus, blending style
              and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-dark-color/60"
              iconClassName="border-dark-color/60 hover:border-shop_dark_green hover:text-shop_dark_green"
              tooltipClassName="bg-black text-white"
            />
          </div>
          <div>
            <SubTitle className="mb-4">Quick Links</SubTitle>
            <ul className="space-y-3">
              {quickLinksData.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className="mb-4">Categories</SubTitle>
            <ul className="space-y-3">
              {categoriesData.map((item) => (
                <li key={item.title}>
                  <Link
                    href={`/category/${item.href}`}
                    className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className="mb-4">News Letter</SubTitle>
            <SubText className="mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </SubText>
            <form className="space-y-3">
              <input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full ">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="py-6 border-t text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-darkColor font-black tracking-wider uppercase hover:text-shop_dark_green hoverEffect group font-sans">
              ZERUS
            </span>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
