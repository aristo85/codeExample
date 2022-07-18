export const maskCadNumber = (str) =>
  str.replaceAll(/\s/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
