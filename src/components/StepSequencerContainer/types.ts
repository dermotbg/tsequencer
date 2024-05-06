import { AvailableInstruments, GainObject, windowSize } from "../../types"

export interface StepSeqProps {
  index: number
  extraCSS: string
  step: Step
  onClickHandler: (index: number) => void
  windowSize: windowSize
}

export type Metronome = 'metroUp' | 'metroDown'

export type Step = {
  instruments: AvailableInstruments[],
  metronomes: Metronome[],
  extraCSS: string,
  gain: GainObject
}

export interface LaunchSequencerProps {
  seq: Sequencer
  setSeq: React.Dispatch<React.SetStateAction<Sequencer>>
  instruments: AvailableInstruments
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

export type Sequencer = Step[]
export type ActivePadInstrument = AvailableInstruments | undefined