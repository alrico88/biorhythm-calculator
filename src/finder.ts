import { calculateBiorhythm } from './calculator';
import { CYCLE_REPEAT_DAYS, VALUES } from './constants';
import { getNextDay, getPreviousDay } from './dates';
import type { BiorhythmType } from './types';
import { checkBiorhythmType, checkDesiredValue } from './validation';

/**
 * DayFinder class
 * Find next or previous days for best/worst/custom values of biorhythm
 */
export class DayFinder {
  private readonly dateOfBirth: Date;
  private readonly startDate: Date;
  private readonly biorhythmType: BiorhythmType;

  /**
   * Creates an instance of DayFinder.
   * @param dateOfBirth The date of birth
   * @param startDate The date to use as starting point to find another day
   * @param biorhythmType Biorhythm aspect to look for
   */
  constructor(dateOfBirth: Date, startDate: Date, biorhythmType: BiorhythmType) {
    this.dateOfBirth = dateOfBirth;
    this.startDate = startDate;
    this.biorhythmType = (() => {
      checkBiorhythmType(biorhythmType);
      return biorhythmType;
    })();
  }

  /** Finds a matching day within one complete repeating biorhythm period. */
  private getDayGeneric(
    dateToAnalyze: Date,
    checkFunc: (value: number) => boolean,
    dayFunc: (day: Date) => Date,
  ): Date {
    let day = dateToAnalyze;

    for (let daysSearched = 0; daysSearched < CYCLE_REPEAT_DAYS; daysSearched += 1) {
      const status = calculateBiorhythm(this.dateOfBirth, day)[this.biorhythmType];
      if (checkFunc(status)) {
        return day;
      }
      day = dayFunc(day);
    }

    throw new RangeError(`No matching ${this.biorhythmType} biorhythm value found in one cycle`);
  }

  private static get dateFunc() {
    return {
      next: getNextDay,
      previous: getPreviousDay,
    };
  }

  /**
   * Gets next day for desired biorhythm aspect
   *
   * @param checkFunc Value checker function
   * @returns The next matching date
   */
  getNextDayGeneric(checkFunc: (value: number) => boolean): Date {
    return this.getDayGeneric(this.startDate, checkFunc, DayFinder.dateFunc.next);
  }

  /**
   * Gets next day where value is desired value for a biorhythm aspect
   *
   * @param desiredValue Value to look for, between -1 and 1
   * @returns Date where the biorhythm has the desired value
   */
  getNextDayWhere(desiredValue: number): Date {
    checkDesiredValue(desiredValue);
    return this.getNextDayGeneric((d) => d === desiredValue);
  }

  /**
   * Gets next best day for desired biorhythm aspect
   *
   * @returns The next best date for that aspect
   */
  getNextBestDay() {
    return this.getNextDayWhere(VALUES.max);
  }

  /**
   * Gets next worst day for desired biorhythm aspect
   *
   * @returns The next worst date for that aspect
   */
  getNextWorstDay() {
    return this.getNextDayWhere(VALUES.min);
  }

  /**
   * Gets previous day for desired biorhythm aspect
   *
   * @param checkFunc Value checker function
   * @returns The previous matching date
   */
  getPreviousDayGeneric(checkFunc: (value: number) => boolean): Date {
    return this.getDayGeneric(this.startDate, checkFunc, DayFinder.dateFunc.previous);
  }

  /**
   * Gets previous day where value is desired value for a biorhythm aspect
   *
   * @param desiredValue Value to look for, between -1 and 1
   * @returns Date where the biorhythm has the desired value
   */
  getPreviousDayWhere(desiredValue: number): Date {
    checkDesiredValue(desiredValue);
    return this.getPreviousDayGeneric((d) => d === desiredValue);
  }

  /**
   * Gets previous best day for desired biorhythm aspect
   *
   * @returns The previous best date for that aspect
   */
  getPreviousBestDay() {
    return this.getPreviousDayWhere(VALUES.max);
  }

  /**
   * Gets previous worst day for desired biorhythm aspect
   *
   * @returns The previous worst date for that aspect
   */
  getPreviousWorstDay() {
    return this.getPreviousDayWhere(VALUES.min);
  }
}
