import { create } from "zustand";

interface AssignedKeysType {
  kick: string;
  clap: string;
  snare: string;
  closedHH: string;
  openHH: string;
  ride: string;
  sub: string;
  perc: string;
  perc2: string;
  perc3: string;
  perc4: string;
  perc5: string;
  set: (instrument: string, keyCode: string) => void;
}

const useAssignedKeysStore = create<AssignedKeysType>()((set) => ({
  kick: "KeyK",
  clap: "KeyC",
  snare: "KeyS",
  closedHH: "KeyC",
  openHH: "KeyO",
  ride: "KeyR",
  sub: "KeyL",
  perc: "KeyY",
  perc2: "KeyU",
  perc3: "KeyI",
  perc4: "KeyO",
  perc5: "Keyp",
  set: (instrument, keyCode) => set(() => ({ [instrument]: keyCode })),
}));

export default useAssignedKeysStore;
