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
  console.log(Array.from(Object.keys(instruments)))

  const padHandler = (element: AvailableInstruments) => {
    activePad.set(element)
    playSample(audioContext, instruments[element], 0, volume.level)
  }

  const onPressHandler = (element: AvailableInstruments, keyCode: string) => {
    console.log(keyCode)
    console.log(element)
    switch (keyCode) {
      case 'KeyS':
        playSample(audioContext, instruments['kick'], 0, volume.level)
        break;
      case 'KeyK':
        playSample(audioContext, instruments['clap'], 0, volume.level)
        break;
      case 'KeyL':
        playSample(audioContext, instruments['closedHH'], 0, volume.level)
        break;
      case 'KeyJ':
        playSample(audioContext, instruments['ride'], 0, volume.level)
        break;
      default:
        break;
    }
  }

  return(
    <>
      {Array.from(Object.keys(instruments).map((i) => {
        return(
          <InstrumentPad 
            key={i}
            instrument={i} 
            activePad={activePad.activePad} 
            padHandler={padHandler}
            onPressHandler={onPressHandler}
            volume={volume.level} 
            setVolume={volume.set} 
          />
        )
      }))}
    </>
  )
}

export default InstrumentPadContainer