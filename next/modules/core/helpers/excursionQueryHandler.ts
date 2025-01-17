import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import {deleteFalsyParams} from '@/modules/core/helpers/deleteFalsyValuesFromObject';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {DefaultExcursionValues} from '@/modules/excursion/constants';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export enum ExcursionQueryLocation {
  list = 'LIST',
  detail = 'DETAIL',
  form = 'FORM',
  payment = 'PAYMENT',
}
export const excursionQueryHandler = (
  data: Partial<ExcursionFilterValuesForm>,
  location: ExcursionQueryLocation,
) => {
  const {
    cityId = DefaultExcursionValues.cityId,
    limit = DefaultExcursionValues.limit,
    type = DefaultExcursionValues.type,
    travelMode = DefaultExcursionValues.travelMode,
    withChildren = DefaultExcursionValues.withChildren,
    offset = DefaultExcursionValues.offset,
    sort = DefaultExcursionValues.sort,
  } = data;

  let {
    date = DefaultExcursionValues.date,
    dateTo = DefaultExcursionValues.dateTo,
  } = data;

  if (dayjs(date as string).isBefore(dayjs().startOf('D'))) {
    date = dayjs().format(DEFAULT_DATE_FORMAT);
    dateTo = dayjs(date).add(3, 'day').format(DEFAULT_DATE_FORMAT);
  }

  if (dayjs(dateTo).isBefore(date)) {
    dateTo = dayjs(date).add(3, 'days').format(DEFAULT_DATE_FORMAT);
  }

  let rawFilters: Partial<ExcursionFilterValuesForm> = {};

  if (location === ExcursionQueryLocation.detail) {
    rawFilters = {
      date,
      dateTo,
      cityId,
      type,
      travelMode,
      withChildren,
    };
  }

  if (location === ExcursionQueryLocation.list) {
    rawFilters = {
      date,
      dateTo,
      cityId,
      type,
      travelMode,
      withChildren,
      limit,
      offset,
    };
  }

  if (
    location === ExcursionQueryLocation.form ||
    location === ExcursionQueryLocation.payment
  ) {
    rawFilters = {date, dateTo, cityId, type, travelMode, withChildren};
  }

  const filters: Partial<ExcursionFilterValuesForm> =
    deleteFalsyParams(rawFilters);

  const queriesString = getUrlQueries(filters);

  return {
    filters,
    queriesString,
  };
};
