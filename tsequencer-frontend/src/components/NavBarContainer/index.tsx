import { useEffect, useState } from "react"
import MobileNavMenu from "./components/MobileMenu"
import NavBar from "./components/NavBar"
import { validateToken } from "../../services/loginService"
import useUserStore from "../../hooks/StateHooks/UseUserStore"


const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false)
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const runValidation = async () => {
      if(await validateToken() == 200){
        setUserIsAuthenticated(true);
      }
    }
    runValidation()
  },[user])

  return(
    <nav className="bg-stone-400/25">
      <NavBar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        userMenuOpen={userMenuOpen} 
        setUserMenuOpen={setUserMenuOpen} 
        userIsAuthenticated={userIsAuthenticated}
      />
      {
        mobileMenuOpen
          ? <MobileNavMenu />
          : null
      }
    </nav>
  )
}
export default NavBarContainer