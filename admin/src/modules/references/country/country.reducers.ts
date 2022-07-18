import { createReducer, ActionType } from 'typesafe-actions';
import { CoountryFilterValues } from './containers/reference-filter/country-filter.interface';
import * as countryActions from './country.action';

export type CountryState = {
  countryFilters: CoountryFilterValues | null;
};

const countryDefaultState: CountryState = {
  countryFilters: null,
};

const countryReducer = createReducer<
  CountryState,
  ActionType<typeof countryActions>
>(countryDefaultState).handleAction(
  countryActions.setCountryFilters,
  (state, { payload }) => ({
    ...state,
    countryFilters: payload,
  })
);
// .handleAction(
//   countryActions.setCountryFiltersRerender,
//   (state, { payload }) => ({
//     ...state,
//     countryFilters: payload,
//   })
// );

export default countryReducer;
