import { LoadedInstruments } from "../../../../../hooks/useInstruments";
import { AvailableInstruments } from "../../../../../types";
import { audioContext } from "../../../../../utils/audioContext";
import { playSample } from "../../../../../utils/playSample";

interface keyPressHandlerType {
  instruments: LoadedInstruments
  keyCode: string,
  pushToSequencer: (stepRef: number, element: AvailableInstruments, volume: number) => void
  volume: number
  recording: boolean
  stepRef: number
}

export const keyPressHandler = ({ instruments, keyCode, pushToSequencer, volume, recording, stepRef}: keyPressHandlerType) => {
  switch (keyCode) {
    case 'KeyS':
      playSample(audioContext, instruments['kick'], audioContext.currentTime, volume)
      if(recording) pushToSequencer(stepRef, 'kick', volume)
      break;
    case 'KeyK':
      playSample(audioContext, instruments['clap'], audioContext.currentTime, volume)
      if(recording) pushToSequencer(stepRef, 'clap', volume)
      break;
    case 'KeyL':
      playSample(audioContext, instruments['closedHH'], audioContext.currentTime, volume)
      if(recording) pushToSequencer(stepRef, 'closedHH', volume)
      break;
    case 'KeyJ':
      playSample(audioContext, instruments['ride'], audioContext.currentTime, volume)
      if(recording) pushToSequencer(stepRef, 'ride', volume)
      break;
    default:
      break;
  }
}