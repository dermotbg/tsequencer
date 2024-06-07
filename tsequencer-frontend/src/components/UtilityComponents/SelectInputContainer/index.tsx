import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { LoadedSeqType } from "@/services/sequencerService";
import type { SelectFormType } from "@/components/NavBarContainer/types";
import LoadingSpinner from "../LoadingSpinner";

const SelectFormContainer = ({
  title,
  description,
  isMobile = false,
  submitHandler,
  sequences,
  setSelection,
  confirmText,
  isLoading = false,
}: SelectFormType) => {
  const [wasClicked, setWasClicked] = useState(false);
  return (
    <>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <form onSubmit={submitHandler}>
        <div className="gap-4">
          <Select onValueChange={(value) => setSelection(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a sequence" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sequences?.map((s: LoadedSeqType) => {
                  return (
                    <div className="flex items-center space-x-2" key={s.name}>
                      <SelectItem value={s.name} id={s.name}>
                        {s.name.toUpperCase()}
                      </SelectItem>
                    </div>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className="p-4">
          <DialogClose asChild>
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
          </DialogClose>
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
            {isLoading && wasClicked ? <LoadingSpinner size={20} margin={0} /> : confirmText}
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};

export default SelectFormContainer;
