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

import DisplayErrorMessage from "../DisplayErrorMessage";
import SelectFormContainer from "../UtilityComponents/SelectInputContainer";
import TextInput from "../UtilityComponents/TextInputContainer";

import type { SaveDialogType } from "../../types";

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
}: SaveDialogType) => {
  return (
    <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
      <DialogTrigger asChild>
        {!isMobile ? (
          <Button className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Save
          </Button>
        ) : (
          <Button className="bg-inherit min-w-full block text-left text-stone-300 hover:bg-stone-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
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
            <Button className={isMobile ? "mb-2" : ""} type="submit">
              Save
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
          confirmText="Update"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SaveDialog;
