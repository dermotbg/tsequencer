import useInstruments from "../../hooks/useInstruments"
import { AvailableInstruments } from "../../types"
import { audioContext } from "../../utils/audioContext"
import { playSample } from "../StepSequencerContainer/utils/playSample"
import InstrumentPad from "./components/InstrumentPad"
import useActivePadStore from "../../hooks/useActivePadStore"
import useVolumeStore from "../../hooks/useVolumeStore"

const InstrumentPadContainer = () => {

  const instruments = useInstruments() 
  const activePad = useActivePadStore()
  const volume = useVolumeStore()

  if (!instruments) return <>Loading...</>

  const padHandler = (element: AvailableInstruments) => {
    activePad.set(element)
    playSample(audioContext, instruments[element], 0, volume.level)
  }


  // TODO turn this render into map func
  return(
    <>
      <InstrumentPad instrument='kick' activePad={activePad.activePad} padHandler={padHandler} volume={volume.level} setVolume={volume.set} />
      <InstrumentPad instrument='clap' activePad={activePad.activePad} padHandler={padHandler} volume={volume.level} setVolume={volume.set} />
      <InstrumentPad instrument='closedHH' activePad={activePad.activePad} padHandler={padHandler} volume={volume.level} setVolume={volume.set} />
      <InstrumentPad instrument='ride' activePad={activePad.activePad} padHandler={padHandler} volume={volume.level} setVolume={volume.set} />
    </>
  )
}

export default InstrumentPadContainer