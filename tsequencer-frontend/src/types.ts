// TODO: refactor these into specific components and this file out of existence 
export type AvailableInstruments = 
  'kick' | 
  'clap' | 
  'closedHH' | 
  'openHH' | 
  'ride' | 
  'sub' | 
  'snare' | 
  'perc' |
  'perc2' |
  'perc3' |
  'perc4' |
  'perc5' 
export type windowSize = { height: number, width: number }
export interface QueueSteps { step: number, time: number }
export interface GainObject { 
  kick: number, 
  clap: number, 
  closedHH: number, 
  openHH: number, 
  ride: number, 
  sub: number, 
  snare: number, 
  perc: number 
  perc2: number 
  perc3: number 
  perc4: number 
  perc5: number 
}