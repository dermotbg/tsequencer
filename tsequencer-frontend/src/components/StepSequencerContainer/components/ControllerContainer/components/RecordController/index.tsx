import { Circle } from "lucide-react";

import { Button } from "@/components/ui/button";

const RecordController = ({
  recordHandler,
  isRecording,
}: {
  recordHandler: () => void;
  isRecording: boolean;
}) => {
  return (
    <Button
      className={
        isRecording
          ? "m-2 rounded-md border-4 border-red-custom p-8"
          : "m-2 rounded-md border-4 p-8"
      }
      onClick={() => recordHandler()}
      role="switch"
    >
      <Circle color="#ff0000" />
    </Button>
  );
};

export default RecordController;
