import { Link } from "@tanstack/react-router";

import LoadDialog from "../NavBar/components/LoadDialog";
import LoginDialog from "../NavBar/components/LoginDialog";
import SaveDialog from "../NavBar/components/SaveDialog";

import type { MobileNavMenuType } from "../../types";

const MobileNavMenu = ({
  loginHandler,
  setUsername,
  setPassword,
  setConfPassword,
  errorMessage,
  userIsAuthenticated,
  setSeqName,
  saveHandler,
  isSaveDialogOpen,
  setIsSaveDialogOpen,
  isLoadDialogOpen,
  setIsLoadDialogOpen,
  sequences,
  setSelection,
  loadHandler,
  isRunning,
  updateHandler,
  registerHandler,
  isRegisterDialogOpen,
  setIsRegisterDialogOpen,
  isLoading,
}: MobileNavMenuType) => {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          to="/"
          className="block rounded-md bg-stone-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
        >
          Sequencer
        </Link>
        <Link
          to="/tutorial"
          className="block rounded-md px-3 py-2 text-base font-medium text-stone-300 hover:bg-stone-700 hover:text-white"
        >
          Tutorial
        </Link>
        {userIsAuthenticated ? (
          <div className="flex flex-col items-start">
            <SaveDialog
              isMobile={true}
              setSeqName={setSeqName}
              saveHandler={saveHandler}
              errorMessage={errorMessage}
              isSaveDialogOpen={isSaveDialogOpen}
              setIsSaveDialogOpen={setIsSaveDialogOpen}
              sequences={sequences}
              setSelection={setSelection}
              updateHandler={updateHandler}
              isLoading={isLoading}
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
              isLoading={isLoading}
            />
          </div>
        ) : (
          <LoginDialog
            isMobile={true}
            loginHandler={loginHandler}
            setUsername={setUsername}
            setPassword={setPassword}
            setConfPassword={setConfPassword}
            errorMessage={errorMessage}
            registerHandler={registerHandler}
            isRegisterDialogOpen={isRegisterDialogOpen}
            setIsRegisterDialogOpen={setIsRegisterDialogOpen}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default MobileNavMenu;
