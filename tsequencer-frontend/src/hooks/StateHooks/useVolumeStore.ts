import { create } from "zustand";

interface VolumeStateType {
  level: number;
  set: (gain: number) => void;
}

const useVolumeStore = create<VolumeStateType>()((set) => ({
  level: 3.0,
  set: (gain) => set(() => ({ level: gain })),
}));

export default useVolumeStore;
