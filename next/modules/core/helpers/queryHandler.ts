import {FilterValues} from '@/modules/home/components/Filters/types';
import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import {DefaultQueriesBookingValues} from '@/modules/placement/constants';
import {deleteFalsyParams} from '@/modules/core/helpers/deleteFalsyValuesFromObject';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export enum QueryLocation {
  list = 'LIST',
  detail = 'DETAIL',
  map = 'MAP',
  home = 'HOME',
  form = 'FORM',
  payment = 'PAYMENT',
}
export const queryHandler = (
  data: Partial<FilterValues<string>>,
  location: QueryLocation,
) => {
  const {
    numOfAdult = DefaultQueriesBookingValues.numOfAdult,
    cityId = DefaultQueriesBookingValues.cityId,
    rating = DefaultQueriesBookingValues.rating,
    breakfast = DefaultQueriesBookingValues.breakfast,
    childAges = DefaultQueriesBookingValues.childAges,
    roomId = DefaultQueriesBookingValues.roomId,
    ratePlanId = DefaultQueriesBookingValues.ratePlanId,
    placementType = DefaultQueriesBookingValues.placementType,
    specialOffer = DefaultQueriesBookingValues.specialOffer,
    popular = DefaultQueriesBookingValues.popular,
    amenityCodes = DefaultQueriesBookingValues.amenityCodes,
  } = data;

  let {
    arrivalDate = DefaultQueriesBookingValues.arrivalDate,
    departureDate = DefaultQueriesBookingValues.departureDate,
  } = data;

  if (
    dayjs(arrivalDate).format(DEFAULT_DATE_FORMAT) <
    dayjs().format(DEFAULT_DATE_FORMAT)
  ) {
    arrivalDate = dayjs().format(DEFAULT_DATE_FORMAT);
    departureDate = dayjs().add(1, 'day').format(DEFAULT_DATE_FORMAT);
  }

  let rawFilters: Partial<FilterValues<string>> = {};

  if (location === QueryLocation.detail || location === QueryLocation.map) {
    rawFilters = {
      numOfAdult,
      cityId,
      arrivalDate,
      departureDate,
      childAges,
      breakfast,
      rating,
      placementType,
      specialOffer,
      popular,
      amenityCodes,
    };
  }

  if (location === QueryLocation.home || location === QueryLocation.list) {
    rawFilters = {
      numOfAdult,
      cityId,
      arrivalDate,
      departureDate,
      childAges,
      breakfast,
      rating,
      placementType,
      specialOffer,
      popular,
      amenityCodes,
      offset: DefaultQueriesBookingValues.offset,
      limit: DefaultQueriesBookingValues.limit,
    };
  }

  if (location === QueryLocation.form || location === QueryLocation.payment) {
    rawFilters = {
      numOfAdult,
      cityId,
      arrivalDate,
      departureDate,
      childAges,
      breakfast,
      roomId,
      ratePlanId,
      rating,
      placementType,
      specialOffer,
      popular,
      amenityCodes,
    };
  }

  rawFilters.cityId
    ? (rawFilters.popular = false)
    : (rawFilters.popular = true);

  const filters: Partial<FilterValues<string>> = deleteFalsyParams(rawFilters);

  const {childAges: formattingChildAges, ...rest} = filters;
  const mutateChildAgesParam = (childAges?: string[] | string) => {
    if (!childAges?.length) return '';
    if (typeof childAges === 'string') return `&childAges=${childAges}`;
    const childAgesReturn = childAges?.join('&childAges=');
    return `&childAges=${childAgesReturn}`;
  };

  const queriesString =
    getUrlQueries(rest) + mutateChildAgesParam(formattingChildAges);

  return {
    filters,
    queriesString,
  };
};
