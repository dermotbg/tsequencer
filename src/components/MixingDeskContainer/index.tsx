import useActivePadStore from '../../hooks/StateHooks/useActivePadStore'
import useVolumeStore from '../../hooks/StateHooks/useVolumeStore'
import Fader from './components/Fader'

const MixingDeskContainer = () => {
  // Take active step
  // map through instrument gains on active step
  // return faders
  const activePad = useActivePadStore()
  const volume = useVolumeStore()
  return(
    <Fader volume={volume.level} setVolume={volume.set} />
  )
} 
export default MixingDeskContainer