import { useState } from 'react'
import './App.css'
import { audioContext } from './utils/audioContext'
import useInstruments from './hooks/useInstruments'

type availableInstruments = 'kick' | 'clap' | 'closedHH' | ''

interface StepSeqProps {
  index: number
  extraCSS: string
  activePad: availableInstruments
  step: Step
}

interface QueueSteps { step: number, time: number }

type Step = {
  instruments: [availableInstruments],
  extraCSS: string
}
type Sequencer = Step[]


const playSample = (audioContext: AudioContext, audioBuffer: AudioBuffer, time: number) => {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer
    // possible to have playbackRate here if wanted in future (possible pitch-like adjustment?)
  })
  sampleSource.connect(audioContext.destination)
  sampleSource.start(time)
  return sampleSource
}


const StepSeqButton = ({index, extraCSS, activePad, step}: StepSeqProps) => {
  const assignSampleHandler = () => {
    if(step.instruments.includes(activePad)){
      step.instruments.splice(step.instruments.indexOf(activePad), 1)
    }
    else{
      step.instruments.push(activePad)
    }
    console.log(step)
  }
  return (
    <button 
      className={'box-border border-4 p-4 rounded-md h-18 ' + `${extraCSS}`}
      onClick={() => assignSampleHandler()} 
      >
      {index + 1}
    </button>
  )
}



function App() {

  const instruments = useInstruments()
  const [bpm, setBpm] = useState<number>(120)
  const [activePad, setActivePad] = useState<'kick' | 'clap' | 'closedHH' | ''>('')
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>>()
  // const [instruments, setInstruments]= useState<LoadedInstruments>()
  const [seq, setSeq] = useState<Sequencer>(Array.from({ length: 16 }, () => {
    return {
      instruments: [''],
      extraCSS: ''
    }
  }))


  if(!instruments) return <>Loading...</>
  if(!seq[0]) return <>Loading...</>

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
    stepsInQueue.push({ step: stepNumber, time })
    // if sampleArray[stepNumber] is assigned then play sample etc
    if(seq[stepNumber].instruments.includes('kick')) {
      playSample(audioContext, instruments.kick, time)
    }
    if(seq[stepNumber].instruments.includes('clap')) {
      playSample(audioContext, instruments.clap, time)
    }
    if(seq[stepNumber].instruments.includes('closedHH')) {
      playSample(audioContext, instruments.closedHH, time)
    }
  }
  
  
  // let timerId: ReturnType<typeof setTimeout>
  console.log(timerId)
  const scheduleSequencer = () => {
    //advance the pointer while there are still steps to be played
    while (nextStepTime < audioContext.currentTime + scheduleAheadTime) {
      scheduleStep(activeStep, nextStepTime)
      nextStep()
    }
    setTimerId(setTimeout(scheduleSequencer, lookahead))
  }
  
  let lastStepHighlighted = 3
  const colorSteps = () => {
    let highlightStep = lastStepHighlighted
    const currentTime = audioContext.currentTime
    
    while (stepsInQueue.length && stepsInQueue[0].time < currentTime) {
      console.log('0step',stepsInQueue[0].step)
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

  const padHandler = (element: availableInstruments) => {
    setActivePad(element)
    playSample(audioContext, instruments[element], 0)
  }

  return (
    <>
      <button 
        className={activePad === 'kick' ? "box-border h-32 w-32 border-4 rounded-md m-2 border-lime-400" : "box-border h-32 w-32 border-4 rounded-md m-2"}
        onClick={() => padHandler('kick') }
        >
        Kick
      </button>
      <button 
        className={activePad === 'clap' ? "box-border h-32 w-32 border-4 rounded-md m-2 border-blue-400" : "box-border h-32 w-32 border-4 rounded-md m-2"}
        onClick={() => padHandler('clap')}
        >
        Clap
      </button>
      <button 
        className={activePad === 'closedHH' ? "box-border h-32 w-32 border-4 rounded-md m-2 border-amber-400" : "box-border h-32 w-32 border-4 rounded-md m-2"}
        onClick={() => padHandler('closedHH')}
        >
        Closed HH
      </button>
      {/* button below has to change to stop multiple intervals */}
      <button className="p-5 border-4 rounded-md m-2" onClick={() => launchSequencer()} role='switch' >Play/Stop</button>
      {/* <button className="p-5 border-4 rounded-md m-2" onClick={() => launchSequencer()}>Stop</button> */}
      <div className='seq-container grid gap-4 grid-cols-4 grid-rows-4'>
        {seq.map((b, i) => {
          return <StepSeqButton index={i} extraCSS={b.extraCSS} key={i} activePad={activePad} step={seq[i]} />
        })}
      </div>
    </>
  )
}

export default App
