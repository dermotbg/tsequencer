import { useEffect, useState } from "react"
import { setSamples } from "../utils/setSamples"

export interface LoadedInstruments {
  [key: string]: AudioBuffer
  kick: AudioBuffer
  clap: AudioBuffer
  closedHH: AudioBuffer
  ride: AudioBuffer
}

const fetchInstruments = async () => {
  const kick = await setSamples('src/audio/91627__suicidity__dirty-tonys-kick-drum-mx-055.wav')
  const clap = await setSamples('src/audio/561119__sorinious_genious__clap-9.wav')
  const closedHH = await setSamples('src/audio/674295__theendofacycle__hi-hat-closed-hit-02.wav')
  const ride = await setSamples('src/audio/26665__altemark__ride08.wav')
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