import type { Step } from "../components/StepSequencerContainer/types";

// TODO: confirm this is no longer relevant or change purpose

const instrumentAttributeRenderer = (instrument: string, step: Step): string | undefined => {
  switch (instrument) {
    case "kick":
      return `kick: ${((step.gain.kick / 3.4) * 100).toFixed(0)}%`;
    case "clap":
      return `clap: ${((step.gain.clap / 3.4) * 100).toFixed(0)}%`;
    case "snare":
      return `snare: ${((step.gain.snare / 3.4) * 100).toFixed(0)}%`;
    case "closedHH":
      return `cHH: ${((step.gain.closedHH / 3.4) * 100).toFixed(0)}%`;
    case "openHH":
      return `oHH: ${((step.gain.openHH / 3.4) * 100).toFixed(0)}%`;
    case "ride":
      return `ride: ${((step.gain.ride / 3.4) * 100).toFixed(0)}%`;
    case "sub":
      return `sub: ${((step.gain.sub / 3.4) * 100).toFixed(0)}%`;
    case "perc":
      return `perc: ${((step.gain.perc / 3.4) * 100).toFixed(0)}%`;
    case "perc2":
      return `perc2: ${((step.gain.perc2 / 3.4) * 100).toFixed(0)}%`;
    case "perc3":
      return `perc3: ${((step.gain.perc3 / 3.4) * 100).toFixed(0)}%`;
    case "perc4":
      return `perc4: ${((step.gain.perc4 / 3.4) * 100).toFixed(0)}%`;
    case "perc5":
      return `perc5: ${((step.gain.perc5 / 3.4) * 100).toFixed(0)}%`;
    default:
      break;
  }
};
export default instrumentAttributeRenderer;
