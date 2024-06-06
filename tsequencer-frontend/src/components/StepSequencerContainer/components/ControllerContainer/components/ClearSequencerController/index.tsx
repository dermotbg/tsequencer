import { Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ClearSequencerController = ({
  clearSequencer,
  isRunning,
}: {
  clearSequencer: () => void;
  isRunning: boolean;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={isRunning === true} className="p-8 border-4 rounded-md m-2">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to clear the sequencer?</AlertDialogTitle>
          <AlertDialogDescription>
            This will remove all instruments and pararmeters from each step and start from a blank
            slate. This cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => clearSequencer()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearSequencerController;
