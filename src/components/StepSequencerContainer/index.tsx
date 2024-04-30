import StepSequencer from "./components/StepSequencer"
import LaunchController from "./components/LaunchController"
import RecordController from "./components/RecordController"

import useActivePadStore from "../../hooks/StateHooks/useActivePadStore"
import useInstruments from "../../hooks/useInstruments"
import useRecordStore from "../../hooks/StateHooks/useRecordStore"
import useSequencer from "../../hooks/useSequencer"
import useVolumeStore from "../../hooks/StateHooks/useVolumeStore"
import ClearSequencerController from "./components/ClearSequencerController"
import useSequencerStore from "../../hooks/StateHooks/useSequencerStore"


const StepSequencerContainer = () => {
  const instruments = useInstruments()
  const sequencer = useSequencer()
  const clearSequencer = useSequencerStore((state) => state.clearSequencer)
  const activePad = useActivePadStore((state) => state.activePad)
  const volume = useVolumeStore((state) => state.level)
  const setRecording = useRecordStore((state) => state.setRecording)
  
  
  const launchHandler = () => {
    sequencer.launchSequencer()
  }

  const recordHandler = () => {
    setRecording()
  }

  const clearHandler = () => {
    //TODO: Not clearing state when sequencer is playing? 
    if(sequencer.isPlaying.current){
      sequencer.launchSequencer()
    }
    if (window.confirm('Are you sure you want to clear the sequencer?')){ 
      clearSequencer()
    }
  }

  if(!instruments) return <>Loading...</>
  return (
    <>
      <StepSequencer seq={sequencer.seq} activePad={activePad} volume={volume} />
      <LaunchController launchHandler={launchHandler} />
      <RecordController recordHandler={recordHandler} />
      <ClearSequencerController clearSequencer={clearHandler} />
    </>
  )
}

export default StepSequencerContainer