import { validateInstrument } from "../../../../../../utils/typeChecking"
import { setActiveBorder } from "../../utils/SetActiveBorder"
import { InstrumentPadType } from "../../types"

import { Button } from "@/components/ui/button"


const InstrumentPad = ({ instrument, activePad, padHandler}: InstrumentPadType) => {
  return(
    <>
        <Button
          className={setActiveBorder(activePad, instrument) 
            + '  '}
          onClick={() => padHandler(validateInstrument(instrument))}
          >
            <div className="font-mono text-shadow-sm shadow-black/50 ">
              {instrument.toUpperCase()}
            </div>
        </Button>    
        </>
  )
}

export default InstrumentPad