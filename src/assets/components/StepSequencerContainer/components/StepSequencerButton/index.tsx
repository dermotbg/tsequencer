import instrumentAttributeRenderer from "../../../../../utils/instrumentAttributeRenderer"
import { validateInstrument } from "../../../../../utils/typeChecking"
import { StepSeqProps } from "../../types"

const StepSeqButton = ({index, extraCSS, activePad, step, volume }: StepSeqProps) => {
  
  const assignSampleHandler = () => {
    // TODO: incorporate more logic into step interaction with no active step
    // maybe volume mixer beneath or something
    if(!activePad) return
    if(step.instruments.includes(activePad)){
      step.instruments.splice(step.instruments.indexOf(activePad), 1)
    }
    else{
      step.instruments.push(activePad)
      const instrument = validateInstrument(activePad)
      step.gain[instrument] = volume
    }
  }
  return (
    <div className='flex-col'>
      <button
        className={'box-border border-4 p-4 rounded-md w-5/6 h-full  ' + `${extraCSS}`}
        onClick={() => assignSampleHandler()}
        >
        {index + 1}
        {step.instruments.map((i) => {
          return (
            <div key={i}>
              {instrumentAttributeRenderer(i, step)}
            </div>
          )
        })}
      </button>
    </div>
  )
}

export default StepSeqButton