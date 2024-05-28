import { windowSize } from "../../../../types"
import { Sequencer } from "../../types"
import StepSeqButton from "./components/StepSequencerButton"

const StepSequencer = ({ seq, onClickHandler, windowSize }: { seq: Sequencer, onClickHandler: (index: number) => void, windowSize: windowSize }) => {
  
  // TODO: Proper Loading state
  if(!seq || !seq[0]) return <>Loading...</>
  return (
    <div className='seq-container grid gap-4 grid-cols-4 grid-rows-4'>
    {seq.map((b, i) => {
      return <StepSeqButton 
        index={i} 
        extraCSS={b.extraCSS} 
        key={seq.length - i} 
        step={seq[i]} 
        onClickHandler={onClickHandler}
        windowSize={windowSize}
      />
    })}
  </div>
  )

}

export default StepSequencer