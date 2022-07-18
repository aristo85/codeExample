import { AppState } from 'modules/root.reducer';

export const selectCurrencyFilters = (state: AppState) => {
  return state.currency.currencyFilters;
};
