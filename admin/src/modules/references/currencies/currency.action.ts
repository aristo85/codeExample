import { CurrenciesFilterValues } from './containers/currencies-filter/currencies-filter.interface';
import { createAction } from 'typesafe-actions';

export const setCurrencyFilters = createAction(
  '@currency/SET_FILTERS'
)<CurrenciesFilterValues | null>();

// export const setCurrencyFiltersRerender = createAction(
//   '@currency_rerender/SET_FILTERS'
// )<CurrenciesFilterValues | null>();
