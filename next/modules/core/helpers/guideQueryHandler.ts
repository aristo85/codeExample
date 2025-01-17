import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import {deleteFalsyParams} from '@/modules/core/helpers/deleteFalsyValuesFromObject';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import dayjs from 'dayjs';
import {DefaultGuideValues} from '@/modules/guide/constants';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export enum GuideQueryLocation {
  list = 'LIST',
  detail = 'DETAIL',
  form = 'FORM',
  payment = 'PAYMENT',
}
export const guideQueryHandler = (
  data: Partial<GuideFilterValuesForm>,
  location: GuideQueryLocation,
) => {
  const {
    cityId = DefaultGuideValues.cityId,
    limit = DefaultGuideValues.limit,
    travelMode = DefaultGuideValues.travelMode,
    withChildren = DefaultGuideValues.withChildren,
    offset = DefaultGuideValues.offset,
    sort = DefaultGuideValues.sort,
  } = data;

  let {date = DefaultGuideValues.date, dateTo = DefaultGuideValues.dateTo} =
    data;

  if (dayjs(date as string).isBefore(dayjs().startOf('D'))) {
    date = dayjs().format(DEFAULT_DATE_FORMAT);
    dateTo = dayjs(date).add(3, 'day').format(DEFAULT_DATE_FORMAT);
  }

  if (dayjs(dateTo).isBefore(date)) {
    dateTo = dayjs(date).add(3, 'days').format(DEFAULT_DATE_FORMAT);
  }

  let rawFilters: Partial<ExcursionFilterValuesForm> = {};

  if (location === GuideQueryLocation.detail) {
    rawFilters = {
      date,
      dateTo,
      cityId,
      travelMode,
      withChildren,
    };
  }

  if (location === GuideQueryLocation.list) {
    rawFilters = {
      date,
      dateTo,
      cityId,
      travelMode,
      withChildren,
      limit,
      offset,
    };
  }

  if (
    location === GuideQueryLocation.form ||
    location === GuideQueryLocation.payment
  ) {
    rawFilters = {
      date,
      dateTo,
      cityId,
      travelMode,
      withChildren,
    };
  }

  const filters: Partial<GuideFilterValuesForm> = deleteFalsyParams(rawFilters);

  const queriesString = getUrlQueries(filters);

  return {
    filters,
    queriesString,
  };
};
