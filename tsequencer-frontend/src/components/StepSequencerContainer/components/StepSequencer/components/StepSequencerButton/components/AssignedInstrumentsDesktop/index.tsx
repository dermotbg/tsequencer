import type { Step } from "src/components/StepSequencerContainer/types";

const AssignedInstruments = ({ step }: { step: Step }) => {
  return (
    <div className={!step.instruments.length ? "" : "grid grid-cols-3 bg-transparent"}>
      {step.instruments.map((i) => {
        return (
          <div
            className="mx-1 mb-1 rounded-lg border-2 border-black px-1 text-sm shadow-sm shadow-black"
            key={i}
          >
            {i[0].toUpperCase() + i[i.length - 1].toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};
export default AssignedInstruments;
