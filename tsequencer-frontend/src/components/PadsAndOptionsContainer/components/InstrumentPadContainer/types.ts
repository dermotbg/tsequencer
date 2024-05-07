import { AvailableInstruments } from "../../../../types"

export interface InstrumentPadContainerType {
  activePad: string | undefined
  volume: number
  setVolume: (gain: number) => void
}

export interface InstrumentPadType extends InstrumentPadContainerType {
  instrument: string
  padHandler: (element: AvailableInstruments) => void
}