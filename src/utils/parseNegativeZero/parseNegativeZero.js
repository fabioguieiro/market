export const parseNegativeZero = (value) => {
  if (value === '-0') {
    return '0';
  }
  return value;
};
