import StepSeqButton from "./components/StepSequencerButton";

import type { windowSize } from "@/types";
import type { Sequencer } from "../../types";
import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";

const StepSequencer = ({
  seq,
  onClickHandler,
  windowSize,
}: {
  seq: Sequencer;
  onClickHandler: (index: number) => void;
  windowSize: windowSize;
}) => {
  // TODO: Proper Loading state
  if (!seq || !seq[0]) return <LoadingSpinner />;
  return (
    <div className=" flex flex-col items-center min-w-screen w-full">
      <div className="grid gap-4 grid-cols-4 grid-rows-4 w-full lg:w-5/6">
        {seq.map((b, i) => {
          return (
            <StepSeqButton
              index={i}
              extraCSS={b.extraCSS}
              key={seq.length - i}
              step={seq[i]}
              onClickHandler={onClickHandler}
              windowSize={windowSize}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StepSequencer;
