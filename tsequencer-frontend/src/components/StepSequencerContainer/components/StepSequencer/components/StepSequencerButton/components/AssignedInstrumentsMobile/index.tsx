import { Step } from "src/components/StepSequencerContainer/types"

// TODO: revisit this later cols-2 fails underneath mobile width, innerwidth doesn't re-render when changes.  

const AssignedInstrumentsMobile = ({ step }: { step: Step }) => {
  return(
    <div className={!step.instruments.length ? '' : 'grid grid-cols-1 border-2 bg-transparent border-black rounded-lg'}>
      {step.instruments.map((i, index) => {
        if(index % 2 === 0 && step.instruments.length -1 >= index - 2){
          return (
            <div className="border-solid border-b-2 border-r-2 px-2 border-black text-shadow-sm shadow-black" key={i}>
              {i[0].toUpperCase()}
            </div>
          )
        }
        else{
          return (
            <div className="border-solid border-b-2 px-2 border-black text-shadow-sm shadow-black" key={i}>
              {i[0].toUpperCase()}
            </div>
          )
        }
      })}
    </div>
  )
}
export default AssignedInstrumentsMobile