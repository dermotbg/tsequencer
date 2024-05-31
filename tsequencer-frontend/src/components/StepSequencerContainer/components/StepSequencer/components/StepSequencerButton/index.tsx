import { Button } from "@/components/ui/button";

import AssignedInstruments from "./components/AssignedInstrumentsDesktop";

import type { StepSeqProps } from "@/components/StepSequencerContainer/types";

const StepSeqButton = ({ index, extraCSS, step, onClickHandler, windowSize }: StepSeqProps) => {
  return (
    <div className="flex-col box-border">
      <Button
        className={
          "flex-col box-border border-4 p-4 bg-stone-800 sm:text-xl rounded-md w-5/6 h-full sm:min-h-48 sm:min-w-1/2  " +
          `${extraCSS}`
        }
        onClick={() => onClickHandler(index)}
      >
        {index + 1}
        {windowSize.width <= 768 ? null : <AssignedInstruments step={step} />}
      </Button>
    </div>
  );
};

export default StepSeqButton;
