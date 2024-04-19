import { useState } from "react"
import { Sequencer, Step } from "../components/StepSequencerContainer/types"
import { QueueSteps } from "../types"
import { playSample } from "../components/StepSequencerContainer/utils/playSample"
import { audioContext } from "../utils/audioContext"
import useInstruments from "./useInstruments"

const useSequencer = () => {
  const [bpm, setBpm] = useState<number>(120)
  const [seq, setSeq] = useState<Sequencer>(Array.from({ length: 16 }, () => {
    return {
      instruments: [],
      extraCSS: '',
      gain: {kick: 1, clap: 1, closedHH: 1, ride: 1}
    }
  }))

  const instruments = useInstruments()

  const lookahead = 25.0 // freq of scheduling function (miliseconds)
  const scheduleAheadTime = 0.1 // how far ahead to schedule (seconds)
  let activeStep = 0
  let nextStepTime = 0.0 // when next note is due

  const nextStep = () => {
    const secondsPerBeat = (60.0 / bpm) 
    // TODO: have stepsPerBeat user assignable? 
    const stepsPerBeat = 4
    nextStepTime += secondsPerBeat / stepsPerBeat
    activeStep = (activeStep + 1) % (4 * stepsPerBeat)
  }
  
  const stepsInQueue: QueueSteps[] = []
  const scheduleStep = async (stepNumber: number, time: number) => {
    console.log('steps in queue instruments',instruments)
    if(!instruments) throw new Error('Instruments are not loaded')
    stepsInQueue.push({ step: stepNumber, time })
    // if sampleArray[stepNumber] is assigned then play sample etc
    if(seq[stepNumber].instruments.includes('kick')) {
      const stepGain = seq[stepNumber].gain.kick
      console.log(stepGain);
      playSample(audioContext, instruments.kick, time, stepGain)
    }
    if(seq[stepNumber].instruments.includes('clap')) {
      const stepGain = seq[stepNumber].gain.clap
      playSample(audioContext, instruments.clap, time, stepGain)
    }
    if(seq[stepNumber].instruments.includes('closedHH')) {
      const stepGain = seq[stepNumber].gain.closedHH
      playSample(audioContext, instruments.closedHH, time, stepGain)
    }
    if(seq[stepNumber].instruments.includes('ride')) {
      const stepGain = seq[stepNumber].gain.ride
      playSample(audioContext, instruments.ride, time, stepGain)
    }
  }
  
  let timerId: ReturnType<typeof setTimeout>
  const scheduleSequencer = () => {
    //advance the pointer while there are still steps to be played
    while (nextStepTime < audioContext.currentTime + scheduleAheadTime) {
      scheduleStep(activeStep, nextStepTime)
      nextStep()
    }
    setTimeout(scheduleSequencer, lookahead)
  }
  
    
  let lastStepHighlighted = 3
  const colorSteps = () => {
    let highlightStep = lastStepHighlighted
    const currentTime = audioContext.currentTime
    
    while (stepsInQueue.length && stepsInQueue[0].time < currentTime) {
      highlightStep = stepsInQueue[0].step
      stepsInQueue.shift()
    }
    if(lastStepHighlighted !== highlightStep) {
      setSeq(seq.map((step: Step, index: number) => {
        if (index === lastStepHighlighted ){
          step.extraCSS = ''
        }
        else if (index === highlightStep){
          step.extraCSS = 'border-lime-400'
        }
        return step
      }))
      lastStepHighlighted = highlightStep
    }
    requestAnimationFrame(colorSteps)
  }
  
  
  let isPlaying = false
  const launchSequencer = () => {
    isPlaying = !isPlaying
    if(isPlaying){
      if(audioContext.state === 'suspended'){
        audioContext.resume()
      }
      activeStep = 0
      nextStepTime = audioContext.currentTime
      scheduleSequencer()
      requestAnimationFrame(colorSteps)
    }
    else {
      clearTimeout(timerId)
    }
  }

  return { seq, setSeq, bpm, setBpm, launchSequencer }

}

export default useSequencer
