import { format } from 'date-fns';

export const formatDateAsFilterValue = (date: Date | number) => {
  return `${format(date, 'yyyyMMdd')}`;
};
