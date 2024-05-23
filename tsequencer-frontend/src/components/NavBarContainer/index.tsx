import { FormEvent, useEffect, useState } from "react"
import MobileNavMenu from "./components/MobileMenu"
import NavBar from "./components/NavBar"
import { loginRequest, logoutRequest, validateTokenAsync } from "../../services/loginService"
import useUserStore from "../../hooks/StateHooks/UseUserStore"
import useSequencerStore from "../../hooks/StateHooks/useSequencerStore"
import { saveSequencer } from "../../services/sequencerService"
import { prepareSaveSequencerObject } from "./utils/prepareSaveObject"
import { validateString } from "@/utils/typeChecking"


const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [seqName, setSeqName] = useState('')

  const sequencer = useSequencerStore()
  const user = useUserStore()

  // Login Validation Effect
  useEffect(() => {
    const runTokenValidation = async () => {
      // fetch validation info from BE
      const userValidation = await validateTokenAsync()

      if(userValidation && userValidation.status !== 200){
        // TODO: ALERT SESSION EXPIRED
        logoutHandler()
        clearInterval(tokenValidationPoll)
      }
      else{
        // update FE state with logged in user info set username to LS to confirm loop already completed
        user.setAuthenticated(true)
        user.setUsername(validateString(userValidation?.username))
      }
    }
    
    const tokenValidationPoll = setInterval(() => {
      // start polling to validate access token if user has already gone through loop
      if(localStorage.getItem('user'))
        runTokenValidation()
    }, 2000)
    
    // NOTES: cons for this approach
    return () => clearInterval(tokenValidationPoll)
    
  },[user, user.isAuthenticated])
  
  
  const loginHandler = async(e: FormEvent) => {
    e.preventDefault();
    const loginObject = {
      username: username.toLowerCase().trim(),
      password: password
    }
    try{
      const resp = await loginRequest(loginObject)
      if(resp && resp.username !== ''){
        // set string to LS only to fire token validation when it's defined
        localStorage.setItem("user", JSON.stringify('loggedIn'))
        user.setUsername(loginObject.username)
        user.setAuthenticated(true)
      }
    }
    catch(error){
      // TODO: MESSAGE DIALOG ERROR LOGGING IN 
      console.log(error)
    }
  }

  const logoutHandler = () => {
    setUsername("")
    setPassword("")
    logoutRequest()
    user.setAuthenticated(false)
    localStorage.removeItem('user')
  }

  const saveHandler = (e: FormEvent) => {
    e.preventDefault()
    const seqToSave = prepareSaveSequencerObject(sequencer.seq, user.username, seqName)

    try {
      saveSequencer(seqToSave)
      // TODO: MESSAGE DIALOG - CONFIRM SAVE
      console.log(`${seqName}: Saved...`)
    } catch (error) {
      console.error(`An error has occurred: ${error}`)
    }
  }
  return(
    <nav className="bg-stone-400/25">
      <NavBar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        userMenuOpen={userMenuOpen} 
        setUserMenuOpen={setUserMenuOpen} 
        userIsAuthenticated={user.isAuthenticated}
        loginHandler={loginHandler}
        setUsername={setUsername}
        setPassword={setPassword}
        setSeqName={setSeqName}
        saveHandler={saveHandler}
        logoutHandler={logoutHandler}
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