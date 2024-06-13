// Global state of data needed for Save/load/update sequencers.
import { create } from "zustand";

import { validateString } from "@/utils/typeChecking";

import type { LoadedSeqType } from "@/services/sequencerService";

interface SequencerActionsDataStateType {
  saveSeqName: string | undefined;
  loadedSequences: LoadedSeqType[] | undefined;
  selectedSeq: string | undefined;
  setSaveSeqName: (name: string | undefined) => void;
  setLoadedSequences: (sequences: LoadedSeqType[]) => void;
  setSelectedSeq: (selectedSeq: string | undefined) => void;
}

const useSequencerActionsDataStore = create<SequencerActionsDataStateType>()((set) => ({
  saveSeqName: undefined,
  loadedSequences: undefined,
  selectedSeq: undefined,
  setSaveSeqName: (name: string | undefined) => set(() => ({ saveSeqName: validateString(name) })),
  setLoadedSequences: (sequences: LoadedSeqType[]) => set(() => ({ loadedSequences: sequences })),
  setSelectedSeq: (selectedSeq: string | undefined) => set(() => ({ selectedSeq: selectedSeq })),
}));

export default useSequencerActionsDataStore;
