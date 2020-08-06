const {
  calculateBiorhythm,
  getHowManyFullCycles,
  constants,
} = require('../index');
const addDays = require('date-fns/addDays');
const {calcDomain} = require('math-helper-functions');
const {getDateRange, getDifferenceInDays} = require('../src/dates');
const {CYCLE_REPEAT_DAYS, CYCLE_LENGTHS} = constants;

function getFullCycle(dateOfBirth, cycleLength) {
  const dates = [];
  for (let i = 0; i < cycleLength; i++) {
    dates.push(addDays(dateOfBirth, i));
  }
  return dates;
}

describe('Check biorhythm calculations', () => {
  test('Day of birth should have all values as 0', () => {
    const exampleDate = new Date('2000-01-01');
    const status = calculateBiorhythm(exampleDate, exampleDate);
    expect(Object.values(status)).toStrictEqual([0, 0, 0]);
  });

  test('Day following the date of birth should not have all values as 0', () => {
    const exampleDateOfBirth = new Date('2000-01-01');
    const dateToAnalyze = new Date('2000-01-02');
    const status = calculateBiorhythm(exampleDateOfBirth, dateToAnalyze);
    expect(Object.values(status)).not.toStrictEqual([0, 0, 0]);
  });

  test('Cycle data should repeat fully every 21252 days', () => {
    const exampleDateOfBirth = new Date('2000-01-01');
    const firstDateToAnalyze = new Date('2000-01-02');
    const secondDateToAnalyze = addDays(firstDateToAnalyze, CYCLE_REPEAT_DAYS);
    const firstDateData = calculateBiorhythm(
      exampleDateOfBirth,
      firstDateToAnalyze
    );
    const secondDateData = calculateBiorhythm(
      exampleDateOfBirth,
      secondDateToAnalyze
    );
    expect(Object.values(firstDateData)).toStrictEqual(Object.values(secondDateData));
  });
});

describe('Check detail values', () => {
  const exampleDateOfBirth = new Date('2000-01-01');

  test('Values for emotional should be between -1 and 1 for a full cycle', () => {
    const dates = getFullCycle(exampleDateOfBirth, CYCLE_LENGTHS.emotional);
    const values = dates.map((dateToAnalyze) =>
        calculateBiorhythm(exampleDateOfBirth, dateToAnalyze).emotional);
    expect(calcDomain(values)).toStrictEqual([-1, 1]);
  });

  test('Values for intellectual should be between -1 and 1 for a full cycle', () => {
    const dates = getFullCycle(exampleDateOfBirth, CYCLE_LENGTHS.intellectual);
    const values = dates.map((dateToAnalyze) =>
        calculateBiorhythm(exampleDateOfBirth, dateToAnalyze).emotional);
    expect(calcDomain(values)).toStrictEqual([-1, 1]);
  });

  test('Values for physical should be between -1 and 1 for a full cycle', () => {
    const dates = getFullCycle(exampleDateOfBirth, CYCLE_LENGTHS.physical);
    const values = dates.map((dateToAnalyze) =>
        calculateBiorhythm(exampleDateOfBirth, dateToAnalyze).emotional);
    expect(calcDomain(values)).toStrictEqual([-1, 1]);
  });
});

describe('Check statistics functions', () => {
  const exampleDateOfBirth = new Date('2000-01-01');

  test('Full cycle calculations should give Ints every 21252 days', () => {
    const oneFullCycle = addDays(exampleDateOfBirth, CYCLE_REPEAT_DAYS);
    const twoFullCycles = addDays(exampleDateOfBirth, CYCLE_REPEAT_DAYS * 2);
    const status = [
      getHowManyFullCycles(exampleDateOfBirth, oneFullCycle),
      getHowManyFullCycles(exampleDateOfBirth, twoFullCycles),
    ];
    expect(status).toStrictEqual([1, 2]);
  });
});

describe('Check date helpers', () => {
  test('A range of 3 dates prior and after should have 7 days', () => {
    const range = getDateRange(new Date(), 3);
    expect(range.length).toBe(7);
  });

  test('The difference in days betweem today and tomorrow should be 1', () => {
    const today = new Date();
    const tomorrow = new Date().setDate(new Date().getDate() + 1);
    expect(getDifferenceInDays(tomorrow, today)).toBe(1);
  });
});
