import type { AssignedKeysType } from "@/hooks/StateHooks/useAssignedKeysStore";
import type { LoadedInstruments } from "@/hooks/useInstruments";
import type { AvailableInstruments } from "@/types";

interface keyPressHandlerType {
  instruments: LoadedInstruments;
  keyCode: string;
  pushToSequencer: (stepRef: number, element: AvailableInstruments, volume: number) => void;
  volume: number;
  recording: boolean;
  stepRef: number;
  assignedKeys: AssignedKeysType;
}

let loopedOnce = false;

const latencyCompensator = (stepIndex: number) => {
  if (!loopedOnce) {
    loopedOnce = true;
    return stepIndex;
  } else {
    return stepIndex >= 3 ? stepIndex - 3 : 16 - (3 - stepIndex);
  }
};

// TODO include new samples
export const keyPressHandler = ({
  keyCode,
  pushToSequencer,
  volume,
  recording,
  stepRef,
  assignedKeys,
}: keyPressHandlerType) => {
  switch (keyCode) {
    case assignedKeys.kick.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "kick", volume);
      break;
    case assignedKeys.clap.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "clap", volume);
      break;
    case assignedKeys.closedHH.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "closedHH", volume);
      break;
    case assignedKeys.openHH.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "openHH", volume);
      break;
    case assignedKeys.perc.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc", volume);
      break;
    case assignedKeys.perc2.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc2", volume);
      break;
    case assignedKeys.perc3.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc3", volume);
      break;
    case assignedKeys.perc4.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc4", volume);
      break;
    case assignedKeys.perc5.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc5", volume);
      break;

    default:
      break;
  }
};
