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

const GlobalOptionsContainer = () => {
  const [keysActive, setKeysActive] = useState<boolean>(false);

  const instruments = useInstruments();
  const { pushToSequencer, isPlaying } = useSequencer();
  const { level } = useVolumeStore();
  const { record, stepRef } = useRecordStore();

  const recordingRef = useRef(record);

  useEffect(() => {
    recordingRef.current = record;
  }, [record]);

  // TODO: add condition where key tracking on launches sample when isPLaying false
  useEffect(() => {
    if (!instruments || !keysActive) return;
    const keyPressFunction = (e: KeyboardEvent) => {
      keyPressHandler({
        instruments: validateInstrumentRack(instruments),
        keyCode: e.code,
        pushToSequencer,
        volume: level,
        recording: recordingRef.current,
        stepRef,
      });
    };

    window.addEventListener("keydown", keyPressFunction);

    return () => window.removeEventListener("keydown", keyPressFunction);
  }, [instruments, level, pushToSequencer, stepRef, keysActive, isPlaying]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-start">
        <KeyTrackController keysActive={keysActive} setKeysActive={setKeysActive} />
        <MetronomeController />
        <BpmController />
      </div>
      <div className="flex flex-col items-start space-x-2 pb-3 mt-2">
        <KeyAssignDialog />
      </div>
    </div>
  );
};

export default GlobalOptionsContainer;
