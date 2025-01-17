import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import dayjs from 'dayjs';
import {ExcursionType} from '@/modules/core/api/model/excursion/excursionType';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export const DefaultExcursionValues: ExcursionFilterValuesForm = {
  type: null,
  date: dayjs().format(DEFAULT_DATE_FORMAT),
  dateTo: dayjs().add(3, 'days').format(DEFAULT_DATE_FORMAT),
  cityId: null,
  offset: 0,
  limit: 10,
  travelMode: null,
  withChildren: false,
};

export const excursionType: {title: string; value: ExcursionType}[] = [
  {title: 'Групповой', value: ExcursionType.GROUP},
  {title: 'Индивидуальный', value: ExcursionType.INDIVIDUAL},
];
