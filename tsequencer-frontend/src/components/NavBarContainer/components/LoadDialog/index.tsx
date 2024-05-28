import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

import { LoadDialogType } from "../../types"
import DisplayErrorMessage from "../DisplayErrorMessage"
import { LoadedSeqType } from "@/services/sequencerService"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


const LoadDialog = ({ isMobile = false, errorMessage, isLoadDialogOpen, setIsLoadDialogOpen, sequences, setSelection, loadHandler, isRunning }: LoadDialogType ) => {

  return(
    <Dialog open={isLoadDialogOpen} onOpenChange={setIsLoadDialogOpen}>
      <DialogTrigger asChild>
        {/* Setting sisabled on Load Button is a cheap hack to stop user attempting loading while the sequencer is playing and should probably be handled better */}
        {!isMobile 
        ? <Button disabled={isRunning ? true : false} className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Load</Button>
        : <Button disabled={isRunning ? true : false} className="bg-inherit min-w-full block text-left text-stone-300 hover:bg-stone-700 hover:text-white rounded-md px-3 py-2 text-md font-medium" >Load</Button>
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
            <Select onValueChange={(value) => setSelection(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a sequence" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sequences?.map((s: LoadedSeqType) => {
                  return(
                    <div className="flex items-center space-x-2" key={s.name}>
                      <SelectItem value={s.name} id={s.name}>{s.name.toUpperCase()}</SelectItem>
                    </div>
                  )
                })}
                </SelectGroup>
              </SelectContent>
            </Select>
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