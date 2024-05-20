import useUserStore from "../../../../../../hooks/StateHooks/UseUserStore";
import { logoutRequest } from "../../../../../../services/loginService"

const UserMenuLinks = () => {

  const setUser = useUserStore((state) => state.set);
  // TODO: update UserMenu functinoality when paths exist
  const logoutHandler = () => {
    console.log('logging out')
    logoutRequest()
    setUser(null)
  }
  return (
    <div className={"transition-all ease-in duration-100 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-stone-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
      <a href="#" className="block px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid border-stone-800" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
      <a href="#" className="block px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid border-stone-800" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
      <button onMouseDown={() => logoutHandler()} className="block px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid border-stone-800" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</button>
    </div>
  )

}

export default UserMenuLinks