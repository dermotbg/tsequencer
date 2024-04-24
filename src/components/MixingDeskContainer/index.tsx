import useActiveStepStore from '../../hooks/StateHooks/useActiveStepStore'
import useSequencerStore from '../../hooks/StateHooks/useSequencerStore'
import useVolumeStore from '../../hooks/StateHooks/useVolumeStore'
import { AvailableInstruments, GainObject } from '../../types'
import Fader from './components/Fader'
import MasterFader from './components/MasterFader'
import useInstruments from '../../hooks/useInstruments'
import { validateInstrument } from '../../utils/typeChecking'

const MixingDeskContainer = () => {
  // Take active step
  // map through instrument gains on active step
  // return faders
  const { activeStep } = useActiveStepStore()
  const { seq, setSeq } = useSequencerStore()
  const instruments = useInstruments()
  const volume = useVolumeStore()
  const setGain = (index: number, gain: number,  instrument: AvailableInstruments) => {
    const newSeq = seq
    newSeq[index]['gain'][instrument] = gain
    setSeq(newSeq)
  }
  // TODO proper type validation here
  if (activeStep === undefined || !instruments) return (
    <div className='flex flex-row items-center justify-evenly'>
      <MasterFader volume={volume.level} setVolume={volume.set} />
    </div>
  )
  return(
    <div className='flex flex-row items-center justify-evenly'>
      {Array.from(Object.keys(instruments).map((instrument: string) => {
        if(!seq[activeStep].instruments.includes(validateInstrument(instrument))){
          return <Fader index={activeStep} disabled={true} key={`${activeStep}-${instrument}`} instrument={validateInstrument(instrument)} gain={seq[activeStep].gain[instrument as keyof GainObject]} setGain={setGain} />
        }
        else {
          return <Fader index={activeStep} disabled={false} key={`${activeStep}-${instrument}`} instrument={validateInstrument(instrument)} gain={seq[activeStep].gain[instrument as keyof GainObject]} setGain={setGain} />
        }

      }))}
      <MasterFader volume={volume.level} setVolume={volume.set} />
    </div>
  )
} 
export default MixingDeskContainer