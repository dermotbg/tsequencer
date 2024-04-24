import { ChangeEvent } from 'react'
import '../fader.css'
import { AvailableInstruments } from '../../../../types'
import FaderDetails from '../FaderDetails'

const Fader = ({ disabled, index, instrument, gain, setGain }: { disabled: boolean, index: number, instrument: AvailableInstruments, gain: number, setGain: (index: number, gain: number, instrument: AvailableInstruments) => void  }) => {
  return(
    <div className='flex-col'>
      <div className={"wrapper"}>
        <input 
          type="range"
          id='volume' 
          onChange={(event: ChangeEvent<HTMLInputElement>) => setGain(index, parseFloat(event.target.value), instrument)}  
          value={gain} 
          max={3.4}
          min={0}
          step={0.1}
          disabled={disabled}
          style={disabled ? { backgroundColor: 'rgba(0, 0, 0, .8)' } : undefined }
        />
      </div>
      <div className='flex flex-col justify-start'>
        {disabled
          ? <FaderDetails instrument={'Inactive'} gain={gain} />
          : <FaderDetails instrument={instrument} gain={gain} />
        }
      </div>
    </div>
  )
} 
export default Fader