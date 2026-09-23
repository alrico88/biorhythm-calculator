import { calcPercent } from 'math-helper-functions';
import { CYCLE_REPEAT_DAYS } from './constants';
import { getDifferenceInDays } from './dates';
import { DayFinder } from './finder';
import type { BiorhythmType } from './types';

/**
 * Gets the "full cycle" status based on birth date and desired date
 * The full cycle repeats after 21252 days
 *
 * @param dateOfBirth The date of birth
 * @param dateToAnalyze The date to calculate the cycle status
 * @returns Number representing the number of full cycles the person has endured
 */
export function getHowManyFullCycles(dateOfBirth: Date, dateToAnalyze: Date): number {
  const daysDifference = getDifferenceInDays(dateToAnalyze, dateOfBirth);
  return calcPercent(daysDifference, CYCLE_REPEAT_DAYS) / 100;
}

/**
 * Gets current cycle start date
 *
 * @param dateOfBirth The date of birth
 * @param biorhythmType Biorhythm aspect to look for
 * @returns The current cycle start date
 */
export function getCurrentCycleStart(dateOfBirth: Date, biorhythmType: BiorhythmType): Date {
  const finder = new DayFinder(dateOfBirth, new Date(), biorhythmType);
  return finder.getPreviousDayWhere(0);
}

/**
 * Gets current cycle end date
 *
 * @param dateOfBirth The date of birth
 * @param biorhythmType Biorhythm aspect to look for
 * @returns The current cycle end date
 */
export function getCurrentCycleEnd(dateOfBirth: Date, biorhythmType: BiorhythmType): Date {
  const finder = new DayFinder(dateOfBirth, new Date(), biorhythmType);
  return finder.getNextDayWhere(0);
}

/**
 * Gets current cycle progress in percentage
 *
 * @param dateOfBirth The date of birth
 * @param biorhythmType Biorhythm aspect to look for
 * @returns The progress percentage of the current cycle
 */
export function getCurrentCyclePercentage(dateOfBirth: Date, biorhythmType: BiorhythmType): number {
  const start = getCurrentCycleStart(dateOfBirth, biorhythmType).getTime();
  const end = getCurrentCycleEnd(dateOfBirth, biorhythmType).getTime();
  const now = Date.now();

  if (start === end) {
    return 0;
  }

  return ((now - start) / (end - start)) * 100;
}
