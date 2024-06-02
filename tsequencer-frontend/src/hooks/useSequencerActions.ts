import { toast } from "@/components/ui/use-toast";

import { prepareSaveSequencerObject } from "@/components/NavBarContainer/utils/prepareSaveObject";
import { saveSequencerAsync, updateSequencerAsync } from "@/services/sequencerService";
import { validateString } from "@/utils/typeChecking";

import useSequencerStore from "./StateHooks/useSequencerStore";
import useUserStore from "./StateHooks/UseUserStore";
import useMessageStore from "./StateHooks/useMessageStore";

import type { FormEvent } from "react";
import type { LoadedSeqType } from "@/services/sequencerService";

interface SequencerActionsType {
  sequences: LoadedSeqType[] | undefined;
  seqName: string;
  selection: string | undefined;
  setIsSaveDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoadDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useSequencerActions = ({
  sequences,
  seqName,
  selection,
  setIsSaveDialogOpen,
  setIsLoadDialogOpen,
}: SequencerActionsType) => {
  const sequencer = useSequencerStore();
  const user = useUserStore();
  const errorMessage = useMessageStore();

  const saveHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await saveSequencerAsync(prepareSaveSequencerObject(sequencer.seq, user.username, seqName));
      toast({ description: "Save successful." });
      setIsSaveDialogOpen(false);
    } catch (error) {
      errorMessage.set(`${error}`.slice(29));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 5000);
    }
  };

  const loadHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (sequences !== undefined) {
      const selectedSequencer = sequences.find((s) => s.name === validateString(selection));
      if (selectedSequencer) {
        sequencer.setSeq(selectedSequencer.sequence);
        setIsLoadDialogOpen(false);
      }
    }
  };

  const updateHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(sequences);
    try {
      const selectedSeq = sequences?.find((s) => s.name === selection);
      if (selectedSeq) {
        await updateSequencerAsync(selectedSeq);
        toast({ description: "Update successful." });
        setIsSaveDialogOpen(false);
      }
    } catch (error) {
      errorMessage.set(`${error}`.slice(29));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 5000);
    }
  };

  return { saveHandler, loadHandler, updateHandler };
};

export default useSequencerActions;
