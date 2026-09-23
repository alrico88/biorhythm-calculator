import { addDays } from 'date-fns';
import { calcDomain } from 'math-helper-functions';
import { describe, expect, test, vi } from 'vitest';
import {
  calculateBiorhythm,
  calculateBiorhythmRange,
  constants,
  DayFinder,
  getCurrentCyclePercentage,
  getHowManyFullCycles,
} from '../dist/index.js';

const { CYCLE_REPEAT_DAYS, CYCLE_LENGTHS } = constants;

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
    const firstDateData = calculateBiorhythm(exampleDateOfBirth, firstDateToAnalyze);
    const secondDateData = calculateBiorhythm(exampleDateOfBirth, secondDateToAnalyze);
    expect(Object.values(firstDateData)).toStrictEqual(Object.values(secondDateData));
  });
});

describe('Check detail values', () => {
  const exampleDateOfBirth = new Date('2000-01-01');

  test.each(['physical', 'emotional', 'intellectual'])(
    'Values for %s should span -1 to 1 across its full cycle',
    (biorhythm) => {
      const dates = getFullCycle(exampleDateOfBirth, CYCLE_LENGTHS[biorhythm]);
      const values = dates.map(
        (dateToAnalyze) => calculateBiorhythm(exampleDateOfBirth, dateToAnalyze)[biorhythm],
      );
      expect(calcDomain(values)).toStrictEqual([-1, 1]);
    },
  );
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
    const range = calculateBiorhythmRange(new Date('2000-01-04'), new Date('2000-01-04'), 3);
    expect(range.length).toBe(7);
  });

  test('The difference in days betweem today and tomorrow should be 1', () => {
    const today = new Date('2000-01-01');
    const tomorrow = addDays(today, 1);
    expect(getHowManyFullCycles(today, tomorrow)).toBeCloseTo(1 / CYCLE_REPEAT_DAYS);
  });
});

describe('Check cycle finder', () => {
  test('Cycle progress is a percentage between 0 and 100', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-06-15T12:00:00Z'));

    try {
      const percentage = getCurrentCyclePercentage(new Date('2000-01-01'), 'physical');
      expect(percentage).toBeGreaterThanOrEqual(0);
      expect(percentage).toBeLessThanOrEqual(100);
    } finally {
      vi.useRealTimers();
    }
  });

  test('Throws when a requested rounded value does not occur in the cycle', () => {
    const finder = new DayFinder(new Date('2000-01-01'), new Date('2024-01-01'), 'physical');
    expect(() => finder.getNextDayWhere(0.123456)).toThrow(RangeError);
  });

  test('Rejects non-finite desired values', () => {
    const finder = new DayFinder(new Date('2000-01-01'), new Date('2024-01-01'), 'physical');
    expect(() => finder.getNextDayWhere(Number.NaN)).toThrow(RangeError);
  });
});
