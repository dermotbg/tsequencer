import type { Step } from "../components/StepSequencerContainer/types";

// TODO: Update colors here

export const generateShadowClass = (step: Step) => {
  switch (step.instruments.length) {
    case 0:
      return;
    case 1:
      return "shadow-1-stack ";
    case 2:
      return "shadow-2-stack";
    case 3:
      return "shadow-3-stack";
    default:
      break;
  }
};
