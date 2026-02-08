"use client";

import { AlignLeft } from "lucide-react";
import { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default MobileMenu;
