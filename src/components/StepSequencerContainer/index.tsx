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
import { validateInstrument } from "../../utils/typeChecking"
import useActiveStepStore from "../../hooks/StateHooks/useActiveStepStore"


const StepSequencerContainer = () => {
  const instruments = useInstruments()
  const sequencer = useSequencer()
  const clearSequencer = useSequencerStore((state) => state.clearSequencer)
  const activePad = useActivePadStore((state) => state.activePad)
  const volume = useVolumeStore((state) => state.level)
  const setRecording = useRecordStore((state) => state.setRecording)
  const activeStep = useActiveStepStore()
  
  const launchHandler = () => {
    sequencer.launchSequencer()
  }

  const recordHandler = () => {
    setRecording()
  }

  const clearHandler = () => {
    if (window.confirm('Are you sure you want to clear the sequencer?')){ 
      if(sequencer.isPlaying.current){launchHandler()}
      clearSequencer()
    }
  }


  const onClickHandler = (index: number) => {
    assignSampleHandler(index)
    activeStepHandler(index)
  }

  const activeStepHandler = (index: number) => {
    if(!activePad) {
      activeStep.set(index)
      return
    }
  }

  const assignSampleHandler = (index: number) => {
    if(!activePad) return
    const currentPad = validateInstrument(activePad)
    if(sequencer.seq[index].instruments.includes(currentPad)){
      sequencer.seq[index].instruments.splice(sequencer.seq[index].instruments.indexOf(currentPad), 1)
    }
    else{
      sequencer.seq[index].instruments.push(currentPad)
      const instrument = validateInstrument(activePad)
      sequencer.seq[index].gain[instrument] = volume
    }
  }

  if(!instruments) return <>Loading...</>
  return (
    <>
      <StepSequencer seq={sequencer.seq} onClickHandler={onClickHandler} />
      <LaunchController launchHandler={launchHandler} />
      <RecordController recordHandler={recordHandler} />
      <ClearSequencerController clearSequencer={clearHandler} />
    </>
  )
}

export default StepSequencerContainer