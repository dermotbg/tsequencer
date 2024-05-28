import { Link } from "@tanstack/react-router"
import LoginDialog from "../LoginDialog"
import { MobileNavMenuType } from "../../types"
import SaveDialog from "../SaveDialog"
import LoadDialog from "../LoadDialog"

const MobileNavMenu = ({ loginHandler, setUsername, setPassword, errorMessage, userIsAuthenticated, setSeqName, saveHandler, isSaveDialogOpen, setIsSaveDialogOpen, isLoadDialogOpen, setIsLoadDialogOpen, sequences, setSelection, loadHandler, isRunning }: MobileNavMenuType) => {

  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link to="/" className="bg-stone-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Sequencer</Link>
        <Link to="/tutorial" className="text-stone-300 hover:bg-stone-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Tutorial</Link>
        {userIsAuthenticated
                ? <div className="flex flex-col items-start"> 
                    <SaveDialog 
                      isMobile={true} 
                      setSeqName={setSeqName}
                      saveHandler={saveHandler} 
                      errorMessage={errorMessage}
                      isSaveDialogOpen={isSaveDialogOpen}
                      setIsSaveDialogOpen={setIsSaveDialogOpen}
                    />
                    <LoadDialog 
                      isMobile={true} 
                      errorMessage={errorMessage}
                      isLoadDialogOpen={isLoadDialogOpen}
                      setIsLoadDialogOpen={setIsLoadDialogOpen}
                      sequences={sequences}
                      setSelection={setSelection}
                      loadHandler={loadHandler}
                      isRunning={isRunning}
                    />
                  </div>
                : <LoginDialog 
                    isMobile={true} 
                    loginHandler={loginHandler} 
                    setUsername={setUsername} 
                    setPassword={setPassword} 
                    errorMessage={errorMessage}
                  />
              }
      </div>
    </div>
  )
}

export default MobileNavMenu