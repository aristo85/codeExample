import dayjs from 'dayjs';
import {FilterValues} from '../home/components/Filters/types';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {DEFAULT_DATE_FORMAT, DEFAULT_LIMIT} from '@/modules/core/constants';
import * as yup from 'yup';

export const DefaultQueriesBookingValues: FilterValues<string> = {
  arrivalDate: dayjs().format(DEFAULT_DATE_FORMAT),
  departureDate: dayjs().add(1, 'day').format(DEFAULT_DATE_FORMAT),
  cityId: null,
  rating: false,
  numOfAdult: 2,
  childAges: [],
  offset: 0,
  limit: DEFAULT_LIMIT,
  roomId: null,
  ratePlanId: null,
  popular: true,
  placementType: null,
  breakfast: false,
  specialOffer: false,
  amenityCodes: [],
};

export enum CurrencyEnum {
  rubles = 'RUB',
}

const currencyValues: Record<CurrencyEnum, [string, string, string]> = {
  [CurrencyEnum.rubles]: ['рубль', 'рубля', 'рублей'],
};
export const currencyNameFormatter = (
  value: number,
  currencyCode?: CurrencyEnum,
): string => {
  if (currencyCode) {
    return `${pluralizationFn(value, currencyValues[currencyCode])}`;
  }

  return '';
};

export const placementFormValidationSchema = yup.object().shape({
  popular: yup.boolean(),
  cityId: yup
    .string()
    .nullable()
    .when(['popular'], {
      is: true,
      then: schema => schema,
      otherwise: schema => schema.required('Выберите город'),
    }),
  childAges: yup.array().of(
    yup.object().shape({
      value: yup.string().required('Укажите возраст'),
    }),
  ),
  arrivalDate: yup.string().required('Укажите дату прибытия'),
  departureDate: yup.string().required('Укажите дату отъезда'),
});
