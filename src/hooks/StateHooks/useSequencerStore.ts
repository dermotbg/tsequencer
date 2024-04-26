import { create } from "zustand"
import { Sequencer } from "../../components/StepSequencerContainer/types"

interface SequencerStateType {
  seq: Sequencer
  setSeq: (newSeq: Sequencer) => void
}

const useSequencerStore = create<SequencerStateType>()((set) => ({
  seq: Array.from({ length: 16 }, (_, i) => {
    if(i === 0){
      return {
        instruments: [],
        metronomes: ['metroUp'],
        extraCSS: '',
        gain: {kick: 1, clap: 1, closedHH: 1, ride: 1 }
      }
    }
    else if (i === 5 || i === 9 || i === 13){
      return {
        instruments: [],
        metronomes: ['metroDown'],
        extraCSS: '',
        gain: {kick: 1, clap: 1, closedHH: 1, ride: 1 }
      }
    }
    else{
      return {
        instruments: [],
        metronomes: [],
        extraCSS: '',
        gain: {kick: 1, clap: 1, closedHH: 1, ride: 1 }
      }
    }
  }),
  setSeq: (newSeq: Sequencer) => set(() => ({ seq: newSeq }))
}))

export default useSequencerStore

