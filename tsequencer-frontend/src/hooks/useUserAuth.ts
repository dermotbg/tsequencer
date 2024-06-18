import { useState } from "react";

import { loginRequestAsync, logoutRequestAsync } from "@/services/loginService";

import { toast } from "@/components/ui/use-toast";

import useIsLoadingStore from "./StateHooks/useIsLoadingStore";
import useMessageStore from "./StateHooks/useMessageStore";
import useUserStore from "./StateHooks/useUserStore";

import type { FormEvent } from "react";
import { createUserAsync } from "@/services/userService";
import { prepareSaveUserObject } from "@/components/NavBarContainer/utils/prepareSaveUserObject";

const useUserAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const user = useUserStore();
  const errorMessage = useMessageStore();
  const isLoading = useIsLoadingStore();

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    isLoading.set(true);
    try {
      const resp = await loginRequestAsync({ username, password });
      // set string to LS only to fire token validation when it's defined
      localStorage.setItem("user", JSON.stringify("loggedIn"));
      user.setUsername(resp.username);
      user.setUserId(resp.id);
      user.setAuthenticated(true);
      toast({ description: "You are now logged in." });
      setUsername("");
      setPassword("");
    } catch (error) {
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    } finally {
      isLoading.set(false);
    }
  };

  const logoutHandler = () => {
    user.setUsername(null);
    user.setUserId(null);
    user.setAuthenticated(false);
    localStorage.removeItem("user");
    logoutRequestAsync();
  };

  const registerHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createUserAsync(prepareSaveUserObject(username, password, confPassword));
      toast({ description: "Registration successful! Please log in." });
      setIsRegisterDialogOpen(false);
    } catch (error) {
      console.log(error);
      errorMessage.set(`${error}`);
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 5000);
    }
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    setConfPassword,
    isRegisterDialogOpen,
    setIsRegisterDialogOpen,
    loginHandler,
    logoutHandler,
    registerHandler,
    newPassword,
    setNewPassword,
    confPassword,
    newUsername,
    setNewUsername,
  };
};

export default useUserAuth;
