import { addDays, differenceInDays, subDays } from 'date-fns';

/**
 * Calculates difference in days between two dates
 *
 * @param dateLeft Bigger date
 * @param dateRight Smaller date
 * @returns Difference in days between dates
 */
export function getDifferenceInDays(dateLeft: Date, dateRight: Date): number {
  return differenceInDays(dateLeft, dateRight);
}

/**
 * Gets next day
 *
 * @param day Day to find next day of
 * @returns Next day
 */
export function getNextDay(day: Date): Date {
  return addDays(day, 1);
}

/**
 * Gets previous day
 *
 * @param day Day to find previous day of
 * @returns Previous day
 */
export function getPreviousDay(day: Date): Date {
  return subDays(day, 1);
}

/**
 * Gets date range given amount of days before/after
 *
 * @param dateToAnalyze Day to consider as center
 * @param amountOfDays Amount of days before and after
 * @returns Resulting date range array
 */
export function getDateRange(dateToAnalyze: Date, amountOfDays: number): Date[] {
  const dates = [];
  // Days prior
  for (let i = amountOfDays; i > 0; i--) {
    dates.push(subDays(dateToAnalyze, i));
  }
  // Days after
  for (let i = 0; i <= amountOfDays; i++) {
    dates.push(addDays(dateToAnalyze, i));
  }
  return dates;
}
