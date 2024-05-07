import ClearSequencerController from "./components/ClearSequencerController"
import LaunchController from "./components/LaunchController"
import RecordController from "./components/RecordController"


const ControllerContainer = ({ launchHandler, recordHandler, clearSequencer, isRecording, isRunning }: { launchHandler: () => void, recordHandler: () => void, clearSequencer: () => void, isRecording: boolean, isRunning: boolean }) => {
  return(
    <div className="p-10">
      <LaunchController launchHandler={launchHandler} isRunning={isRunning} />
      <RecordController recordHandler={recordHandler} isRecording={isRecording} />
      <ClearSequencerController clearSequencer={clearSequencer} /> 
    </div>
  )
}
export default ControllerContainer