const UserMenuLinks = ({ logoutHandler }: { logoutHandler: () => void }) => {
  return (
    <div
      className={
        "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-stone-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-100 ease-in focus:outline-none"
      }
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex={-1}
    >
      <a
        href="#"
        className="block border-stone-800 px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-0"
      >
        Your Profile
      </a>
      <a
        href="#"
        className="block border-stone-800 px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-1"
      >
        Settings
      </a>
      <button
        onMouseDown={() => logoutHandler()}
        className="block border-stone-800 px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-2"
      >
        Sign out
      </button>
    </div>
  );
};

export default UserMenuLinks;
