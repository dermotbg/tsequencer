import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

const LaunchController = ({
  launchHandler,
  isRunning,
}: {
  launchHandler: () => void;
  isRunning: boolean;
}) => {
  return (
    <Button
      className={
        isRunning
          ? "m-2 rounded-md border-4 border-green-custom p-8"
          : "m-2 rounded-md border-4 p-8"
      }
      onClick={() => launchHandler()}
      role="switch"
    >
      {isRunning ? <Pause color="#00f529" /> : <Play color="#00f529" />}
    </Button>
  );
};

export default LaunchController;
