import { ChangeEvent } from "react"

const VolumeControl = ({ volume, setVolume }: {volume: number, setVolume: (gain: number) => void }) => {
  return (
    <div>
      <input 
        type='range' 
        id='volume' 
        onChange={(event: ChangeEvent<HTMLInputElement>) => setVolume(parseFloat(event.target.value))} 
        value={volume} 
        max={3.4}
        min={0}
        step={0.1}
        /> 
      <label htmlFor='volume'>Volume</label>
    </div>
  )
}

export default VolumeControl