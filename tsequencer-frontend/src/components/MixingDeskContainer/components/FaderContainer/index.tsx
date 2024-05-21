import { LoadedInstruments } from "../../../../hooks/useInstruments"
import { AvailableInstruments, GainObject } from "../../../../types"
import { validateInstrument } from "../../../../utils/typeChecking"
import { Sequencer } from "../../../StepSequencerContainer/types"
import Fader from "./components/Fader"
import MasterFader from './components/MasterFader'

interface FaderContainerType {
  activeStep: number | undefined
  instruments: LoadedInstruments
  seq: Sequencer
  setGain: (index: number, gain: number, instrument: AvailableInstruments) => void
  volume: number
  setVolume: (gain: number) => void
}

const FaderContainer = ({ activeStep, instruments, seq, setGain, volume, setVolume }: FaderContainerType) => {

    // TODO do something better for validation here, not a fan. 
  if (activeStep === undefined) return (
    <div className='flex flex-row items-center justify-evenly touch-none'>
      <MasterFader volume={volume} setVolume={setVolume} />
    </div>
  )

  return(
    <div className='flex flex-row items-center justify-evenly touch-none'>
        {Array.from(Object.keys(instruments).map((instrument: string) => {
          if(!seq[activeStep].instruments.includes(validateInstrument(instrument))){
            return <Fader 
              index={activeStep} 
              disabled={true} 
              key={`${activeStep}-${instrument}`} 
              instrument={validateInstrument(instrument)} 
              gain={seq[activeStep].gain[instrument as keyof GainObject]} 
              setGain={setGain} 
            />
          }
          else {
            return <Fader 
              index={activeStep} 
              disabled={false} 
              key={`${activeStep}-${instrument}`} 
              instrument={validateInstrument(instrument)} 
              gain={seq[activeStep].gain[instrument as keyof GainObject]} 
              setGain={setGain} 
            />
          }
        }))}
        <MasterFader volume={volume} setVolume={setVolume} />
      </div>
  )

}

export default FaderContainer