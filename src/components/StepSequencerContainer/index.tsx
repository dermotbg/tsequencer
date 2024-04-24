import StepSequencer from "./components/StepSequencer"
import LaunchController from "./components/LaunchController"
import RecordController from "./components/RecordController"

import useActivePadStore from "../../hooks/StateHooks/useActivePadStore"
import useInstruments from "../../hooks/useInstruments"
import useRecordStore from "../../hooks/StateHooks/useRecordStore"
import useSequencer from "../../hooks/useSequencer"
import useVolumeStore from "../../hooks/StateHooks/useVolumeStore"


const StepSequencerContainer = () => {
  const instruments = useInstruments()
  const sequencer = useSequencer()
  const activePad = useActivePadStore((state) => state.activePad)
  const volume = useVolumeStore((state) => state.level)
  const setRecording = useRecordStore((state) => state.setRecording)
  
  
  const launchHandler = () => {
    sequencer.launchSequencer()
  }

  const recordHandler = () => {
    setRecording()
  }

  if(!instruments) return <>Loading...</>

  return (
    <>
      <StepSequencer seq={sequencer.seq} activePad={activePad} volume={volume} />
      <LaunchController launchHandler={launchHandler} />
      <RecordController recordHandler={recordHandler} />
    </>
  )
}

export default StepSequencerContainer