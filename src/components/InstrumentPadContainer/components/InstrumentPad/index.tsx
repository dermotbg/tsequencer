import { validateInstrument } from "../../../../utils/typeChecking"
import { setActiveBorder } from "../../utils/SetActiveBorder"
import { InstrumentPadType } from "../../types"

const InstrumentPad = ({ instrument, activePad, padHandler}: InstrumentPadType) => {
  return(
    <>
        <button
          className={setActiveBorder(activePad, instrument)}
          onClick={() => padHandler(validateInstrument(instrument))}
          >
          {instrument.toUpperCase()}
        </button>    
        </>
  )
}

export default InstrumentPad