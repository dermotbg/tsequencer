import { create } from "zustand";

interface IsLoadingStateType {
  isLoading: boolean;
  set: (toggle: boolean) => void;
}

const useIsLoadingStore = create<IsLoadingStateType>()((set) => ({
  isLoading: false,
  set: (toggle: boolean) => set(() => ({ isLoading: toggle })),
}));

export default useIsLoadingStore;
