import { useEffect, useRef, useState } from "react";

import useAssignedKeysStore from "@/hooks/StateHooks/useAssignedKeysStore";
import useRecordStore from "@/hooks/StateHooks/useRecordStore";
import useVolumeStore from "@/hooks/StateHooks/useVolumeStore";
import useInstruments from "@/hooks/useInstruments";
import useMessageStore from "@/hooks/StateHooks/useMessageStore";
import useSequencer from "@/hooks/useSequencer";
import useWindowSize from "@/hooks/useWindowSize";

import { validateInstrumentRack } from "@/utils/typeChecking";
import { keyPressHandler } from "./components/KeyTrackController/utils/keyPressHandler";

import BpmController from "./components/BpmController";
import KeyTrackController from "./components/KeyTrackController";
import MetronomeController from "./components/MetromeController";
import KeyAssignDialog from "./components/KeyAssignDialog";

import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";

import type { AssignedKeysType } from "@/hooks/StateHooks/useAssignedKeysStore";

const GlobalOptionsContainer = () => {
  const [keysActive, setKeysActive] = useState<boolean>(false);
  const [isKeyDialogOpen, setIsKeyDialogOpen] = useState<boolean>(false);

  const instruments = useInstruments();
  const assignedKeys = useAssignedKeysStore();
  const { pushToSequencer, isPlaying } = useSequencer();
  const { level } = useVolumeStore();
  const { record, stepRef } = useRecordStore();
  const windowSize = useWindowSize();
  const errorMessage = useMessageStore();

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

  const setKeyTrackingKeyHandler = (i: string, key: string) => {
    if (!/^[a-zA-Z0-9]$/.test(key)) {
      errorMessage.set("Keys must be alphanumeric");
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 3000);
      return;
    }
    if (assignedKeys.isDuplicate(key)) {
      errorMessage.set("Keys must be not be duplicates");
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 3000);
      return;
    }
    assignedKeys.setInputValue(i as keyof AssignedKeysType, key.toUpperCase());
    assignedKeys.setActiveKey(i as keyof AssignedKeysType, key.toUpperCase());
  };

  const submitAssignedKeysHandler = () => {
    setIsKeyDialogOpen(false);
    assignedKeys.setPrevValue();
    assignedKeys.setIsDefault(false);
  };

  if (!instruments) return <LoadingSpinner />;
  if (!assignedKeys) return <LoadingSpinner />;

  return (
    <div className="flex flex-row gap-6">
      <div className="hidden sm:flex flex-col items-start">
        <KeyTrackController
          disabled={windowSize.width < 640}
          keysActive={keysActive}
          setKeysActive={setKeysActive}
        />
        <KeyAssignDialog
          instruments={validateInstrumentRack(instruments)}
          assignedKeys={assignedKeys}
          isKeyDialogOpen={isKeyDialogOpen}
          setIsKeyDialogOpen={setIsKeyDialogOpen}
          setKeyTrackingKeyHandler={setKeyTrackingKeyHandler}
          submitAssignedKeysHandler={submitAssignedKeysHandler}
          errorMessage={errorMessage.message}
        />
      </div>
      <div className="flex flex-col items-start">
        <MetronomeController />
        <BpmController />
      </div>
    </div>
  );
};

export default GlobalOptionsContainer;
