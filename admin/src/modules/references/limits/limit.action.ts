import { LimitsFilterValues } from './containers/limits-filter/limits-filter.interface';
import { createAction } from 'typesafe-actions';

export const setLimitFilters = createAction(
  '@limit/SET_FILTERS'
)<LimitsFilterValues | null>();

// export const setLimitFiltersRerender = createAction(
//   '@limit_rerender/SET_FILTERS'
// )<LimitsFilterValues | null>();
