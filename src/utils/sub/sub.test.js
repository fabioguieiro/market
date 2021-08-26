import { sub } from './sub';

describe('Execute a subtraction', () => {
  test('adds 1 - 2 to equal -1', () => {
    expect(sub(1, 2)).toBe(-1);
  });
  test('adds 0 - 0 to equal 0', () => {
    expect(sub(0, 0)).toBe(0);
  });
});
