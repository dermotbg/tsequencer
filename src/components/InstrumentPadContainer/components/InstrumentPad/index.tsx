import { validateInstrument } from "../../../../utils/typeChecking"
import { setActiveBorder } from "../../utils/SetActiveBorder"
import { InstrumentPadType } from "../../types"

const InstrumentPad = ({ instrument, activePad, padHandler, onPressHandler}: InstrumentPadType) => {
  return(
    <>
        <button
          className={setActiveBorder(activePad, instrument)}
          onClick={() => padHandler(validateInstrument(instrument))}
          onKeyDown={(e) => onPressHandler(validateInstrument(instrument), e.code)}
          >
          {instrument.toUpperCase()}
        </button>    
        </>
  )
}

export default InstrumentPad