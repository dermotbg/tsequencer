import type { ChangeEvent } from "react";
import FaderDetails from "../FaderDetails";
import "../../../fader.css";

const MasterFader = ({
  volume,
  setVolume,
}: {
  volume: number;
  setVolume: (gain: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center touch-pan-x">
      <div className="wrapper">
        <input
          type="range"
          id="volume"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setVolume(parseFloat(event.target.value))
          }
          value={volume}
          max={3.4}
          min={0}
          step={0.1}
        />
      </div>
      <div className="flex flex-col">
        <FaderDetails gain={volume} instrument="Pad" />
      </div>
    </div>
  );
};
export default MasterFader;
