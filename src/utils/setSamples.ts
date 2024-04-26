import { getSample } from "./getSamples"
import { audioContext } from "./audioContext"

export const setSamples = async (filePath: string) => {
  const sample = await getSample(audioContext, filePath)
  return sample
}
