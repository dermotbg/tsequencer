import { FormEvent, useEffect, useState } from "react"
import MobileNavMenu from "./components/MobileMenu"
import NavBar from "./components/NavBar"
import { loginRequest, logoutRequest, validateTokenAsync } from "../../services/loginService"
import useUserStore from "../../hooks/StateHooks/UseUserStore"
import useSequencerStore from "../../hooks/StateHooks/useSequencerStore"
import { saveSequencerAsync } from "../../services/sequencerService"
import { prepareSaveSequencerObject } from "./utils/prepareSaveObject"
import { validateString } from "@/utils/typeChecking"
import useMessageStore from "@/hooks/StateHooks/useMessageStore"
import { useToast } from "../ui/use-toast"


const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [seqName, setSeqName] = useState('')
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false)

  const sequencer = useSequencerStore()
  const user = useUserStore()
  const errorMessage = useMessageStore()
  const { toast } = useToast()

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
    
    return () => clearInterval(tokenValidationPoll)
    
  },[user, user.isAuthenticated])
  
  
  const loginHandler = async (e: FormEvent) => {
    e.preventDefault()
    try{
      const resp = await loginRequest({ username, password })
        // set string to LS only to fire token validation when it's defined
        localStorage.setItem("user", JSON.stringify('loggedIn'))
        user.setUsername(resp.username)
        user.setAuthenticated(true)
      toast({ description: 'You are now logged in.' })
    }
    catch(error){
      errorMessage.set(`${error}`.slice(7))
      setTimeout(() => {
        errorMessage.set(undefined)
      }, 10000)
    }
  }

  const logoutHandler = () => {
    setUsername("")
    setPassword("")
    user.setAuthenticated(false)
    localStorage.removeItem('user')
    logoutRequest()
  }

  const saveHandler = async (e: FormEvent) => {
    e.preventDefault()
    try{
      await saveSequencerAsync(prepareSaveSequencerObject(sequencer.seq, user.username, seqName))
      toast({ description: 'Save successful.' })
      setIsSaveDialogOpen(false)
    } 
    catch(error){
      errorMessage.set(`${error}`.slice(29))
      setTimeout(() => {
        errorMessage.set(undefined)
      }, 5000)
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
        errorMessage={errorMessage.message}
        isSaveDialogOpen={isSaveDialogOpen}
        setIsSaveDialogOpen={setIsSaveDialogOpen}
      />
      {
        mobileMenuOpen
          ? <MobileNavMenu 
              userIsAuthenticated={user.isAuthenticated}
              loginHandler={loginHandler}
              setUsername={setUsername}
              setPassword={setPassword}
              setSeqName={setSeqName}
              saveHandler={saveHandler}
              logoutHandler={logoutHandler}
              errorMessage={errorMessage.message}
              isSaveDialogOpen={isSaveDialogOpen}
              setIsSaveDialogOpen={setIsSaveDialogOpen}
            />
          : null
      }
    </nav>
  )
}
export default NavBarContainer