import { toast } from "@/components/ui/use-toast";

import { prepareSaveSequencerObject } from "@/components/NavBarContainer/utils/prepareSaveObject";
import {
  deleteSequencerAsync,
  saveSequencerAsync,
  updateSequencerAsync,
} from "@/services/sequencerService";
import { validateString } from "@/utils/typeChecking";

import useIsDialogOrMenuOpenStore from "./StateHooks/useIsDialogOrMenuOpenStore";
import useIsLoadingStore from "./StateHooks/useIsLoadingStore";
import useSequencerStore from "./StateHooks/useSequencerStore";
import useSequencerActionsDataStore from "./StateHooks/useSequencerActionsStore";
import useUserStore from "./StateHooks/useUserStore";
import useMessageStore from "./StateHooks/useMessageStore";

import type { FormEvent } from "react";

const useSequencerActions = () => {
  const sequencer = useSequencerStore();
  const user = useUserStore();
  const errorMessage = useMessageStore();
  const isLoading = useIsLoadingStore();
  const sequencerActionData = useSequencerActionsDataStore();
  const uiState = useIsDialogOrMenuOpenStore();

  const saveHandler = async (e: FormEvent) => {
    e.preventDefault();
    isLoading.set(true);
    try {
      if (sequencerActionData.loadedSequences && sequencerActionData.loadedSequences?.length >= 10)
        throw new Error(
          "Something went wrong: You have reached the maximum number of sequences, please delete or update your current sequences",
        );
      await saveSequencerAsync(
        prepareSaveSequencerObject(
          sequencer.seq,
          user.username,
          validateString(sequencerActionData.saveSeqName),
        ),
      );
      toast({ description: "Save successful." });
      uiState.setIsSaveDialogOpen(false);
      isLoading.set(false);
    } catch (error) {
      isLoading.set(false);
      errorMessage.set(`${error}`.slice(29));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 5000);
    }
  };

  const loadHandler = (e: FormEvent) => {
    e.preventDefault();
    isLoading.set(true);
    if (sequencerActionData.loadedSequences !== undefined) {
      const selectedSequencer = sequencerActionData.loadedSequences.find(
        (s) => s.name === validateString(sequencerActionData.selectedSeq),
      );
      if (selectedSequencer) {
        sequencer.setSeq(selectedSequencer.sequence);
        uiState.setIsLoadDialogOpen(false);
      }
    }
    isLoading.set(false);
  };

  const updateHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      isLoading.set(true);
      const selectedSeq = sequencerActionData.loadedSequences?.find(
        (s) => s.name === sequencerActionData.selectedSeq,
      );
      if (selectedSeq) {
        selectedSeq.sequence = sequencer.seq;
        await updateSequencerAsync(selectedSeq);
        toast({ description: "Update successful." });
        uiState.setIsSaveDialogOpen(false);
        isLoading.set(false);
      }
    } catch (error) {
      isLoading.set(false);
      errorMessage.set(`${error}`.slice(29));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 5000);
    }
  };

  const deleteSeqHandler = async (seqId: string) => {
    if (!sequencerActionData.loadedSequences) return;
    await deleteSequencerAsync(seqId);
    sequencerActionData.setLoadedSequences(
      sequencerActionData.loadedSequences.filter((seq) => seq.id !== seqId),
    );
    toast({ description: "Sequence deleted" });
  };

  return { saveHandler, loadHandler, updateHandler, deleteSeqHandler };
};

export default useSequencerActions;
