import { create } from "zustand";

interface RecordStateType {
  record: boolean;
  stepRef: number;
  setStepRef: (stepIndex: number) => void;
  setRecording: () => void;
}

const useRecordStore = create<RecordStateType>()((set) => ({
  record: false,
  stepRef: 0,
  setStepRef: (stepIndex: number) => set(() => ({ stepRef: stepIndex })),
  setRecording: () => set((state) => ({ record: !state.record })),
}));

export default useRecordStore;
