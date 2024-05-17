import { useState } from "react"
import MobileNavMenu from "./components/MobileMenu"
import NavBar from "./components/NavBar"


const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return(
    <nav className="bg-stone-400/25">
      <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} userMenuOpen={userMenuOpen} setUserMenuOpen={setUserMenuOpen} />
      {
        mobileMenuOpen
          ? <MobileNavMenu />
          : null
      }
    </nav>
  )
}
export default NavBarContainer