import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import CartIcon from "../common/CartIcon";
import FavoriteBtn from "../common/FavoriteBtn";
import HeaderMenu from "../common/HeaderMenu";
import MobileMenu from "../common/MobileMenu";
import SearchBar from "../common/SearchBar";
import SignIn from "../common/SignIn";
import Container from "./Container";
import Logo from "./Logo";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="max-w-(--breakpoint-xl) mx-auto px-4 flex items-center justify-between gap-7 text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5 ">
          <SearchBar />
          <CartIcon />
          <FavoriteBtn />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
