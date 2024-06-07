import type { Step } from "../components/StepSequencerContainer/types";

// TODO: Update colors here

export const generateShadowClass = (step: Step) => {
  if (step.instruments.length === 0) return;
  if (step.instruments.length === 1) return "shadow-1-stack ";
  if (step.instruments.length === 2) return "shadow-2-stack ";
  if (step.instruments.length === 3) return "shadow-3-stack ";
  if (step.instruments.length > 3) return "shadow-4-stack ";
  return;
};
