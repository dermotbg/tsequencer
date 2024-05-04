import useActiveStepStore from '../../hooks/StateHooks/useActiveStepStore'
import useSequencerStore from '../../hooks/StateHooks/useSequencerStore'
import useVolumeStore from '../../hooks/StateHooks/useVolumeStore'

import { AvailableInstruments } from '../../types'

import useInstruments from '../../hooks/useInstruments'
import FaderContainer from './components/FaderContainer'
import { validateInstrumentRack } from '../../utils/typeChecking'
import stepInicator from './components/StepIndicator'

const MixingDeskContainer = () => {
  const { activeStep } = useActiveStepStore()
  const { seq, setSeq } = useSequencerStore()
  const instruments = useInstruments()
  const volume = useVolumeStore()

  const setGain = (index: number, gain: number,  instrument: AvailableInstruments) => {
    const newSeq = seq
    newSeq[index]['gain'][instrument] = gain
    setSeq(newSeq)
  }

  if(!instruments) return <>Loading...</>

  return(
    <div className='flex flex-col'>
      {/* TODO: Proper step number component */} 
      {activeStep !== undefined && activeStep >= 0 
        ? stepInicator(activeStep+1)
        : null 
      }
      <FaderContainer 
        activeStep={activeStep} 
        instruments={validateInstrumentRack(instruments)} 
        seq={seq} 
        setGain={setGain} 
        volume={volume.level} 
        setVolume={volume.set} 
      />
    </div>
  )
} 
export default MixingDeskContainer