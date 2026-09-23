import { BIORHYTHMS } from './constants';
import type { BiorhythmType } from './types';

/**
 * Checks if desired value is valid
 *
 * @param desiredValue Number to check against
 */
export function checkDesiredValue(desiredValue: number): void {
  if (!Number.isFinite(desiredValue) || desiredValue < -1 || desiredValue > 1) {
    throw new RangeError('Desired value should be a finite number between -1 and 1');
  }
}

/**
 * Checks if biorhythm type is valid
 *
 * @param type Type of biorhythm
 */
export function checkBiorhythmType(type: string): asserts type is BiorhythmType {
  const possibleValues = Object.values(BIORHYTHMS);
  if (possibleValues.includes(type) === false) {
    throw new Error(`Invalid biorhythm type, valid values are ${possibleValues.toString()}`);
  }
}
