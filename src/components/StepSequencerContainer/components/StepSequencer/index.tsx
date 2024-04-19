import { ActivePadInstrument, Sequencer } from "../../types"
import StepSeqButton from "../StepSequencerButton"

const StepSequencer = ({ seq, activePad, volume }: { seq: Sequencer, activePad: string | undefined, volume: number }) => {
  if(!seq[0]) return <>Loading...</>
  return (
    <div className='seq-container grid gap-4 grid-cols-4 grid-rows-4'>
    {seq.map((b, i) => {
      return <StepSeqButton 
        index={i} 
        extraCSS={b.extraCSS} 
        key={seq.length - i} 
        activePad={activePad as ActivePadInstrument} 
        step={seq[i]} 
        volume={volume} 
      />
    })}
  </div>
  )

}

export default StepSequencer