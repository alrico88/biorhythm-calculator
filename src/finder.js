const {checkDesiredValue, checkBiorhythmType} = require('./validation');
const {getNextDay, getPreviousDay} = require('./dates');
const {calculateBiorhythm} = require('./calculator');
const {VALUES} = require('./constants');

/**
 * DayFinder class
 * Find next or previous days for best/worst/custom values of biorhythm
 *
 * @class DayFinder
 */
class DayFinder {

  /**
   * Creates an instance of DayFinder.
   * @param {Date} dateOfBirth The date of birth, as Date
   * @param {Date} startDate The date to use as starting point to find other day
   * @param {BiorhythmType} biorhythmType Biorhythm aspect to look for
   * @memberof DayFinder
   */
  constructor(dateOfBirth, startDate, biorhythmType) {
    this.dateOfBirth = dateOfBirth;
    this.startDate = startDate;
    this.biorhythmType = (() => {
      checkBiorhythmType(biorhythmType);
      return biorhythmType;
    })();
  }

  /**
   * Generic day finder based on date and conditions
   *
   * @static
   * @param {Date} dateToAnalyze Date to analyze
   * @param {Function} checkFunc Value checking function
   * @param {Function} dayFunc Add 1 day, subtract 1 day function
   * @returns {Date} Date where condition is met
   * @memberof DayFinder
   */
  getDayGeneric(dateToAnalyze, checkFunc, dayFunc) {
    const status = calculateBiorhythm(this.dateOfBirth, dateToAnalyze)[
      this.biorhythmType
    ];
    if (checkFunc(status) === false) {
      return this.getDayGeneric(dayFunc(dateToAnalyze), checkFunc, dayFunc);
    } else {
      return dateToAnalyze;
    }
  }

  /**
   * Date functions
   *
   * @private
   * @readonly
   * @static
   * @memberof DayFinder
   */
  static get dateFunc() {
    return {
      next: getNextDay,
      previous: getPreviousDay,
    };
  }

  /**
   * Shared params for generic cinvocation
   *
   * @private
   * @readonly
   * @memberof DayFinder
   */
  get sharedParams() {
    return [this.dateOfBirth, this.startDate, this.biorhythmType];
  }

  /**
   * Gets next day for desired biorhythm aspect
   *
   * @param {Function} checkFunc value checker function
   * @returns {Date} The best date for that aspect
   * @memberof DayFinder
   */
  getNextDayGeneric(checkFunc) {
    return this.getDayGeneric(
      this.startDate,
      checkFunc,
      DayFinder.dateFunc.next
    );
  }

  /**
   * Gets next day where value is desired value for a biorhythm aspect
   *
   * @param {number} desiredValue Value to look for (Between [-1, 1])
   * @returns {Date} Date where the value for biorhythm is the desired one
   * @memberof DayFinder
   */
  getNextDayWhere(desiredValue) {
    checkDesiredValue(desiredValue);
    return this.getNextDayGeneric((d) => d === desiredValue);
  }

  /**
   * Gets next best day for desired biorhythm aspect
   *
   * @returns {Date} The next best date for that aspect
   * @memberof DayFinder
   */
  getNextBestDay() {
    return this.getNextDayWhere(VALUES.max);
  }

  /**
   * Gets next worst day for desired biorhythm aspect
   *
   * @returns {Date} The worst date for that aspect
   * @memberof DayFinder
   */
  getNextWorstDay() {
    return this.getNextDayWhere(VALUES.min);
  }

  /**
   * Gets previous day for desired biorhythm aspect
   *
   * @param {Function} checkFunc value checker function
   * @returns {Date} The best date for that aspect
   * @memberof DayFinder
   */
  getPreviousDayGeneric(checkFunc) {
    return this.getDayGeneric(
      this.startDate,
      checkFunc,
      DayFinder.dateFunc.previous
    );
  }

  /**
   * Gets previous day where value is desired value for a biorhythm aspect
   *
   * @param {number} desiredValue Value to look for (Between [-1, 1])
   * @returns {Date} Date where the value for biorhythm is the desired one
   * @memberof DayFinder
   */
  getPreviousDayWhere(desiredValue) {
    checkDesiredValue(desiredValue);
    return this.getPreviousDayGeneric((d) => d === desiredValue);
  }

  /**
   * Gets previous best day for desired biorhythm aspect
   *
   * @returns {Date} The previous best date for that aspect
   * @memberof DayFinder
   */
  getPreviousBestDay() {
    return this.getPreviousDayWhere(VALUES.max);
  }

  /**
   * Gets previous worst day for desired biorhythm aspect
   *
   * @returns {Date} The worst date for that aspect
   * @memberof DayFinder
   */
  getPreviousWorstDay() {
    return this.getPreviousDayWhere(VALUES.min);
  }
}

module.exports = DayFinder;
