import { Step } from "../types"

const instrumentAttributeRenderer = ( instrument: string, step: Step ): string | undefined => {
    switch (instrument) {
      case 'kick':
      return`kick: ${step.gain.kick}`
      case 'clap':
      return `clap: ${step.gain.clap}`
      case 'closedHH':
        return `closedHH: ${step.gain.closedHH}`
      case 'ride':
        return `ride: ${step.gain.ride}`
      default:
        break
    }
}
export default instrumentAttributeRenderer