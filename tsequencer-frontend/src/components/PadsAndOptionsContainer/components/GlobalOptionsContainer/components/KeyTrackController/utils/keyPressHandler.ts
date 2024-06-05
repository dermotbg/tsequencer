import type { AssignedKeysType } from "@/hooks/StateHooks/useAssignedKeysStore";
import type { LoadedInstruments } from "@/hooks/useInstruments";
import type { AvailableInstruments } from "@/types";
import { audioContext } from "@/utils/audioContext";
import { playSample } from "@/utils/playSample";

interface keyPressHandlerType {
  instruments: LoadedInstruments;
  keyCode: string;
  pushToSequencer: (stepRef: number, element: AvailableInstruments, volume: number) => void;
  volume: number;
  recording: boolean;
  stepRef: number;
  assignedKeys: AssignedKeysType;
  isPlaying: boolean;
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
  instruments,
  keyCode,
  pushToSequencer,
  volume,
  recording,
  stepRef,
  assignedKeys,
  isPlaying,
}: keyPressHandlerType) => {
  switch (keyCode) {
    case assignedKeys.kick.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "kick", volume);
      if (!isPlaying) playSample(audioContext, instruments.kick, 0, volume);
      break;
    case assignedKeys.clap.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "clap", volume);
      if (!isPlaying) playSample(audioContext, instruments.clap, 0, volume);
      break;
    case assignedKeys.snare.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "snare", volume);
      if (!isPlaying) playSample(audioContext, instruments.snare, 0, volume);
      break;
    case assignedKeys.closedHH.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "closedHH", volume);
      if (!isPlaying) playSample(audioContext, instruments.closedHH, 0, volume);
      break;
    case assignedKeys.openHH.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "openHH", volume);
      if (!isPlaying) playSample(audioContext, instruments.openHH, 0, volume);
      break;
    case assignedKeys.ride.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "ride", volume);
      if (!isPlaying) playSample(audioContext, instruments.ride, 0, volume);
      break;
    case assignedKeys.sub.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "sub", volume);
      if (!isPlaying) playSample(audioContext, instruments.sub, 0, volume);
      break;
    case assignedKeys.perc.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc", volume);
      if (!isPlaying) playSample(audioContext, instruments.perc, 0, volume);
      break;
    case assignedKeys.perc2.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc2", volume);
      if (!isPlaying) playSample(audioContext, instruments.perc2, 0, volume);
      break;
    case assignedKeys.perc3.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc3", volume);
      if (!isPlaying) playSample(audioContext, instruments.perc3, 0, volume);
      break;
    case assignedKeys.perc4.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc4", volume);
      if (!isPlaying) playSample(audioContext, instruments.perc4, 0, volume);
      break;
    case assignedKeys.perc5.active:
      if (recording) pushToSequencer(latencyCompensator(stepRef), "perc5", volume);
      if (!isPlaying) playSample(audioContext, instruments.perc5, 0, volume);
      break;

    default:
      break;
  }
};
