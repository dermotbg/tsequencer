import { create } from "zustand"
import { Sequencer } from "../../components/StepSequencerContainer/types"
import { getInitialSeqState } from "../../utils/getInitialSeqState"


interface SequencerStateType {
  seq: Sequencer
  setSeq: (newSeq: Sequencer) => void
  clearSequencer: () => void
}

const useSequencerStore = create<SequencerStateType>()((set) => ({
  seq: getInitialSeqState(),
  setSeq: (newSeq: Sequencer) => set(() => ({ seq: newSeq })),
  clearSequencer: () => set(() => ({ seq: getInitialSeqState() }))
}))

export default useSequencerStore

