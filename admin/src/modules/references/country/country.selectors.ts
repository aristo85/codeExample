import { AppState } from 'modules/root.reducer';

export const selectCountryFilters = (state: AppState) => {
  return state.country.countryFilters;
};
