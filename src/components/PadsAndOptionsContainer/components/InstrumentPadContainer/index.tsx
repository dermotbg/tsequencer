 
import useActivePadStore from '../../../../hooks/StateHooks/useActivePadStore'
import InstrumentPad from "./components/InstrumentPad"
import useInstruments from "../../../../hooks/useInstruments"
import useVolumeStore from "../../../../hooks/StateHooks/useVolumeStore"
import { AvailableInstruments } from "../../../../types"
import { playSample } from "../../../../utils/playSample"
import { audioContext } from "../../../../utils/audioContext"
const InstrumentPadContainer = () => {

  const instruments = useInstruments() 
  const activePad = useActivePadStore()

  const volume = useVolumeStore()
  if (!instruments) return <>Loading...</>


  // TODO: turn off playback on click when isPlaying
  const padHandler = (element: AvailableInstruments) => {
    if(activePad.activePad === element){
      activePad.set(undefined)
    } 
    else {
      activePad.set(element)
    }
    playSample(audioContext, instruments[element], 0, volume.level)
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
            volume={volume.level} 
            setVolume={volume.set} 
          />
        )
      }))}
    </>
  )
}

export default InstrumentPadContainer
