import { create } from "zustand";

import type { Sequencer } from "../../components/StepSequencerContainer/types";
import { getInitialSeqState } from "../../utils/getInitialSeqState";

interface SequencerStateType {
  seq: Sequencer;
  activeSeqName: string | undefined;
  isRunning: boolean;
  setSeq: (newSeq: Sequencer) => void;
  setActiveSeqName: (name: string) => void;
  setIsRunning: (toggle: boolean) => void;
  clearSequencer: () => void;
}

const useSequencerStore = create<SequencerStateType>()((set) => ({
  seq: getInitialSeqState(),
  activeSeqName: undefined,
  isRunning: false,
  setSeq: (newSeq: Sequencer) => set(() => ({ seq: newSeq })),
  setActiveSeqName: (name: string | undefined) => set(() => ({ activeSeqName: name })),
  setIsRunning: (toggle: boolean) => set(() => ({ isRunning: toggle })),
  clearSequencer: () => set(() => ({ seq: getInitialSeqState() })),
}));

export default useSequencerStore;
