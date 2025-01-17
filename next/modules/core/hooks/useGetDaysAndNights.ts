import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import dayjs from 'dayjs';

interface UseGetDaysAndNightsProps {
  arrivalDate: string | null;
  departureDate: string | null;
}

const useGetDaysAndNights = ({
  arrivalDate,
  departureDate,
}: UseGetDaysAndNightsProps) => {
  if (!arrivalDate || !departureDate) {
    return {
      daysString: null,
      dateRangeString: null,
      datesWithTime: {arrivalDate: null, departureDate: null},
    };
  }

  const datesWithoutTime = {
    departureDate: dayjs(departureDate.split('T')[0]),
    arrivalDate: dayjs(arrivalDate.split('T')[0]),
  };

  const datesWithTime = {
    departureDate: dayjs(departureDate),
    arrivalDate: dayjs(arrivalDate),
  };

  const nights: number = datesWithoutTime.departureDate.diff(
    datesWithoutTime.arrivalDate,
    'day',
    true,
  );

  const daysString = `${nights + 1} ${pluralizationFn(nights + 1, [
    'день',
    'дня',
    'дней',
  ])}, ${nights} ${pluralizationFn(nights, ['ночь', 'ночи', 'ночей'])}`;

  const dateRangeString = `${datesWithoutTime.arrivalDate.format(
    'DD MMM',
  )} - ${datesWithoutTime.departureDate.format('DD MMM, YYYY')}`;

  return {daysString, dateRangeString, datesWithTime, nights};
};

export default useGetDaysAndNights;
