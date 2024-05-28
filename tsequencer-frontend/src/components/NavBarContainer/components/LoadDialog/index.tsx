import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { LoadDialogType } from "../../types"
import SelectFormContainer from "../SelectFormContainer"


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
        <SelectFormContainer 
          title="Load"
          description="Please choose a sequence below"
          submitHandler={loadHandler}
          errorMessage={errorMessage}
          sequences={sequences}
          setSelection={setSelection}
          isMobile={isMobile}
          confirmText="Load"
        />
      </DialogContent>
    </Dialog>
  )

}

export default LoadDialog