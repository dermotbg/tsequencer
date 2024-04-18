import StepSequencer from "./components/StepSequencer"
import useInstruments from "../../../hooks/useInstruments"
import useSequencer from "../../../hooks/useSequencer"
import LaunchController from "./components/LaunchController"
import useActivePadStore from "../../../hooks/useActivePadStore"
import useVolumeStore from "../../../hooks/useVolumeStore"



const StepSequencerContainer = () => {
  const instruments = useInstruments()
  const sequencer = useSequencer()
  const activePad = useActivePadStore((state) => state.activePad)
  const volume = useVolumeStore((state) => state.level)
  
  const launchHandler = () => {
    sequencer.launchSequencer()
  }

  if(!instruments) return <>Loading...</>

  return (
    <>
      <StepSequencer seq={sequencer.seq} activePad={activePad} volume={volume} />
      <LaunchController launchHandler={launchHandler} />
    </>
  )
}

export default StepSequencerContainer