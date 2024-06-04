import type {
  AssignedKeysInstrumentType,
  AssignedKeysType,
} from "@/hooks/StateHooks/useAssignedKeysStore";
import type { AvailableInstruments } from "../types";

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === "number" || value instanceof Number;
};

export const isArray = (array: unknown): array is unknown[] => {
  return Array.isArray(array);
};

export const isObject = (object: unknown): object is object => {
  return typeof object === "object" && object instanceof Object;
};

export const isInstrument = (instrument: string): instrument is AvailableInstruments => {
  const allInstruments: AvailableInstruments[] = [
    "kick",
    "clap",
    "closedHH",
    "snare",
    "openHH",
    "ride",
    "sub",
    "perc",
    "perc2",
    "perc3",
    "perc4",
    "perc5",
  ];
  return allInstruments.includes(instrument as AvailableInstruments);
};

export const isInstrumentRack = (object: unknown): object is AvailableInstruments => {
  if (!object || !isObject(object)) {
    throw new Error(`InstrumentRack is not valid ${object}`);
  }
  return Object.keys(object).every((element: unknown) => {
    return isString(element) && isInstrument(element);
  });
};

export const validateString = (object: unknown) => {
  if (!isString(object)) {
    throw new Error(`String is not valid ${object}`);
  }
  return object;
};

export const validateInstrument = (instrument: unknown) => {
  if (!instrument || !isString(instrument) || !isInstrument(instrument)) {
    throw new Error(`Instrument is not valid: ${instrument}`);
  }
  return instrument;
};

export const validateInstrumentRack = (object: unknown) => {
  if (!object || !isObject(object) || !isInstrumentRack(object)) {
    throw new Error(`InstrumentRack is not valid: ${object}`);
  }
  return object;
};

export const toAssignedKeyInstrument = (object: unknown): AssignedKeysInstrumentType => {
  if (!object || !isObject(object)) {
    throw new Error(`toAssignedKeyInstrument object is not valid: ${object}`);
  }
  if (
    "default" in object &&
    "active" in object &&
    "inputVal" in object &&
    "previousVal" in object
  ) {
    const newAssignedKeyInstrument = {
      default: validateString(object.default),
      active: validateString(object.active),
      inputVal: validateString(object.inputVal),
      previousVal: validateString(object.previousVal),
    };
    return newAssignedKeyInstrument;
  }
  throw new Error("Incorrect data: toAssignedKeyInstruments failed");
};

export const toAssignedKeyType = (object: unknown): AssignedKeysType => {
  if (!object || !isObject(object)) {
    throw new Error(`toAssignedKeyType object is not valid: ${object}`);
  }
  if (
    "kick" in object &&
    "clap" in object &&
    "snare" in object &&
    "closedHH" in object &&
    "openHH" in object &&
    "ride" in object &&
    "sub" in object &&
    "perc" in object &&
    "perc2" in object &&
    "perc3" in object &&
    "perc4" in object &&
    "perc5" in object
  ) {
    const newAssignedKeyType = {
      kick: toAssignedKeyInstrument(object.kick),
      clap: toAssignedKeyInstrument(object.clap),
      snare: toAssignedKeyInstrument(object.snare),
      closedHH: toAssignedKeyInstrument(object.closedHH),
      openHH: toAssignedKeyInstrument(object.openHH),
      ride: toAssignedKeyInstrument(object.ride),
      sub: toAssignedKeyInstrument(object.sub),
      perc: toAssignedKeyInstrument(object.perc),
      perc2: toAssignedKeyInstrument(object.perc2),
      perc3: toAssignedKeyInstrument(object.perc3),
      perc4: toAssignedKeyInstrument(object.perc4),
      perc5: toAssignedKeyInstrument(object.perc5),
    };
    return newAssignedKeyType;
  }
  throw new Error("Incorrect data: toAssignedKeyType failed");
};
