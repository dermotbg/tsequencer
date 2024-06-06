import { Link } from "@tanstack/react-router";
import { Disc3 } from "lucide-react";

import { Button } from "@/components/ui/button";

import LoadDialog from "./components/LoadDialog";
import LoginDialog from "./components/LoginDialog";
import MobileMenuAccessButton from "../MobileMenuAccessButton";
import SaveDialog from "./components/SaveDialog";
import UserMenuContainer from "../UserMenuContainer";

import type { NavBarType } from "../../types";

const NavBar = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  userMenuOpen,
  setUserMenuOpen,
  userIsAuthenticated,
  loginHandler,
  setUsername,
  setPassword,
  setConfPassword,
  setSeqName,
  saveHandler,
  logoutHandler,
  errorMessage,
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
}: NavBarType) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <MobileMenuAccessButton
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        {/* Logo */}
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Disc3 color="white" />
          </div>
          {/* Nav Buttons */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link to="/">
                <Button
                  className="bg-stone-900 hover: text-white hover:bg-stone-900 rounded-lg px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Sequencer
                </Button>
              </Link>
              <Link to="/tutorial">
                <Button className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Tutorial
                </Button>
              </Link>
              {userIsAuthenticated ? (
                <>
                  <SaveDialog
                    isMobile={false}
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
                    isMobile={false}
                    errorMessage={errorMessage}
                    isLoadDialogOpen={isLoadDialogOpen}
                    setIsLoadDialogOpen={setIsLoadDialogOpen}
                    sequences={sequences}
                    setSelection={setSelection}
                    loadHandler={loadHandler}
                    isRunning={isRunning}
                    isLoading={isLoading}
                  />
                </>
              ) : (
                <LoginDialog
                  isMobile={false}
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
        </div>
        {/* <!-- Profile dropdown --> */}
        <UserMenuContainer
          userMenuOpen={userMenuOpen}
          setUserMenuOpen={setUserMenuOpen}
          logoutHandler={logoutHandler}
        />
      </div>
    </div>
  );
};

export default NavBar;
