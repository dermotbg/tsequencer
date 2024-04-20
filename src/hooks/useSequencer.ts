import { useEffect, useRef, useState } from "react"
import { Sequencer, Step } from "../components/StepSequencerContainer/types"
import { QueueSteps } from "../types"
import { playSample } from "../components/StepSequencerContainer/utils/playSample"
import { audioContext } from "../utils/audioContext"
import useInstruments from "./useInstruments"
import useBPMStore from "./useBPMStore"
const useSequencer = () => {
  const instruments = useInstruments()
  const bpm = useBPMStore((state) => state.bpm)
  const [secondsPerBeat, setSecondsPerBeat] = useState<number>(60 / bpm)
  const [seq, setSeq] = useState<Sequencer>(Array.from({ length: 16 }, () => {
    return {
      instruments: [],
      extraCSS: '',
      gain: {kick: 1, clap: 1, closedHH: 1, ride: 1}
    }
  }))

  const timerId = useRef<ReturnType<typeof setTimeout>>()
  const isPlaying = useRef<boolean>(false)

  useEffect(() => {
    setSecondsPerBeat(60 / bpm)
    launchSequencer()
  }, [bpm])


  const lookahead = 25.0 // freq of scheduling function (miliseconds)
  const scheduleAheadTime = 0.1 // how far ahead to schedule (seconds)
  let activeStep = 0
  let nextStepTime = 0.0 // when next note is due

  const nextStep = () => {
    // const secondsPerBeat = (60.0 / bpm) 
    // TODO: have stepsPerBeat user assignable? 
    const stepsPerBeat = 4
    nextStepTime += secondsPerBeat / stepsPerBeat
    activeStep = (activeStep + 1) % (4 * stepsPerBeat)
  }
  
  const stepsInQueue: QueueSteps[] = []
  const scheduleStep = async (stepNumber: number, time: number) => {
    if(!instruments) return
    stepsInQueue.push({ step: stepNumber, time })
    // if sampleArray[stepNumber] is assigned then play sample etc
    if(seq[stepNumber].instruments.includes('kick')) {
      const stepGain = seq[stepNumber].gain.kick
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
  
  const scheduleSequencer = () => {
    //advance the pointer while there are still steps to be played
    while (nextStepTime < audioContext.currentTime + scheduleAheadTime) {
      scheduleStep(activeStep, nextStepTime)
      nextStep()
    }
    timerId.current = setTimeout(scheduleSequencer, lookahead)
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
    if(!isPlaying.current){
      setSeq(seq.map((step: Step) => {
        step.extraCSS = ''
        return step
      }))
    }
    requestAnimationFrame(colorSteps)
  }
  
  
  // let isPlaying = false
  const launchSequencer = () => {
    isPlaying.current = !isPlaying.current

    if(isPlaying.current){
      if(audioContext.state === 'suspended'){
        audioContext.resume()
      }
      activeStep = 0
      nextStepTime = audioContext.currentTime
      scheduleSequencer()
      requestAnimationFrame(colorSteps)
    }
    else {
      console.log('timerID',timerId)
      clearTimeout(timerId.current)
    }
  }

  return { seq, setSeq, launchSequencer }

}

export default useSequencer
