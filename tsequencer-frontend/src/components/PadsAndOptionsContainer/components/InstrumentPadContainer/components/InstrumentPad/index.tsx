import { Button } from "@/components/ui/button";

import { validateInstrument } from "@/utils/typeChecking";
import { setActiveBorder } from "../../utils/SetActiveBorder";

import type { InstrumentPadType } from "../../types";

const InstrumentPad = ({ instrument, activePad, padHandler }: InstrumentPadType) => {
  return (
    <div>
      <Button
        className={
          setActiveBorder(activePad, instrument) +
          " mx-3 max-h-20 max-w-16 sm:max-h-none sm:max-w-none"
        }
        onClick={() => padHandler(validateInstrument(instrument))}
      >
        <div className="overflow-scroll font-mono text-xs shadow-black/50 text-shadow-sm sm:overflow-visible sm:text-lg">
          {instrument.toUpperCase()}
        </div>
      </Button>
    </div>
  );
};

export default InstrumentPad;
