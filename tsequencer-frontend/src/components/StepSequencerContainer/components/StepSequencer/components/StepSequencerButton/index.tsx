import { Button } from "@/components/ui/button";

import AssignedInstruments from "./components/AssignedInstrumentsDesktop";

import type { StepSeqProps } from "@/components/StepSequencerContainer/types";

const StepSeqButton = ({ index, extraCSS, step, onClickHandler, windowSize }: StepSeqProps) => {
  return (
    <div className="box-border flex-col">
      <Button
        className={
          "sm:min-w-1/2 box-border h-full w-full flex-col rounded-md border-4 bg-stone-800 p-4 sm:min-h-48 sm:text-xl md:w-5/6 " +
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
