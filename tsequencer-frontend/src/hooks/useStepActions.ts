import { validateInstrument } from "@/utils/typeChecking";
import useActivePadStore from "./StateHooks/useActivePadStore";
import useActiveStepStore from "./StateHooks/useActiveStepStore";
import useVolumeStore from "./StateHooks/useVolumeStore";
import type { Sequencer, Step } from "@/components/StepSequencerContainer/types";

const useStepActions = (sequencer: Sequencer, setSeq: (newSeq: Sequencer) => void) => {
  const activePad = useActivePadStore((state) => state.activePad);
  const activeStep = useActiveStepStore();
  const volume = useVolumeStore((state) => state.level);

  const activeStepHandler = (index: number) => {
    if (!activePad) {
      activeStep.set(index);
      return;
    }
  };

  const assignSampleHandler = (index: number) => {
    if (!activePad) return;
    const currentPad = validateInstrument(activePad);
    if (sequencer[index].instruments.includes(currentPad)) {
      setSeq(
        sequencer.map((s: Step, i) => {
          if (i === index) {
            s.instruments.splice(sequencer[index].instruments.indexOf(currentPad), 1);
            return s;
          }
          return s;
        }),
      );
    } else {
      setSeq(
        sequencer.map((s: Step, i) => {
          if (i === index) {
            s.instruments.push(currentPad);
            s.gain[currentPad] = volume;
            return s;
          }
          return s;
        }),
      );
    }
  };
  return { activeStepHandler, assignSampleHandler };
};

export default useStepActions;
