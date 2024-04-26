import { useEffect, useState } from "react"
import { setSamples } from "../utils/setSamples"
import { audioContext } from "../utils/audioContext"
import { playSample } from "../utils/playSample"
import { Step } from "../components/StepSequencerContainer/types"

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

  const triggerMetronome = (step: Step) => {
    if(!metronome) return
    if(step.metronomes.includes('metroUp')) {
      playSample(audioContext, metronome.metroUp, 0, 3)
    }
    if(step.metronomes.includes('metroDown')) {
      playSample(audioContext, metronome.metroDown, 0, 3)
    }
  }

  return { metronome, triggerMetronome }
  
}

export default useMetronome