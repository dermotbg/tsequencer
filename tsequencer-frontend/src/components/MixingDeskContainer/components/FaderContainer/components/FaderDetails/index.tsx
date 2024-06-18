import { Volume2 } from "lucide-react";

import type { AvailableInstruments } from "@/types";

type FaderInstrumentTypes = AvailableInstruments | "Pad";

const FaderDetails = ({ instrument, gain }: { instrument: FaderInstrumentTypes; gain: number }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="sm:max-w-inherit max-w-10 overflow-hidden border-b-2 font-mono font-semibold shadow-black/50 text-shadow-sm">
        {instrument === "Pad"
          ? "PAD"
          : `${instrument.charAt(0).toUpperCase()}` +
            `${instrument.charAt(instrument.length - 1).toUpperCase()}`}
      </div>
      <div className="flex flex-col items-center pt-1 font-mono font-semibold shadow-black/50 text-shadow-sm">
        <Volume2 size={"16px"} />
        {((gain / 3.4) * 100).toFixed(0)}%
      </div>
    </div>
  );
};

export default FaderDetails;
