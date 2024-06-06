import { loginRequestAsync, logoutRequestAsync } from "@/services/loginService";

import { toast } from "@/components/ui/use-toast";

import useIsLoadingStore from "./StateHooks/useIsLoadingStore";
import useMessageStore from "./StateHooks/useMessageStore";
import useUserStore from "./StateHooks/useUserStore";

import type { FormEvent } from "react";

interface LoginType {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const useLogin = ({ username, password, setUsername, setPassword }: LoginType) => {
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
      user.setAuthenticated(true);
      isLoading.set(false);
      toast({ description: "You are now logged in." });
    } catch (error) {
      isLoading.set(false);
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    }
  };

  const logoutHandler = () => {
    setUsername("");
    setPassword("");
    user.setAuthenticated(false);
    localStorage.removeItem("user");
    logoutRequestAsync();
  };

  return { loginHandler, logoutHandler };
};

export default useLogin;
