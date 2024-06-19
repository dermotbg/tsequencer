import { useState } from "react";
import type { FormEvent } from "react";

import { loginRequestAsync, logoutRequestAsync } from "@/services/loginService";

import { toast } from "@/components/ui/use-toast";

import useIsLoadingStore from "./StateHooks/useIsLoadingStore";
import useMessageStore from "./StateHooks/useMessageStore";
import useUserAuthStore from "./StateHooks/useUserAuthStore";
import useUserStore from "./StateHooks/useUserStore";

import { createUserAsync } from "@/services/userService";
import { prepareSaveUserObject } from "@/components/NavBarContainer/utils/prepareSaveUserObject";

const useUserAuth = () => {
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const user = useUserStore();
  const userAuth = useUserAuthStore();
  const errorMessage = useMessageStore();
  const isLoading = useIsLoadingStore();

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    isLoading.set(true);
    try {
      const resp = await loginRequestAsync({
        username: userAuth.username,
        password: userAuth.password,
      });
      // set string to LS only to fire token validation when it's defined
      localStorage.setItem("user", JSON.stringify("loggedIn"));
      user.setUsername(resp.username);
      user.setUserId(resp.id);
      user.setAuthenticated(true);
      toast({ description: "You are now logged in." });
      userAuth.setUsername("");
      userAuth.setPassword("");
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
      await createUserAsync(
        prepareSaveUserObject(userAuth.username, userAuth.password, userAuth.confPassword),
      );
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
    username: userAuth.username,
    password: userAuth.password,
    setUsername: userAuth.setUsername,
    setPassword: userAuth.setPassword,
    setConfPassword: userAuth.setConfPassword,
    isRegisterDialogOpen,
    setIsRegisterDialogOpen,
    loginHandler,
    logoutHandler,
    registerHandler,
    newPassword: userAuth.newPassword,
    setNewPassword: userAuth.setNewPassword,
    confPassword: userAuth.confPassword,
    newUsername: userAuth.newUsername,
    setNewUsername: userAuth.setNewUsername,
  };
};

export default useUserAuth;
