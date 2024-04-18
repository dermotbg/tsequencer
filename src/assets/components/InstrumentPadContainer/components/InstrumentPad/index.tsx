import { validateInstrument } from "../../../../../utils/typeChecking"
import VolumeControl from "../VolumeControl"
import { setActiveBorder } from "../../utils/SetActiveBorder"
import { InstrumentPadType } from "../../types"

const InstrumentPad = ({ instrument, activePad, padHandler, volume, setVolume}: InstrumentPadType) => {
  return(
    <>
        <button
          className={setActiveBorder(activePad, instrument)}
          onClick={() => padHandler(validateInstrument(instrument))}
          >
          {instrument.toUpperCase()}
        </button>
        {activePad === instrument
          ? <VolumeControl volume={volume} setVolume={setVolume} />
          : null
        }
        
        </>
  )
}

export default InstrumentPad