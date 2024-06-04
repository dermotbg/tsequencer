import useRecordStore from "@/hooks/StateHooks/useRecordStore";
import useSequencerStore from "@/hooks/StateHooks/useSequencerStore";
import useInstruments from "@/hooks/useInstruments";
import useSequencer from "@/hooks/useSequencer";
import useStepActions from "@/hooks/useStepActions";
import useWindowSize from "@/hooks/useWindowSize";

import ControllerContainer from "./components/ControllerContainer";
import LoadingSpinner from "../UtilityComponents/LoadingSpinner";
import StepSequencer from "./components/StepSequencer";

const StepSequencerContainer = () => {
  const instruments = useInstruments();
  const sequencer = useSequencer();
  const windowSize = useWindowSize();

  const clearSequencer = useSequencerStore((state) => state.clearSequencer);
  const { record, setRecording } = useRecordStore();

  const { isRunning, setIsRunning } = useSequencerStore();
  const { activeStepHandler, assignSampleHandler } = useStepActions(
    sequencer.seq,
    sequencer.setSeq,
  );

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

  const onStepClickHandler = (index: number) => {
    assignSampleHandler(index);
    activeStepHandler(index);
  };

  if (!instruments) return <LoadingSpinner />;

  return (
    <>
      <StepSequencer
        seq={sequencer.seq}
        onClickHandler={onStepClickHandler}
        windowSize={windowSize}
      />
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
