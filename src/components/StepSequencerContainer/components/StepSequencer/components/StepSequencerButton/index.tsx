import { Button } from "@/components/ui/button"
import { StepSeqProps } from "../../../../types"

const StepSeqButton = ({ index, extraCSS, step, onClickHandler }: StepSeqProps) => {

  return (
    <div className='flex-col box-border'>
      <Button
        className={'flex-col box-border border-4 p-4 bg-stone-800 rounded-md w-5/6 h-full min-h-24  ' + `${extraCSS}`}
        onClick={() => onClickHandler(index)}
        >
        {index + 1}
        <div className={!step.instruments.length ? '' : 'flex flex-row flex-wrap justify-apart border-2 bg-transparent border-black rounded-lg px-3'}>
          {step.instruments.map((i, index) => {
            if(index !== step.instruments.length -1 ){
              return (
                <div className="border-solid border-r-2 border-black flex-grow px-2 text-shadow-sm shadow-black" key={i}>
                  {i[0].toUpperCase()}
                </div>
              )
            }
            else{
              return (
                <div className="flex-grow flex-wrap px-2 text-shadow-sm shadow-black" key={i}>
                  {i[0].toUpperCase()}
                </div>
              )
            }
          })}
        </div>

      </Button>
    </div>
  )
}

export default StepSeqButton