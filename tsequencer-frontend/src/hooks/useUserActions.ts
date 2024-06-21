import type { FormEvent } from "react";
import useUserStore from "./StateHooks/useUserStore";
import { updatePasswordAsync, updateUsernameAsync } from "@/services/userService";
import { validateString } from "@/utils/typeChecking";
import { toast } from "@/components/ui/use-toast";
import useMessageStore from "./StateHooks/useMessageStore";
import useUserAuthStore from "./StateHooks/useUserAuthStore";
import useUserAuth from "./useUserAuthActions";
import { useNavigate } from "@tanstack/react-router";

const useUserActions = () => {
  const errorMessage = useMessageStore();
  const user = useUserStore();
  const userAuth = useUserAuthStore();
  const { logoutHandler } = useUserAuth();

  const navigate = useNavigate({ from: "/user/$userId" });

  const changePasswordHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!user.username || !userAuth.password || !userAuth.newPassword)
        throw new Error("Missing Data. Please enter your current password and new password");
      if (userAuth.newPassword !== userAuth.confPassword)
        throw new Error("Confirm Password doesn't match");

      const response = await updatePasswordAsync({
        username: validateString(user.username),
        password: validateString(userAuth.password),
        newPassword: validateString(userAuth.newPassword),
        id: validateString(user.userId),
      });
      if (!response.ok) throw new Error(`${response.text}`);

      toast({ description: "Password updated. Please login with your new password" });
      userAuth.setUsername("");
      userAuth.setPassword("");
      userAuth.setNewPassword("");
      logoutHandler();
    } catch (error) {
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    } finally {
      navigate({ to: "/" });
    }
  };

  const changeUsernameHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!userAuth.username || !userAuth.password || !userAuth.newUsername)
        throw new Error(
          "Missing Data. Please enter your current username, password and new username",
        );
      const response = await updateUsernameAsync({
        username: validateString(userAuth.username),
        newUsername: validateString(userAuth.newUsername),
        password: validateString(userAuth.password),
        id: validateString(user.userId),
      });
      if (!response.ok) throw new Error(`${response.text}`);
      logoutHandler();
      navigate({ to: "/" });
      toast({ description: "Username updated, please login with your new username." });
    } catch (error) {
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    }
  };

  return { changePasswordHandler, changeUsernameHandler };
};

export default useUserActions;
