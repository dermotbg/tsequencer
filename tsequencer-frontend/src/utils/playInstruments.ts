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
  if(seq[stepNumber].instruments.includes('snare')) {
    playSample(audioContext, instruments.snare, time, seq[stepNumber].gain.snare)
  }
  if(seq[stepNumber].instruments.includes('closedHH')) {
    playSample(audioContext, instruments.closedHH, time, seq[stepNumber].gain.closedHH)
  }
  if(seq[stepNumber].instruments.includes('openHH')) {
    playSample(audioContext, instruments.openHH, time, seq[stepNumber].gain.openHH)
  }
  if(seq[stepNumber].instruments.includes('ride')) {
    playSample(audioContext, instruments.ride, time, seq[stepNumber].gain.ride)
  }
  if(seq[stepNumber].instruments.includes('sub')) {
    playSample(audioContext, instruments.sub, time, seq[stepNumber].gain.sub)
  }
  if(seq[stepNumber].instruments.includes('perc')) {
    playSample(audioContext, instruments.perc, time, seq[stepNumber].gain.perc)
  }
  if(seq[stepNumber].instruments.includes('perc2')) {
    playSample(audioContext, instruments.perc2, time, seq[stepNumber].gain.perc2)
  }
  if(seq[stepNumber].instruments.includes('perc3')) {
    playSample(audioContext, instruments.perc3, time, seq[stepNumber].gain.perc3)
  }
  if(seq[stepNumber].instruments.includes('perc4')) {
    playSample(audioContext, instruments.perc4, time, seq[stepNumber].gain.perc4)
  }
  if(seq[stepNumber].instruments.includes('perc5')) {
    playSample(audioContext, instruments.perc5, time, seq[stepNumber].gain.perc5)
  }
}
export default playInstruments