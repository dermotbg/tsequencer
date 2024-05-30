export const getSample = async (audioContext: AudioContext, filepath: string) => {
  // fetch file
  const response = await fetch(filepath);
  // store in arrayBuffer
  const arrayBuffer = await response.arrayBuffer();
  //  decode into audioBuffer
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
};
