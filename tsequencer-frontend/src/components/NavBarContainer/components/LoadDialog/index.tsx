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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { DialogClose } from "@radix-ui/react-dialog"
import { LoadDialogType } from "../../types"
import DisplayErrorMessage from "../DisplayErrorMessage"
import { LoadedSeqType } from "@/services/sequencerService"


const LoadDialog = ({ isMobile = false, errorMessage, isLoadDialogOpen, setIsLoadDialogOpen, sequences, setSelection, loadHandler }: LoadDialogType ) => {

  return(
    <Dialog open={isLoadDialogOpen} onOpenChange={setIsLoadDialogOpen}>
      <DialogTrigger asChild>
        {!isMobile 
        ? <Button className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Load</Button>
        : <Button className="bg-inherit min-w-full block text-left text-stone-300 hover:bg-stone-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" >Load</Button>
        }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Load
          </DialogTitle>
          <DialogDescription>
            Please choose a sequencer below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={loadHandler}>
          <div className="gap-4">
            <RadioGroup defaultValue="option-one" onValueChange={(value) => setSelection(value)}>
                {sequences?.map((s: LoadedSeqType) => {
                  return(
                    <div className="flex items-center space-x-2" key={s.name}>
                      <RadioGroupItem value={s.name} id={s.name}  />
                      <Label htmlFor={s.name}>{s.name}</Label>
                    </div>
                  )
                })}
            </RadioGroup>
          </div>
              {errorMessage
                ? <DisplayErrorMessage errorMessage={errorMessage} />
                : null 
              }
            <DialogFooter className="p-4">
              <DialogClose asChild>
                <Button type="button" variant={'outline'}>Cancel</Button>
              </DialogClose>
                <Button className={isMobile ? "mb-2": ""} type="submit" >Load</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )

}

export default LoadDialog