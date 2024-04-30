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
}
export default playInstruments