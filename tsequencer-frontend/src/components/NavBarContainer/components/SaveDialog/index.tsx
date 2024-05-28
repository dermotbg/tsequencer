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
import { DialogClose } from "@radix-ui/react-dialog"
import { SaveDialogType } from "../../types"
import DisplayErrorMessage from "../DisplayErrorMessage"
import SelectFormContainer from "../SelectFormContainer"
import { Separator } from "@/components/ui/separator"

// TODO: THERE IS NO SAVE OPTION ON MOBILE 

const SaveDialog = ({ isMobile = false, setSeqName, saveHandler, errorMessage, isSaveDialogOpen, setIsSaveDialogOpen, sequences, setSelection, updateHandler }: SaveDialogType ) => {

  return(
    <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
      <DialogTrigger asChild>
        {!isMobile 
        ? <Button className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Save</Button>
        : <Button className="bg-inherit min-w-full block text-left text-stone-300 hover:bg-stone-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" >Save</Button>
        }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Save
          </DialogTitle>
          <DialogDescription>
            Please enter a name for the sequence below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={saveHandler}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Sequence Name
            </Label>
            <Input
              id="seq-name"
              className="col-span-3"
              onChange={(e) => setSeqName(e.target.value)}
              required
            />
          </div>
            {errorMessage
              ? <DisplayErrorMessage errorMessage={errorMessage} />
              : null 
            }
          <DialogFooter className="p-4">
            <DialogClose asChild>
              <Button type="button" variant={'outline'}>Cancel</Button>
            </DialogClose>
              <Button className={isMobile ? "mb-2": ""} type="submit">Save</Button>
          </DialogFooter>
        </form>
        <Separator className="my-3 rounded-lg" />
        <SelectFormContainer
          title="Update"
          description="Update an existing sequence"
          isMobile={isMobile}
          updateHandler={updateHandler} 
          sequences={sequences} 
          errorMessage={errorMessage}
          setSelection={setSelection}

        />
        </DialogContent>
    </Dialog>
  )

}

export default SaveDialog