export const playSample = (audioContext: AudioContext, audioBuffer: AudioBuffer, time: number, volume: number) => {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer
    // possible to have playbackRate here if wanted in future (possible pitch-like adjustment?)
  })
  const gainNode = audioContext.createGain()
  gainNode.gain.value = volume
  sampleSource
    .connect(gainNode)
    .connect(audioContext.destination)
  sampleSource.start(time)
  return sampleSource
}