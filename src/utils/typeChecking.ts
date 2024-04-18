import { AvailableInstruments } from "../types"

export const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String
}

export const isInstrument = (instrument: string): instrument is AvailableInstruments => {
  const allInstruments: AvailableInstruments[] = ['kick', 'clap', 'closedHH', 'ride'] 
  return allInstruments.includes(instrument as AvailableInstruments)
}

export const validateInstrument = (instrument: unknown) => {
  if(!instrument || !isString(instrument) || !isInstrument(instrument)){
    throw new Error('Instrument is not valid')
  }
  return instrument
}
