import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import type { LoginDialogType } from "../../types"
import DisplayErrorMessage from "../DisplayErrorMessage"
import TextInput from "../UtilityComponents/TextInputContainer"

const LoginDialog = ({ isMobile = false, loginHandler, setUsername, setPassword, errorMessage }: LoginDialogType ) => {

  return(
    <Dialog>
      <DialogTrigger asChild>
        {!isMobile 
        ? <Button className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Login</Button>
        : <Button className="bg-inherit min-w-full block text-left text-stone-300 hover:bg-stone-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" >Login</Button>
        }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Login
          </DialogTitle>
          <DialogDescription>
            Please enter your username and password below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={loginHandler}>
          <TextInput 
            formTitle={'username'}
            setFormState={setUsername}
            type="text"
          />
          <div className="grid gap-4 py-4">
            <TextInput 
              formTitle={'password'}
              setFormState={setPassword}
              type="password"
            />
            {
              errorMessage
              ? <DisplayErrorMessage errorMessage={errorMessage} />
              : null 
            }
            <div className="text-right py-4">
              Don't have an account?
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={'outline'}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
        </DialogContent>
    </Dialog>
  )

}

export default LoginDialog