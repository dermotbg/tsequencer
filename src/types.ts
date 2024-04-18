// TODO: refactor these into specific components and this file out of existence 
export type AvailableInstruments = 'kick' | 'clap' | 'closedHH' | 'ride' 
export interface QueueSteps { step: number, time: number }
export interface GainObject { kick: number, clap: number, closedHH: number, ride: number }