import { useEffect } from "react";

import MobileNavMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";

import useIsLoadingStore from "@/hooks/StateHooks/useIsLoadingStore";
import useMessageStore from "@/hooks/StateHooks/useMessageStore";
import useSequencerStore from "@/hooks/StateHooks/useSequencerStore";
import useSequencerActions from "@/hooks/useSequencerActions";
import useSequencerActionsDataStore from "@/hooks/StateHooks/useSequencerActionsStore";
import useUserStore from "@/hooks/StateHooks/useUserStore";
import useUserAuthActions from "@/hooks/useUserAuthActions";

import { loadSequencerAsync } from "@/services/sequencerService";
import { validateTokenAsync } from "@/services/loginService";

import { validateString } from "@/utils/typeChecking";

import { toast } from "../ui/use-toast";
import useIsDialogOrMenuOpenStore from "@/hooks/StateHooks/useIsDialogOrMenuOpenStore";
import useUserAuthStore from "@/hooks/StateHooks/useUserAuthStore";

const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  const sequencer = useSequencerStore();
  const sequencerActionData = useSequencerActionsDataStore();
  const user = useUserStore();
  const errorMessage = useMessageStore();
  const { isLoading, set: setIsLoading } = useIsLoadingStore();

  const { saveHandler, loadHandler, updateHandler } = useSequencerActions();
  const userAuth = useUserAuthActions();
  const userAuthStore = useUserAuthStore();
  const uiState = useIsDialogOrMenuOpenStore();

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
  }, [user.username, uiState.isSaveDialogOpen]);

  return (
    <nav className="bg-stone-400/25">
      <NavBar
        isMobileMenuOpen={uiState.isMobileMenuOpen}
        setIsMobileMenuOpen={uiState.setIsMobileMenuOpen}
        isUserMenuOpen={uiState.isUserMenuOpen}
        setIsUserMenuOpen={uiState.setIsUserMenuOpen}
        userIsAuthenticated={user.isAuthenticated}
        loginHandler={userAuth.loginHandler}
        setUsername={userAuthStore.setUsername}
        setPassword={userAuthStore.setPassword}
        setSeqName={sequencerActionData.setSaveSeqName}
        saveHandler={saveHandler}
        logoutHandler={userAuth.logoutHandler}
        errorMessage={errorMessage.message}
        isSaveDialogOpen={uiState.isSaveDialogOpen}
        setIsSaveDialogOpen={uiState.setIsSaveDialogOpen}
        isLoadDialogOpen={uiState.isLoadDialogOpen}
        setIsLoadDialogOpen={uiState.setIsLoadDialogOpen}
        loadHandler={loadHandler}
        sequences={sequencerActionData.loadedSequences}
        setSelection={sequencerActionData.setSelectedSeq}
        isRunning={sequencer.isRunning}
        updateHandler={updateHandler}
        registerHandler={userAuth.registerHandler}
        setConfPassword={userAuthStore.setConfPassword}
        isRegisterDialogOpen={uiState.isRegisterDialogOpen}
        setIsRegisterDialogOpen={uiState.setIsRegisterDialogOpen}
        isLoading={isLoading}
      />
      {uiState.isMobileMenuOpen ? (
        <MobileNavMenu
          userIsAuthenticated={user.isAuthenticated}
          loginHandler={userAuth.loginHandler}
          setUsername={userAuthStore.setUsername}
          setPassword={userAuthStore.setPassword}
          setSeqName={sequencerActionData.setSaveSeqName}
          saveHandler={saveHandler}
          logoutHandler={userAuth.logoutHandler}
          errorMessage={errorMessage.message}
          isSaveDialogOpen={uiState.isSaveDialogOpen}
          setIsSaveDialogOpen={uiState.setIsSaveDialogOpen}
          isLoadDialogOpen={uiState.isLoadDialogOpen}
          setIsLoadDialogOpen={uiState.setIsLoadDialogOpen}
          loadHandler={loadHandler}
          sequences={sequencerActionData.loadedSequences}
          setSelection={sequencerActionData.setSelectedSeq}
          isRunning={sequencer.isRunning}
          updateHandler={updateHandler}
          registerHandler={userAuth.registerHandler}
          setConfPassword={userAuthStore.setConfPassword}
          isRegisterDialogOpen={uiState.isRegisterDialogOpen}
          setIsRegisterDialogOpen={uiState.setIsRegisterDialogOpen}
          isLoading={isLoading}
        />
      ) : null}
    </nav>
  );
};
export default NavBarContainer;
