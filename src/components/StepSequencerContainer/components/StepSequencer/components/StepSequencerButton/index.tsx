import { StepSeqProps } from "../../../../types"

const StepSeqButton = ({ index, extraCSS, step, onClickHandler }: StepSeqProps) => {

  return (
    <div className='flex-col box-border'>
      <button
        className={'box-border border-4 p-4 rounded-md w-5/6 h-full min-h-24  ' + `${extraCSS}`}
        onClick={() => onClickHandler(index)}
        >
        {index + 1}
        <div className={!step.instruments.length ? '' : 'flex flex-row justify-apart border-2 border-black rounded-lg'}>
          {step.instruments.map((i, index) => {
            if(index !== step.instruments.length -1 ){
              return (
                <div className="border-solid border-r-2 border-black  flex-grow" key={i}>
                  {i[0].toUpperCase()}
                </div>
              )
            }
            else{
              return (
                <div className="flex-grow" key={i}>
                  {i[0].toUpperCase()}
                </div>
              )
            }
          })}
        </div>

      </button>
    </div>
  )
}

export default StepSeqButton