export const pluralizationFn = (
  n: number,
  option: [string, string, string],
) => {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return option[2];
  }
  if (n1 > 1 && n1 < 5) {
    return option[1];
  }
  if (n1 == 1) {
    return option[0];
  }
  return option[2];
};
