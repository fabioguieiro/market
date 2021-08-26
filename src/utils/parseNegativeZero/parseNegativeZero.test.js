import { parseNegativeZero } from './parseNegativeZero';
test('-0 should return 0', () => {
  expect(parseNegativeZero('-0')).toBe('0');
});
