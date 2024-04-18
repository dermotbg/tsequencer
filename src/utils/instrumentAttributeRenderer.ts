import { Step } from "../assets/components/StepSequencerContainer/types"

const instrumentAttributeRenderer = ( instrument: string, step: Step ): string | undefined => {
    switch (instrument) {
      case 'kick':
      return`kick: ${((step.gain.kick / 3.4) * 100).toFixed(0)}%`
      case 'clap':
      return `clap: ${((step.gain.clap / 3.4) * 100).toFixed(0)}%`
      case 'closedHH':
        return `cHH: ${((step.gain.closedHH / 3.4) * 100).toFixed(0)}%`
      case 'ride':
        return `ride: ${((step.gain.ride / 3.4) * 100).toFixed(0)}%`
      default:
        break
    }
}
export default instrumentAttributeRenderer