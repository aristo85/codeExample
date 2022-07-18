import { createAction } from 'typesafe-actions';
import { CoountryFilterValues } from './containers/reference-filter/country-filter.interface';

export const setCountryFilters = createAction(
  '@country/SET_FILTERS'
)<CoountryFilterValues | null>();

// export const setCountryFiltersRerender = createAction(
//   '@country_rerender/SET_FILTERS'
// )<CoountryFilterValues | null>();
