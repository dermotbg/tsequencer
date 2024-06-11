import type { LoadedInstruments } from "@/hooks/useInstruments";
import type { AvailableInstruments, GainObject } from "@/types";
import type { Sequencer } from "../../../StepSequencerContainer/types";

import { validateInstrument } from "@/utils/typeChecking";

import Fader from "./components/Fader";
import MasterFader from "./components/MasterFader";

interface FaderContainerType {
  activeStep: number | undefined;
  instruments: LoadedInstruments;
  seq: Sequencer;
  setGain: (index: number, gain: number, instrument: AvailableInstruments) => void;
  volume: number;
  setVolume: (gain: number) => void;
}

const FaderContainer = ({
  activeStep,
  instruments,
  seq,
  setGain,
  volume,
  setVolume,
}: FaderContainerType) => {
  // TODO do something better for validation here, not a fan.
  if (activeStep === undefined)
    return (
      <div className="flex touch-none flex-row items-center justify-evenly">
        <MasterFader volume={volume} setVolume={setVolume} />
      </div>
    );

  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly">
      {Array.from(
        Object.keys(instruments).map((instrument: string) => {
          if (seq[activeStep].instruments.includes(validateInstrument(instrument))) {
            return (
              <Fader
                index={activeStep}
                disabled={false}
                key={`${activeStep}-${instrument}`}
                instrument={validateInstrument(instrument)}
                gain={seq[activeStep].gain[instrument as keyof GainObject]}
                setGain={setGain}
              />
            );
          } else {
            return null;
          }
        }),
      )}
      <MasterFader volume={volume} setVolume={setVolume} />
    </div>
  );
};

export default FaderContainer;
