import { useEffect, useRef, useState } from "react";

import useRecordStore from "@/hooks/StateHooks/useRecordStore";
import useVolumeStore from "@/hooks/StateHooks/useVolumeStore";
import useInstruments from "@/hooks/useInstruments";
import useSequencer from "@/hooks/useSequencer";

import { validateInstrumentRack } from "@/utils/typeChecking";
import { keyPressHandler } from "./components/KeyTrackController/utils/keyPressHandler";

import BpmController from "./components/BpmController";
import KeyTrackController from "./components/KeyTrackController";
import MetronomeController from "./components/MetromeController";
import KeyAssignDialog from "./components/KeyAssignDialog";
import useAssignedKeysStore from "@/hooks/StateHooks/useAssignedKeysStore";
import useWindowSize from "@/hooks/useWindowSize";

const GlobalOptionsContainer = () => {
  const [keysActive, setKeysActive] = useState<boolean>(false);

  const instruments = useInstruments();
  const assignedKeys = useAssignedKeysStore();
  const { pushToSequencer, isPlaying } = useSequencer();
  const { level } = useVolumeStore();
  const { record, stepRef } = useRecordStore();
  const windowSize = useWindowSize();

  const recordingRef = useRef(record);

  useEffect(() => {
    recordingRef.current = record;
  }, [record]);

  useEffect(() => {
    if (!instruments || !keysActive) return;
    const keyPressFunction = (e: KeyboardEvent) => {
      keyPressHandler({
        instruments: validateInstrumentRack(instruments),
        keyCode: e.key.toUpperCase(),
        pushToSequencer,
        volume: level,
        recording: recordingRef.current,
        stepRef,
        assignedKeys,
        isPlaying: isPlaying.current,
      });
    };

    window.addEventListener("keydown", keyPressFunction);

    return () => window.removeEventListener("keydown", keyPressFunction);
  }, [instruments, level, pushToSequencer, stepRef, keysActive, isPlaying]);

  return (
    <div className="flex flex-row gap-6">
      <div className="hidden sm:flex flex-col items-start">
        <KeyTrackController
          disabled={windowSize.width < 640}
          keysActive={keysActive}
          setKeysActive={setKeysActive}
        />
        <KeyAssignDialog />
      </div>
      <div className="flex flex-col items-start">
        <MetronomeController />
        <BpmController />
      </div>
    </div>
  );
};

export default GlobalOptionsContainer;
