import { FormEvent, useEffect, useState } from "react"
import MobileNavMenu from "./components/MobileMenu"
import NavBar from "./components/NavBar"
import { loginRequest, validateToken } from "../../services/loginService"
import useUserStore from "../../hooks/StateHooks/UseUserStore"


const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const user = useUserStore();
  
  useEffect(() => {
    // validate access token
    const intervalId = setInterval(() => {
      runTokenValidation()
    }, 20000)
    const runTokenValidation = async () => {
      if(!user.user || await validateToken() != 200){
        clearInterval(intervalId)
      }
    }
    return () => clearInterval(intervalId)

  },[user, user.user])

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    const loginObject = {
      username: username.toLowerCase().trim(),
      password: password
    }
    try{
      loginRequest(loginObject)
      user.set(username)

    }
    catch(error){
      console.log(error)
    }
  }

  return(
    <nav className="bg-stone-400/25">
      <NavBar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        userMenuOpen={userMenuOpen} 
        setUserMenuOpen={setUserMenuOpen} 
        userIsAuthenticated={user.user !== null}
        loginHandler={loginHandler}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      {
        mobileMenuOpen
          ? <MobileNavMenu 
              loginHandler={loginHandler} 
              setUsername={setUsername} 
              setPassword={setPassword} 
            />
          : null
      }
    </nav>
  )
}
export default NavBarContainer