import { useEffect, useState } from "react"
import { audioContext } from "../utils/audioContext"

interface LoadedInstruments {
  [key: string]: AudioBuffer
  kick: AudioBuffer
  clap: AudioBuffer
  closedHH: AudioBuffer
}

const getSample = async (audioContext: AudioContext, filepath: string) => {
  // fetch file
  const response = await fetch(filepath)
  // store in arrayBuffer
  const arrayBuffer = await response.arrayBuffer()
  //  decode into audioBuffer
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  return audioBuffer
}

// TODO: this can loop over array of samples
const setSamples = async (filePath: string) => {
  const sample = await getSample(audioContext, filePath)
  return sample
}

const fetchInstruments = async () => {
  const kick = await setSamples('src/audio/91627__suicidity__dirty-tonys-kick-drum-mx-055.wav')
  const clap = await setSamples('src/audio/561119__sorinious_genious__clap-9.wav')
  const closedHH = await setSamples('src/audio/674295__theendofacycle__hi-hat-closed-hit-02.wav')
  const ride = await setSamples('src/audio/26665__altemark__ride08.wav')
  // TODO: metronome
  // const metroUp = await setSamples('src/audio/250551__druminfected__metronomeup.wav')
  // const metroDown = await setSamples('src/audio/250552__druminfected__metronome.wav')
  return { kick, clap, closedHH, ride }
}

const useInstruments = () => {
  const [instruments, setInstruments]= useState<LoadedInstruments>()

  useEffect(() => {
    const loadInstruments = async () => {
      const loadedInstruments = await fetchInstruments()
      setInstruments(loadedInstruments)
    }
    loadInstruments()
  },[])

  return instruments
}

export default useInstruments