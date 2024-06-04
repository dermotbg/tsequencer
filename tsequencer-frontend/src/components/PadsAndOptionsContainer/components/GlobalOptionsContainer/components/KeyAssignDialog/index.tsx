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

import useAssignedKeysStore from "@/hooks/StateHooks/useAssignedKeysStore";
import useInstruments from "@/hooks/useInstruments";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";

import type { AssignedKeysType } from "@/hooks/StateHooks/useAssignedKeysStore";

const KeyAssignDialog = () => {
  const instruments = useInstruments();
  const assignedKeys = useAssignedKeysStore();

  const handleKeyPress = (i: string, key: string) => {
    if (!/^[a-zA-Z0-9]$/.test(key)) {
      return;
    }
    assignedKeys.setInputValue(i as keyof AssignedKeysType, key.toUpperCase());
    assignedKeys.setActiveKey(i as keyof AssignedKeysType, key.toUpperCase());
  };

  const onFalseSubmit = () => {
    assignedKeys.setPrevValue();
    assignedKeys.setIsDefault(false);
  };

  if (!instruments) return <LoadingSpinner />;
  if (!assignedKeys) return <LoadingSpinner />;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-inherit text-stone-300 hover:bg-stone-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          <div className="flex items-center justify-around space-x-2 pb-3 mt-4">
            <Keyboard />
            <div>Assign Keys</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign instruments to keyboard</DialogTitle>
          <DialogDescription>
            Please select the instrument and then press the key you wish to assign to it.
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
                  onKeyDown={(e) => handleKeyPress(i, e.key)}
                  onChange={() => {}}
                />
              </div>
            </div>
          );
        })}
        {/* {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null} */}
        <DialogFooter className="p-4">
          <DialogClose asChild>
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" onClick={onFalseSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default KeyAssignDialog;
