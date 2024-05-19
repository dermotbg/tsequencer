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
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"
import { loginRequest } from "../../../../../src/services/loginService"
import { DialogClose } from "@radix-ui/react-dialog"

const LoginDialog = ({ isMobile = false }: { isMobile: boolean } ) => {

  // TODO: Abstract to Hook
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    const loginObject = {
      username: username.toLowerCase().trim(),
      password: password
    }
    try{
      loginRequest(loginObject)
    }
    catch(error){
      console.log(error)
    }
  }

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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue={"@username"}
              className="col-span-3"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Password
              </Label>
              <Input
                id="name"
                type="password"
                className="col-span-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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