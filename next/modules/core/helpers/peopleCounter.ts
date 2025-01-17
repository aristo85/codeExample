import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';

export const peopleCounter = (
  numberOfParticipants = 1,
  numberOfChildren = 0,
): string => {
  return `
  ${numberOfParticipants} ${pluralizationFn(numberOfParticipants, [
    'взрослый',
    'взрослых',
    'взрослых',
  ])}${numberOfChildren > 0 ? ` + ${numberOfChildren}` : ''} ${
    numberOfChildren > 0
      ? `${pluralizationFn(numberOfChildren, ['ребенок', 'ребенка', 'детей'])}`
      : ''
  }`;
};
