import { createAction } from 'typesafe-actions';
import { SupportFilterValues } from './containers/support-filter/support-filter.interface';

export const setSupportFilters = createAction(
  '@support/SET_SUPPORT'
)<SupportFilterValues | null>();

// export const setSupportFiltersRerender = createAction(
//   '@support_rerender/SET_SUPPORT'
// )<SupportFilterValues | null>();
