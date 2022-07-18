import { createAction } from 'typesafe-actions';
import { UsersFilterValues } from './containers/users-filter/users-filter.interface';

export const setUserFilters = createAction(
  '@user/SET_FILTERS'
)<UsersFilterValues | null>();
