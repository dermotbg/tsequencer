import { useEffect, useState } from "react";

import { setSamples } from "../utils/setSamples";

export interface LoadedInstruments {
  [key: string]: AudioBuffer;
  kick: AudioBuffer;
  clap: AudioBuffer;
  closedHH: AudioBuffer;
  ride: AudioBuffer;
}

const fetchInstruments = async () => {
  // const kick = await setSamples('src/audio/91627__suicidity__dirty-tonys-kick-drum-mx-055.wav')
  const kick = await setSamples("src/audio/kickDistPitched.wav");
  // const kick = await setSamples("src/audio/kickWTail.wav");
  const sub = await setSamples("src/audio/sub.wav");
  const clap = await setSamples("src/audio/561119__sorinious_genious__clap-9.wav");
  const snare = await setSamples("src/audio/snare.wav");
  // const closedHH = await setSamples('src/audio/674295__theendofacycle__hi-hat-closed-hit-02.wav')
  const closedHH = await setSamples("src/audio/chh.wav");
  const openHH = await setSamples("src/audio/Final_OpenHH_2.wav");
  // const ride = await setSamples('src/audio/26665__altemark__ride08.wav')
  const ride = await setSamples("src/audio/ride2.wav");
  const perc = await setSamples("src/audio/perc1.wav");
  const perc2 = await setSamples("src/audio/perc5-2.wav");
  const perc3 = await setSamples("src/audio/perc6.wav");
  const perc4 = await setSamples("src/audio/perc3.wav");
  const perc5 = await setSamples("src/audio/perc3-2.wav");
  return {
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
};

const useInstruments = () => {
  const [instruments, setInstruments] = useState<LoadedInstruments>();

  useEffect(() => {
    const loadInstruments = async () => {
      const loadedInstruments = await fetchInstruments();
      setInstruments(loadedInstruments);
    };
    loadInstruments();
  }, []);

  return instruments;
};

export default useInstruments;
