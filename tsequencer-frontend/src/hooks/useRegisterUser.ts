import { toast } from "@/components/ui/use-toast";

import useMessageStore from "./StateHooks/useMessageStore";

import { prepareSaveUserObject } from "@/components/NavBarContainer/utils/prepareSaveUserObject";
import { createUserAsync } from "@/services/userService";

import type { FormEvent } from "react";

interface RegisterUserType {
  username: string;
  password: string;
  confPassword: string;
  setIsRegisterDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useRegisterUser = ({
  username,
  password,
  confPassword,
  setIsRegisterDialogOpen,
}: RegisterUserType) => {
  const errorMessage = useMessageStore();

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

  return { registerHandler };
};

export default useRegisterUser;
