import { LoadedInstruments } from "../../../../../hooks/useInstruments";
import { AvailableInstruments } from "../../../../../types";


interface keyPressHandlerType {
  instruments: LoadedInstruments
  keyCode: string,
  pushToSequencer: (stepRef: number, element: AvailableInstruments, volume: number) => void
  volume: number
  recording: boolean
  stepRef: number
}

let loopedOnce = false

const latencyCompensator = (stepIndex: number) => {
  if(!loopedOnce){
    loopedOnce = true
    return stepIndex
  } 
  else{
    return stepIndex >= 3 
      ? stepIndex - 3 
      : 16 - (3 - stepIndex)
  }

}


export const keyPressHandler = ({ keyCode, pushToSequencer, volume, recording, stepRef}: keyPressHandlerType) => {
  switch (keyCode) {
    case 'KeyS':
      if(recording) 
        pushToSequencer(latencyCompensator(stepRef), 'kick', volume)
      break;
    case 'KeyK':
      if(recording) pushToSequencer(latencyCompensator(stepRef), 'clap', volume)
      break;
    case 'KeyL':
      if(recording) pushToSequencer(latencyCompensator(stepRef), 'closedHH', volume)
      break;
    case 'KeyJ':
      if(recording) pushToSequencer(latencyCompensator(stepRef), 'ride', volume)
      break;
    default:
      break;
  }
}