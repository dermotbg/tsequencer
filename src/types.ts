export type AvailableInstruments = 'kick' | 'clap' | 'closedHH' | 'ride' 


export interface StepSeqProps {
  index: number
  extraCSS: string
  activePad: AvailableInstruments
  step: Step,
  volume: number
}

export interface QueueSteps { step: number, time: number }
export interface GainObject { kick: number, clap: number, closedHH: number, ride: number }
export interface InstrumentPadType { 
  instrument: string 
  activePad: string | undefined
  padHandler: (element: AvailableInstruments) => void
  volume: number 
  setVolume: React.Dispatch<React.SetStateAction<number>>
 }

export type Step = {
  instruments: AvailableInstruments[],
  extraCSS: string,
  gain: GainObject
}

export type Sequencer = Step[]
