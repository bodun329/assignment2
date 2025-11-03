function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function findHighest(numbers) {
  return Math.max(...numbers);
}

function findLowest(numbers) {
  return Math.min(...numbers);
}

function average(numbers) {
  return sumNumbers(numbers) / numbers.length;
}

module.exports = { sumNumbers, findHighest, findLowest, average };
