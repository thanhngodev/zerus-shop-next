import { headerData } from "@/contants/data";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../layouts/Logo";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black z-50 h-screen p-10 border-r border-r-shop_dark_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop_dark_green hoverEffect px-2 py-1"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide text-zinc-400 bg-black">
          {headerData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`hover:text-shop_light_green hoverEffect ${pathName === item.href && "text-shop_light_green"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
