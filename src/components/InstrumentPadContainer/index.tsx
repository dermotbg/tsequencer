import useInstruments from "../../hooks/useInstruments"
import { AvailableInstruments } from "../../types"
import { audioContext } from "../../utils/audioContext"
import { playSample } from "../../utils/playSample"
import InstrumentPad from "./components/InstrumentPad"
import useActivePadStore from "../../hooks/StateHooks/useActivePadStore"
import useVolumeStore from "../../hooks/StateHooks/useVolumeStore"
import useSequencer from "../../hooks/useSequencer"
import useRecordStore from "../../hooks/StateHooks/useRecordStore"

const InstrumentPadContainer = () => {

  const instruments = useInstruments() 
  const { pushToSequencer } = useSequencer()
  const activePad = useActivePadStore()
  const volume = useVolumeStore()
  const recording = useRecordStore((state) => state.record)
  const stepRef = useRecordStore((state) => state.stepRef)

  if (!instruments) return <>Loading...</>

  const padHandler = (element: AvailableInstruments) => {
    if(activePad.activePad === element){
      activePad.set(undefined)
    } 
    else {
      activePad.set(element)
    }
    playSample(audioContext, instruments[element], 0, volume.level)
  }


  const onPressHandler = (element: AvailableInstruments, keyCode: string) => {

    switch (keyCode) {
      case 'KeyS':
        playSample(audioContext, instruments['kick'], 0, volume.level)
        if(recording) pushToSequencer(stepRef, element, volume.level)
        break;
      case 'KeyK':
        playSample(audioContext, instruments['clap'], 0, volume.level)
        if(recording) pushToSequencer(stepRef, element, volume.level)
        break;
      case 'KeyL':
        playSample(audioContext, instruments['closedHH'], 0, volume.level)
        if(recording) pushToSequencer(stepRef, element, volume.level)
        break;
      case 'KeyJ':
        playSample(audioContext, instruments['ride'], 0, volume.level)
        if(recording) pushToSequencer(stepRef, element, volume.level)
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
