const {DayFinder} = require('../index');
const {ruleOfThree, calcPercent} = require('math-helper-functions');
const {getDifferenceInDays} = require('./dates');
const {CYCLE_REPEAT_DAYS} = require('./constants');

/**
 * @typedef {('physical'|'emotional'|'intellectual')} BiorhythmType
 */

/**
 * Gets the "full cycle" status based on birth date and desired date
 * The full cycle repeats after 21252 days
 *
 * @param {Date} dateOfBirth The date of birth, as Date
 * @param {Date} dateToAnalyze The date to calculate the cycle status
 * @returns {number} Number representing the number of full cycles the person has endured
 */
function getHowManyFullCycles(dateOfBirth, dateToAnalyze) {
  const daysDifference = getDifferenceInDays(dateToAnalyze, dateOfBirth);
  return calcPercent(daysDifference, CYCLE_REPEAT_DAYS) / 100;
}

/**
 * Gets current cycle start date
 *
 * @param {Date} dateOfBirth The date of birth, as Date
 * @param {BiorhythmType} biorhythmType Biorhythm aspect to look for
 * @returns {Date} The current cycle start date
 */
function getCurrentCycleStart(dateOfBirth, biorhythmType) {
  const finder = new DayFinder(dateOfBirth, new Date(), biorhythmType);
  return finder.getPreviousDayWhere(0);
}

/**
 * Gets current cycle end date
 *
 * @param {Date} dateOfBirth The date of birth, as Date
 * @param {BiorhythmType} biorhythmType Biorhythm aspect to look for
 * @returns {Date} The current cycle end date
 */
function getCurrentCycleEnd(dateOfBirth, biorhythmType) {
  const finder = new DayFinder(dateOfBirth, new Date(), biorhythmType);
  return finder.getNextDayWhere(0);
}

/**
 * Gets current cycle progress in percentage
 *
 * @param {Date} dateOfBirth The date of birth, as Date
 * @param {BiorhythmType} biorhythmType Biorhythm aspect to look for
 * @returns {number} The progress percentage of the current cycle
 */
function getCurrentCyclePercentage(dateOfBirth, biorhythmType) {
  const params = [dateOfBirth, biorhythmType];
  return ruleOfThree(
    getCurrentCycleStart(...params).getTime(),
    100,
    getCurrentCycleEnd(params).getTime()
  );
}

module.exports = {
  getHowManyFullCycles,
  getCurrentCycleStart,
  getCurrentCycleEnd,
  getCurrentCyclePercentage,
};
