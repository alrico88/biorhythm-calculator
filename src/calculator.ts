import numberHelperFunctions from 'number-helper-functions';
import { CYCLE_LENGTHS } from './constants';
import { getDateRange, getDifferenceInDays } from './dates';
import type { BiorhythmRangeResult, BiorhythmResult } from './types';

const { processNumber: round } = numberHelperFunctions;

/**
 * Creates a biorhythm calculator based on the days passed since birth
 *
 * @param daysDifference Days since birth
 * @returns Calculator function
 */
function createCalculator(daysDifference: number): (divider: number) => number {
  const numberOfDecimals = 2;
  const dividend = 2 * Math.PI * daysDifference;

  return (divider) => round(Math.sin(dividend / divider), numberOfDecimals);
}

/**
 * Calculates biorhythm based on birth date and a custom date
 *
 * @param dateOfBirth The date of birth
 * @param dateToAnalyze The date to obtain the biorhythm data on
 * @returns Object that represents the day's status
 */
export function calculateBiorhythm(dateOfBirth: Date, dateToAnalyze: Date): BiorhythmResult {
  const daysDifference = getDifferenceInDays(dateToAnalyze, dateOfBirth);
  const calculate = createCalculator(daysDifference);
  return {
    physical: calculate(CYCLE_LENGTHS.physical),
    emotional: calculate(CYCLE_LENGTHS.emotional),
    intellectual: calculate(CYCLE_LENGTHS.intellectual),
  };
}

/**
 * Gets biorhythms for date range
 *
 * @param dateOfBirth The date of birth
 * @param dateToAnalyze The date to obtain the biorhythm data on
 * @param amountOfDays Number of days before and after the date to include
 * @returns Objects representing the biorhythm for each day
 */
export function calculateBiorhythmRange(
  dateOfBirth: Date,
  dateToAnalyze: Date,
  amountOfDays: number,
): BiorhythmRangeResult[] {
  const dates = getDateRange(dateToAnalyze, amountOfDays);
  return dates.map((day) => ({
    biorhythm: calculateBiorhythm(dateOfBirth, day),
    day,
  }));
}
