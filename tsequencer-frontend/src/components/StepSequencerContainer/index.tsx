import useActivePadStore from "@/hooks/StateHooks/useActivePadStore";
import useActiveStepStore from "@/hooks/StateHooks/useActiveStepStore";
import useRecordStore from "@/hooks/StateHooks/useRecordStore";
import useSequencerStore from "@/hooks/StateHooks/useSequencerStore";
import useVolumeStore from "@/hooks/StateHooks/useVolumeStore";
import useInstruments from "@/hooks/useInstruments";
import useSequencer from "@/hooks/useSequencer";
import useWindowSize from "@/hooks/useWindowSize";

import { validateInstrument } from "@/utils/typeChecking";

import ControllerContainer from "./components/ControllerContainer";
import StepSequencer from "./components/StepSequencer";

import type { Step } from "./types";

const StepSequencerContainer = () => {
  const instruments = useInstruments();
  const sequencer = useSequencer();
  const windowSize = useWindowSize();

  const clearSequencer = useSequencerStore((state) => state.clearSequencer);
  const activePad = useActivePadStore((state) => state.activePad);
  const volume = useVolumeStore((state) => state.level);
  const { record, setRecording } = useRecordStore();
  const activeStep = useActiveStepStore();

  const { isRunning, setIsRunning } = useSequencerStore();

  const launchHandler = () => {
    setIsRunning(!isRunning);
    sequencer.launchSequencer();
  };

  const recordHandler = () => {
    setRecording();
  };

  const clearHandler = () => {
    clearSequencer();
  };

  const onClickHandler = (index: number) => {
    assignSampleHandler(index);
    activeStepHandler(index);
  };

  const activeStepHandler = (index: number) => {
    if (!activePad) {
      activeStep.set(index);
      return;
    }
  };

  const assignSampleHandler = (index: number) => {
    if (!activePad) return;
    const currentPad = validateInstrument(activePad);
    if (sequencer.seq[index].instruments.includes(currentPad)) {
      sequencer.setSeq(
        sequencer.seq.map((s: Step, i) => {
          if (i === index) {
            s.instruments.splice(sequencer.seq[index].instruments.indexOf(currentPad), 1);
            return s;
          }
          return s;
        }),
      );
    } else {
      sequencer.setSeq(
        sequencer.seq.map((s: Step, i) => {
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

  if (!instruments) return <>Loading...</>;
  return (
    <>
      <StepSequencer seq={sequencer.seq} onClickHandler={onClickHandler} windowSize={windowSize} />
      <ControllerContainer
        launchHandler={launchHandler}
        recordHandler={recordHandler}
        clearSequencer={clearHandler}
        isRecording={record}
        isRunning={isRunning}
      />
    </>
  );
};

export default StepSequencerContainer;
