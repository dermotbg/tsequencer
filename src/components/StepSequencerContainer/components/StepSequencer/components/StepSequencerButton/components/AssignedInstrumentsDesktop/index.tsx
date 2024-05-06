import { Step } from "src/components/StepSequencerContainer/types"

const AssignedInstrumentsDesktop = ( {step }: { step: Step }) => {
  return(
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
  )
}
export default AssignedInstrumentsDesktop