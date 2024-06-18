import ClearSequencerController from "./components/ClearSequencerController";
import LaunchController from "./components/LaunchController";
import RecordController from "./components/RecordController";
import type { windowSize } from "@/types";

const ControllerContainer = ({
  launchHandler,
  recordHandler,
  clearSequencer,
  isRecording,
  isRunning,
  windowSize,
}: {
  launchHandler: () => void;
  recordHandler: () => void;
  clearSequencer: () => void;
  isRecording: boolean;
  isRunning: boolean;
  windowSize: windowSize;
}) => {
  return (
    <div className="p-10">
      <LaunchController launchHandler={launchHandler} isRunning={isRunning} />
      {windowSize.width <= 768 ? null : (
        <RecordController recordHandler={recordHandler} isRecording={isRecording} />
      )}
      <ClearSequencerController clearSequencer={clearSequencer} isRunning={isRunning} />
    </div>
  );
};
export default ControllerContainer;
