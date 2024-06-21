import { Menu, X } from "lucide-react";

import type { NavBarMobileMenuType } from "../../types";

const MobileMenuAccessButton = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavBarMobileMenuType) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open navigation menu</span>
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
};

export default MobileMenuAccessButton;
