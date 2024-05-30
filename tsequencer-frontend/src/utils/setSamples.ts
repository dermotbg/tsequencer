import { audioContext } from "./audioContext";
import { getSample } from "./getSamples";

export const setSamples = async (filePath: string) => {
  const sample = await getSample(audioContext, filePath);
  return sample;
};
