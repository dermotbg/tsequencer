import { create } from "zustand";

interface ActivePadStateType {
  activePad: string | undefined;
  set: (instrument: string | undefined) => void;
}

const useActivePadStore = create<ActivePadStateType>()((set) => ({
  activePad: undefined,
  set: (instrument) => set(() => ({ activePad: instrument })),
}));

export default useActivePadStore;
