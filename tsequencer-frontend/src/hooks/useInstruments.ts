import { useEffect, useState } from "react";

import { setSamples } from "../utils/setSamples";

export interface LoadedInstruments {
  [key: string]: AudioBuffer;
  kick: AudioBuffer;
  clap: AudioBuffer;
  closedHH: AudioBuffer;
  ride: AudioBuffer;
}

const useInstruments = () => {
  const [instruments, setInstruments] = useState<LoadedInstruments>();

  useEffect(() => {
    const loadInstruments = async () => {
      const kick = await setSamples("https://dermotbg.github.io/tseq-audio/kickDistPitched.wav");
      const sub = await setSamples("https://dermotbg.github.io/tseq-audio/sub.wav");
      const clap = await setSamples("https://dermotbg.github.io/tseq-audio/clap.wav");
      const snare = await setSamples("https://dermotbg.github.io/tseq-audio/snare.wav");
      const closedHH = await setSamples("https://dermotbg.github.io/tseq-audio/chh.wav");
      const openHH = await setSamples("https://dermotbg.github.io/tseq-audio/Final_OpenHH_2.wav");
      const ride = await setSamples("https://dermotbg.github.io/tseq-audio/ride2.wav");
      const perc = await setSamples("https://dermotbg.github.io/tseq-audio/perc1.wav");
      const perc2 = await setSamples("https://dermotbg.github.io/tseq-audio/perc5-2.wav");
      const perc3 = await setSamples("https://dermotbg.github.io/tseq-audio/perc6.wav");
      const perc4 = await setSamples("https://dermotbg.github.io/tseq-audio/perc3.wav");
      const perc5 = await setSamples("https://dermotbg.github.io/tseq-audio/perc3-2.wav");
      // Unused below:

      const loadedInstruments = {
        kick,
        clap,
        snare,
        closedHH,
        openHH,
        ride,
        sub,
        perc,
        perc2,
        perc3,
        perc4,
        perc5,
      };
      // const loadedInstruments = await fetchInstruments();
      setInstruments(loadedInstruments);
    };
    if (!instruments) loadInstruments();
  }, []);

  return instruments;
};

export default useInstruments;
