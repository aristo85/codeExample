export const convertENumberToPlainString = (value: number) =>
  value.toLocaleString('fullwide', {
    maximumFractionDigits: 18,
  });
