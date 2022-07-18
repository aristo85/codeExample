import { createAction } from 'typesafe-actions';
import { CommissionFilterValues } from './containers/commission-filter/commission-filter.interface';

export const setCommissionFilters = createAction(
  '@commission/SET_FILTERS'
)<CommissionFilterValues | null>();

// export const setCommissionFiltersRerender = createAction(
//   '@commission_rerender/SET_FILTERS'
// )<CommissionFilterValues | null>();
