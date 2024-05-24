import { Disc3 } from "lucide-react"
import MobileMenuAccessButton from "../MobileMenuAccessButton"
import { Link } from "@tanstack/react-router"
import LoginDialog from "../LoginDialog"
import UserMenuContainer from "../UserMenuContainer"
import { Button } from "@/components/ui/button"
import { NavBarType } from "../../types"
import SaveDialog from "../SaveDialog"

const NavBar = ({ mobileMenuOpen, setMobileMenuOpen, userMenuOpen, setUserMenuOpen, userIsAuthenticated, loginHandler, setUsername, setPassword, setSeqName, saveHandler, logoutHandler, errorMessage, isSaveDialogOpen, setIsSaveDialogOpen }: NavBarType) => {

  return(
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <MobileMenuAccessButton mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        {/* Logo */}
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Disc3 color="white" />
          </div>
          {/* Nav Buttons */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link to="/"> <Button className="bg-stone-900 hover: text-white hover:bg-stone-900 rounded-lg px-3 py-2 text-sm font-medium" aria-current="page">Sequencer</Button></Link>
              <Link to="/tutorial" ><Button className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Tutorial</Button></Link>
              {userIsAuthenticated
                ? <SaveDialog 
                    isMobile={false} 
                    setSeqName={setSeqName}
                    saveHandler={saveHandler} 
                    errorMessage={errorMessage}
                    isSaveDialogOpen={isSaveDialogOpen}
                    setIsSaveDialogOpen={setIsSaveDialogOpen}
                    />
                : <LoginDialog 
                    isMobile={false} 
                    loginHandler={loginHandler} 
                    setUsername={setUsername} 
                    setPassword={setPassword} 
                    errorMessage={errorMessage}
                  />
              }
            </div>
          </div>
        </div>
        {/* <!-- Profile dropdown --> */}
        <UserMenuContainer 
          userMenuOpen={userMenuOpen} 
          setUserMenuOpen={setUserMenuOpen}
          logoutHandler={logoutHandler}
        />
      </div>
    </div>
  )

}

export default NavBar