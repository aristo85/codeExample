export const deleteFalsyParams = (obj: {
  [key: string]: unknown;
}): {[key: string]: unknown} => {
  for (const key in obj) {
    const value = obj[key];
    if (
      obj[key] === false ||
      obj[key] === 'false' ||
      (Array.isArray(value) && value.length === 0)
    ) {
      delete obj[key];
    }
  }
  return obj;
};
