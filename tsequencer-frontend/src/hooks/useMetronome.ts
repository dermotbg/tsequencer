import { useEffect, useState } from "react";

import { audioContext } from "@/utils/audioContext";
import { playSample } from "@/utils/playSample";
import { setSamples } from "@/utils/setSamples";

import type { Step } from "../components/StepSequencerContainer/types";

export interface LoadedMetronome {
  metroUp: AudioBuffer;
  metroDown: AudioBuffer;
}

const useMetronome = () => {
  const [metronome, setMetronome] = useState<LoadedMetronome>();

  useEffect(() => {
    const loadMetro = async () => {
      const metroUp = await setSamples("https://dermotbg.github.io/tseq-audio/metroUp.wav");
      const metroDown = await setSamples("https://dermotbg.github.io/tseq-audio/metroDown.wav");
      const loadedMetronome = { metroUp, metroDown };
      setMetronome(loadedMetronome);
    };
    if (!metronome) loadMetro();
  }, []);

  const triggerMetronome = (step: Step, time: number) => {
    if (!metronome) return;
    if (step.metronomes.includes("metroUp")) {
      playSample(audioContext, metronome.metroUp, time, 3);
    }
    if (step.metronomes.includes("metroDown")) {
      playSample(audioContext, metronome.metroDown, time, 3);
    }
  };

  return { metronome, triggerMetronome };
};

export default useMetronome;
