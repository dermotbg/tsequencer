import { Link } from "@tanstack/react-router"
import LoginDialog from "../LoginDialog"
import { LoginLogicType } from "../../types"

const MobileNavMenu = ({ loginHandler, setUsername, setPassword }: LoginLogicType) => {

  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link to="/" className="bg-stone-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Sequencer</Link>
        <Link to="/tutorial" className="text-stone-300 hover:bg-stone-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Tutorial</Link>
        <LoginDialog 
          isMobile={true} 
          loginHandler={loginHandler} 
          setUsername={setUsername} 
          setPassword={setPassword} 
        />
      </div>
    </div>
  )
}

export default MobileNavMenu