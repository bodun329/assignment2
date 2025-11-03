const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('textAnalyzer', () => {
  const sample = 'Hello world!\nThis is a test file.\nIt has three lines.';

  test('counts total words', () => {
    expect(countWords(sample)).toBe(9);
  });

  test('finds the longest word', () => {
    expect(findLongestWord(sample)).toBe('three');
  });

  test('counts number of lines', () => {
    expect(countLines(sample)).toBe(3);
  });
});
