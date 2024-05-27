import { Sequencer } from "../components/StepSequencerContainer/types"

export const getInitialSeqState = (): Sequencer => { 
  const gain = { 
    kick: 1, 
    clap: 1, 
    snare: 1, 
    closedHH: 1, 
    openHH: 1, 
    ride: 1, 
    sub: 1, 
    perc: 1, 
    perc2: 1, 
    perc3: 1, 
    perc4: 1, 
    perc5: 1, 
  }
  return Array.from({ length: 16 }, (_, i) => {
  if(i === 0){
    return {
      instruments: [],
      metronomes: ['metroUp'],
      extraCSS: '',
      gain
    }
  }
  else if (i === 4 || i === 8 || i === 12){
    return {
      instruments: [],
      metronomes: ['metroDown'],
      extraCSS: '',
      gain
    }
  }
  else{
    return {
      instruments: [],
      metronomes: [],
      extraCSS: '',
      gain
    }
  }
})}