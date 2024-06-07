import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Keyboard } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";
import DisplayErrorMessage from "@/components/UtilityComponents/DisplayErrorMessage";

import type {
  AssignedKeyDefaultBoolean,
  AssignedKeysActionType,
  AssignedKeysType,
} from "@/hooks/StateHooks/useAssignedKeysStore";
import type { LoadedInstruments } from "@/hooks/useInstruments";

const KeyAssignDialog = ({
  instruments,
  assignedKeys,
  isKeyDialogOpen,
  setIsKeyDialogOpen,
  setKeyTrackingKeyHandler,
  submitAssignedKeysHandler,
  errorMessage,
}: {
  instruments: LoadedInstruments[];
  assignedKeys: AssignedKeysType & AssignedKeysActionType & AssignedKeyDefaultBoolean;
  isKeyDialogOpen: boolean;
  setIsKeyDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setKeyTrackingKeyHandler: (i: string, key: string) => void;
  submitAssignedKeysHandler: () => void;
  errorMessage: string | undefined;
}) => {
  if (!instruments) return <LoadingSpinner />;
  if (!assignedKeys) return <LoadingSpinner />;

  return (
    <Dialog open={isKeyDialogOpen} onOpenChange={setIsKeyDialogOpen}>
      <DialogTrigger asChild>
        <Button className="hidden sm:flex bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          <div className="flex items-center justify-around space-x-2 pb-3 mt-4">
            <Keyboard />
            <div>Assign Keys</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Assign instruments to keyboard</DialogTitle>
          <div className="pt-3 text-md">
            Please select the keys you wish to assign to each instrument.
          </div>
          <DialogDescription>
            <span className="pt-3 italic">
              For more detailed instructions on how to use key tracking, please visit the tutorial
              <Link to="/tutorial">
                <Button
                  variant={"link"}
                  className="bg-inherit text-sm justify-end text-blue-400 rounded-md pl-1 font-medium"
                >
                  here.
                </Button>
              </Link>
            </span>
          </DialogDescription>
        </DialogHeader>
        {Object.keys(instruments).map((i) => {
          return (
            <div key={i} className="grid grid-cols-2 items-end mx-4">
              <div className="flex flex-row items-center justify-end">
                <Label htmlFor={`${i}`} className="pr-20 text-start">
                  {i.toUpperCase()}
                </Label>
                <Input
                  id={`${i}: default`}
                  disabled
                  placeholder={
                    assignedKeys.isDefault
                      ? `${assignedKeys[i as keyof AssignedKeysType].default}`.toUpperCase()
                      : `${assignedKeys[i as keyof AssignedKeysType].previousVal}`.toUpperCase()
                  }
                  className="max-w-10 min-w-10 col-span-3"
                />
              </div>
              <div className="flex flex-row items-center justify-end">
                <ArrowRight />
                <Input
                  id={`${i}`}
                  maxLength={1}
                  value={assignedKeys[i as keyof AssignedKeysType].inputVal}
                  className="max-w-10 min-w-10 col-span-3 ml-14"
                  placeholder={
                    assignedKeys.isDefault
                      ? `${assignedKeys[i as keyof AssignedKeysType].default}`.toUpperCase()
                      : `${assignedKeys[i as keyof AssignedKeysType].previousVal}`.toUpperCase()
                  }
                  onKeyDown={(e) => setKeyTrackingKeyHandler(i, e.key)}
                  onChange={() => {}}
                />
              </div>
            </div>
          );
        })}
        {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
        <DialogFooter className="p-4">
          <DialogClose asChild>
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" onClick={submitAssignedKeysHandler}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default KeyAssignDialog;
