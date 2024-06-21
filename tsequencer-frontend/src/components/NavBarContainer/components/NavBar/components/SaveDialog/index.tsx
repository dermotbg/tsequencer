import { useState } from "react";
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
import { Separator } from "@/components/ui/separator";

import DisplayErrorMessage from "../../../../../UtilityComponents/DisplayErrorMessage";
import SelectFormContainer from "../../../../../UtilityComponents/SelectInputContainer";
import TextInput from "../../../../../UtilityComponents/TextInputContainer";

import type { SaveDialogType } from "../../../../types";
import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";
import useSequencerStore from "@/hooks/StateHooks/useSequencerStore";

const SaveDialog = ({
  isMobile = false,
  setSeqName,
  saveHandler,
  errorMessage,
  isSaveDialogOpen,
  setIsSaveDialogOpen,
  sequences,
  setSelection,
  updateHandler,
  isLoading,
}: SaveDialogType) => {
  const [wasClicked, setWasClicked] = useState(false);
  const { activeSeqName } = useSequencerStore();
  if (window.location.pathname !== "/") return null;
  return (
    <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
      <DialogTrigger asChild>
        {!isMobile ? (
          <Button className="rounded-md bg-inherit px-3 py-2 text-sm font-medium text-stone-300 hover:bg-stone-600 hover:text-white">
            Save
          </Button>
        ) : (
          <Button className="text-md block min-w-full rounded-md bg-inherit px-3 py-2 text-left font-medium text-stone-300 hover:bg-stone-700 hover:text-white">
            Save
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save</DialogTitle>
          <DialogDescription>Please enter a name for the sequence below</DialogDescription>
        </DialogHeader>
        <form onSubmit={saveHandler}>
          <TextInput
            id="seq-name"
            formTitle={"sequence name"}
            setFormState={setSeqName}
            type="text"
          />
          {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
          <DialogFooter className="p-4">
            <Button
              className={isMobile ? "mb-2" : ""}
              type="submit"
              onClick={() => {
                setWasClicked(true);
                setTimeout(() => {
                  setWasClicked(false);
                }, 1000);
              }}
            >
              {isLoading && wasClicked ? <LoadingSpinner size={20} margin={0} /> : "Save"}
            </Button>
          </DialogFooter>
        </form>
        <Separator className="my-3 rounded-lg" />
        <SelectFormContainer
          title="Update"
          description="Update an existing sequence"
          isMobile={isMobile}
          submitHandler={updateHandler}
          sequences={sequences}
          setSelection={setSelection}
          confirmText={"Update"}
          isLoading={isLoading}
          activeSeq={activeSeqName}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SaveDialog;
