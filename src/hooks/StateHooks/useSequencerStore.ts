import { create } from "zustand"
import { Sequencer } from "../../components/StepSequencerContainer/types"

interface SequencerStateType {
  seq: Sequencer
  setSeq: (newSeq: Sequencer) => void
}

const useSequencerStore = create<SequencerStateType>()((set) => ({
  seq: Array.from({ length: 16 }, () => {
    return {
      instruments: [],
      extraCSS: '',
      gain: {kick: 1, clap: 1, closedHH: 1, ride: 1}
    }
  }),
  setSeq: (newSeq: Sequencer) => set(() => ({ seq: newSeq }))
}))

export default useSequencerStore

