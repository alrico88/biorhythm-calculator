const {
  CYCLE_LENGTHS,
  CYCLE_REPEAT_DAYS,
  BIORHYTHMS,
  VALUES,
} = require('./src/constants');
const {
  calculateBiorhythm,
  calculateBiorhythmRange,
} = require('./src/calculator');
const {
  getHowManyFullCycles,
  getCurrentCycleStart,
  getCurrentCycleEnd,
  getCurrentCyclePercentage,
} = require('./src/cycles');
const DayFinder = require('./src/finder');

module.exports = {
  constants: {
    BIORHYTHMS,
    CYCLE_LENGTHS,
    CYCLE_REPEAT_DAYS,
    VALUES,
  },
  calculateBiorhythm,
  calculateBiorhythmRange,
  getHowManyFullCycles,
  getCurrentCycleStart,
  getCurrentCycleEnd,
  getCurrentCyclePercentage,
  DayFinder,
};
