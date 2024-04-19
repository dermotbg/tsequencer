import { AvailableInstruments, GainObject } from "../../types"

export interface StepSeqProps {
  index: number
  extraCSS: string
  activePad: ActivePadInstrument
  step: Step
  volume: number
}

export type Step = {
  instruments: AvailableInstruments[],
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