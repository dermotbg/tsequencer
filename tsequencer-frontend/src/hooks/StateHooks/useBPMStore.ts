import { create } from "zustand";

interface BPMStateType {
  bpm: number;
  set: (bpm: number) => void;
}

const useBPMStore = create<BPMStateType>()((set) => ({
  bpm: 128,
  set: (bpm) => set(() => ({ bpm })),
}));

export default useBPMStore;
