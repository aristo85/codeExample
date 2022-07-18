import { createReducer, ActionType } from 'typesafe-actions';
import { SupportFilterValues } from './containers/support-filter/support-filter.interface';
import * as supportActions from './support.action';

export type SupportState = {
  supportFilters: SupportFilterValues | null;
};

const supportDefaultState: SupportState = {
  supportFilters: null,
};

const supportReducer = createReducer<
  SupportState,
  ActionType<typeof supportActions>
>(supportDefaultState).handleAction(
  supportActions.setSupportFilters,
  (state, { payload }) => ({
    ...state,
    supportFilters: payload,
  })
);
// .handleAction(
//   supportActions.setSupportFiltersRerender,
//   (state, { payload }) => ({
//     ...state,
//     supportFilters: payload,
//   })
// );

export default supportReducer;
