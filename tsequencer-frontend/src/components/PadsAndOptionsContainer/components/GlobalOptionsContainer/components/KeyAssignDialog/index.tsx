import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Keyboard } from "lucide-react";

const KeyAssignDialog = () => {
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
        {/* {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null} */}
        <DialogFooter className="p-4">
          <DialogClose asChild>
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default KeyAssignDialog;
