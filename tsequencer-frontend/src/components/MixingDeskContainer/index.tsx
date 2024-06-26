import useActiveStepStore from "@/hooks/StateHooks/useActiveStepStore";
import useSequencerStore from "@/hooks/StateHooks/useSequencerStore";
import useVolumeStore from "@/hooks/StateHooks/useVolumeStore";
import useInstruments from "@/hooks/useInstruments";

import { validateInstrumentRack } from "@/utils/typeChecking";

import FaderContainer from "./components/FaderContainer";
import LoadingSpinner from "../UtilityComponents/LoadingSpinner";
import StepIndicator from "./components/StepIndicator";

import type { AvailableInstruments } from "@/types";

const MixingDeskContainer = () => {
  const { activeStep } = useActiveStepStore();
  const { seq, setSeq } = useSequencerStore();
  const instruments = useInstruments();
  const volume = useVolumeStore();

  const setGain = (index: number, gain: number, instrument: AvailableInstruments) => {
    const newSeq = seq;
    newSeq[index]["gain"][instrument] = gain;
    setSeq(newSeq);
  };

  if (!instruments) return <LoadingSpinner />;

  return (
    <div className="flex flex-col">
      {activeStep !== undefined && activeStep >= 0 ? (
        <StepIndicator stepNumber={activeStep + 1} />
      ) : null}
      <FaderContainer
        activeStep={activeStep}
        instruments={validateInstrumentRack(instruments)}
        seq={seq}
        setGain={setGain}
        volume={volume.level}
        setVolume={volume.set}
      />
    </div>
  );
};
export default MixingDeskContainer;
