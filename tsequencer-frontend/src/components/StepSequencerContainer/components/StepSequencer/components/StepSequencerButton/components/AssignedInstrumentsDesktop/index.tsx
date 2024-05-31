import type { Step } from "src/components/StepSequencerContainer/types";

const AssignedInstruments = ({ step }: { step: Step }) => {
  return (
    <div className={!step.instruments.length ? "" : " grid grid-cols-3 bg-transparent"}>
      {step.instruments.map((i) => {
        return (
          <div
            className="border-black border-2 text-sm rounded-lg shadow-sm shadow-black px-1 mx-1 mb-1 "
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
