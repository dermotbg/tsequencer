import { CircleUser } from "lucide-react";

import type { NavBarUserMenuType } from "@/components/NavBarContainer/types";

const UserMenuIcon = ({ userMenuOpen, setUserMenuOpen }: NavBarUserMenuType) => {
  return (
    <button
      type="button"
      onClick={() => setUserMenuOpen(!userMenuOpen)}
      onBlur={(e) => {
        if (e.relatedTarget !== e.currentTarget) setUserMenuOpen(false);
      }}
      className="relative flex rounded-full bg-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-800"
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">Open user menu</span>
      <CircleUser color="white" />
    </button>
  );
};

export default UserMenuIcon;
