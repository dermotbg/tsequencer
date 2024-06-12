import { useEffect, useState } from "react";

import MobileNavMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";

import useIsLoadingStore from "@/hooks/StateHooks/useIsLoadingStore";
import useLogin from "@/hooks/useLogin";
import useMessageStore from "@/hooks/StateHooks/useMessageStore";
import useRegisterUser from "@/hooks/useRegisterUser";
import useSequencerStore from "@/hooks/StateHooks/useSequencerStore";
import useSequencerActions from "@/hooks/useSequencerActions";
import useUserStore from "@/hooks/StateHooks/useUserStore";

import { loadSequencerAsync } from "@/services/sequencerService";
import { validateTokenAsync } from "@/services/loginService";

import { validateString } from "@/utils/typeChecking";

import type { LoadedSeqType } from "@/services/sequencerService";

const NavBarContainer = () => {
  // Template reconstructed from https://tailwindui.com/components/application-ui/navigation/navbars
  // Menus open/closed state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [isLoadDialogOpen, setIsLoadDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);

  // login/reg state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const { loginHandler, logoutHandler } = useLogin({
    username,
    password,
    setUsername,
    setPassword,
  });
  const { registerHandler } = useRegisterUser({
    username,
    password,
    confPassword,
    setIsRegisterDialogOpen,
  });

  // Save Seq State
  const [seqName, setSeqName] = useState("");

  // Load seq state
  const [sequences, setSequences] = useState<LoadedSeqType[] | undefined>();
  const [selection, setSelection] = useState<string | undefined>();

  // Global State
  const sequencer = useSequencerStore();
  const user = useUserStore();
  const errorMessage = useMessageStore();
  const { isLoading, set: setIsLoading } = useIsLoadingStore();
  const { saveHandler, loadHandler, updateHandler } = useSequencerActions({
    sequences,
    seqName,
    selection,
    setIsSaveDialogOpen,
    setIsLoadDialogOpen,
  });

  // Login Validation Effect
  useEffect(() => {
    setIsLoading(true);
    const runTokenValidation = async () => {
      // fetch validation info from BE
      const userValidation = await validateTokenAsync();

      if (userValidation && userValidation.status !== 200) {
        // TODO: ALERT SESSION EXPIRED
        logoutHandler();
        clearInterval(tokenValidationPoll);
      } else {
        // update FE state with logged in user info set username to LS to confirm loop already completed
        user.setAuthenticated(true);
        user.setUsername(validateString(userValidation?.user.username));
        user.setUserId(validateString(userValidation?.user.id));
      }
    };

    const tokenValidationPoll = setInterval(() => {
      // start polling to validate access token if user has already gone through loop
      if (localStorage.getItem("user")) runTokenValidation();
      setIsLoading(false);
    }, 2000);
    return () => clearInterval(tokenValidationPoll);
  }, [user, user.isAuthenticated]);

  // Load user sequences
  useEffect(() => {
    const fetchSequences = async () => {
      if (user.username) {
        const response = await loadSequencerAsync(validateString(user.username));
        setSequences(response);
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
        loginHandler={loginHandler}
        setUsername={setUsername}
        setPassword={setPassword}
        setSeqName={setSeqName}
        saveHandler={saveHandler}
        logoutHandler={logoutHandler}
        errorMessage={errorMessage.message}
        isSaveDialogOpen={isSaveDialogOpen}
        setIsSaveDialogOpen={setIsSaveDialogOpen}
        isLoadDialogOpen={isLoadDialogOpen}
        setIsLoadDialogOpen={setIsLoadDialogOpen}
        loadHandler={loadHandler}
        sequences={sequences}
        setSelection={setSelection}
        isRunning={sequencer.isRunning}
        updateHandler={updateHandler}
        registerHandler={registerHandler}
        setConfPassword={setConfPassword}
        isRegisterDialogOpen={isRegisterDialogOpen}
        setIsRegisterDialogOpen={setIsRegisterDialogOpen}
        isLoading={isLoading}
      />
      {mobileMenuOpen ? (
        <MobileNavMenu
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
          isLoadDialogOpen={isLoadDialogOpen}
          setIsLoadDialogOpen={setIsLoadDialogOpen}
          loadHandler={loadHandler}
          sequences={sequences}
          setSelection={setSelection}
          isRunning={sequencer.isRunning}
          updateHandler={updateHandler}
          registerHandler={registerHandler}
          setConfPassword={setConfPassword}
          isRegisterDialogOpen={isRegisterDialogOpen}
          setIsRegisterDialogOpen={setIsRegisterDialogOpen}
          isLoading={isLoading}
        />
      ) : null}
    </nav>
  );
};
export default NavBarContainer;
