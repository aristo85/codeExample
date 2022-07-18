import { GroupFilterValues } from './containers/group-filter/group-filter.interface';
import { createAction } from 'typesafe-actions';

export const setGroupFilters = createAction(
  '@group/SET_FILTERS'
)<GroupFilterValues | null>();

// export const setGroupFiltersRerender = createAction(
//   '@country_rerender/SET_FILTERS'
// )<GroupFilterValues | null>();
