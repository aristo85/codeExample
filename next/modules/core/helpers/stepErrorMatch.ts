export type StepMatch = {
  [stepNumber: number]: string[];
};
export const stepErrorMatch = (
  stepMatch: StepMatch,
  errorField: string,
): number => {
  for (const stepNumber in stepMatch) {
    if (stepMatch[stepNumber].includes(errorField)) {
      return parseInt(stepNumber);
    }
  }
  return 1;
};
