import { Sequencer } from "../components/StepSequencerContainer/types";
import { LoadedInstruments } from "../hooks/useInstruments";
import { audioContext } from "./audioContext";
import { playSample } from "./playSample";

const playInstruments = (instruments:LoadedInstruments, time:number, seq:Sequencer, stepNumber:number) => {

  if(seq[stepNumber].instruments.includes('kick')) {
    playSample(audioContext, instruments.kick, time, seq[stepNumber].gain.kick)
  }
  if(seq[stepNumber].instruments.includes('clap')) {
    playSample(audioContext, instruments.clap, time, seq[stepNumber].gain.clap)
  }
  if(seq[stepNumber].instruments.includes('closedHH')) {
    playSample(audioContext, instruments.closedHH, time, seq[stepNumber].gain.closedHH)
  }
  if(seq[stepNumber].instruments.includes('ride')) {
    playSample(audioContext, instruments.ride, time, seq[stepNumber].gain.ride)
  }

  // THE METRONOME INSTANCE BELOW WORKS ON TIME WITH THE ABOVE INSTRUMENTS
  // POSSIBLY DUE TO THE BUFFER BEING LOADED INTO THE SEQUENCER AHEAD OF TIME
  // COULD AUTO-LOAD IN THE METRONOME ON THE CORRECT STEPS TO SOLVE LATENCY?? 
  // if(seq[stepNumber].instruments.includes('metroUp')) {
  //     playSample(audioContext, instruments.metroUp, time, 3)
  // }
  // if(seq[stepNumber].instruments.includes('metroDown')) {
  //     playSample(audioContext, instruments.metroDown, time, 3)
  // }

}
export default playInstruments