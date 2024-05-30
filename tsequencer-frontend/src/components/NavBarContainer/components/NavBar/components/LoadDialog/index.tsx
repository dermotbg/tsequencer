import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import DisplayErrorMessage from "../../../../../UtilityComponents/DisplayErrorMessage";
import SelectFormContainer from "../../../../../UtilityComponents/SelectInputContainer";

import type { LoadDialogType } from "../../../../types";

const LoadDialog = ({
  isMobile = false,
  errorMessage,
  isLoadDialogOpen,
  setIsLoadDialogOpen,
  sequences,
  setSelection,
  loadHandler,
  isRunning,
}: LoadDialogType) => {
  return (
    <Dialog open={isLoadDialogOpen} onOpenChange={setIsLoadDialogOpen}>
      <DialogTrigger asChild>
        {/* Setting disabled on Load Button is a cheap hack to stop user attempting loading while the sequencer is playing and should probably be handled better */}
        {!isMobile ? (
          <Button
            disabled={isRunning ? true : false}
            className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Load
          </Button>
        ) : (
          <Button
            disabled={isRunning ? true : false}
            className="bg-inherit min-w-full block text-left text-stone-300 hover:bg-stone-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
          >
            Load
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <SelectFormContainer
          title="Load"
          description="Please choose a sequence below"
          submitHandler={loadHandler}
          sequences={sequences}
          setSelection={setSelection}
          isMobile={isMobile}
          confirmText="Load"
        />
        {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
      </DialogContent>
    </Dialog>
  );
};

export default LoadDialog;
