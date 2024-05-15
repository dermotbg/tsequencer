import { CircleUser, Disc3, Menu, X } from "lucide-react"
import { useState } from "react"
import LoginDialog from "./components/LoginDialog"

const Navbar = () => {
  // Template from https://tailwindui.com/components/application-ui/navigation/navbars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return(
    <nav className="bg-stone-400/25">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen
                ? <X />
                : <Menu />
              }
            </button>
          </div>
          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Disc3 />
            </div>
            {/* Nav Buttons */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="/" className="bg-stone-900 hover: text-white hover:bg-stone-900 rounded-lg px-3 py-2 text-sm font-medium" aria-current="page">Sequencer</a>
                <a href="#" className="text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Tutorial</a>
                <LoginDialog />
              </div>
            </div>
          </div>
          {/* <!-- Profile dropdown --> */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button type="button" onClick={() => setUserMenuOpen(!userMenuOpen)} onBlur={() => setUserMenuOpen(!userMenuOpen)} className="relative flex rounded-full bg-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <CircleUser />
                </button>
              </div>
              {/* Possible dropdown animation */}
              {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              {userMenuOpen
                ?
                  <div className={"transition-all ease-in duration-100 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-stone-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <a href="#" className="block px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid border-stone-800" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid border-stone-800" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-stone-700 hover:underline hover:decoration-solid border-stone-800" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                  </div>
                : null
              }
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {
        mobileMenuOpen
          ?
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="#" className="bg-stone-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Sequencer</a>
              <a href="#" className="text-stone-300 hover:bg-stone-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Tutorial</a>
              <a href="#" className="text-stone-300 hover:bg-stone-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Login</a>
            </div>
          </div>
          : null
      }
    </nav>
  )
}
export default Navbar