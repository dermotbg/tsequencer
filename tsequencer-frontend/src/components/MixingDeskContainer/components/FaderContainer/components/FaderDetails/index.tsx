import type { AvailableInstruments } from "@/types";

type FaderInstrumentTypes = AvailableInstruments | "Pad";

const FaderDetails = ({ instrument, gain }: { instrument: FaderInstrumentTypes; gain: number }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="sm:max-w-inherit max-w-10 overflow-hidden font-mono">
        {instrument.toUpperCase()}
      </div>
      <div>{((gain / 3.4) * 100).toFixed(0)}%</div>
    </div>
  );
};

export default FaderDetails;
