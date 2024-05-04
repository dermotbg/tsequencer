import StepSequencer from "./components/StepSequencer"
import ControllerContainer from "./components/ControllerContainer"

import useActivePadStore from "../../hooks/StateHooks/useActivePadStore"
import useRecordStore from "../../hooks/StateHooks/useRecordStore"
import useVolumeStore from "../../hooks/StateHooks/useVolumeStore"
import useSequencerStore from "../../hooks/StateHooks/useSequencerStore"
import useActiveStepStore from "../../hooks/StateHooks/useActiveStepStore"

import useInstruments from "../../hooks/useInstruments"
import useSequencer from "../../hooks/useSequencer"

import { validateInstrument } from "../../utils/typeChecking"
import { useState } from "react"


const StepSequencerContainer = () => {

  const instruments = useInstruments()
  const sequencer = useSequencer()

  const clearSequencer = useSequencerStore((state) => state.clearSequencer)
  const activePad = useActivePadStore((state) => state.activePad)
  const volume = useVolumeStore((state) => state.level)
  const { record, setRecording} = useRecordStore()
  const activeStep = useActiveStepStore()

  const[isRunning, setIsRunning] = useState(false)
  
  const launchHandler = () => {
    setIsRunning(!isRunning)
    sequencer.launchSequencer()
  }

  const recordHandler = () => {
    setRecording()
  }

  const clearHandler = () => {
      clearSequencer()
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
      <ControllerContainer launchHandler={launchHandler} recordHandler={recordHandler} clearSequencer={clearHandler} isRecording={record} isRunning={isRunning} />
    </>
  )
}

export default StepSequencerContainer