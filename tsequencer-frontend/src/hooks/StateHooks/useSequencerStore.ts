import { create } from "zustand"
import { Sequencer } from "../../components/StepSequencerContainer/types"
import { getInitialSeqState } from "../../utils/getInitialSeqState"


interface SequencerStateType {
  seq: Sequencer
  isRunning: boolean
  setSeq: (newSeq: Sequencer) => void
  setIsRunning: (toggle: boolean) => void
  clearSequencer: () => void
}

const useSequencerStore = create<SequencerStateType>()((set) => ({
  seq: getInitialSeqState(),
  isRunning: false,
  setSeq: (newSeq: Sequencer) => set(() => ({ seq: newSeq })),
  setIsRunning: (toggle: boolean) => set(() => ({ isRunning: toggle })),
  clearSequencer: () => set(() => ({ seq: getInitialSeqState() }))
}))

export default useSequencerStore

