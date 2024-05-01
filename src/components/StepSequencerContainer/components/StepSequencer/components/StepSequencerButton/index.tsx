import instrumentAttributeRenderer from "../../../../../../utils/instrumentAttributeRenderer"
import { StepSeqProps } from "../../../../types"

const StepSeqButton = ({ index, extraCSS, step, onClickHandler }: StepSeqProps) => {

  return (
    <div className='flex-col box-border'>
      <button
        className={'box-border border-4 p-4 rounded-md w-5/6 h-full  ' + `${extraCSS}`}
        onClick={() => onClickHandler(index)}
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