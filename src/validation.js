const {BIORHYTHMS} = require('./constants');

/**
 * Checks if desired value is valid
 *
 * @param {number} desiredValue Number to check against
 * @returns {void}
 */
function checkDesiredValue(desiredValue) {
  if (desiredValue < -1 || desiredValue > 1) {
    throw new Error('Desired value should be between -1 and 1');
  }
}

/**
 * Checks if biorhythm type is valid
 *
 * @param {string} type Type of biorhythm
 * @returns {void}
 */
function checkBiorhythmType(type) {
  const possibleValues = Object.values(BIORHYTHMS);
  if (possibleValues.includes(type) === false) {
    throw new Error(`Invalid biorhythm type, valid values are ${possibleValues.toString()}`);
  }
}

module.exports = {
  checkDesiredValue,
  checkBiorhythmType,
};
