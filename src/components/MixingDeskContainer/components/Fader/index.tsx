import { ChangeEvent } from 'react'
import './fader.css'

const Fader = ({ volume, setVolume }: { volume: number, setVolume: (gain: number) => void  }) => {
  return(
    <div className='flex-col'>
      <div className="wrapper">
        <input 
          type="range"
          id='volume' 
          onChange={(event: ChangeEvent<HTMLInputElement>) => setVolume(parseFloat(event.target.value))}  
          value={volume} 
          max={3.4}
          min={0}
          step={0.1}
        />
      </div>
      <div className='fixed'>
        Master: {((volume / 3.4) * 100).toFixed(0)}%
      </div>
    </div>
  )
} 
export default Fader