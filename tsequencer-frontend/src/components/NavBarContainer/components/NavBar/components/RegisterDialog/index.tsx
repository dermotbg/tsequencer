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

import DisplayErrorMessage from "../../../../../UtilityComponents/DisplayErrorMessage";
import TextInput from "../../../../../UtilityComponents/TextInputContainer";

import type { RegisterDialogType } from "../../../../types";

const RegisterDialog = ({
  errorMessage,
  registerHandler,
  setUsername,
  setPassword,
  setConfPassword,
  isRegisterDialogOpen,
  setIsRegisterDialogOpen,
}: RegisterDialogType) => {
  return (
    <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          className="justify-end rounded-md bg-inherit p-0 text-sm font-medium text-blue-400"
        >
          Register here
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>Please enter a username and password below</DialogDescription>
        </DialogHeader>
        <form onSubmit={registerHandler}>
          <TextInput formTitle={"username "} setFormState={setUsername} type="text" />
          <div className="grid gap-4 py-4">
            <TextInput formTitle={"password"} setFormState={setPassword} type="password" />
            <TextInput
              formTitle={"confirm Password"}
              setFormState={setConfPassword}
              type="password"
            />
            {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={"outline"}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Register</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
