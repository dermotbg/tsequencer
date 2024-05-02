import { useEffect, useRef, useState } from "react"
import BpmController from "./components/BpmController"
import MetronomeController from "./components/MetromeController"
import KeyTrackController from "./components/KeyTrackController"
import useInstruments from "../../hooks/useInstruments"
import useSequencer from "../../hooks/useSequencer"
import { keyPressHandler } from "./components/KeyTrackController/utils/keyPressHandler"
import useVolumeStore from "../../hooks/StateHooks/useVolumeStore"
import useRecordStore from "../../hooks/StateHooks/useRecordStore"
import { validateInstrumentRack } from "../../utils/typeChecking"
import RecordingIndicator from "./components/RecordingIndicator"

const GlobalOptionsContainer = () => {
  const [keysActive, setKeysActive] = useState<boolean>(false)
  
  
  const instruments = useInstruments()
  const { pushToSequencer } = useSequencer()
  const { level } = useVolumeStore()
  const { record, stepRef } = useRecordStore()

  const recordingRef = useRef(record)

  useEffect(() => {
    recordingRef.current = record
  }, [record])

  useEffect(() => {
    if(!instruments || !keysActive) return
    const keyPressFunction = (e: KeyboardEvent) => {
      keyPressHandler({ 
        instruments: validateInstrumentRack(instruments), 
        keyCode: e.code, 
        pushToSequencer, 
        volume: level, 
        recording: recordingRef.current, 
        stepRef
      })
    }

    window.addEventListener('keydown', keyPressFunction)

    return () => window.removeEventListener('keydown', keyPressFunction)
  
  },[instruments, level, pushToSequencer, stepRef])


  return(
    <div className="flex justify-evenly">
      <KeyTrackController keysActive={keysActive} setKeysActive={setKeysActive} />
      <BpmController />
      <MetronomeController />
      <RecordingIndicator />
    </div>
  )
  
}

export default GlobalOptionsContainer