const { sumNumbers, findHighest, findLowest, average } = require('../src/numberProcessor');

describe('numberProcessor', () => {
  const nums = [2, 5, 8, 10];

  test('calculates the sum', () => {
    expect(sumNumbers(nums)).toBe(25);
  });

  test('finds the highest number', () => {
    expect(findHighest(nums)).toBe(10);
  });

  test('finds the lowest number', () => {
    expect(findLowest(nums)).toBe(2);
  });

  test('calculates the average', () => {
    expect(average(nums)).toBe(6.25);
  });
});
