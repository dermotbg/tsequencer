import { AvailableInstruments } from "../types"

export const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' || value instanceof Number
}

export const isArray = (array: unknown): array is unknown[] => {
  return Array.isArray(array)
}

export const isObject = (object: unknown): object is object => {
  return typeof object === 'object' && object instanceof Object
}

export const isInstrument = (instrument: string): instrument is AvailableInstruments => {
  const allInstruments: AvailableInstruments[] = ['kick', 'clap', 'closedHH', 'snare', 'openHH', 'ride', 'sub', 'perc', 'perc2', 'perc3', 'perc4', 'perc5'] 
  return allInstruments.includes(instrument as AvailableInstruments)
}

export const isInstrumentRack = (object: unknown): object is AvailableInstruments => {
  if(!object || !isObject(object)) {
    throw new Error(`InstrumentRack is not valid ${object}`)
  }
  return Object.keys(object).every((element: unknown) => {
    return isString(element) && isInstrument(element)
  })
}

export const validateString = (object: unknown) => {
  if(!isString(object)){
    throw new Error(`String is not valid ${object}`)
  }
  return object
}

export const validateInstrument = (instrument: unknown) => {
  if(!instrument || !isString(instrument) || !isInstrument(instrument)){
    throw new Error(`Instrument is not valid: ${instrument}`)
  }
  return instrument
}

export const validateInstrumentRack = (object: unknown) => {
  if(!object || !isObject(object) || !isInstrumentRack(object)){
    throw new Error(`InstrumentRack is not valid: ${object}`)
  }
  return object
}