import { useEffect, useState } from "react"
import { setSamples } from "../utils/setSamples"
import { audioContext } from "../utils/audioContext"
import { playSample } from "../utils/playSample"

export interface LoadedMetronome {
  metroUp: AudioBuffer
  metroDown: AudioBuffer
}

const fetchMetronome = async () => {
  const metroUp = await setSamples('src/audio/metroUp.wav')
  const metroDown = await setSamples('src/audio/metroDown.wav')
  return { metroUp, metroDown }
}

const useMetronome = () => {
  const [metronome, setMetronome]= useState<LoadedMetronome>()

  useEffect(() => {
    const loadMetro = async () => {
      const loadedMetronome = await fetchMetronome()
      setMetronome(loadedMetronome)
    }
    loadMetro()
  },[])

  const triggerMetronome = (stepNumber: number, time: number ) => {
    if(!metronome) return
    console.log(audioContext.currentTime)
    switch (stepNumber) {
      case 0:
        playSample(audioContext, metronome.metroUp, time, 3)
        break;
      case 5:
        playSample(audioContext, metronome.metroDown, time, 3)
        break
      case 9:
        playSample(audioContext, metronome.metroDown, time, 3)
        break
      case 13:
        playSample(audioContext, metronome.metroDown, time, 3)
        break
      default:
        break;
    }
  }

  return { metronome, triggerMetronome }
  
}

export default useMetronome