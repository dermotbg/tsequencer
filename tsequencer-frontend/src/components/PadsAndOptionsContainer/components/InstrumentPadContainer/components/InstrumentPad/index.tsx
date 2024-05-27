import { validateInstrument } from "../../../../../../utils/typeChecking"
import { setActiveBorder } from "../../utils/SetActiveBorder"
import { InstrumentPadType } from "../../types"

import { Button } from "@/components/ui/button"


const InstrumentPad = ({ instrument, activePad, padHandler}: InstrumentPadType) => {
  return(
    <div className="">
      <Button
        className={setActiveBorder(activePad, instrument) 
          + ' max-w-20 sm:max-w-none max-h-20 sm:max-h-none '}
        onClick={() => padHandler(validateInstrument(instrument))}
        >
          <div className="font-mono text-shadow-sm shadow-black/50 overflow-scroll sm:overflow-visible ">
            {instrument.toUpperCase()}
          </div>
      </Button>    
    </div>
  )
}

export default InstrumentPad