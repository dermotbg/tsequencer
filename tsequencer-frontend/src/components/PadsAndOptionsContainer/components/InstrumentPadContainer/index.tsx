import useActivePadStore from "@/hooks/StateHooks/useActivePadStore";
import useVolumeStore from "@/hooks/StateHooks/useVolumeStore";
import useInstruments from "@/hooks/useInstruments";

import { audioContext } from "@/utils/audioContext";
import { playSample } from "@/utils/playSample";

import InstrumentPad from "./components/InstrumentPad";
import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";

import type { AvailableInstruments } from "@/types";

const InstrumentPadContainer = () => {
  const instruments = useInstruments();
  const activePad = useActivePadStore();

  const volume = useVolumeStore();
  if (!instruments) return <LoadingSpinner />;

  // TODO: turn off playback on click when isPlaying
  const padHandler = (element: AvailableInstruments) => {
    if (activePad.activePad === element) {
      activePad.set(undefined);
    } else {
      activePad.set(element);
    }
    playSample(audioContext, instruments[element], 0, volume.level);
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6">
      {Array.from(
        Object.keys(instruments).map((i) => {
          return (
            <InstrumentPad
              key={i}
              instrument={i}
              activePad={activePad.activePad}
              padHandler={padHandler}
              volume={volume.level}
              setVolume={volume.set}
            />
          );
        }),
      )}
    </div>
  );
};

export default InstrumentPadContainer;
