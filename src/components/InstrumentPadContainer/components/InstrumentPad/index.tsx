import { validateInstrument } from "../../../../utils/typeChecking"
import VolumeControl from "../VolumeControl"
import { setActiveBorder } from "../../utils/SetActiveBorder"
import { InstrumentPadType } from "../../types"

const InstrumentPad = ({ instrument, activePad, padHandler, volume, setVolume, onPressHandler}: InstrumentPadType) => {
  return(
    <>
        <button
          className={setActiveBorder(activePad, instrument)}
          onClick={() => padHandler(validateInstrument(instrument))}
          onKeyDown={(e) => onPressHandler(validateInstrument(instrument), e.code)}
          >
          {instrument.toUpperCase()}
        </button>
        {/* {activePad === instrument
          // ? <VolumeControl volume={volume} setVolume={setVolume} />
          ? <>There used to be a volume slider here</>
          : null
        } */}
        
        </>
  )
}

export default InstrumentPad