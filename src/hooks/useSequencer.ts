import { useEffect, useRef, useState } from "react"
import { Step } from "../components/StepSequencerContainer/types"
import { AvailableInstruments, QueueSteps } from "../types"
import { audioContext } from "../utils/audioContext"
import useInstruments from "./useInstruments"
import useBPMStore from "./StateHooks/useBPMStore"
import useRecordStore from "./StateHooks/useRecordStore"
import useSequencerStore from "./StateHooks/useSequencerStore"
import { generateShadowClass } from "../utils/generateBoxShadowClass"
import useMetronomeStore from "./StateHooks/useMetronomeStore"
import useMetronome from "./useMetronome"
import playInstruments from "../utils/playInstruments"

const useSequencer = () => {
  const instruments = useInstruments()
  const metronome = useMetronome()

  const metronomeActive = useMetronomeStore((state) => state.active)
  const bpm = useBPMStore((state) => state.bpm)
  const setStepRef = useRecordStore((state) => state.setStepRef)
  const { seq, setSeq } = useSequencerStore()

  const [secondsPerBeat, setSecondsPerBeat] = useState<number>(60 / bpm)

  const timerId = useRef<ReturnType<typeof setTimeout>>()
  const isPlaying = useRef<boolean>(false)

  useEffect(() => {
    setSecondsPerBeat(60 / bpm)
    if(timerId.current) clearTimeout(timerId.current)
  }, [bpm])

  // useEffect(() => {
  //   if(metronome.metronome){
  //     playSample(audioContext, metronome.metronome.metroUp, 0, 1)
  //     playSample(audioContext, metronome.metronome.metroDown, 0, 1)
  //   }
  // },[metronome.metronome])


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
    setStepRef(activeStep)
  }

  //TODO: only uses first entry in step.instruments. 
  //Either generate classes for the color mixes manually or randomly select an entry

  
  const stepsInQueue: QueueSteps[] = []
  const scheduleStep = async (stepNumber: number, time: number) => {
    // initial pre-instruments load calls scheduler
    if(!instruments) return 
    
    stepsInQueue.push({ step: stepNumber, time })

    const colorShadow = generateShadowClass(seq[stepNumber])

    if(metronomeActive) metronome.triggerMetronome(seq[stepNumber]) 
  
    playInstruments(instruments, time, seq, stepNumber)

    setSeq(seq.map((step: Step, index: number) => {
      if (index === stepNumber ){
        step.extraCSS = colorShadow ? colorShadow : ''
      }
      return step
    }))
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
          step.extraCSS = 'border-double'
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
      clearTimeout(timerId.current)
    }
  }

  const pushToSequencer = (stepRef: number, element: AvailableInstruments, volume: number) => {
    
    setSeq(seq.map((step: Step) => {
      if(!seq[stepRef].instruments.includes(element)) {
        seq[stepRef].instruments.push(element)
        seq[stepRef].gain[element] = volume
      }
      return step
    }))
  }

  return { seq, setSeq, launchSequencer, pushToSequencer }

}

export default useSequencer
