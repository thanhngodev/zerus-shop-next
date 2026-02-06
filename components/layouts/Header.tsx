import CartIcon from "../common/CartIcon";
import FavoriteBtn from "../common/FavoriteBtn";
import HeaderMenu from "../common/HeaderMenu";
import MobileMenu from "../common/MobileMenu";
import SearchBar from "../common/SearchBar";
import SignIn from "../common/SignIn";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="max-w-(--breakpoint-xl) mx-auto px-4 flex items-center justify-between gap-7 text-light-color">
        <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5 ">
          <SearchBar />
          <CartIcon />
          <FavoriteBtn />
          <SignIn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
