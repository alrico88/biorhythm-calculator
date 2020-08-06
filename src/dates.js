const {differenceInDays, addDays, subDays} = require('date-fns');

/**
 * Calculates difference in days between two dates
 *
 * @param {Date} dateLeft Bigger date
 * @param {Date} dateRight Smaller date
 * @returns {number} Difference in days between dates
 */
function getDifferenceInDays(dateLeft, dateRight) {
  return differenceInDays(dateLeft, dateRight);
}

/**
 * Gets next day
 *
 * @param {Date} day Day to find next day of
 * @returns {Date} Next day
 */
function getNextDay(day) {
  return addDays(day, 1);
}

/**
 * Gets previous day
 *
 * @param {Date} day Day to find previous day of
 * @returns {Date} Previous day
 */
function getPreviousDay(day) {
  return subDays(day, 1);
}

/**
 * Gets date range given amount of days before/after
 *
 * @param {Date} dateToAnalyze Day to consider as center
 * @param {number} amountOfDays Amount of days before / after
 * @returns {Date[]} Resulting date range array
 */
function getDateRange(dateToAnalyze, amountOfDays) {
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

module.exports = {
  getNextDay,
  getPreviousDay,
  getDifferenceInDays,
  getDateRange,
};
