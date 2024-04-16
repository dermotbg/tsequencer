import { ChangeEvent, useState } from 'react'
import './App.css'
import { audioContext } from './utils/audioContext'
import useInstruments from './hooks/useInstruments'

type AvailableInstruments = 'kick' | 'clap' | 'closedHH' | 'ride' 


interface StepSeqProps {
  index: number
  extraCSS: string
  activePad: AvailableInstruments
  step: Step,
  volume: number
}

interface QueueSteps { step: number, time: number }
interface GainObject { kick: number, clap: number, closedHH: number, ride: number }
interface InstrumentPadType { 
  instrument: string 
  activePad: string | undefined
  padHandler: (element: AvailableInstruments) => void
  volume: number 
  setVolume: React.Dispatch<React.SetStateAction<number>>
 }

type Step = {
  instruments: AvailableInstruments[],
  extraCSS: string,
  gain: GainObject
}
type Sequencer = Step[]


const playSample = (audioContext: AudioContext, audioBuffer: AudioBuffer, time: number, volume: number) => {
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
  console.log(gainNode)
  return sampleSource
}

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String
}
const isInstrument = (instrument: string): instrument is AvailableInstruments => {
  const allInstruments: AvailableInstruments[] = ['kick', 'clap', 'closedHH', 'ride'] 
  return allInstruments.includes(instrument as AvailableInstruments)
}

const validateInstrument = (instrument: unknown) => {
  if(!instrument || !isString(instrument) || !isInstrument(instrument)){
    throw new Error('Instrument is not valid')
  }
  return instrument
}

const InstrumentPad = ({ instrument, activePad, padHandler, volume, setVolume}: InstrumentPadType) => {

  const setActiveBorder = (activePad: string | undefined) => {
    switch (activePad && instrument) {
      case 'kick':
        if(activePad === 'kick') {
          return "box-border h-32 w-32 border-4 rounded-md m-2 border-lime-400"
        }
        else {
          return "box-border h-32 w-32 border-4 rounded-md m-2"
        }
      case 'clap':
        if(activePad === 'clap') {
          return "box-border h-32 w-32 border-4 rounded-md m-2 border-blue-400"
        } 
        else {
          return "box-border h-32 w-32 border-4 rounded-md m-2"
        } 
      case 'closedHH':
        if(activePad === 'closedHH') {
          return "box-border h-32 w-32 border-4 rounded-md m-2 border-amber-400"
        }
        else  {
          return "box-border h-32 w-32 border-4 rounded-md m-2"
        }
      case 'ride':
        if(activePad === 'ride') {
          return "box-border h-32 w-32 border-4 rounded-md m-2 border-cyan-400"
        }
        else  {
          return "box-border h-32 w-32 border-4 rounded-md m-2"
        }
      default:
        return "box-border h-32 w-32 border-4 rounded-md m-2"
    }
  }

  return(
    <>
        <button
          className={setActiveBorder(activePad)}
          onClick={() => padHandler(validateInstrument(instrument))}
          >
          {instrument.toUpperCase()}
        </button>
        {activePad === instrument
          ? <VolumeControl volume={volume} setVolume={setVolume} />
          : null
        }
        
        </>
  )
}


const StepSeqButton = ({index, extraCSS, activePad, step, volume }: StepSeqProps) => {
  const assignSampleHandler = () => {
    if(step.instruments.includes(activePad)){
      step.instruments.splice(step.instruments.indexOf(activePad), 1)
    }
    else{
      step.instruments.push(activePad)
      const instrument = validateInstrument(activePad)
      step.gain[instrument] = volume
    }
  }
  return (
    <>
      <button
        className={'box-border border-4 p-4 rounded-md h-18 ' + `${extraCSS}`}
        onClick={() => assignSampleHandler()}
        >
        {index + 1}
        {step.instruments.includes('kick')
          ? `Kick volume: ${step.gain.kick}`
          : null
        }
      </button>
    </>
  )
}

const VolumeControl = ({ volume, setVolume }: {volume: number, setVolume: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div>
      <input 
        type='range' 
        id='volume' 
        onChange={(event: ChangeEvent<HTMLInputElement>) => setVolume(parseFloat(event.target.value))} 
        value={volume} 
        max={3.4}
        min={0}
        step={0.1}
        /> 
      <label htmlFor='volume'>Volume</label>
    </div>
  )
}



function App() {

  const instruments = useInstruments()

  const [bpm, setBpm] = useState<number>(120)
  const [activePad, setActivePad] = useState<string | undefined>()
  const [volume, setVolume] = useState(1)
  // const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>>()
  // const [instruments, setInstruments]= useState<LoadedInstruments>()
  const [seq, setSeq] = useState<Sequencer>(Array.from({ length: 16 }, () => {
    return {
      instruments: [],
      extraCSS: '',
      gain: {kick: 1, clap: 1, closedHH: 1, ride: 1}
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
  // console.log(timerId)
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

  const padHandler = (element: AvailableInstruments) => {
    setActivePad(element)
    playSample(audioContext, instruments[element], 0, volume)
  }

  return (
    <>
    <InstrumentPad instrument='kick' activePad={activePad} padHandler={padHandler} volume={volume} setVolume={setVolume} />
    <InstrumentPad instrument='clap' activePad={activePad} padHandler={padHandler} volume={volume} setVolume={setVolume} />
    <InstrumentPad instrument='closedHH' activePad={activePad} padHandler={padHandler} volume={volume} setVolume={setVolume} />
    <InstrumentPad instrument='ride' activePad={activePad} padHandler={padHandler} volume={volume} setVolume={setVolume} />
      <button className="p-5 border-4 rounded-md m-2" onClick={() => launchSequencer()} role='switch' >Play/Stop</button>
      {/* <button className="p-5 border-4 rounded-md m-2" onClick={() => launchSequencer()}>Stop</button> */}
      <div className='seq-container grid gap-4 grid-cols-4 grid-rows-4'>
        {seq.map((b, i) => {
          return <StepSeqButton index={i} extraCSS={b.extraCSS} key={i} activePad={activePad as AvailableInstruments} step={seq[i]} volume={volume} />
        })}
      </div>
    </>
  )
}

export default App
