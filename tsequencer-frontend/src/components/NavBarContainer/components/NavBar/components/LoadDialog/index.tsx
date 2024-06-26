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
  isLoading,
}: LoadDialogType) => {
  if (window.location.pathname !== "/") return null;
  return (
    <Dialog open={isLoadDialogOpen} onOpenChange={setIsLoadDialogOpen}>
      <DialogTrigger asChild>
        {/* Setting disabled on Load Button is a cheap hack to stop user attempting loading while the sequencer is playing and should probably be handled better */}
        {!isMobile ? (
          <Button
            disabled={isRunning ? true : false}
            className="rounded-md bg-inherit px-3 py-2 text-sm font-medium text-stone-300 hover:bg-stone-600 hover:text-white"
          >
            Load
          </Button>
        ) : (
          <Button
            disabled={isRunning ? true : false}
            className="text-md block min-w-full rounded-md bg-inherit px-3 py-2 text-left font-medium text-stone-300 hover:bg-stone-700 hover:text-white"
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
          isLoading={isLoading}
        />
        {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
      </DialogContent>
    </Dialog>
  );
};

export default LoadDialog;
