import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import {deleteFalsyParams} from '@/modules/core/helpers/deleteFalsyValuesFromObject';
import {LeisureFilterValuesForm} from '@/modules/leisure/types';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export const DefaultLeisureValues: LeisureFilterValuesForm = {
  date: dayjs().format(DEFAULT_DATE_FORMAT),
  dateTo: dayjs().add(3, 'days').format(DEFAULT_DATE_FORMAT),
  cityId: null,
  offset: 0,
  limit: 10,
  travelMode: [],
  withChildren: false,
  excursionType: [],
  type: null,
  popular: true,
  specialOffer: true,
};
export enum LeisureQueryLocation {
  list = 'LIST',
}
export const leisureQueryHandler = (
  data: Partial<LeisureFilterValuesForm>,
  location: LeisureQueryLocation,
) => {
  const {
    cityId = DefaultLeisureValues.cityId,
    limit = DefaultLeisureValues.limit,
    travelMode = DefaultLeisureValues.travelMode,
    withChildren = DefaultLeisureValues.withChildren,
    excursionType = DefaultLeisureValues.excursionType,
    specialOffer = DefaultLeisureValues.specialOffer,
    type = DefaultLeisureValues.type,
    offset = DefaultLeisureValues.offset,
    popular = DefaultLeisureValues.popular,
  } = data;

  let {date = DefaultLeisureValues.date, dateTo = DefaultLeisureValues.dateTo} =
    data;

  if (dayjs(date as string).isBefore(dayjs().startOf('D'))) {
    date = dayjs().format(DEFAULT_DATE_FORMAT);
    dateTo = dayjs(date).add(3, 'day').format(DEFAULT_DATE_FORMAT);
  }

  if (dayjs(dateTo).isBefore(date)) {
    dateTo = dayjs(date).add(3, 'days').format(DEFAULT_DATE_FORMAT);
  }

  let rawFilters: Partial<LeisureFilterValuesForm> = {};

  if (location === LeisureQueryLocation.list) {
    rawFilters = {
      date,
      dateTo,
      cityId,
      travelMode,
      withChildren,
      excursionType,
      specialOffer,
      type,
      limit,
      offset,
      popular,
    };
  }

  const filters: Partial<LeisureFilterValuesForm> =
    deleteFalsyParams(rawFilters);

  const queriesString = getUrlQueries(filters);

  return {
    filters,
    queriesString,
  };
};
