import { parseNegativeZero } from './parseNegativeZero';
describe('Convert negative zero to zero', () => {
  test('-0 should return 0', () => {
    const input = '-0';
    const output = '0';
    expect(parseNegativeZero(input)).toBe(output);
  });
  test('0 should return 0', () => {
    const input = '0';
    const output = '0';
    expect(parseNegativeZero(input)).toBe(output);
  });
  test('2 should return 2', () => {
    const input = '2';
    const output = '2';
    expect(parseNegativeZero(input)).toBe(output);
  });
});
