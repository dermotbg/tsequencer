import { create } from "zustand";

export interface AssignedKeysInstrumentType {
  default: string;
  active: string;
  inputVal: string;
  previousVal: string;
}

export interface AssignedKeysType {
  kick: AssignedKeysInstrumentType;
  clap: AssignedKeysInstrumentType;
  snare: AssignedKeysInstrumentType;
  closedHH: AssignedKeysInstrumentType;
  openHH: AssignedKeysInstrumentType;
  ride: AssignedKeysInstrumentType;
  sub: AssignedKeysInstrumentType;
  perc: AssignedKeysInstrumentType;
  perc2: AssignedKeysInstrumentType;
  perc3: AssignedKeysInstrumentType;
  perc4: AssignedKeysInstrumentType;
  perc5: AssignedKeysInstrumentType;
}
export interface AssignedKeyDefaultBoolean {
  isDefault: boolean;
}
export interface AssignedKeysActionType {
  setIsDefault: (toggle: boolean) => void;
  setActiveKey: (instrument: keyof AssignedKeysType, keyCode: string) => void;
  setInputValue: (instrument: keyof AssignedKeysType, keyCode: string) => void;
  setPrevValue: () => void;
  isDuplicate: (key: string) => boolean | undefined;
}

const initialState: AssignedKeysType = {
  kick: { default: "K", active: "K", inputVal: "", previousVal: "" },
  clap: { default: "C", active: "C", inputVal: "", previousVal: "" },
  snare: { default: "S", active: "S", inputVal: "", previousVal: "" },
  closedHH: { default: "X", active: "X", inputVal: "", previousVal: "" },
  openHH: { default: "Z", active: "Z", inputVal: "", previousVal: "" },
  ride: { default: "R", active: "R", inputVal: "", previousVal: "" },
  sub: { default: "L", active: "L", inputVal: "", previousVal: "" },
  perc: { default: "Y", active: "Y", inputVal: "", previousVal: "" },
  perc2: { default: "U", active: "U", inputVal: "", previousVal: "" },
  perc3: { default: "I", active: "I", inputVal: "", previousVal: "" },
  perc4: { default: "O", active: "O", inputVal: "", previousVal: "" },
  perc5: { default: "P", active: "P", inputVal: "", previousVal: "" },
};

const useAssignedKeysStore = create<
  AssignedKeysType & AssignedKeysActionType & AssignedKeyDefaultBoolean
>()((set, get) => ({
  ...initialState,
  isDefault: true,
  setIsDefault: (toggle: boolean) => set(() => ({ isDefault: toggle })),
  setActiveKey: (instrument, keyCode) =>
    set((state) => ({
      ...state,
      [instrument]: { ...state[instrument], active: keyCode.toUpperCase() },
    })),
  setInputValue: (instrument, keyCode) =>
    set((state) => ({
      ...state,
      [instrument]: { ...state[instrument], inputVal: keyCode.toUpperCase() },
    })),
  setPrevValue: () =>
    set((state) => {
      const updatedState = Object.keys(state).reduce((acc, key) => {
        const instrument = state[key as keyof AssignedKeysType];
        if (typeof instrument !== "boolean" && typeof instrument !== "function") {
          if (!instrument.inputVal) {
            acc[key as keyof AssignedKeysType] = {
              ...instrument,
              previousVal: instrument.default,
            };
          } else if (instrument.previousVal !== instrument.inputVal) {
            acc[key as keyof AssignedKeysType] = {
              ...instrument,
              previousVal: instrument.inputVal,
            };
          }
        }
        return acc;
      }, {} as AssignedKeysType);
      return { ...state, ...updatedState };
    }),
  isDuplicate: (value) => {
    for (const key of Object.keys(get())) {
      if (
        key === "isDefault" ||
        key === "setIsDefault" ||
        key === "setInputValue" ||
        key === "setPrevValue" ||
        key === "isDuplicate"
      ) {
        return;
      }
      if (Object.values(get()[key as keyof AssignedKeysType].inputVal).includes(value)) return true;
    }
    return false;
  },
}));

export default useAssignedKeysStore;
