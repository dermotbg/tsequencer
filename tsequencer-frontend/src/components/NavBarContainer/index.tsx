import { useEffect, useState } from "react";

import MobileNavMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";

import useIsLoadingStore from "@/hooks/StateHooks/useIsLoadingStore";
import useMessageStore from "@/hooks/StateHooks/useMessageStore";
import useSequencerStore from "@/hooks/StateHooks/useSequencerStore";
import useSequencerActions from "@/hooks/useSequencerActions";
import useSequencerActionsDataStore from "@/hooks/StateHooks/useSequencerActionsStore";
import useUserStore from "@/hooks/StateHooks/useUserStore";
import useUserAuth from "@/hooks/useUserAuth";

import { loadSequencerAsync } from "@/services/sequencerService";
import { validateTokenAsync } from "@/services/loginService";

import { validateString } from "@/utils/typeChecking";

import { toast } from "../ui/use-toast";

const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  // Menus open/closed state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [isLoadDialogOpen, setIsLoadDialogOpen] = useState(false);

  // Global State
  const sequencer = useSequencerStore();
  const sequencerActionData = useSequencerActionsDataStore();
  const user = useUserStore();
  const errorMessage = useMessageStore();
  const { isLoading, set: setIsLoading } = useIsLoadingStore();
  // TODO: refactor hook to pure
  const { saveHandler, loadHandler, updateHandler } = useSequencerActions({
    sequences: sequencerActionData.loadedSequences,
    seqName: sequencerActionData.saveSeqName,
    selection: sequencerActionData.selectedSeq,
    setIsSaveDialogOpen,
    setIsLoadDialogOpen,
  });
  const userAuth = useUserAuth();

  // Login Validation Effect
  useEffect(() => {
    // TODO: abstract this to hook?
    setIsLoading(true);
    const runTokenValidation = async () => {
      try {
        // fetch validation info from BE
        const userValidation = await validateTokenAsync();
        if (userValidation && userValidation.status !== 200) {
          // TODO: ALERT SESSION EXPIRED
          userAuth.logoutHandler();
          clearInterval(tokenValidationPoll);
        } else {
          // update FE state with logged in user info set username to LS to confirm loop already completed
          user.setAuthenticated(true);
          user.setUsername(validateString(userValidation?.user.username));
          user.setUserId(validateString(userValidation?.user.id));
        }
      } catch (error) {
        userAuth.logoutHandler();
        clearInterval(tokenValidationPoll);
        setIsLoading(false);
        toast({ description: "Session has expired, please login again." });
        throw new Error("Token missing");
      } finally {
        setIsLoading(false);
      }
    };

    const tokenValidationPoll = setInterval(async () => {
      // start polling to validate access token if user has already gone through loop
      if (localStorage.getItem("user")) await runTokenValidation();
      else setIsLoading(false);
    }, 2000);

    return () => clearInterval(tokenValidationPoll);
  }, [user, user.isAuthenticated]);

  // Load user sequences
  useEffect(() => {
    const fetchSequences = async () => {
      if (user.username) {
        const response = await loadSequencerAsync(validateString(user.username));
        sequencerActionData.setLoadedSequences(response);
      }
    };
    fetchSequences();
  }, [user.username, isSaveDialogOpen]);

  return (
    <nav className="bg-stone-400/25">
      <NavBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        userMenuOpen={userMenuOpen}
        setUserMenuOpen={setUserMenuOpen}
        userIsAuthenticated={user.isAuthenticated}
        loginHandler={userAuth.loginHandler}
        setUsername={userAuth.setUsername}
        setPassword={userAuth.setPassword}
        setSeqName={sequencerActionData.setSaveSeqName}
        saveHandler={saveHandler}
        logoutHandler={userAuth.logoutHandler}
        errorMessage={errorMessage.message}
        isSaveDialogOpen={isSaveDialogOpen}
        setIsSaveDialogOpen={setIsSaveDialogOpen}
        isLoadDialogOpen={isLoadDialogOpen}
        setIsLoadDialogOpen={setIsLoadDialogOpen}
        loadHandler={loadHandler}
        sequences={sequencerActionData.loadedSequences}
        setSelection={sequencerActionData.setSelectedSeq}
        isRunning={sequencer.isRunning}
        updateHandler={updateHandler}
        registerHandler={userAuth.registerHandler}
        setConfPassword={userAuth.setConfPassword}
        isRegisterDialogOpen={userAuth.isRegisterDialogOpen}
        setIsRegisterDialogOpen={userAuth.setIsRegisterDialogOpen}
        isLoading={isLoading}
      />
      {mobileMenuOpen ? (
        <MobileNavMenu
          userIsAuthenticated={user.isAuthenticated}
          loginHandler={userAuth.loginHandler}
          setUsername={userAuth.setUsername}
          setPassword={userAuth.setPassword}
          setSeqName={sequencerActionData.setSaveSeqName}
          saveHandler={saveHandler}
          logoutHandler={userAuth.logoutHandler}
          errorMessage={errorMessage.message}
          isSaveDialogOpen={isSaveDialogOpen}
          setIsSaveDialogOpen={setIsSaveDialogOpen}
          isLoadDialogOpen={isLoadDialogOpen}
          setIsLoadDialogOpen={setIsLoadDialogOpen}
          loadHandler={loadHandler}
          sequences={sequencerActionData.loadedSequences}
          setSelection={sequencerActionData.setSelectedSeq}
          isRunning={sequencer.isRunning}
          updateHandler={updateHandler}
          registerHandler={userAuth.registerHandler}
          setConfPassword={userAuth.setConfPassword}
          isRegisterDialogOpen={userAuth.isRegisterDialogOpen}
          setIsRegisterDialogOpen={userAuth.setIsRegisterDialogOpen}
          isLoading={isLoading}
        />
      ) : null}
    </nav>
  );
};
export default NavBarContainer;
