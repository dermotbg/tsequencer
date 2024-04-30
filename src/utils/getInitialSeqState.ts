import { Sequencer } from "../components/StepSequencerContainer/types"

export const getInitialSeqState = (): Sequencer => { 
  return Array.from({ length: 16 }, (_, i) => {
  if(i === 0){
    return {
      instruments: [],
      metronomes: ['metroUp'],
      extraCSS: '',
      gain: {kick: 1, clap: 1, closedHH: 1, ride: 1 }
    }
  }
  else if (i === 4 || i === 8 || i === 12){
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
})}