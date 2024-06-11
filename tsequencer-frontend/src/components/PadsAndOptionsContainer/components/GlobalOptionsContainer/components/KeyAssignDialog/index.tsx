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
        <Button className="hidden rounded-md bg-inherit px-3 py-2 text-sm font-medium text-stone-300 hover:bg-stone-600 hover:text-white sm:flex">
          <div className="mt-4 flex items-center justify-around space-x-2 pb-3">
            <Keyboard />
            <div>Assign Keys</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Assign instruments to keyboard</DialogTitle>
          <div className="text-md pt-3">
            Please select the keys you wish to assign to each instrument.
          </div>
          <DialogDescription>
            <span className="pt-3 italic">
              For more detailed instructions on how to use key tracking, please visit the tutorial
              <Link to="/tutorial">
                <Button
                  variant={"link"}
                  className="justify-end rounded-md bg-inherit pl-1 text-sm font-medium text-blue-400"
                >
                  here.
                </Button>
              </Link>
            </span>
          </DialogDescription>
        </DialogHeader>
        {Object.keys(instruments).map((i) => {
          return (
            <div key={i} className="mx-4 grid grid-cols-2 items-end">
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
                  className="col-span-3 min-w-10 max-w-10"
                />
              </div>
              <div className="flex flex-row items-center justify-end">
                <ArrowRight />
                <Input
                  id={`${i}`}
                  maxLength={1}
                  value={assignedKeys[i as keyof AssignedKeysType].inputVal}
                  className="col-span-3 ml-14 min-w-10 max-w-10"
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
