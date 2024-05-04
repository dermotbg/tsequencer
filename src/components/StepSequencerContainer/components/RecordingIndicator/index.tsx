import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useRecordStore from "../../../../hooks/StateHooks/useRecordStore"

const RecordingIndicator = () => {
  const recordingState = useRecordStore()

  return(
    <div>
    Recording:
    {recordingState.record 
      ? <FontAwesomeIcon icon={faCircle} size="lg" beat border className="text-red-700 rounded-full p-0 m-0 shadow-sm shadow-black" /> 
      : <FontAwesomeIcon icon={faCircle} size="lg" border className="text-slate-300 rounded-full p-0 m-0 shadow-sm shadow-black "  />
    } 
    </div>
  )
  
  

}

export default RecordingIndicator