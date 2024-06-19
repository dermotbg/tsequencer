import type { FormEvent } from "react";

import { loginRequestAsync, logoutRequestAsync } from "@/services/loginService";

import { toast } from "@/components/ui/use-toast";

import useIsDialogOrMenuOpenStore from "./StateHooks/useIsDialogOrMenuOpenStore";
import useIsLoadingStore from "./StateHooks/useIsLoadingStore";
import useMessageStore from "./StateHooks/useMessageStore";
import useUserAuthStore from "./StateHooks/useUserAuthStore";
import useUserStore from "./StateHooks/useUserStore";

import { createUserAsync } from "@/services/userService";
import { prepareSaveUserObject } from "@/components/NavBarContainer/utils/prepareSaveUserObject";

const useUserAuthActions = () => {
  const { setIsRegisterDialogOpen } = useIsDialogOrMenuOpenStore();
  const user = useUserStore();
  const userAuthStore = useUserAuthStore();
  const errorMessage = useMessageStore();
  const isLoading = useIsLoadingStore();

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    isLoading.set(true);
    try {
      const resp = await loginRequestAsync({
        username: userAuthStore.username,
        password: userAuthStore.password,
      });
      // set string to LS only to fire token validation when it's defined
      localStorage.setItem("user", JSON.stringify("loggedIn"));
      user.setUsername(resp.username);
      user.setUserId(resp.id);
      user.setAuthenticated(true);
      toast({ description: "You are now logged in." });
      userAuthStore.setUsername("");
      userAuthStore.setPassword("");
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
        prepareSaveUserObject(
          userAuthStore.username,
          userAuthStore.password,
          userAuthStore.confPassword,
        ),
      );
      toast({ description: "Registration successful! Please log in." });
      setIsRegisterDialogOpen(false);
    } catch (error) {
      errorMessage.set(`${error}`);
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 5000);
    }
  };

  return {
    loginHandler,
    logoutHandler,
    registerHandler,
  };
};

export default useUserAuthActions;
