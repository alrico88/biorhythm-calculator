const {processNumber: round} = require('number-helper-functions');
const {CYCLE_LENGTHS} = require('./constants');
const {getDifferenceInDays, getDateRange} = require('./dates');

/**
 * @typedef BiorhythmResult
 * @property {number} physical
 * @property {number} emotional
 * @property {number} intellectual
 */

/**
 * @typedef BiorhythmRangeResult
 * @property {Date} day
 * @property {BiorhythmResult} biorhythm
 */

/**
 * Creates a biorhythm calculator based on the days passed since birth
 *
 * @param {number} daysDifference Days since birth
 * @returns {Function} Calculator function
 */
function createCalculator(daysDifference) {
  const numberOfDecimals = 2;
  const dividend = 2 * Math.PI * daysDifference;

  return function(divider) {
    return round(Math.sin(dividend / divider), numberOfDecimals);
  };
}

/**
 * Calculates biorhythm based on birth date and a custom date
 *
 * @param {Date} dateOfBirth The date of birth, as Date
 * @param {Date} dateToAnalyze The date to obtain the biorhythm data on
 * @returns {BiorhythmResult} Object that represents the day's status
 */
function calculateBiorhythm(dateOfBirth, dateToAnalyze) {
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
 * @param {Date} dateOfBirth The date of birth, as Date
 * @param {Date} dateToAnalyze The date to obtain the biorhythm data on
 * @param {number} amountOfDays Number of days to add in range (Ex. 3 will give desired date as well as 3 days before, and 3 days after)
 * @returns {BiorhythmRangeResult[]} Objects array that represents the days' status
 */
function calculateBiorhythmRange(dateOfBirth, dateToAnalyze, amountOfDays) {
  const dates = getDateRange(dateToAnalyze, amountOfDays);
  return dates.map((day) => ({
    biorhythm: calculateBiorhythm(dateOfBirth, day),
    day,
  }));
}

module.exports = {
  calculateBiorhythm,
  calculateBiorhythmRange,
};
