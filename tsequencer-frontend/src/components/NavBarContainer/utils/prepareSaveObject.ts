import { validateString } from "@/utils/typeChecking";

import type { Sequencer, Step } from "@/components/StepSequencerContainer/types";

export const prepareSaveSequencerObject = (
  sequencer: Sequencer,
  user: string | null,
  seqName: string,
) => {
  const seqCSSPurge: Sequencer = sequencer.map((step: Step) => {
    return { ...step, extraCSS: "" };
  });

  const seqToSave = {
    sequence: seqCSSPurge,
    name: seqName,
    username: validateString(user),
  };
  return seqToSave;
};
