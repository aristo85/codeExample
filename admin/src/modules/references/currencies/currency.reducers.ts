import { CurrenciesFilterValues } from './containers/currencies-filter/currencies-filter.interface';
import { createReducer, ActionType } from 'typesafe-actions';
import * as currencyActions from './currency.action';

export type CurrencyState = {
  currencyFilters: CurrenciesFilterValues | null;
};

const currencyDefaultState: CurrencyState = {
  currencyFilters: null,
};

const currrencyReducer = createReducer<
  CurrencyState,
  ActionType<typeof currencyActions>
>(currencyDefaultState).handleAction(
  currencyActions.setCurrencyFilters,
  (state, { payload }) => ({
    ...state,
    currencyFilters: payload,
  })
);
//   .handleAction(
//     currencyActions.setCurrencyFiltersRerender,
//     (state, { payload }) => ({
//       ...state,
//       currencyFilters: payload,
//     })
//   );

export default currrencyReducer;
