import { ActivePadInstrument, Sequencer } from "../../types"
import StepSeqButton from "./components/StepSequencerButton"
import useActiveStepStore from "../../../../hooks/StateHooks/useActiveStepStore"

const StepSequencer = ({ seq, activePad, volume }: { seq: Sequencer, activePad: ActivePadInstrument, volume: number }) => {

  const activeStep = useActiveStepStore()
  
  const onClickHandler = (index: number) => {
    assignSampleHandler(index)
    activeStepHandler(index)
  }

  const activeStepHandler = (index: number) => {
    if(!activePad) {
      activeStep.set(index)
      return
    }
  }


  const assignSampleHandler = (index: number) => {
    // TODO: incorporate more logic into step interaction with no active step
    // maybe volume mixer beneath or something
    if(!activePad) return
    if(seq[index].instruments.includes(activePad)){
      seq[index].instruments.splice(seq[index].instruments.indexOf(activePad), 1)
    }
    else{
      seq[index].instruments.push(activePad)
      const instrument = activePad
      seq[index].gain[instrument] = volume
    }
  }
  
  
  if(!seq[0]) return <>Loading...</>
  return (
    <div className='seq-container grid gap-4 grid-cols-4 grid-rows-4'>
    {seq.map((b, i) => {
      return <StepSeqButton 
        index={i} 
        extraCSS={b.extraCSS} 
        key={seq.length - i} 
        step={seq[i]} 
        onClickHandler={onClickHandler}
      />
    })}
  </div>
  )

}

export default StepSequencer