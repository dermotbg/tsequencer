import { Button } from "@/components/ui/button"
import { StepSeqProps } from "../../../../types"
import AssignedInstrumentsMobile from "./components/AssignedInstrumentsMobile"
import AssignedInstrumentsDesktop from "./components/AssignedInstrumentsDesktop"

const StepSeqButton = ({ index, extraCSS, step, onClickHandler, windowSize }: StepSeqProps) => {

  return (
    <div className='flex-col box-border'>
      <Button
        className={'flex-col box-border border-4 p-4 bg-stone-800 rounded-md w-5/6 h-full min-h-24  ' + `${extraCSS}`}
        onClick={() => onClickHandler(index)}
        >
        {index + 1}
        {windowSize.width <= 887 
          ? <AssignedInstrumentsMobile step={step} />
          : <AssignedInstrumentsDesktop step={step} />
        }
      </Button>
    </div>
  )
}

export default StepSeqButton