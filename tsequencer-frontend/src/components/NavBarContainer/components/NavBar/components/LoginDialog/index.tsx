import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Separator } from "@/components/ui/separator";

import DisplayErrorMessage from "../../../../../UtilityComponents/DisplayErrorMessage";
import RegisterDialog from "../RegisterDialog";
import TextInput from "../../../../../UtilityComponents/TextInputContainer";

import type { LoginDialogType } from "../../../../types";
import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";

const LoginDialog = ({
  isMobile = false,
  loginHandler,
  setUsername,
  setPassword,
  setConfPassword,
  errorMessage,
  registerHandler,
  isRegisterDialogOpen,
  setIsRegisterDialogOpen,
  isLoading,
}: LoginDialogType) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={isLoading}
          className={
            !isMobile
              ? "rounded-md bg-inherit px-3 py-2 text-sm font-medium text-stone-300 hover:bg-stone-600 hover:text-white"
              : "text-md block min-w-full rounded-md bg-inherit px-3 py-2 text-left font-medium text-stone-300 hover:bg-stone-700 hover:text-white"
          }
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Please enter your username and password below</DialogDescription>
        </DialogHeader>
        <form onSubmit={loginHandler}>
          <TextInput formTitle={"username"} setFormState={setUsername} type="text" />
          <div className="grid gap-4 py-4">
            <TextInput formTitle={"password"} setFormState={setPassword} type="password" />
            {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={"outline"}>
                Cancel
              </Button>
            </DialogClose>
            <Button className={isMobile ? "mb-2" : ""} type="submit">
              {isLoading ? <LoadingSpinner size={20} margin={0} /> : "Login"}
            </Button>
          </DialogFooter>
        </form>
        <Separator />
        <div className="flex flex-col py-4 text-right">
          <p>Don't have an account? </p>
          <RegisterDialog
            setUsername={setUsername}
            setPassword={setPassword}
            setConfPassword={setConfPassword}
            registerHandler={registerHandler}
            errorMessage={errorMessage}
            isRegisterDialogOpen={isRegisterDialogOpen}
            setIsRegisterDialogOpen={setIsRegisterDialogOpen}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
